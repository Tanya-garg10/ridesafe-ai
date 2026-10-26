# RideSafe AI

**Smart Rides. Safer Tomorrows.**

A premium, production-style motorcycle safety platform featuring connected helmet concepts, rider monitoring, AI-assisted crash detection, emergency response workflows, and ride analytics.

![RideSafe AI](https://img.shields.io/badge/RideSafe-AI%20Platform-cyan?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-8-purple?style=for-the-badge)

## 🎯 Product Vision

RideSafe AI transforms every smartphone into an intelligent safety device for motorcycle riders. Using advanced sensor fusion, real-time monitoring, and smart helmet integration, it provides comprehensive crash detection and emergency response capabilities—no expensive hardware required.

## ✨ Key Features

### Core Safety Features
- **AI-Powered Crash Detection**: 3-stage detection algorithm using accelerometer and gyroscope data
- **Smart Helmet Integration**: Bluetooth connectivity for enhanced monitoring and battery status
- **Emergency Response**: Automatic SOS alerts with GPS location to emergency contacts
- **Live Ride Monitoring**: Real-time tracking of speed, acceleration, and ride metrics
- **Ride Analytics**: Comprehensive dashboard with safety scores and improvement insights

### Platform Features
- **Landing Page**: Modern marketing page with feature showcase
- **Authentication**: Login and signup with validation
- **Dashboard**: Overview of safety metrics, helmet status, and recent activity
- **Device Management**: Helmet connection, wear status, and calibration controls
- **Emergency Center**: SOS triggering, incident history, and emergency contacts
- **Ride History**: Searchable and filterable trip records
- **Analytics**: Interactive charts and weekly safety summaries
- **Settings**: Emergency contacts, alert preferences, and profile management

## 🎨 Design System

### Color Palette
- **Primary Background**: Midnight Navy (#0a0e1a)
- **Secondary Background**: Dark Slate (#111827)
- **Accent Color**: Cyan/Teal (#06b6d4)
- **Emergency Color**: Red (#ef4444)
- **Success Color**: Green (#10b981)
- **Warning Color**: Amber (#f59e0b)

### Typography
- Modern system fonts (San Francisco, Segoe UI, Roboto)
- Clear hierarchy with bold headings
- High contrast for readability

### Components
- Rounded cards with subtle shadows
- Gradient buttons with hover effects
- Consistent spacing and layout
- Responsive sidebar navigation
- Mobile-first design approach

## 🏗️ Architecture

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 8
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Date Utilities**: date-fns
- **Styling**: Custom CSS with CSS variables

### Project Structure
```
ridesafe-ai/
├── src/
│   ├── components/      # Reusable UI components
│   ├── layout/          # Layout components (Sidebar, Header)
│   ├── pages/           # Page components
│   ├── lib/             # Utility functions
│   ├── types/           # TypeScript type definitions
│   ├── hooks/           # Custom React hooks
│   ├── data/            # Demo data and seed data
│   ├── App.tsx          # Main app component with routing
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and design system
├── public/              # Static assets
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

### Data Layer
The application uses a clean demo data layer with realistic seed data:
- User profiles and emergency contacts
- Helmet device information
- Ride history with metrics
- Incident records
- Alert preferences

This data is stored in memory for the demo and can be easily replaced with API calls in production.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ridesafe-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📱 Pages & Features

### Landing Page (`/`)
- Hero section with call-to-action
- Feature grid showcasing capabilities
- How-it-works section
- Safety benefits
- Footer with branding

### Authentication
- **Login** (`/login`): Email/password authentication with validation
- **Signup** (`/signup`): Full registration with name, email, phone, and password

### Dashboard (`/dashboard`)
- Safety score overview
- Total rides, distance, and incidents
- Helmet status (connection, wear status, battery)
- Recent rides with safety scores
- Recent incidents with severity

### Live Monitoring (`/monitoring`)
- Real-time sensor data display
- Speed, g-force, distance, and duration
- Accelerometer and gyroscope readings
- **Demo Device Simulator**: Simulate crash detection
- Crash detection countdown with cancel option
- Ride statistics during monitoring

### Device Management (`/device`)
- Helmet connection status
- Wear status toggle
- Battery level display
- Calibration controls
- Device information panel
- Demo simulator notice

### Emergency Center (`/emergency`)
- Emergency SOS trigger button
- 15-second countdown with cancel option
- Emergency contacts list
- Incident history with severity
- Location preview

### Ride History (`/history`)
- Searchable ride list
- Filter by incidents
- Ride details (distance, duration, speed, safety score)
- Incident indicators

### Analytics (`/analytics`)
- Weekly distance chart
- Safety score trend
- Ride patterns analysis
- Safety insights and recommendations
- Summary statistics

### Settings (`/settings`)
- Profile management
- Emergency contact configuration
- Alert preferences (SOS, contacts, ambulance)
- Countdown duration
- G-force threshold
- Device settings

## 🧪 Demo Mode

The application includes a comprehensive demo mode for testing and demonstrations:

### Device Simulator
- Simulated helmet connection and disconnection
- Wear status toggle
- Battery level simulation
- Calibration simulation

### Crash Detection Simulator
- "Simulate Crash" button in monitoring page
- Generates high g-force readings
- Triggers emergency countdown
- Tests alert workflow without actual danger

### Demo Data
- Pre-populated ride history
- Sample incidents with various severities
- Realistic user profile and emergency contacts
- Weekly analytics data

### Important Notes
- **All data is simulated** - No actual hardware is connected
- **No real emergency alerts** - SOS workflow is for demo only
- **Location is mocked** - GPS coordinates are static demo values
- **In production**, these would integrate with real hardware and services

## 🔒 Safety & Integrity

### Demo Limitations
This is a **proof-of-concept demo**, not a safety-critical system:

- ✅ Simulated data clearly labeled
- ✅ No claims about contacting actual emergency services
- ✅ No claims about validated crash prediction
- ✅ No claims about real hardware connectivity
- ✅ SOS treated as demo workflow
- ✅ No fabricated performance statistics

### Production Requirements
For a real deployment, you would need:
- Validated ML models for crash detection
- Integration with emergency service APIs
- Real smart helmet hardware
- Backend server for data persistence
- User authentication and authorization
- Privacy and security compliance
- Regulatory approvals

## 🎯 Crash Detection Algorithm

### G-Force Calculation
```
g_force = sqrt(ax² + ay² + az²) / 9.81
```

### Three-Stage Detection

**Stage 1: Impact Detection**
- Continuously monitors accelerometer at ~60 Hz
- Triggers when g_force exceeds threshold (default: 4.0 G)
- Filters out normal riding vibrations

**Stage 2: Stillness Verification**
- After impact, monitors for 3 seconds
- Verifies g_force stays between 0.8-1.2 G (normal gravity)
- Uses rolling window of recent samples
- Cancels detection if movement continues

**Stage 3: Alert Countdown**
- Starts 15-second countdown after stillness confirmed
- Shows large timer with beeps and vibration
- Allows rider to cancel with "I'M OK" button
- On expiry, sends emergency alert

### Configuration
Thresholds are configurable in Settings:
- G-Force Threshold: 2.0 - 10.0 G (default: 4.0)
- Countdown Duration: 5 - 60 seconds (default: 15)

## 🚧 Future Work

### Planned Enhancements
- ML model integration for improved crash detection
- Real smart helmet hardware integration
- Backend API and database
- User authentication and authorization
- Real-time WebSocket updates
- Push notifications
- Multi-contact emergency alerts
- Ambulance service integration
- Ride route mapping
- Social features and community
- Premium subscription tiers

### Hardware Integration
- Bluetooth Low Energy (BLE) connectivity
- Custom smart helmet firmware
- IoT sensor arrays
- Edge computing on helmet
- Offline mode with local storage

## 📄 License

MIT License - See LICENSE file for details.

## 🤝 Contributing

This is a demo project for the "Build With AI: Basics" hackathon. For production use, significant security, safety, and regulatory compliance work would be required.

## 📞 Support

For questions about this demo project, please open an issue in the repository.

---

**Built with ❤️ for safer rides**

*Note: This is a demonstration project. Do not rely on it for actual safety-critical applications without proper validation, testing, and regulatory approvals.*
