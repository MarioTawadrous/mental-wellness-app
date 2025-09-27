import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { Calendar, BookOpen, Search, Plus, Heart, Star, Target } from 'lucide-react';

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  date: string;
  mood?: string;
  tags: string[];
  gratitude?: string[];
  goals?: string[];
}

const sampleEntries: JournalEntry[] = [
  {
    id: '1',
    title: 'A Productive Thursday',
    content: 'Today was one of those days where everything seemed to flow naturally. I woke up early, did my morning meditation, and felt centered throughout the day. Work was challenging but rewarding, and I managed to complete the project I\'ve been working on for weeks.',
    date: '2025-01-24',
    mood: 'good',
    tags: ['productivity', 'work', 'meditation'],
    gratitude: ['My supportive team', 'Good health', 'Morning sunshine'],
    goals: ['Finish project presentation', 'Call my parents', 'Go for evening walk']
  },
  {
    id: '2',
    title: 'Reflection on Growth',
    content: 'Been thinking a lot about how much I\'ve grown this past year. There were moments of doubt and struggle, but each challenge taught me something valuable. I\'m learning to be more patient with myself and celebrate small victories.',
    date: '2025-01-23',
    mood: 'amazing',
    tags: ['reflection', 'growth', 'self-care'],
    gratitude: ['Learning opportunities', 'Supportive friends', 'Inner strength'],
  },
  {
    id: '3',
    title: 'Rainy Day Thoughts',
    content: 'It\'s been raining all day, which usually makes me feel a bit melancholy. But today I decided to embrace it. Made some tea, read a good book, and just let myself feel whatever came up. Sometimes we need these quiet, reflective days.',
    date: '2025-01-22',
    mood: 'okay',
    tags: ['reflection', 'weather', 'books'],
    gratitude: ['Cozy home', 'Good books', 'Peaceful moments'],
  }
];

export function Journal() {
  const [entries, setEntries] = useState<JournalEntry[]>(sampleEntries);
  const [isWriting, setIsWriting] = useState(false);
  const [currentEntry, setCurrentEntry] = useState({
    title: '',
    content: '',
    gratitude: ['', '', ''],
    goals: ['', '', '']
  });
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEntries = entries.filter(entry =>
    entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleSaveEntry = () => {
    if (currentEntry.title.trim() && currentEntry.content.trim()) {
      const newEntry: JournalEntry = {
        id: Date.now().toString(),
        title: currentEntry.title,
        content: currentEntry.content,
        date: new Date().toISOString().split('T')[0],
        tags: [],
        gratitude: currentEntry.gratitude.filter(g => g.trim()),
        goals: currentEntry.goals.filter(g => g.trim())
      };
      setEntries([newEntry, ...entries]);
      setCurrentEntry({ title: '', content: '', gratitude: ['', '', ''], goals: ['', '', ''] });
      setIsWriting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getMoodColor = (mood?: string) => {
    switch (mood) {
      case 'amazing': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'okay': return 'text-yellow-600 bg-yellow-100';
      case 'stressed': return 'text-orange-600 bg-orange-100';
      case 'sad': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (isWriting) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">New Journal Entry</h2>
          <Button variant="outline" onClick={() => setIsWriting(false)}>
            Cancel
          </Button>
        </div>

        <Card>
          <CardContent className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                value={currentEntry.title}
                onChange={(e) => setCurrentEntry({ ...currentEntry, title: e.target.value })}
                placeholder="Give your entry a title..."
                className="w-full p-3 border border-border rounded-lg bg-background"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Your thoughts</label>
              <Textarea
                value={currentEntry.content}
                onChange={(e) => setCurrentEntry({ ...currentEntry, content: e.target.value })}
                placeholder="What's on your mind today?"
                className="min-h-[200px] resize-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 flex items-center">
                  <Heart className="h-4 w-4 mr-1 text-red-500" />
                  Three things I'm grateful for
                </label>
                <div className="space-y-2">
                  {currentEntry.gratitude.map((item, index) => (
                    <input
                      key={index}
                      type="text"
                      value={item}
                      onChange={(e) => {
                        const newGratitude = [...currentEntry.gratitude];
                        newGratitude[index] = e.target.value;
                        setCurrentEntry({ ...currentEntry, gratitude: newGratitude });
                      }}
                      placeholder={`Gratitude ${index + 1}...`}
                      className="w-full p-2 border border-border rounded bg-background text-sm"
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 flex items-center">
                  <Target className="h-4 w-4 mr-1 text-blue-500" />
                  Goals for tomorrow
                </label>
                <div className="space-y-2">
                  {currentEntry.goals.map((goal, index) => (
                    <input
                      key={index}
                      type="text"
                      value={goal}
                      onChange={(e) => {
                        const newGoals = [...currentEntry.goals];
                        newGoals[index] = e.target.value;
                        setCurrentEntry({ ...currentEntry, goals: newGoals });
                      }}
                      placeholder={`Goal ${index + 1}...`}
                      className="w-full p-2 border border-border rounded bg-background text-sm"
                    />
                  ))}
                </div>
              </div>
            </div>

            <Button onClick={handleSaveEntry} className="w-full">
              Save Entry
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold flex items-center">
          <BookOpen className="h-6 w-6 mr-2" />
          Journal
        </h2>
        <Button onClick={() => setIsWriting(true)} className="h-10">
          <Plus className="h-4 w-4 mr-2" />
          New Entry
        </Button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-4 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search your entries..."
          className="w-full pl-11 pr-4 py-4 border border-border rounded-lg bg-background text-base"
        />
      </div>

      {/* Entries */}
      <div className="space-y-4">
        {filteredEntries.map((entry) => (
          <Card key={entry.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{entry.title}</CardTitle>
                {entry.mood && (
                  <Badge className={getMoodColor(entry.mood)}>
                    {entry.mood}
                  </Badge>
                )}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                {formatDate(entry.date)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-relaxed line-clamp-3">{entry.content}</p>
              
              {entry.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {entry.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              )}

              {(entry.gratitude?.length || entry.goals?.length) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-border">
                  {entry.gratitude && entry.gratitude.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium flex items-center mb-2">
                        <Heart className="h-3 w-3 mr-1 text-red-500" />
                        Grateful for
                      </h4>
                      <ul className="space-y-1">
                        {entry.gratitude.map((item, index) => (
                          <li key={index} className="text-xs text-muted-foreground flex items-start">
                            <Star className="h-3 w-3 mr-1 mt-0.5 text-yellow-500 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {entry.goals && entry.goals.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium flex items-center mb-2">
                        <Target className="h-3 w-3 mr-1 text-blue-500" />
                        Goals
                      </h4>
                      <ul className="space-y-1">
                        {entry.goals.map((goal, index) => (
                          <li key={index} className="text-xs text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredEntries.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No entries found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm ? 'Try a different search term' : 'Start your wellness journey by writing your first entry'}
            </p>
            {!searchTerm && (
              <Button onClick={() => setIsWriting(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Write Your First Entry
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}