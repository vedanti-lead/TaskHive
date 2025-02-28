import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  ChevronDown,
  Calendar,
  Smile,
  Meh,
  Frown,
  Edit3,
  Trash2,
  Tag,
  BookHeart,
  ChevronUp,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  BarChart3,
  AlertCircle
} from 'lucide-react';

// Define proper interfaces for your data structure
interface JournalEntry {
  id: string;
  title: string;
  content: string;
  date: string;
  mood: 'positive' | 'neutral' | 'negative';
  tags: string[];
  isExpanded: boolean;
  sentiment: {
    analysis: string;
    keywords: string[];
  };
}

interface NewEntryForm {
  title: string;
  content: string;
  mood: 'positive' | 'neutral' | 'negative';
  tags: string;
}

const Journal = () => {
  // State variables with proper typing
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [isWriting, setIsWriting] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [newEntry, setNewEntry] = useState<NewEntryForm>({
    title: '',
    content: '',
    mood: 'neutral',
    tags: ''
  });
  const [showInsights, setShowInsights] = useState(true);
  
  // Sample data for visualization
  const positivePercentage = 65;
  const negativePercentage = 35;
  const averageSentiment = 0.2;
  const commonTags = ['coding', 'productivity', 'learning'];
  
  // Filtered entries based on search and filters
  const filteredEntries = entries.filter((entry: JournalEntry) => {
    // Filter implementation
    return true; // Replace with actual filter logic
  });
  
  // Toggle expand/collapse for entries
  const toggleExpand = (id: string) => {
    // Implementation
  };
  
  // Handle form submission for new entries
  const handleSubmitEntry = () => {
    // Implementation
  };
  
  // Handle entry deletion
  const handleDelete = (id: string) => {
    // Implementation
  };
  
  return (
    <div className="space-y-4">
      {/* Insights Panel */}
      {showInsights && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Your Journal Insights</h2>
            <button
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              onClick={() => setShowInsights(false)}
            >
              &times;
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Sentiment Breakdown</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Positive</span>
                    <span className="text-sm font-medium">{positivePercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${positivePercentage}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Negative</span>
                    <span className="text-sm font-medium">{negativePercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-red-500 h-2 rounded-full" 
                      style={{ width: `${negativePercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Overall Sentiment</h3>
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  {averageSentiment > 0.3 ? (
                    <>
                      <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-500 mb-2">
                        <TrendingUp className="h-8 w-8" />
                      </div>
                      <p className="font-medium">Positive Trend</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Your journal entries show an overall positive outlook</p>
                    </>
                  ) : averageSentiment < -0.3 ? (
                    <>
                      <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-red-100 dark:bg-red-900/30 text-red-500 mb-2">
                        <TrendingDown className="h-8 w-8" />
                      </div>
                      <p className="font-medium">Negative Trend</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Your recent entries indicate some challenges</p>
                    </>
                  ) : (
                    <>
                      <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-500 mb-2">
                        <BarChart3 className="h-8 w-8" />
                      </div>
                      <p className="font-medium">Balanced Outlook</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Your journal shows a mix of experiences</p>
                    </>
                  )}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Common Themes</h3>
              <div className="flex flex-wrap gap-2">
                {commonTags.map((tag: string, index: number) => (
                  <div 
                    key={index}
                    className="px-3 py-1 bg-primary-100 dark:bg-darkPrimary-900/30 text-primary-700 dark:text-darkPrimary-300 rounded-full text-sm"
                  >
                    #{tag}
                  </div>
                ))}
                {commonTags.length === 0 && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Add more entries with tags to see common themes
                  </p>
                )}
              </div>
              
              {averageSentiment < -0.3 && (
                <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-red-800 dark:text-red-300">Burnout Warning</p>
                      <p className="text-xs text-red-700 dark:text-red-200 mt-1">
                        Your recent entries suggest you might be experiencing stress. Consider taking breaks and practicing self-care.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="font-medium">AI Insight:</span> {
                averageSentiment > 0.3 
                  ? "You're showing great progress and positivity in your journal. Keep up the good work and continue documenting your journey."
                  : averageSentiment < -0.3
                  ? "Your entries suggest you might be facing some challenges. Consider discussing these with a mentor or taking time to recharge."
                  : "Your journal shows a balanced perspective. You're acknowledging both successes and challenges, which is healthy for growth."
              }
            </p>
          </div>
        </motion.div>
      )}
      
      {/* Filters and Search */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search entries..."
              className="input pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <select
                className="input appearance-none pr-8"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Moods</option>
                <option value="positive">Positive</option>
                <option value="neutral">Neutral</option>
                <option value="negative">Negative</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <div className="relative">
              <select
                className="input appearance-none pr-8"
                defaultValue="newest"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* New Entry Form */}
      {isWriting && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">New Journal Entry</h2>
              <button 
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={() => setIsWriting(false)}
              >
                &times;
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Give your entry a title"
                  value={newEntry.title}
                  onChange={(e) => setNewEntry({...newEntry, title: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Content</label>
                <textarea
                  className="input w-full h-40 resize-none"
                  placeholder="Write about your day, challenges, achievements, or anything on your mind..."
                  value={newEntry.content}
                  onChange={(e) => setNewEntry({...newEntry, content: e.target.value})}
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">How are you feeling?</label>
                <div className="flex space-x-4">
                  <button
                    className={`flex items-center justify-center p-2 rounded-md ${
                      newEntry.mood === 'positive'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                    }`}
                    onClick={() => setNewEntry({...newEntry, mood: 'positive'})}
                  >
                    <Smile className="h-6 w-6" />
                  </button>
                  <button
                    className={`flex items-center justify-center p-2 rounded-md ${
                      newEntry.mood === 'neutral'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                    }`}
                    onClick={() => setNewEntry({...newEntry, mood: 'neutral'})}
                  >
                    <Meh className="h-6 w-6" />
                  </button>
                  <button
                    className={`flex items-center justify-center p-2 rounded-md ${
                      newEntry.mood === 'negative'
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                    }`}
                    onClick={() => setNewEntry({...newEntry, mood: 'negative'})}
                  >
                    <Frown className="h-6 w-6" />
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="e.g., coding, achievement, learning"
                  value={newEntry.tags}
                  onChange={(e) => setNewEntry({...newEntry, tags: e.target.value})}
                />
              </div>
            </div>
            
            <div className="mt-6 flex justify-end space-x-2">
              <button 
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md text-sm font-medium"
                onClick={() => setIsWriting(false)}
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-primary-600 hover:bg-primary-700 dark:bg-darkPrimary-600 dark:hover:bg-darkPrimary-700 text-white rounded-md text-sm font-medium"
                onClick={handleSubmitEntry}
                disabled={!newEntry.title || !newEntry.content}
              >
                Save Entry
              </button>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Journal Entries */}
      <div className="space-y-4">
        {filteredEntries.length > 0 ? (
          filteredEntries.map((entry: JournalEntry) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="text-xl font-semibold">{entry.title}</h3>
                      <div className="ml-2">
                        {entry.mood === 'positive' && (
                          <Smile className="h-5 w-5 text-green-500" />
                        )}
                        {entry.mood === 'neutral' && (
                          <Meh className="h-5 w-5 text-blue-500" />
                        )}
                        {entry.mood === 'negative' && (
                          <Frown className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>
                        {new Date(entry.date).toLocaleDateString('en-US', { 
                          weekday: 'long',
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                      <Edit3 className="h-5 w-5" />
                    </button>
                    <button 
                      className="p-2 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
                      onClick={() => handleDelete(entry.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className={`text-gray-600 dark:text-gray-400 ${!entry.isExpanded && 'line-clamp-3'}`}>
                    {entry.content}
                  </p>
                  {entry.content.length > 150 && (
                    <button 
                      className="mt-2 text-primary-600 hover:text-primary-700 dark:text-darkPrimary-400 dark:hover:text-darkPrimary-300 text-sm font-medium flex items-center"
                      onClick={() => toggleExpand(entry.id)}
                    >
                      {entry.isExpanded ? (
                        <>
                          Show less <ChevronUp className="ml-1 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Read more <ChevronDown className="ml-1 h-4 w-4" />
                        </>
                      )}
                    </button>
                  )}
                </div>
                
                {entry.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-700 dark:text-gray-300"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {entry.isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                  >
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h4 className="text-sm font-medium mb-2 flex items-center">
                        <BookHeart className="h-4 w-4 mr-1 text-primary-600 dark:text-darkPrimary-400" />
                        AI Sentiment Analysis
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {entry.sentiment.analysis}
                      </p>
                      {entry.sentiment.keywords.length > 0 && (
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Key phrases detected:</p>
                          <div className="flex flex-wrap gap-1">
                            {entry.sentiment.keywords.map((keyword: string, index: number) => (
                              <span
                                key={index}
                                className="px-2 py-0.5 bg-primary-100 dark:bg-darkPrimary-900/30 text-primary-700 dark:text-darkPrimary-300 rounded-full text-xs"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 text-center">
            <BookHeart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium mb-2">No journal entries found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {searchTerm || filter !== 'all'
                ? 'Try adjusting your filters or search criteria.'
                : 'Start journaling to track your progress and get AI-powered insights.'}
            </p>
            {!(searchTerm || filter !== 'all') && (
              <button 
                className="btn-primary inline-flex items-center"
                onClick={() => setIsWriting(true)}
              >
                Write Your First Entry
                <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Journal;