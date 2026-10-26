import { useState } from 'react';
import {
  User,
  Shield,
  Bell,
  Smartphone,
  MapPin,
  Save,
  LogOut
} from 'lucide-react';
import { demoUser, demoAlertPreferences } from '../data/demoData';

export default function Settings() {
  const [user, setUser] = useState(demoUser);
  const [alertPrefs, setAlertPrefs] = useState(demoAlertPreferences);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-secondary">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="card">
            <nav className="space-y-1">
              <NavItem icon={User} label="Profile" active />
              <NavItem icon={Shield} label="Emergency Contacts" />
              <NavItem icon={Bell} label="Alert Preferences" />
              <NavItem icon={Smartphone} label="Device Settings" />
              <NavItem icon={MapPin} label="Location Settings" />
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Section */}
          <div className="card hover-lift">
            <h2 className="text-xl font-semibold text-white mb-6">Profile</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  className="input-premium"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="input-premium"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  className="input-premium"
                />
              </div>
            </div>
          </div>

          {/* Emergency Contact Section */}
          <div className="card hover-lift">
            <h2 className="text-xl font-semibold text-white mb-6">Emergency Contact</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Contact Name
                </label>
                <input
                  type="text"
                  value={user.emergencyContact.name}
                  onChange={(e) => setUser({
                    ...user,
                    emergencyContact: { ...user.emergencyContact, name: e.target.value }
                  })}
                  className="input-premium"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  value={user.emergencyContact.phone}
                  onChange={(e) => setUser({
                    ...user,
                    emergencyContact: { ...user.emergencyContact, phone: e.target.value }
                  })}
                  className="input-premium"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Relationship
                </label>
                <input
                  type="text"
                  value={user.emergencyContact.relationship}
                  onChange={(e) => setUser({
                    ...user,
                    emergencyContact: { ...user.emergencyContact, relationship: e.target.value }
                  })}
                  className="input-premium"
                />
              </div>
            </div>
          </div>

          {/* Alert Preferences Section */}
          <div className="card hover-lift">
            <h2 className="text-xl font-semibold text-white mb-6">Alert Preferences</h2>

            <div className="space-y-4">
              <ToggleSetting
                label="Enable SOS Alerts"
                description="Allow automatic SOS alerts to be sent on crash detection"
                checked={alertPrefs.sosEnabled}
                onChange={(checked) => setAlertPrefs({ ...alertPrefs, sosEnabled: checked })}
              />

              <ToggleSetting
                label="Alert Emergency Contact"
                description="Send alert to your emergency contact"
                checked={alertPrefs.emergencyContactAlert}
                onChange={(checked) => setAlertPrefs({ ...alertPrefs, emergencyContactAlert: checked })}
              />

              <ToggleSetting
                label="Alert Ambulance Service"
                description="Send alert to ambulance service (requires configuration)"
                checked={alertPrefs.ambulanceAlert}
                onChange={(checked) => setAlertPrefs({ ...alertPrefs, ambulanceAlert: checked })}
              />

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Countdown Duration (seconds)
                </label>
                <input
                  type="number"
                  value={alertPrefs.countdownSeconds}
                  onChange={(e) => setAlertPrefs({ ...alertPrefs, countdownSeconds: parseInt(e.target.value) || 15 })}
                  className="input-premium"
                  min="5"
                  max="60"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  G-Force Threshold
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={alertPrefs.gForceThreshold}
                  onChange={(e) => setAlertPrefs({ ...alertPrefs, gForceThreshold: parseFloat(e.target.value) || 4.0 })}
                  className="input-premium"
                  min="2.0"
                  max="10.0"
                />
                <p className="text-xs text-secondary mt-1">
                  Higher values reduce false positives but may miss actual crashes
                </p>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="btn btn-primary hover-lift"
            >
              {isSaving ? (
                <div className="spinner" />
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Save Changes
                </>
              )}
            </button>
            <button className="btn btn-secondary hover-lift">
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon: Icon, label, active = false }: { icon: any; label: string; active?: boolean }) {
  return (
    <button
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors w-full ${
        active ? 'bg-accent/10 text-accent' : 'text-secondary hover:bg-tertiary hover:text-white'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );
}

function ToggleSetting({
  label,
  description,
  checked,
  onChange
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between p-4 rounded-lg bg-tertiary hover:bg-card transition-colors" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="flex-1">
        <p className="font-medium text-white mb-1">{label}</p>
        <p className="text-sm text-secondary">{description}</p>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`toggle-switch ${checked ? 'active' : ''}`}
      >
        <div className="toggle-switch-knob" />
      </button>
    </div>
  );
}
