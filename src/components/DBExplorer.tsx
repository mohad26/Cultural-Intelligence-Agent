import { useState, useEffect, FormEvent } from 'react';
import { KBRecord, KBCollection } from '../types';
import { Search, Database, Plus, Trash2, Tag, BookOpen, AlertCircle, Sparkles } from 'lucide-react';

interface DBExplorerProps {
  onRefreshTrigger?: number;
}

export default function DBExplorer({ onRefreshTrigger = 0 }: DBExplorerProps) {
  const [records, setRecords] = useState<KBRecord[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCollection, setSelectedCollection] = useState<KBCollection | 'all'>('all');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form states for adding new record
  const [isAdding, setIsAdding] = useState(false);
  const [newCollection, setNewCollection] = useState<KBCollection>('cultural_kb');
  const [newMarket, setNewMarket] = useState('Arab Markets');
  const [newCategory, setNewCategory] = useState('ethnographic research');
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newTagsStr, setNewTagsStr] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  const fetchRecords = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/kb');
      const data = await res.json();
      if (data.success) {
        setRecords(data.records);
        setError(null);
      } else {
        setError(data.error || 'Failed to list database.');
      }
    } catch (err: any) {
      setError(err.message || 'Server connection error.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, [onRefreshTrigger]);

  const handleCreate = async (e: FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) {
      alert("Title and content are required.");
      return;
    }

    const tags = newTagsStr
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    try {
      const res = await fetch('/api/kb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          collection: newCollection,
          market: newMarket,
          category: newCategory,
          title: newTitle,
          content: newContent,
          tags
        })
      });
      const data = await res.json();
      if (data.success) {
        setRecords(prev => [data.record, ...prev]);
        setNewTitle('');
        setNewContent('');
        setNewTagsStr('');
        setFormSuccess(true);
        setTimeout(() => setFormSuccess(false), 3000);
        setIsAdding(false);
      } else {
        alert("Failed to insert: " + data.error);
      }
    } catch (err: any) {
      alert("Error adding document: " + err.message);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this custom knowledge chunk? This will permanently remove it from the vector indexing rules.")) {
      return;
    }
    try {
      const res = await fetch(`/api/kb/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success && data.deleted) {
        setRecords(prev => prev.filter(r => r.id !== id));
      } else {
        alert("Could not remove record.");
      }
    } catch (err: any) {
      alert("Error: " + err.message);
    }
  };

  const filtered = records.filter(r => {
    const matchesCollection = selectedCollection === 'all' || r.collection === selectedCollection;
    const matchesSearch =
      r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.market.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCollection && matchesSearch;
  });

  const getCollectionLabel = (coll: KBCollection) => {
    switch (coll) {
      case 'cultural_kb': return 'Cultural Intelligence (cultural_kb)';
      case 'semiotic_kb': return 'Semiotic Visual Rules (semiotic_kb)';
      case 'market_kb': return 'Market Insights (market_kb)';
      case 'branding_cases': return 'Branding Precedents (branding_cases)';
    }
  };

  const getCollectionBadgeStyle = (coll: KBCollection) => {
    switch (coll) {
      case 'cultural_kb': return 'bg-teal-50 text-teal-700 border-teal-200';
      case 'semiotic_kb': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'market_kb': return 'bg-cyan-50 text-cyan-700 border-cyan-200';
      case 'branding_cases': return 'bg-pink-50 text-pink-700 border-pink-200';
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden" id="kb-database-hub">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-50 flex flex-wrap justify-between items-center gap-4 bg-gray-50/50">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-neutral-900 text-white rounded-lg">
              <Database className="w-5 h-5" />
            </span>
            <h2 className="text-lg font-bold text-gray-900 tracking-tight">Qdrant Vector Database Hub</h2>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Simulated vector collections containing authentic regional research documents.
          </p>
        </div>

        <button
          onClick={() => setIsAdding(!isAdding)}
          className={`px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
            isAdding 
              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
              : 'bg-neutral-900 text-white hover:bg-neutral-800'
          }`}
          id="btn-add-document"
        >
          {isAdding ? 'Close Drawer' : <><Plus className="w-4 h-4" /> Add Evidence Document</>}
        </button>
      </div>

      {/* Add Document panel */}
      {isAdding && (
        <form onSubmit={handleCreate} className="p-6 bg-neutral-50/80 border-b border-gray-100 transition-all text-xs">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" /> Insert New Vector Embedded Fact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Target Collection</label>
              <select
                value={newCollection}
                onChange={e => setNewCollection(e.target.value as KBCollection)}
                className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:border-neutral-900"
              >
                <option value="cultural_kb">cultural_kb (Studies & Guides)</option>
                <option value="semiotic_kb">semiotic_kb (Colors & Motifs)</option>
                <option value="market_kb">market_kb (Reports & Trends)</option>
                <option value="branding_cases">branding_cases (Success Stories)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Geographical Market</label>
              <input
                type="text"
                placeholder="e.g. Arab Markets, Australia, Japan"
                value={newMarket}
                onChange={e => setNewMarket(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:border-neutral-900"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Taxonomy Category</label>
              <input
                type="text"
                placeholder="e.g. ethnographic research, color meanings"
                value={newCategory}
                onChange={e => setNewCategory(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:border-neutral-900"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Document Title</label>
            <input
              type="text"
              placeholder="Enter descriptive title..."
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:border-neutral-900"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Deep Research Contents (RAG payload)</label>
            <textarea
              placeholder="Enter detailed facts, consumer behavioral insights, color rules, or case findings (300 words max)..."
              value={newContent}
              onChange={e => setNewContent(e.target.value)}
              rows={4}
              className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:border-neutral-900"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Tags (comma separated)</label>
            <input
              type="text"
              placeholder="trust-drivers, safety, coastal, wattle"
              value={newTagsStr}
              onChange={e => setNewTagsStr(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:border-neutral-900"
            />
          </div>

          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg font-semibold flex items-center gap-1"
            >
              <Database className="w-3.5 h-3.5" /> Index in Vector DB
            </button>
          </div>
        </form>
      )}

      {/* Database Filters & Live Search */}
      <div className="p-4 border-b border-gray-100 bg-gray-50/20 flex flex-wrap gap-3 items-center">
        {/* Collection selection */}
        <div className="flex flex-wrap gap-1">
          <button
            onClick={() => setSelectedCollection('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
              selectedCollection === 'all'
                ? 'bg-neutral-900 text-white border-neutral-900'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }`}
          >
            All Collections ({records.length})
          </button>
          <button
            onClick={() => setSelectedCollection('cultural_kb')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
              selectedCollection === 'cultural_kb'
                ? 'bg-teal-750 text-white border-teal-750'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }`}
          >
            cultural_kb ({records.filter(r => r.collection === 'cultural_kb').length})
          </button>
          <button
            onClick={() => setSelectedCollection('semiotic_kb')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
              selectedCollection === 'semiotic_kb'
                ? 'bg-amber-700 text-white border-amber-500'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }`}
          >
            semiotic_kb ({records.filter(r => r.collection === 'semiotic_kb').length})
          </button>
          <button
            onClick={() => setSelectedCollection('market_kb')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
              selectedCollection === 'market_kb'
                ? 'bg-cyan-700 text-white border-cyan-500'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }`}
          >
            market_kb ({records.filter(r => r.collection === 'market_kb').length})
          </button>
          <button
            onClick={() => setSelectedCollection('branding_cases')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
              selectedCollection === 'branding_cases'
                ? 'bg-pink-700 text-white border-pink-500'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }`}
          >
            branding_cases ({records.filter(r => r.collection === 'branding_cases').length})
          </button>
        </div>

        {/* Search Input */}
        <div className="relative flex-grow">
          <span className="absolute left-3 top-2.5 text-gray-400">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search by keyword, tags, or region..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-neutral-900"
          />
        </div>
      </div>

      {/* Records table/cards */}
      {error && (
        <div className="p-6 text-center text-xs text-red-500 flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4" /> {error}
        </div>
      )}

      {loading ? (
        <div className="p-12 text-center text-xs text-gray-400">
          Scanning vector indices...
        </div>
      ) : filtered.length === 0 ? (
        <div className="p-12 text-center text-xs text-gray-400">
          No records indexed matching selected query criteria. Customize or write a new document fact!
        </div>
      ) : (
        <div className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
          {filtered.map(rec => (
            <div key={rec.id} className="p-5 hover:bg-gray-50/50 transition-colors flex items-start gap-4">
              <span className="p-2 bg-neutral-100 rounded-lg text-neutral-600 self-start mt-0.5">
                <BookOpen className="w-4 h-4" />
              </span>

              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className={`px-2 py-0.5 text-[10px] font-bold border rounded-full uppercase tracking-wider ${getCollectionBadgeStyle(rec.collection)}`}>
                    {rec.collection}
                  </span>
                  <span className="text-[10px] font-bold text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-md">
                    {rec.market}
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono">
                    ID: {rec.id}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-gray-900 tracking-tight leading-snug">
                  {rec.title}
                </h4>

                <p className="text-xs text-gray-600 line-clamp-3 mt-1.5 leading-relaxed">
                  {rec.content}
                </p>

                {rec.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {rec.tags.map(tag => (
                      <span key={tag} className="text-[10px] text-gray-500 bg-gray-50 border border-gray-100 rounded px-1.5 py-0.5 flex items-center gap-0.5">
                        <Tag className="w-2.5 h-2.5 text-gray-400" /> {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {rec.id.startsWith('custom-') && (
                <button
                  type="button"
                  onClick={() => handleDelete(rec.id)}
                  className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-all"
                  title="Delete document"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
