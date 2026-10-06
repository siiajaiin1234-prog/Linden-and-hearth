import React from 'react';
import { X, Clock, Calendar, User, Share2, Check, ArrowLeft } from 'lucide-react';
import { Article } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex justify-center p-3 sm:p-6 lg:p-10">
      <div className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col my-auto">
        {/* Sticky top reader bar */}
        <div className="sticky top-0 z-10 bg-[#FAF8F5]/95 backdrop-blur-xs border-b border-stone-200 px-6 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Journal</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close reader"
              className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article content body */}
        <div className="p-6 sm:p-10 lg:p-12 space-y-8 overflow-y-auto max-h-[80vh]">
          {/* Header */}
          <div className="space-y-4 border-b border-stone-200 pb-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500">
              <span className="text-amber-800">{article.category}</span>
              <span aria-hidden="true">·</span>
              <span>{article.date}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950 leading-[1.12]">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-light">
              {article.subtitle}
            </p>

            {/* Author Byline */}
            <div className="flex items-center gap-3 pt-4">
              <div className="w-10 h-10 rounded-full bg-stone-900 text-stone-100 flex items-center justify-center font-display text-sm font-semibold">
                {article.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-900">{article.author.name}</p>
                <p className="text-xs text-stone-500">{article.author.role}</p>
              </div>
            </div>
          </div>

          {/* Excerpt Lead */}
          <div className="p-5 bg-stone-100/90 rounded-xl border-l-4 border-stone-900 text-stone-800 text-sm sm:text-base leading-relaxed italic">
            "{article.excerpt}"
          </div>

          {/* Paragraphs */}
          <div className="space-y-5 text-sm sm:text-base text-stone-700 leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Key Takeaway box */}
          {article.tastingOrKeyTakeaway && (
            <div className="p-5 bg-stone-900 text-white rounded-xl shadow-xs space-y-1 text-sm">
              <p className="text-xs uppercase font-semibold tracking-wider text-amber-300">
                Linden & Hearth Sensory Note
              </p>
              <p className="text-stone-200 leading-relaxed">
                {article.tastingOrKeyTakeaway}
              </p>
            </div>
          )}

          {/* Tags */}
          <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-stone-400">Topics:</span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-stone-600 bg-stone-100 border border-stone-200 px-2.5 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 bg-stone-100 border-t border-stone-200 flex items-center justify-between">
          <p className="text-xs text-stone-500">
            Published by Linden & Hearth Roasters Journal
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
};
