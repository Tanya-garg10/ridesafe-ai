import { useState } from 'react';
import { 
  AlertTriangle, 
  MapPin, 
  Phone, 
  CheckCircle,
  User,
  Navigation
} from 'lucide-react';
import { demoIncidents } from '../data/demoData';

export default function Emergency() {
  const [incidents] = useState(demoIncidents);
  const [showCountdown, setShowCountdown] = useState(false);
  const [countdown, setCountdown] = useState(15);

  const triggerSOS = () => {
    setShowCountdown(true);
    setCountdown(15);
    
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const cancelSOS = () => {
    setShowCountdown(false);
    setCountdown(15);
  };

  if (showCountdown) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="card border-2 border-danger text-center">
            <AlertTriangle className="w-24 h-24 text-danger mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-danger mb-4">EMERGENCY SOS</h1>
            <p className="text-xl text-secondary mb-2">
              Alerting emergency contacts in:
            </p>
            
            <div className="text-8xl font-bold text-danger my-8">
              {countdown}
            </div>
            
            <div className="card mb-6 bg-tertiary" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-6 h-6 text-accent" />
                <div className="text-left">
                  <p className="text-sm text-secondary">Current Location</p>
                  <p className="text-white font-mono">28.6139° N, 77.2090° E</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <User className="w-6 h-6 text-accent" />
                <div className="text-left">
                  <p className="text-sm text-secondary">Emergency Contact</p>
                  <p className="text-white">Sarah Rider • +91 98765 43211</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={cancelSOS}
                className="btn btn-success btn-lg"
              >
                <CheckCircle className="w-5 h-5" />
                CANCEL
              </button>
              <button
                className="btn btn-danger btn-lg"
              >
                <Phone className="w-5 h-5" />
                CALL NOW
              </button>
            </div>
            
            <p className="text-sm text-secondary mt-6">
              This is a demo. No actual emergency services will be contacted.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Emergency Center</h1>
        <p className="text-secondary">Manage emergency alerts and incident history</p>
      </div>

      {/* SOS Button */}
      <div className="card mb-8 border-2 border-danger bg-danger/5">
        <div className="text-center">
          <AlertTriangle className="w-16 h-16 text-danger mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Emergency SOS</h2>
          <p className="text-secondary mb-6">
            Immediately alert your emergency contacts with your location
          </p>
          <button
            onClick={triggerSOS}
            className="btn btn-danger btn-lg"
          >
            <AlertTriangle className="w-5 h-5" />
            TRIGGER SOS
          </button>
          <p className="text-sm text-secondary mt-4">
            This will send an alert to your emergency contact
          </p>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="card mb-8">
        <h2 className="text-xl font-semibold text-white mb-6">Emergency Contacts</h2>
        <div className="space-y-4">
          <ContactCard
            name="Sarah Rider"
            phone="+91 98765 43211"
            relationship="Spouse"
            isPrimary
          />
          <ContactCard
            name="Dr. Priya Sharma"
            phone="+91 98765 43212"
            relationship="Family Doctor"
            isPrimary={false}
          />
        </div>
        <button className="btn btn-secondary w-full mt-4">
          Add Emergency Contact
        </button>
      </div>

      {/* Incident History */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Incident History</h2>
          <span className="badge badge-info">{incidents.length} Total</span>
        </div>
        
        {incidents.length > 0 ? (
          <div className="space-y-4">
            {incidents.map((incident) => (
              <IncidentCard key={incident.id} incident={incident} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <CheckCircle className="empty-state-icon text-success" />
            <p>No incidents recorded</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ContactCard({ 
  name, 
  phone, 
  relationship, 
  isPrimary 
}: { 
  name: string; 
  phone: string; 
  relationship: string; 
  isPrimary: boolean;
}) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-tertiary" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
          <User className="w-6 h-6 text-accent" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="font-medium text-white">{name}</p>
            {isPrimary && <span className="badge badge-success text-xs">Primary</span>}
          </div>
          <p className="text-sm text-secondary">{relationship} • {phone}</p>
        </div>
      </div>
      <button className="btn btn-sm btn-secondary">
        <Phone className="w-4 h-4" />
      </button>
    </div>
  );
}

function IncidentCard({ incident }: { incident: any }) {
  const date = new Date(incident.timestamp);
  const formattedDate = date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  const severityColors = {
    low: 'badge-warning',
    medium: 'badge-danger',
    high: 'badge-danger',
    critical: 'badge-danger'
  };

  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-tertiary hover:bg-card transition-colors" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-danger/10 flex items-center justify-center">
          <AlertTriangle className="w-6 h-6 text-danger" />
        </div>
        <div>
          <p className="font-medium text-white">{incident.type.replace('_', ' ').toUpperCase()}</p>
          <p className="text-sm text-secondary">{formattedDate}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className={`badge ${severityColors[incident.severity as keyof typeof severityColors]}`}>
          {incident.severity}
        </span>
        <button className="btn btn-sm btn-secondary">
          <Navigation className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
