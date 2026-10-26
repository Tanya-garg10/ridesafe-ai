import { useState, useEffect, useRef } from 'react';
import {
  Play,
  Square,
  Gauge,
  Activity,
  MapPin,
  Clock,
  Zap,
  AlertTriangle
} from 'lucide-react';
import { generateSensorReading, generateCrashReading } from '../data/demoData';

export default function Monitoring() {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [sensorData, setSensorData] = useState(generateSensorReading());
  const [rideStats, setRideStats] = useState({
    speed: 0,
    distance: 0,
    duration: 0,
    maxGForce: 0
  });
  const [crashDetected, setCrashDetected] = useState(false);
  const [countdown, setCountdown] = useState(15);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const rideIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isMonitoring && !crashDetected) {
      // Update sensor data every 100ms
      intervalRef.current = setInterval(() => {
        setSensorData(generateSensorReading());
      }, 100);

      // Update ride stats every second
      rideIntervalRef.current = setInterval(() => {
        setRideStats(prev => ({
          speed: Math.min(80, prev.speed + Math.random() * 5),
          distance: prev.distance + (prev.speed / 3600),
          duration: prev.duration + 1,
          maxGForce: Math.max(prev.maxGForce, sensorData.gForce)
        }));
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (rideIntervalRef.current) clearInterval(rideIntervalRef.current);
    };
  }, [isMonitoring, crashDetected, sensorData.gForce]);

  const startMonitoring = () => {
    setIsMonitoring(true);
    setRideStats({ speed: 0, distance: 0, duration: 0, maxGForce: 0 });
  };

  const stopMonitoring = () => {
    setIsMonitoring(false);
    setSensorData(generateSensorReading());
    setRideStats({ speed: 0, distance: 0, duration: 0, maxGForce: 0 });
  };

  const simulateCrash = () => {
    setCrashDetected(true);
    setSensorData(generateCrashReading());
    setCountdown(15);

    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const cancelAlert = () => {
    setCrashDetected(false);
    setCountdown(15);
  };

  if (crashDetected) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="card border-2 border-danger animate-pulse-glow-danger">
            <AlertTriangle className="w-32 h-32 text-danger mx-auto mb-6 animate-float" />
            <h1 className="text-5xl font-bold text-danger mb-4">CRASH DETECTED</h1>
            <p className="text-xl text-secondary mb-8">
              Emergency alert will be sent in:
            </p>

            <div className="text-9xl font-bold text-danger mb-8 animate-pulse">
              {countdown}
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={cancelAlert}
                className="btn btn-success btn-lg"
              >
                I'M OK - CANCEL
              </button>
              <button
                className="btn btn-danger btn-lg"
              >
                SEND SOS NOW
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
        <h1 className="text-3xl font-bold text-white mb-2">Live Ride Monitoring</h1>
        <p className="text-secondary">Real-time sensor data and ride statistics</p>
      </div>

      {/* Demo Controls */}
      <div className="card mb-8 border-2 border-accent/20">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="w-5 h-5 text-accent" />
          <h3 className="text-lg font-semibold text-white">Demo Device Simulator</h3>
        </div>
        <p className="text-sm text-secondary mb-4">
          This is a simulated environment. Sensor data is generated for demonstration purposes.
        </p>
        <div className="flex gap-4">
          <button
            onClick={simulateCrash}
            className="btn btn-danger"
            disabled={!isMonitoring}
          >
            Simulate Crash
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4 mb-8">
        {!isMonitoring ? (
          <button
            onClick={startMonitoring}
            className="btn btn-primary btn-lg flex-1 hover-lift"
          >
            <Play className="w-5 h-5" />
            Start Monitoring
          </button>
        ) : (
          <button
            onClick={stopMonitoring}
            className="btn btn-danger btn-lg flex-1 hover-lift"
          >
            <Square className="w-5 h-5" />
            Stop Monitoring
          </button>
        )}
      </div>

      {/* Sensor Data Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <SensorCard
          icon={Gauge}
          label="Speed"
          value={`${rideStats.speed.toFixed(1)} km/h`}
          color="accent"
          isMonitoring={isMonitoring}
        />
        <SensorCard
          icon={Activity}
          label="G-Force"
          value={sensorData.gForce.toFixed(2)}
          color={sensorData.gForce > 3 ? 'danger' : 'success'}
          isMonitoring={isMonitoring}
        />
        <SensorCard
          icon={MapPin}
          label="Distance"
          value={`${rideStats.distance.toFixed(2)} km`}
          color="info"
          isMonitoring={isMonitoring}
        />
        <SensorCard
          icon={Clock}
          label="Duration"
          value={`${Math.floor(rideStats.duration / 60)}:${(rideStats.duration % 60).toString().padStart(2, '0')}`}
          color="secondary"
          isMonitoring={isMonitoring}
        />
      </div>

      {/* Detailed Sensor Readings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-6">Accelerometer</h2>
          <div className="space-y-4">
            <SensorBar label="X-Axis" value={sensorData.acceleration.x} max={20} color="accent" />
            <SensorBar label="Y-Axis" value={sensorData.acceleration.y} max={20} color="success" />
            <SensorBar label="Z-Axis" value={sensorData.acceleration.z} max={20} color="warning" />
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-6">Gyroscope</h2>
          <div className="space-y-4">
            <SensorBar label="X-Axis" value={sensorData.gyroscope.x} max={5} color="accent" />
            <SensorBar label="Y-Axis" value={sensorData.gyroscope.y} max={5} color="success" />
            <SensorBar label="Z-Axis" value={sensorData.gyroscope.z} max={5} color="warning" />
          </div>
        </div>
      </div>

      {/* Ride Stats */}
      {isMonitoring && (
        <div className="card mt-8">
          <h2 className="text-xl font-semibold text-white mb-6">Ride Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-secondary mb-1">Max Speed</p>
              <p className="text-2xl font-bold text-white data-value">{rideStats.speed.toFixed(1)} km/h</p>
            </div>
            <div>
              <p className="text-sm text-secondary mb-1">Max G-Force</p>
              <p className="text-2xl font-bold text-white data-value">{rideStats.maxGForce.toFixed(2)} G</p>
            </div>
            <div>
              <p className="text-sm text-secondary mb-1">Total Distance</p>
              <p className="text-2xl font-bold text-white data-value">{rideStats.distance.toFixed(2)} km</p>
            </div>
            <div>
              <p className="text-sm text-secondary mb-1">Duration</p>
              <p className="text-2xl font-bold text-white data-value">
                {Math.floor(rideStats.duration / 60)}:{(rideStats.duration % 60).toString().padStart(2, '0')}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SensorCard({
  icon: Icon,
  label,
  value,
  color,
  isMonitoring
}: {
  icon: any;
  label: string;
  value: string;
  color: string;
  isMonitoring: boolean;
}) {
  const colorClasses = {
    accent: 'bg-gradient-to-br from-accent/20 to-mint/10 text-accent',
    success: 'bg-gradient-to-br from-success/20 to-green-500/10 text-success',
    danger: 'bg-gradient-to-br from-danger/20 to-red-500/10 text-danger',
    warning: 'bg-gradient-to-br from-warning/20 to-amber-500/10 text-warning',
    info: 'bg-gradient-to-br from-accent/20 to-cyan-500/10 text-accent',
    secondary: 'bg-gradient-to-br from-secondary/20 to-gray-500/10 text-secondary'
  };

  return (
    <div className={`card group hover-lift ${isMonitoring ? 'animate-pulse-glow' : ''}`}>
      <div className={`w-14 h-14 rounded-xl ${colorClasses[color as keyof typeof colorClasses]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${isMonitoring ? 'animate-pulse' : ''}`}>
        <Icon className="w-7 h-7" />
      </div>
      <p className="text-sm text-secondary mb-2 font-medium">{label}</p>
      <p className="text-3xl font-bold text-white data-value">{value}</p>
    </div>
  );
}

function SensorBar({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  const percentage = Math.min(100, Math.abs(value) / max * 100);
  const colorClasses = {
    accent: 'bg-accent',
    success: 'bg-success',
    warning: 'bg-warning',
    danger: 'bg-danger'
  };

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-secondary">{label}</span>
        <span className="text-sm text-white font-mono">{value.toFixed(2)}</span>
      </div>
      <div className="h-2 bg-tertiary rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div
          className={`h-full ${colorClasses[color as keyof typeof colorClasses]} transition-all duration-100`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
