import React, { useState } from 'react';
import { Search, BookOpen, ArrowRight } from 'lucide-react';
import { Article } from '../types';
import { ARTICLES } from '../data/articles';

interface BlogSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Articles (12)' },
    { id: 'Coffee Science', label: 'Coffee Science' },
    { id: 'Origin & Sourcing', label: 'Origin & Sourcing' },
    { id: 'Hearth Bakery', label: 'Hearth Bakery' },
    { id: 'Brew Guides', label: 'Brew Guides' },
    { id: 'Cafe Culture', label: 'Cafe Culture' },
  ];

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="journal" className="py-16 sm:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs uppercase font-medium tracking-widest text-stone-500">
              The Daily Dispatch & Brewing Science
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 mt-1">
              The Linden & Hearth Journal
            </h2>
            <p className="text-sm text-stone-600 mt-2 max-w-xl">
              12 in-depth essays, origin travel logs, water chemistry breakdowns, and sourdough baker diaries from our baristas and roasters.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 12 articles, topics, origins..."
              className="w-full pl-9 pr-3.5 py-2 text-xs bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 placeholder:text-stone-400"
            />
          </div>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-stone-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:text-stone-950 hover:bg-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-stone-200 space-y-2">
            <BookOpen className="w-8 h-8 text-stone-300 mx-auto" />
            <p className="text-sm font-semibold text-stone-800">No journal entries match your query</p>
            <p className="text-xs text-stone-500">
              Try searching for "espresso", "water", "sourdough", or "Colombia".
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group cursor-pointer bg-white rounded-xl border border-stone-200 p-6 shadow-xs hover:border-stone-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Clean unboxed metadata (anti-slop, zero pills) */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-3 font-medium">
                    <span className="text-stone-800">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-950 group-hover:text-amber-900 transition-colors leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mt-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="font-medium text-stone-900 block">{article.author.name}</span>
                    <span className="text-[11px] text-stone-500">{article.author.role}</span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 group-hover:translate-x-0.5 transition-transform">
                    <span>Read Essay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
