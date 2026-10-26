import { useState } from 'react';
import {
  Shield,
  Battery,
  Bluetooth,
  RefreshCw,
  CheckCircle,
  XCircle,
  Cpu
} from 'lucide-react';
import { demoHelmet } from '../data/demoData';

export default function Device() {
  const [helmet, setHelmet] = useState(demoHelmet);
  const [isConnecting, setIsConnecting] = useState(false);

  const toggleConnection = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setHelmet(prev => ({ ...prev, isConnected: !prev.isConnected }));
      setIsConnecting(false);
    }, 1500);
  };

  const toggleWorn = () => {
    setHelmet(prev => ({ ...prev, isWorn: !prev.isWorn }));
  };

  const calibrate = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setHelmet(prev => ({ ...prev, lastCalibrated: new Date() }));
      setIsConnecting(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Device Management</h1>
        <p className="text-secondary">Manage your smart helmet connection and settings</p>
      </div>

      {/* Device Status Card */}
      <div className="card mb-8 hover-lift">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center ${helmet.isConnected ? 'animate-pulse-glow' : ''}`}>
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">{helmet.name}</h2>
              <p className="text-sm text-secondary">Smart Helmet • ID: {helmet.id}</p>
            </div>
          </div>
          <span className={`badge ${helmet.isConnected ? 'badge-success badge-glow' : 'badge-danger'}`}>
            {helmet.isConnected ? 'Connected' : 'Disconnected'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <StatusItem
            icon={Bluetooth}
            label="Connection"
            value={helmet.isConnected ? 'Active' : 'Inactive'}
            status={helmet.isConnected ? 'success' : 'danger'}
          />
          <StatusItem
            icon={Shield}
            label="Worn Status"
            value={helmet.isWorn ? 'Worn' : 'Not Worn'}
            status={helmet.isWorn ? 'success' : 'warning'}
          />
          <StatusItem
            icon={Battery}
            label="Battery"
            value={`${helmet.batteryLevel}%`}
            status={helmet.batteryLevel > 20 ? 'success' : 'danger'}
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={toggleConnection}
            disabled={isConnecting}
            className={`btn ${helmet.isConnected ? 'btn-danger' : 'btn-primary'} hover-lift`}
          >
            {isConnecting ? (
              <div className="spinner" />
            ) : helmet.isConnected ? (
              <>
                <Bluetooth className="w-5 h-5" />
                Disconnect
              </>
            ) : (
              <>
                <Bluetooth className="w-5 h-5" />
                Connect
              </>
            )}
          </button>
        </div>
      </div>

      {/* Device Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Wear Status */}
        <div className="card hover-lift">
          <h3 className="text-lg font-semibold text-white mb-4">Wear Status</h3>
          <p className="text-sm text-secondary mb-6">
            Toggle whether the helmet is currently being worn. This affects crash detection sensitivity.
          </p>
          <button
            onClick={toggleWorn}
            className={`btn ${helmet.isWorn ? 'btn-success' : 'btn-secondary'} w-full hover-lift`}
          >
            {helmet.isWorn ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Mark as Not Worn
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5" />
                Mark as Worn
              </>
            )}
          </button>
        </div>

        {/* Calibration */}
        <div className="card hover-lift">
          <h3 className="text-lg font-semibold text-white mb-4">Calibration</h3>
          <p className="text-sm text-secondary mb-2">
            Last calibrated: {helmet.lastCalibrated.toLocaleDateString()}
          </p>
          <p className="text-sm text-secondary mb-6">
            Recalibrate sensors for accurate readings. This should be done periodically.
          </p>
          <button
            onClick={calibrate}
            disabled={isConnecting}
            className="btn btn-secondary w-full hover-lift"
          >
            {isConnecting ? (
              <div className="spinner" />
            ) : (
              <>
                <RefreshCw className="w-5 h-5" />
                Calibrate Sensors
              </>
            )}
          </button>
        </div>
      </div>

      {/* Device Info */}
      <div className="card mt-8 hover-lift">
        <h3 className="text-lg font-semibold text-white mb-4">Device Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoItem label="Device ID" value={helmet.id} />
          <InfoItem label="Device Name" value={helmet.name} />
          <InfoItem label="Firmware Version" value={helmet.firmwareVersion} />
          <InfoItem label="Battery Level" value={`${helmet.batteryLevel}%`} />
          <InfoItem label="Last Calibration" value={helmet.lastCalibrated.toLocaleDateString()} />
          <InfoItem label="Connection Protocol" value="Bluetooth 5.0" />
        </div>
      </div>

      {/* Demo Simulator Notice */}
      <div className="card mt-8 border-2 border-accent/20">
        <div className="flex items-start gap-4">
          <Cpu className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Demo Device Simulator</h4>
            <p className="text-sm text-secondary">
              This is a simulated environment. No actual hardware is connected.
              In production, this would connect to a real smart helmet via Bluetooth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusItem({ 
  icon: Icon, 
  label, 
  value, 
  status 
}: { 
  icon: any; 
  label: string; 
  value: string; 
  status: 'success' | 'danger' | 'warning';
}) {
  const statusColors = {
    success: 'text-success',
    danger: 'text-danger',
    warning: 'text-warning'
  };

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-tertiary" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <Icon className="w-6 h-6 text-secondary" />
      <div>
        <p className="text-sm text-secondary">{label}</p>
        <p className={`font-semibold ${statusColors[status]}`}>{value}</p>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between p-3 rounded-lg bg-tertiary" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <span className="text-sm text-secondary">{label}</span>
      <span className="text-sm text-white font-mono">{value}</span>
    </div>
  );
}
