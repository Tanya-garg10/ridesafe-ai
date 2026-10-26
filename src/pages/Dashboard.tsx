import { useState } from 'react';
import {
  Shield,
  Activity,
  Battery,
  MapPin,
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { demoHelmet, demoRides, demoIncidents } from '../data/demoData';

export default function Dashboard() {
  const [helmet] = useState(demoHelmet);
  const [recentRides] = useState(demoRides.slice(0, 3));
  const [recentIncidents] = useState(demoIncidents.slice(0, 3));

  const avgSafetyScore = Math.round(
    demoRides.reduce((sum, ride) => sum + ride.safetyScore, 0) / demoRides.length
  );

  const totalDistance = demoRides.reduce((sum, ride) => sum + ride.distance, 0).toFixed(1);

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-secondary">Overview of your riding safety</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={Shield}
          label="Safety Score"
          value={`${avgSafetyScore}/100`}
          trend="+5%"
          color="accent"
        />
        <StatCard
          icon={Activity}
          label="Total Rides"
          value={demoRides.length}
          trend="+2"
          color="success"
        />
        <StatCard
          icon={MapPin}
          label="Total Distance"
          value={`${totalDistance} km`}
          trend="+12.5"
          color="info"
        />
        <StatCard
          icon={AlertTriangle}
          label="Incidents"
          value={demoIncidents.length}
          trend="-1"
          color="warning"
        />
      </div>

      {/* Safety Score Circle */}
      <div className="card mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Overall Safety Score</h2>
          <span className="badge badge-info">This Month</span>
        </div>
        <div className="flex items-center justify-center">
          <CircularProgress score={avgSafetyScore} />
        </div>
      </div>

      {/* Helmet Status */}
      <div className="card mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Helmet Status</h2>
          <span className={`badge ${helmet.isConnected ? 'badge-success' : 'badge-danger'}`}>
            {helmet.isConnected ? 'Connected' : 'Disconnected'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-4 rounded-lg bg-tertiary hover:bg-card transition-colors" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-secondary">Worn Status</p>
              <p className="text-lg font-semibold text-white flex items-center gap-2">
                {helmet.isWorn ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-success" />
                    Worn
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-danger" />
                    Not Worn
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-lg bg-tertiary hover:bg-card transition-colors" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
            <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
              <Battery className="w-6 h-6 text-success" />
            </div>
            <div>
              <p className="text-sm text-secondary">Battery Level</p>
              <p className="text-lg font-semibold text-white">{helmet.batteryLevel}%</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-lg bg-tertiary hover:bg-card transition-colors" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
            <div className="w-12 h-12 rounded-lg bg-info/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-secondary">Firmware</p>
              <p className="text-lg font-semibold text-white">{helmet.firmwareVersion}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Rides & Incidents */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Rides */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Recent Rides</h2>
            <button className="text-sm text-accent hover:underline">View All</button>
          </div>

          <div className="space-y-4">
            {recentRides.map((ride) => (
              <RideCard key={ride.id} ride={ride} />
            ))}
          </div>
        </div>

        {/* Recent Incidents */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Recent Incidents</h2>
            <button className="text-sm text-accent hover:underline">View All</button>
          </div>

          {recentIncidents.length > 0 ? (
            <div className="space-y-4">
              {recentIncidents.map((incident) => (
                <IncidentCard key={incident.id} incident={incident} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <CheckCircle className="empty-state-icon text-success" />
              <p>No recent incidents</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({
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
    accent: 'bg-gradient-to-br from-accent/20 to-mint/10 text-accent',
    success: 'bg-gradient-to-br from-success/20 to-green-500/10 text-success',
    info: 'bg-gradient-to-br from-accent/20 to-cyan-500/10 text-accent',
    warning: 'bg-gradient-to-br from-warning/20 to-amber-500/10 text-warning'
  };

  return (
    <div className="card group hover-lift">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-14 h-14 rounded-xl ${colorClasses[color as keyof typeof colorClasses]} flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <Icon className="w-7 h-7" />
        </div>
        <span className="text-sm font-semibold text-success">{trend}</span>
      </div>
      <p className="text-sm text-secondary mb-2 font-medium">{label}</p>
      <p className="text-3xl font-bold text-white">{value}</p>
    </div>
  );
}

function CircularProgress({ score }: { score: number }) {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const getColor = (score: number) => {
    if (score >= 90) return '#34c759';
    if (score >= 70) return '#00d4ff';
    if (score >= 50) return '#ff9500';
    return '#ff3b30';
  };

  return (
    <div className="circular-progress">
      <svg width="160" height="160">
        <circle
          className="circular-progress-circle"
          cx="80"
          cy="80"
          r={radius}
        />
        <circle
          className="circular-progress-bar"
          cx="80"
          cy="80"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ stroke: getColor(score) }}
        />
      </svg>
      <div className="circular-progress-text">{score}</div>
    </div>
  );
}

function RideCard({ ride }: { ride: any }) {
  const date = new Date(ride.startTime);
  const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-tertiary hover:bg-card transition-colors" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
          <Activity className="w-5 h-5 text-accent" />
        </div>
        <div>
          <p className="font-medium text-white">{formattedDate}</p>
          <p className="text-sm text-secondary">{ride.distance} km • {Math.round(ride.duration / 60)} min</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold text-white">{ride.safetyScore}/100</p>
        <p className="text-sm text-secondary">Score</p>
      </div>
    </div>
  );
}

function IncidentCard({ incident }: { incident: any }) {
  const date = new Date(incident.timestamp);
  const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  
  const severityColors = {
    low: 'badge-warning',
    medium: 'badge-danger',
    high: 'badge-danger',
    critical: 'badge-danger'
  };

  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-tertiary hover:bg-card transition-colors" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-danger/10 flex items-center justify-center">
          <AlertTriangle className="w-5 h-5 text-danger" />
        </div>
        <div>
          <p className="font-medium text-white">{incident.type.replace('_', ' ').toUpperCase()}</p>
          <p className="text-sm text-secondary">{formattedDate}</p>
        </div>
      </div>
      <span className={`badge ${severityColors[incident.severity as keyof typeof severityColors]}`}>
        {incident.severity}
      </span>
    </div>
  );
}
