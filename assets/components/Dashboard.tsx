import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  Calendar, 
  Target, 
  Heart, 
  Brain, 
  Clock, 
  Award,
  TrendingUp,
  Flame
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const moodData = [
  { date: '01/20', mood: 3 },
  { date: '01/21', mood: 4 },
  { date: '01/22', mood: 3 },
  { date: '01/23', mood: 5 },
  { date: '01/24', mood: 4 },
  { date: '01/25', mood: 4 },
  { date: '01/26', mood: 5 },
];

const activityData = [
  { name: 'Meditation', value: 40, color: '#3b82f6' },
  { name: 'Journaling', value: 30, color: '#10b981' },
  { name: 'Mood Tracking', value: 30, color: '#f59e0b' },
];

const achievements = [
  { title: '7-Day Streak', description: 'Meditated for 7 days in a row', icon: Flame, color: 'text-orange-500' },
  { title: 'Mindful Writer', description: 'Completed 10 journal entries', icon: Heart, color: 'text-red-500' },
  { title: 'Mood Master', description: 'Tracked mood for 30 days', icon: Brain, color: 'text-blue-500' },
];

export function Dashboard() {
  const currentStreak = 7;
  const totalMeditations = 24;
  const journalEntries = 12;
  const averageMood = 4.1;

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="text-center py-6">
        <h1 className="text-2xl font-semibold mb-2">Welcome back, Sarah! 👋</h1>
        <p className="text-sm text-muted-foreground">
          You're doing great on your wellness journey. Here's your progress today.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3">
              <Flame className="h-6 w-6 text-orange-600" />
            </div>
            <div className="text-2xl font-semibold">{currentStreak}</div>
            <div className="text-sm text-muted-foreground">Day Streak</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3">
              <Brain className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-2xl font-semibold">{totalMeditations}</div>
            <div className="text-sm text-muted-foreground">Meditations</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-3">
              <Heart className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-2xl font-semibold">{journalEntries}</div>
            <div className="text-sm text-muted-foreground">Journal Entries</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mx-auto mb-3">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <div className="text-2xl font-semibold">{averageMood.toFixed(1)}</div>
            <div className="text-sm text-muted-foreground">Avg Mood</div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Goals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="h-5 w-5 mr-2" />
            Today's Wellness Goals
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full" />
                <span>Complete morning meditation</span>
              </div>
              <Badge className="bg-green-100 text-green-800">Done</Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full" />
                <span>Log mood check-in</span>
              </div>
              <Badge className="bg-green-100 text-green-800">Done</Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-yellow-500 rounded-full" />
                <span>Write journal entry</span>
              </div>
              <Badge variant="outline">Pending</Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-purple-500 rounded-full" />
                <span>Evening gratitude practice</span>
              </div>
              <Badge variant="outline">Pending</Badge>
            </div>
          </div>
          
          <div className="pt-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span>Daily Progress</span>
              <span>50%</span>
            </div>
            <Progress value={50} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mood Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="h-5 w-5 mr-2 text-red-500" />
              Mood Trend (7 Days)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={moodData}>
                <XAxis dataKey="date" axisLine={false} tickLine={false} className="text-xs" />
                <YAxis domain={[1, 5]} hide />
                <Line 
                  type="monotone" 
                  dataKey="mood" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>Poor</span>
              <span>Excellent</span>
            </div>
          </CardContent>
        </Card>

        {/* Activity Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-blue-500" />
              Activity Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={activityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {activityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-4">
              {activityData.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="h-5 w-5 mr-2 text-yellow-500" />
            Recent Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                  <div className={`p-2 rounded-full bg-background ${achievement.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{achievement.title}</h4>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-5 text-center border border-border rounded-lg active:bg-muted/50 transition-colors min-h-[6rem] active:scale-95 transform">
              <Brain className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <div className="text-sm font-medium">Quick Meditation</div>
              <div className="text-xs text-muted-foreground">5 min session</div>
            </button>
            
            <button className="p-5 text-center border border-border rounded-lg active:bg-muted/50 transition-colors min-h-[6rem] active:scale-95 transform">
              <Heart className="h-8 w-8 mx-auto mb-2 text-red-600" />
              <div className="text-sm font-medium">Log Mood</div>
              <div className="text-xs text-muted-foreground">How are you feeling?</div>
            </button>
            
            <button className="p-5 text-center border border-border rounded-lg active:bg-muted/50 transition-colors min-h-[6rem] active:scale-95 transform">
              <Calendar className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-sm font-medium">Journal Entry</div>
              <div className="text-xs text-muted-foreground">Write your thoughts</div>
            </button>
            
            <button className="p-5 text-center border border-border rounded-lg active:bg-muted/50 transition-colors min-h-[6rem] active:scale-95 transform">
              <Award className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
              <div className="text-sm font-medium">View Progress</div>
              <div className="text-xs text-muted-foreground">See your growth</div>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}