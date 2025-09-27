import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Smile, Frown, Meh, Heart, Zap } from 'lucide-react';

const moods = [
  { id: 'amazing', label: 'Amazing', icon: Heart, color: 'bg-green-500', textColor: 'text-green-600' },
  { id: 'good', label: 'Good', icon: Smile, color: 'bg-blue-500', textColor: 'text-blue-600' },
  { id: 'okay', label: 'Okay', icon: Meh, color: 'bg-yellow-500', textColor: 'text-yellow-600' },
  { id: 'stressed', label: 'Stressed', icon: Zap, color: 'bg-orange-500', textColor: 'text-orange-600' },
  { id: 'sad', label: 'Sad', icon: Frown, color: 'bg-red-500', textColor: 'text-red-600' },
];

interface MoodEntry {
  id: string;
  mood: string;
  date: string;
  note?: string;
}

interface MoodTrackerProps {
  onMoodSelect?: (mood: string) => void;
}

export function MoodTracker({ onMoodSelect }: MoodTrackerProps) {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [note, setNote] = useState('');
  const [recentEntries, setRecentEntries] = useState<MoodEntry[]>([
    { id: '1', mood: 'good', date: '2025-01-24', note: 'Had a productive morning' },
    { id: '2', mood: 'amazing', date: '2025-01-23', note: 'Great workout session' },
    { id: '3', mood: 'okay', date: '2025-01-22' },
  ]);

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
    onMoodSelect?.(moodId);
  };

  const handleSaveMood = () => {
    if (selectedMood) {
      const newEntry: MoodEntry = {
        id: Date.now().toString(),
        mood: selectedMood,
        date: new Date().toISOString().split('T')[0],
        note: note.trim() || undefined,
      };
      setRecentEntries([newEntry, ...recentEntries.slice(0, 4)]);
      setSelectedMood(null);
      setNote('');
    }
  };

  const getMoodData = (moodId: string) => moods.find(m => m.id === moodId);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>How are you feeling today?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {moods.map((mood) => {
              const Icon = mood.icon;
              const isSelected = selectedMood === mood.id;
              return (
                <button
                  key={mood.id}
                  onClick={() => handleMoodSelect(mood.id)}
                  className={`p-5 rounded-lg border-2 transition-all duration-200 active:scale-95 min-h-[6rem] ${
                    isSelected 
                      ? 'border-primary bg-primary/10' 
                      : 'border-border'
                  }`}
                >
                  <div className="flex flex-col items-center justify-center space-y-2 h-full">
                    <div className={`p-3 rounded-full ${mood.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className={`text-sm font-medium ${isSelected ? 'text-primary' : 'text-muted-foreground'}`}>
                      {mood.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {selectedMood && (
            <div className="space-y-4 p-5 bg-muted/50 rounded-lg">
              <div>
                <label className="block text-sm font-medium mb-3">Add a note (optional)</label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="What made you feel this way?"
                  className="w-full p-4 border border-border rounded-lg resize-none h-24 bg-background text-base"
                />
              </div>
              <Button onClick={handleSaveMood} className="w-full h-12">
                Save Mood Entry
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Mood Entries</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentEntries.map((entry) => {
              const moodData = getMoodData(entry.mood);
              if (!moodData) return null;
              
              const Icon = moodData.icon;
              return (
                <div key={entry.id} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                  <div className={`p-2 rounded-full ${moodData.color}`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className={moodData.textColor}>
                        {moodData.label}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {new Date(entry.date).toLocaleDateString()}
                      </span>
                    </div>
                    {entry.note && (
                      <p className="text-sm text-muted-foreground mt-1">{entry.note}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}