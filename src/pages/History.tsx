import { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Clock,
  Activity,
  TrendingUp,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { demoRides } from '../data/demoData';

export default function History() {
  const [rides] = useState(demoRides);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'with-incidents' | 'without-incidents'>('all');

  const filteredRides = rides.filter(ride => {
    const matchesSearch = ride.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = 
      filter === 'all' ||
      (filter === 'with-incidents' && ride.incidents.length > 0) ||
      (filter === 'without-incidents' && ride.incidents.length === 0);
    return matchesSearch && matchesFilter;
  });

  const totalDistance = rides.reduce((sum, ride) => sum + ride.distance, 0).toFixed(1);
  const avgSafetyScore = Math.round(
    rides.reduce((sum, ride) => sum + ride.safetyScore, 0) / rides.length
  );

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Ride History</h1>
        <p className="text-secondary">View and analyze your past rides</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <SummaryCard
          icon={Activity}
          label="Total Rides"
          value={rides.length}
        />
        <SummaryCard
          icon={MapPin}
          label="Total Distance"
          value={`${totalDistance} km`}
        />
        <SummaryCard
          icon={TrendingUp}
          label="Avg Safety Score"
          value={`${avgSafetyScore}/100`}
        />
      </div>

      {/* Search and Filter */}
      <div className="card mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <input
              type="text"
              placeholder="Search rides..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-tertiary border border-white/10 rounded-lg text-white placeholder-muted focus:outline-none focus:border-accent transition-colors"
              style={{ backgroundColor: 'var(--bg-tertiary)' }}
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`btn btn-sm ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('with-incidents')}
              className={`btn btn-sm ${filter === 'with-incidents' ? 'btn-primary' : 'btn-secondary'}`}
            >
              With Incidents
            </button>
            <button
              onClick={() => setFilter('without-incidents')}
              className={`btn btn-sm ${filter === 'without-incidents' ? 'btn-primary' : 'btn-secondary'}`}
            >
              Without Incidents
            </button>
          </div>
        </div>
      </div>

      {/* Ride List */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">
            Rides ({filteredRides.length})
          </h2>
        </div>
        
        {filteredRides.length > 0 ? (
          <div className="space-y-4">
            {filteredRides.map((ride) => (
              <RideCard key={ride.id} ride={ride} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Activity className="empty-state-icon text-secondary" />
            <p>No rides found</p>
          </div>
        )}
      </div>
    </div>
  );
}

function SummaryCard({ icon: Icon, label, value }: { icon: any; label: string; value: string | number }) {
  return (
    <div className="card">
      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <p className="text-sm text-secondary mb-1">{label}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}

function RideCard({ ride }: { ride: any }) {
  const date = new Date(ride.startTime);
  const formattedDate = date.toLocaleDateString('en-US', { 
    weekday: 'short',
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  const duration = Math.floor(ride.duration / 60);
  const minutes = ride.duration % 60;

  return (
    <div className="p-6 rounded-lg bg-tertiary hover:bg-card transition-colors" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
            <Activity className="w-6 h-6 text-accent" />
          </div>
          <div>
            <p className="font-medium text-white">{formattedDate}</p>
            <p className="text-sm text-secondary">Ride ID: {ride.id}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-accent">{ride.safetyScore}/100</p>
          <p className="text-sm text-secondary">Safety Score</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatItem icon={MapPin} label="Distance" value={`${ride.distance} km`} />
        <StatItem icon={Clock} label="Duration" value={`${duration}h ${minutes}m`} />
        <StatItem icon={TrendingUp} label="Max Speed" value={`${ride.maxSpeed} km/h`} />
        <StatItem icon={TrendingUp} label="Avg Speed" value={`${ride.avgSpeed} km/h`} />
      </div>

      {ride.incidents.length > 0 && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-danger">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">
              {ride.incidents.length} incident{ride.incidents.length > 1 ? 's' : ''} recorded
            </span>
          </div>
        </div>
      )}

      {ride.incidents.length === 0 && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-success">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">No incidents</span>
          </div>
        </div>
      )}
    </div>
  );
}

function StatItem({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="w-4 h-4 text-secondary" />
      <div>
        <p className="text-xs text-secondary">{label}</p>
        <p className="text-sm text-white font-medium">{value}</p>
      </div>
    </div>
  );
}
