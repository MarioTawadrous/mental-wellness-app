import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play, Pause, RotateCcw, Clock, Users, Target } from 'lucide-react';

interface MeditationSession {
  id: string;
  title: string;
  duration: number;
  category: string;
  description: string;
  instructor: string;
  image: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

const sessions: MeditationSession[] = [
  {
    id: '1',
    title: 'Morning Mindfulness',
    duration: 10,
    category: 'Mindfulness',
    description: 'Start your day with intention and awareness',
    instructor: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1573285702030-f7952e595655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwbWluZGZ1bG5lc3MlMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NTg3MDk5MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    difficulty: 'Beginner'
  },
  {
    id: '2',
    title: 'Stress Relief',
    duration: 15,
    category: 'Relaxation',
    description: 'Release tension and find calm in stressful moments',
    instructor: 'David Park',
    image: 'https://images.unsplash.com/photo-1698757264929-409ff213e807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBjYWxtaW5nJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzU4NzA5OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    difficulty: 'Intermediate'
  },
  {
    id: '3',
    title: 'Deep Sleep Journey',
    duration: 20,
    category: 'Sleep',
    description: 'Prepare your mind and body for restful sleep',
    instructor: 'Luna Rodriguez',
    image: 'https://images.unsplash.com/photo-1583975656839-3c897af58424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBwZWFjZWZ1bCUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTg3MDk5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    difficulty: 'Beginner'
  },
  {
    id: '4',
    title: 'Focus & Concentration',
    duration: 12,
    category: 'Focus',
    description: 'Enhance your ability to concentrate and stay present',
    instructor: 'Marcus Thompson',
    image: 'https://images.unsplash.com/photo-1620302044885-63a750e08a71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NTg2MTcyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    difficulty: 'Advanced'
  }
];

interface MeditationSessionsProps {
  onSessionStart?: (sessionId: string) => void;
}

export function MeditationSessions({ onSessionStart }: MeditationSessionsProps) {
  const [activeSession, setActiveSession] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Mindfulness', 'Relaxation', 'Sleep', 'Focus'];
  
  const filteredSessions = selectedCategory === 'All' 
    ? sessions 
    : sessions.filter(session => session.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handlePlayPause = (sessionId: string) => {
    if (activeSession === sessionId) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveSession(sessionId);
      setIsPlaying(true);
      setCurrentTime(0);
      onSessionStart?.(sessionId);
    }
  };

  const handleReset = () => {
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            size="sm"
            className="h-9 px-4"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Active Session Player */}
      {activeSession && (
        <Card className="border-primary">
          <CardContent className="p-6">
            {(() => {
              const session = sessions.find(s => s.id === activeSession);
              if (!session) return null;
              
              return (
                <div className="flex items-center space-x-4">
                  <ImageWithFallback
                    src={session.image}
                    alt={session.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{session.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {formatTime(currentTime)} / {session.duration}:00
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleReset}
                    >
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handlePlayPause(activeSession)}
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              );
            })()}
          </CardContent>
        </Card>
      )}

      {/* Session Grid */}
      <div className="space-y-4">
        {filteredSessions.map((session) => (
          <Card key={session.id} className="overflow-hidden active:scale-[0.98] transition-transform">
            <div className="relative">
              <ImageWithFallback
                src={session.image}
                alt={session.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 right-3">
                <Badge className={getDifficultyColor(session.difficulty)}>
                  {session.difficulty}
                </Badge>
              </div>
              <div className="absolute bottom-3 left-3">
                <Badge variant="secondary" className="bg-black/50 text-white">
                  <Clock className="h-3 w-3 mr-1" />
                  {session.duration} min
                </Badge>
              </div>
            </div>
            
            <CardContent className="p-5">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{session.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{session.description}</p>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{session.instructor}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Target className="h-3 w-3" />
                    <span>{session.category}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full h-12" 
                  onClick={() => handlePlayPause(session.id)}
                  variant={activeSession === session.id ? 'secondary' : 'default'}
                >
                  {activeSession === session.id && isPlaying ? (
                    <>
                      <Pause className="h-4 w-4 mr-2" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      {activeSession === session.id ? 'Resume' : 'Start Session'}
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}