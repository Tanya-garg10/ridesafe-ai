import { demoRides } from '../data/demoData';
import { 
  TrendingUp, 
  Activity, 
  AlertTriangle, 
  Shield,
  Clock,
  Calendar,
  BarChart3
} from 'lucide-react';

export default function Analytics() {
  const totalRides = demoRides.length;
  const totalDistance = demoRides.reduce((sum, ride) => sum + ride.distance, 0).toFixed(1);
  const avgSafetyScore = Math.round(
    demoRides.reduce((sum, ride) => sum + ride.safetyScore, 0) / demoRides.length
  );
  const totalIncidents = demoRides.reduce((sum, ride) => sum + ride.incidents.length, 0);
  const avgSpeed = Math.round(
    demoRides.reduce((sum, ride) => sum + ride.avgSpeed, 0) / demoRides.length
  );

  // Weekly data simulation
  const weeklyData = [
    { day: 'Mon', distance: 12.5, safety: 95, incidents: 0 },
    { day: 'Tue', distance: 15.2, safety: 88, incidents: 1 },
    { day: 'Wed', distance: 18.7, safety: 92, incidents: 0 },
    { day: 'Thu', distance: 8.3, safety: 85, incidents: 1 },
    { day: 'Fri', distance: 20.1, safety: 94, incidents: 0 },
  ];

  const maxDistance = Math.max(...weeklyData.map(d => d.distance));

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
        <p className="text-secondary">Weekly safety summary and ride insights</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <AnalyticsCard
          icon={Activity}
          label="Total Rides"
          value={totalRides}
          trend="+2 this week"
          color="accent"
        />
        <AnalyticsCard
          icon={BarChart3}
          label="Total Distance"
          value={`${totalDistance} km`}
          trend="+12.5 km"
          color="success"
        />
        <AnalyticsCard
          icon={Shield}
          label="Avg Safety Score"
          value={`${avgSafetyScore}/100`}
          trend="+5%"
          color="info"
        />
        <AnalyticsCard
          icon={AlertTriangle}
          label="Total Incidents"
          value={totalIncidents}
          trend="-1"
          color="warning"
        />
      </div>

      {/* Weekly Distance Chart */}
      <div className="card mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Weekly Distance</h2>
          <span className="text-sm text-secondary">Last 5 days</span>
        </div>
        
        <div className="h-64 flex items-end justify-between gap-4">
          {weeklyData.map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full bg-tertiary rounded-t-lg relative" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                <div
                  className="w-full bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t-lg transition-all duration-500"
                  style={{ height: `${(data.distance / maxDistance) * 100}%` }}
                />
              </div>
              <p className="text-sm text-secondary mt-2">{data.day}</p>
              <p className="text-xs text-white font-medium">{data.distance} km</p>
            </div>
          ))}
        </div>
      </div>

      {/* Safety Score Chart */}
      <div className="card mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Safety Score Trend</h2>
          <span className="text-sm text-secondary">Last 5 days</span>
        </div>
        
        <div className="h-64 flex items-end justify-between gap-4">
          {weeklyData.map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full bg-tertiary rounded-t-lg relative" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                <div
                  className={`w-full rounded-t-lg transition-all duration-500 ${
                    data.safety >= 90 ? 'bg-gradient-to-t from-green-500 to-green-400' :
                    data.safety >= 80 ? 'bg-gradient-to-t from-yellow-500 to-yellow-400' :
                    'bg-gradient-to-t from-red-500 to-red-400'
                  }`}
                  style={{ height: `${data.safety}%` }}
                />
              </div>
              <p className="text-sm text-secondary mt-2">{data.day}</p>
              <p className="text-xs text-white font-medium">{data.safety}/100</p>
            </div>
          ))}
        </div>
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ride Patterns */}
        <div className="card">
          <h3 className="text-lg font-semibold text-white mb-4">Ride Patterns</h3>
          <div className="space-y-4">
            <PatternItem
              label="Most Active Day"
              value="Friday"
              icon={Calendar}
            />
            <PatternItem
              label="Average Ride Duration"
              value="45 minutes"
              icon={Clock}
            />
            <PatternItem
              label="Average Speed"
              value={`${avgSpeed} km/h`}
              icon={TrendingUp}
            />
            <PatternItem
              label="Peak Riding Time"
              value="8:00 AM - 9:00 AM"
              icon={Activity}
            />
          </div>
        </div>

        {/* Safety Insights */}
        <div className="card">
          <h3 className="text-lg font-semibold text-white mb-4">Safety Insights</h3>
          <div className="space-y-4">
            <InsightCard
              title="Excellent Safety Record"
              description="Your safety score is above average. Keep up the good riding habits!"
              type="success"
            />
            <InsightCard
              title="Watch for Sudden Brakes"
              description="2 incidents related to sudden braking detected this week. Consider maintaining safer following distances."
              type="warning"
            />
            <InsightCard
              title="Consistent Riding"
              description="You've maintained a consistent riding schedule. This helps build muscle memory and awareness."
              type="info"
            />
          </div>
        </div>
      </div>

      {/* Demo Notice */}
      <div className="card mt-8 border-2 border-accent/20">
        <div className="flex items-start gap-4">
          <BarChart3 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Demo Analytics</h4>
            <p className="text-sm text-secondary">
              This is simulated analytics data based on demo rides. 
              In production, this would show real analytics from your actual riding data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsCard({ 
  icon: Icon, 
  label, 
  value, 
  trend, 
  color 
}: { 
  icon: any; 
  label: string; 
  value: string | number; 
  trend: string; 
  color: string;
}) {
  const colorClasses = {
    accent: 'bg-accent/10 text-accent',
    success: 'bg-success/10 text-success',
    info: 'bg-info/10 text-accent',
    warning: 'bg-warning/10 text-warning'
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg ${colorClasses[color as keyof typeof colorClasses]} flex items-center justify-center`}>
          <Icon className="w-6 h-6" />
        </div>
        <span className="text-sm text-success">{trend}</span>
      </div>
      <p className="text-sm text-secondary mb-1">{label}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}

function PatternItem({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-tertiary" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-secondary" />
        <span className="text-sm text-white">{label}</span>
      </div>
      <span className="text-sm text-accent font-medium">{value}</span>
    </div>
  );
}

function InsightCard({ 
  title, 
  description, 
  type 
}: { 
  title: string; 
  description: string; 
  type: 'success' | 'warning' | 'info';
}) {
  const typeClasses = {
    success: 'border-success bg-success/5',
    warning: 'border-warning bg-warning/5',
    info: 'border-accent bg-accent/5'
  };

  const iconClasses = {
    success: 'text-success',
    warning: 'text-warning',
    info: 'text-accent'
  };

  return (
    <div className={`p-4 rounded-lg border ${typeClasses[type]}`}>
      <div className="flex items-start gap-3">
        <Shield className={`w-5 h-5 ${iconClasses[type]} flex-shrink-0 mt-0.5`} />
        <div>
          <p className="font-medium text-white mb-1">{title}</p>
          <p className="text-sm text-secondary">{description}</p>
        </div>
      </div>
    </div>
  );
}
