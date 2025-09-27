import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  BookOpen, 
  Play, 
  ExternalLink, 
  Clock, 
  Users, 
  Star,
  Heart,
  Brain,
  Lightbulb,
  Phone
} from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'audio' | 'tool';
  category: string;
  duration?: string;
  rating: number;
  image: string;
  author?: string;
  url?: string;
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'The Science of Mindfulness',
    description: 'Discover how mindfulness practices can rewire your brain for better mental health and emotional regulation.',
    type: 'article',
    category: 'Mindfulness',
    duration: '8 min read',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1573285702030-f7952e595655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwbWluZGZ1bG5lc3MlMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NTg3MDk5MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Dr. Sarah Chen'
  },
  {
    id: '2',
    title: 'Breathing Techniques for Anxiety',
    description: 'Learn powerful breathing exercises that can help you manage anxiety and stress in the moment.',
    type: 'video',
    category: 'Anxiety',
    duration: '12 min',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1698757264929-409ff213e807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBjYWxtaW5nJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzU4NzA5OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Marcus Williams'
  },
  {
    id: '3',
    title: 'Sleep Better Tonight',
    description: 'A comprehensive guide to improving your sleep quality through proven techniques and habits.',
    type: 'article',
    category: 'Sleep',
    duration: '15 min read',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1583975656839-3c897af58424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBwZWFjZWZ1bCUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTg3MDk5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Dr. Emily Rodriguez'
  },
  {
    id: '4',
    title: 'Building Resilience',
    description: 'Practical strategies for developing mental resilience and bouncing back from life\'s challenges.',
    type: 'audio',
    category: 'Resilience',
    duration: '25 min',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1620302044885-63a750e08a71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHltZW50YWwlMjBoZWFsdGglMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NTg2MTcyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Lisa Park'
  }
];

const categories = ['All', 'Mindfulness', 'Anxiety', 'Sleep', 'Resilience', 'Depression', 'Stress'];

const emergencyContacts = [
  { name: 'National Suicide Prevention Lifeline', phone: '988', available: '24/7' },
  { name: 'Crisis Text Line', phone: 'Text HOME to 741741', available: '24/7' },
  { name: 'SAMHSA Helpline', phone: '1-800-662-4357', available: '24/7' },
];

export function Resources() {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article': return BookOpen;
      case 'video': return Play;
      case 'audio': return Users;
      case 'tool': return Lightbulb;
      default: return BookOpen;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article': return 'bg-blue-100 text-blue-800';
      case 'video': return 'bg-red-100 text-red-800';
      case 'audio': return 'bg-green-100 text-green-800';
      case 'tool': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-2">Wellness Resources</h1>
        <p className="text-muted-foreground">
          Curated content to support your mental health journey
        </p>
      </div>

      {/* Emergency Support */}
      <Card className="border-red-200 bg-red-50/50">
        <CardHeader>
          <CardTitle className="flex items-center text-red-800">
            <Phone className="h-5 w-5 mr-2" />
            Need Immediate Support?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-red-700 mb-4">
            If you're in crisis or need immediate help, please reach out to these resources:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-red-200">
                <h4 className="font-medium text-red-800 text-sm">{contact.name}</h4>
                <p className="font-semibold text-red-900">{contact.phone}</p>
                <p className="text-xs text-red-600">{contact.available}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button key={category} variant="outline" size="sm">
            {category}
          </Button>
        ))}
      </div>

      {/* Featured Resources */}
      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Star className="h-5 w-5 mr-2 text-yellow-500" />
          Featured Resources
        </h2>
        <div className="space-y-4">
          {resources.map((resource) => {
            const TypeIcon = getTypeIcon(resource.type);
            return (
              <Card key={resource.id} className="active:scale-[0.98] transition-transform">
                <div className="relative">
                  <ImageWithFallback
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className={getTypeColor(resource.type)}>
                      <TypeIcon className="h-3 w-3 mr-1" />
                      {resource.type}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-white/90">
                      <Clock className="h-3 w-3 mr-1" />
                      {resource.duration}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-5 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{resource.category}</Badge>
                      {resource.author && (
                        <span className="text-muted-foreground">by {resource.author}</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{resource.rating}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full h-12" variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Resource
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Self-Care Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Heart className="h-5 w-5 mr-2 text-red-500" />
            Daily Self-Care Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <Brain className="h-6 w-6 text-blue-600 mb-2" />
              <h4 className="font-medium text-blue-900">Mindful Moments</h4>
              <p className="text-sm text-blue-700">
                Take 3 deep breaths before starting any task to center yourself.
              </p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <Heart className="h-6 w-6 text-green-600 mb-2" />
              <h4 className="font-medium text-green-900">Gratitude Practice</h4>
              <p className="text-sm text-green-700">
                Write down three things you're grateful for each morning.
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg">
              <Clock className="h-6 w-6 text-purple-600 mb-2" />
              <h4 className="font-medium text-purple-900">Boundary Setting</h4>
              <p className="text-sm text-purple-700">
                It's okay to say no to protect your mental energy and well-being.
              </p>
            </div>
            
            <div className="p-4 bg-yellow-50 rounded-lg">
              <Lightbulb className="h-6 w-6 text-yellow-600 mb-2" />
              <h4 className="font-medium text-yellow-900">Movement Breaks</h4>
              <p className="text-sm text-yellow-700">
                Take a 5-minute walk or stretch every hour to boost mood.
              </p>
            </div>
            
            <div className="p-4 bg-red-50 rounded-lg">
              <Users className="h-6 w-6 text-red-600 mb-2" />
              <h4 className="font-medium text-red-900">Social Connection</h4>
              <p className="text-sm text-red-700">
                Reach out to a friend or family member you care about today.
              </p>
            </div>
            
            <div className="p-4 bg-indigo-50 rounded-lg">
              <Star className="h-6 w-6 text-indigo-600 mb-2" />
              <h4 className="font-medium text-indigo-900">Digital Detox</h4>
              <p className="text-sm text-indigo-700">
                Set aside 30 minutes each day without screens for mental clarity.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Professional Help */}
      <Card>
        <CardHeader>
          <CardTitle>When to Seek Professional Help</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed">
            While self-care and wellness practices are valuable, sometimes professional support is needed. 
            Consider reaching out to a mental health professional if you experience:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <span>Persistent feelings of sadness or hopelessness</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <span>Severe anxiety that interferes with daily life</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <span>Difficulty sleeping or eating regularly</span>
              </li>
            </ul>
            
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <span>Thoughts of self-harm or suicide</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <span>Substance abuse as a coping mechanism</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <span>Inability to function in work or relationships</span>
              </li>
            </ul>
          </div>
          
          <Button className="w-full md:w-auto">
            Find a Therapist Near You
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}