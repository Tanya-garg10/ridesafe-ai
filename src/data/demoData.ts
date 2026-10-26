import type { User, Helmet, Ride, Incident, AlertPreferences } from '../types';

export const demoUser: User = {
  id: 'user-1',
  name: 'Alex Rider',
  email: 'alex.rider@example.com',
  phone: '+91 98765 43210',
  emergencyContact: {
    name: 'Sarah Rider',
    phone: '+91 98765 43211',
    relationship: 'Spouse'
  }
};

export const demoHelmet: Helmet = {
  id: 'helmet-1',
  name: 'RideSafe Pro X1',
  isConnected: false,
  isWorn: false,
  batteryLevel: 85,
  lastCalibrated: new Date('2024-10-20'),
  firmwareVersion: '2.1.0'
};

export const demoAlertPreferences: AlertPreferences = {
  sosEnabled: true,
  emergencyContactAlert: true,
  ambulanceAlert: false,
  countdownSeconds: 15,
  gForceThreshold: 4.0
};

export const demoRides: Ride[] = [
  {
    id: 'ride-1',
    startTime: new Date('2024-10-25T08:30:00'),
    endTime: new Date('2024-10-25T09:15:00'),
    distance: 12.5,
    maxSpeed: 65,
    avgSpeed: 42,
    duration: 2700,
    incidents: [],
    safetyScore: 95
  },
  {
    id: 'ride-2',
    startTime: new Date('2024-10-24T17:45:00'),
    endTime: new Date('2024-10-24T18:30:00'),
    distance: 15.2,
    maxSpeed: 58,
    avgSpeed: 38,
    duration: 2700,
    incidents: [
      {
        id: 'incident-1',
        timestamp: new Date('2024-10-24T18:10:00'),
        severity: 'low',
        type: 'sudden_brake',
        location: { latitude: 28.6139, longitude: 77.2090 },
        gForce: 2.8,
        resolved: true
      }
    ],
    safetyScore: 88
  },
  {
    id: 'ride-3',
    startTime: new Date('2024-10-23T07:00:00'),
    endTime: new Date('2024-10-23T07:45:00'),
    distance: 18.7,
    maxSpeed: 72,
    avgSpeed: 45,
    duration: 2700,
    incidents: [],
    safetyScore: 92
  },
  {
    id: 'ride-4',
    startTime: new Date('2024-10-22T19:00:00'),
    endTime: new Date('2024-10-22T19:30:00'),
    distance: 8.3,
    maxSpeed: 45,
    avgSpeed: 28,
    duration: 1800,
    incidents: [
      {
        id: 'incident-2',
        timestamp: new Date('2024-10-22T19:15:00'),
        severity: 'medium',
        type: 'sharp_turn',
        location: { latitude: 28.6139, longitude: 77.2090 },
        gForce: 3.2,
        resolved: true
      }
    ],
    safetyScore: 85
  },
  {
    id: 'ride-5',
    startTime: new Date('2024-10-21T08:00:00'),
    endTime: new Date('2024-10-21T08:50:00'),
    distance: 20.1,
    maxSpeed: 68,
    avgSpeed: 43,
    duration: 3000,
    incidents: [],
    safetyScore: 94
  }
];

export const demoIncidents: Incident[] = [
  {
    id: 'incident-1',
    timestamp: new Date('2024-10-24T18:10:00'),
    severity: 'low',
    type: 'sudden_brake',
    location: { latitude: 28.6139, longitude: 77.2090 },
    gForce: 2.8,
    resolved: true
  },
  {
    id: 'incident-2',
    timestamp: new Date('2024-10-22T19:15:00'),
    severity: 'medium',
    type: 'sharp_turn',
    location: { latitude: 28.6139, longitude: 77.2090 },
    gForce: 3.2,
    resolved: true
  }
];

// Generate random sensor data for simulation
export function generateSensorReading() {
  const ax = (Math.random() - 0.5) * 2;
  const ay = (Math.random() - 0.5) * 2 + 9.81; // gravity
  const az = (Math.random() - 0.5) * 2;
  const gx = (Math.random() - 0.5) * 0.5;
  const gy = (Math.random() - 0.5) * 0.5;
  const gz = (Math.random() - 0.5) * 0.5;
  
  const gForce = Math.sqrt(ax * ax + ay * ay + az * az) / 9.81;
  
  return {
    timestamp: new Date(),
    acceleration: { x: ax, y: ay, z: az },
    gyroscope: { x: gx, y: gy, z: gz },
    gForce
  };
}

// Generate crash scenario (high g-force)
export function generateCrashReading() {
  const ax = (Math.random() - 0.5) * 30;
  const ay = (Math.random() - 0.5) * 30 + 9.81;
  const az = (Math.random() - 0.5) * 30;
  const gx = (Math.random() - 0.5) * 5;
  const gy = (Math.random() - 0.5) * 5;
  const gz = (Math.random() - 0.5) * 5;
  
  const gForce = Math.sqrt(ax * ax + ay * ay + az * az) / 9.81;
  
  return {
    timestamp: new Date(),
    acceleration: { x: ax, y: ay, z: az },
    gyroscope: { x: gx, y: gy, z: gz },
    gForce
  };
}
