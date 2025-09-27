import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { MoodTracker } from './components/MoodTracker';
import { MeditationSessions } from './components/MeditationSessions';
import { Journal } from './components/Journal';
import { Resources } from './components/Resources';
import { 
  LayoutDashboard, 
  Heart, 
  Brain, 
  BookOpen, 
  Library
} from 'lucide-react';

const navigation = [
  { id: 'dashboard', label: 'Home', icon: LayoutDashboard },
  { id: 'mood', label: 'Mood', icon: Heart },
  { id: 'meditation', label: 'Meditate', icon: Brain },
  { id: 'journal', label: 'Journal', icon: BookOpen },
  { id: 'resources', label: 'Resources', icon: Library },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'mood':
        return <MoodTracker onMoodSelect={(mood) => console.log('Mood selected:', mood)} />;
      case 'meditation':
        return <MeditationSessions onSessionStart={(id) => console.log('Session started:', id)} />;
      case 'journal':
        return <Journal />;
      case 'resources':
        return <Resources />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Mobile Header */}
      <header className="bg-white border-b border-border p-4 flex items-center justify-center sticky top-0 z-10">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Heart className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-semibold">MindfulMe</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-4 pb-24">
          {renderContent()}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border safe-area-pb z-20">
        <div className="flex items-center justify-around px-2 py-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-200 min-h-[4rem] flex-1 mx-1 ${
                  isActive
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground active:bg-muted/50'
                }`}
              >
                <Icon className={`h-6 w-6 mb-1 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                <span className={`text-xs font-medium ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}