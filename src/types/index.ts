export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  emergencyContact: EmergencyContact;
}

export interface EmergencyContact {
  name: string;
  phone: string;
  relationship: string;
}

export interface Helmet {
  id: string;
  name: string;
  isConnected: boolean;
  isWorn: boolean;
  batteryLevel: number;
  lastCalibrated: Date;
  firmwareVersion: string;
}

export interface SensorReading {
  timestamp: Date;
  acceleration: {
    x: number;
    y: number;
    z: number;
  };
  gyroscope: {
    x: number;
    y: number;
    z: number;
  };
  gForce: number;
}

export interface Ride {
  id: string;
  startTime: Date;
  endTime?: Date;
  distance: number;
  maxSpeed: number;
  avgSpeed: number;
  duration: number;
  incidents: Incident[];
  safetyScore: number;
}

export interface Incident {
  id: string;
  timestamp: Date;
  severity: 'low' | 'medium' | 'high' | 'critical';
  type: 'sudden_brake' | 'sharp_turn' | 'collision' | 'fall';
  location: {
    latitude: number;
    longitude: number;
  };
  gForce: number;
  resolved: boolean;
}

export interface AlertPreferences {
  sosEnabled: boolean;
  emergencyContactAlert: boolean;
  ambulanceAlert: boolean;
  countdownSeconds: number;
  gForceThreshold: number;
}

export interface AppSettings {
  user: User;
  helmet: Helmet;
  alertPreferences: AlertPreferences;
}
