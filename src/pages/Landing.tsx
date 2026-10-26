import { Link } from 'react-router-dom';
import {
  Shield,
  Activity,
  AlertCircle,
  ArrowRight,
  CheckCircle,
  BarChart3,
  MapPin,
  Cpu,
  Lock,
  Zap,
  Smartphone
} from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-primary" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Navbar */}
      <nav className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">RideSafe AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="#features"
              className="text-secondary hover:text-white transition-colors text-sm font-medium"
            >
              Features
            </Link>
            <Link
              to="#how-it-works"
              className="text-secondary hover:text-white transition-colors text-sm font-medium"
            >
              How It Works
            </Link>
            <Link
              to="#technology"
              className="text-secondary hover:text-white transition-colors text-sm font-medium"
            >
              Technology
            </Link>
            <Link
              to="/login"
              className="text-secondary hover:text-white transition-colors text-sm font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="btn btn-primary"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-8 py-24 md:py-32">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8">
            CONNECTED ROAD SAFETY
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Every Ride Deserves a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary"> Safer Journey.</span>
          </h1>
          <p className="text-xl text-secondary mb-10 leading-relaxed max-w-2xl">
            Smarter helmet monitoring, AI-assisted incident detection and connected safety workflows — designed around every journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/login" className="btn btn-primary btn-lg">
              Explore Dashboard
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="#how-it-works" className="btn btn-secondary btn-lg">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="container mx-auto px-8 py-24">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Intelligent Safety Features
          </h2>
          <p className="text-secondary text-lg max-w-2xl">
            Powered by advanced AI and real-time sensor fusion
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={Shield}
            title="AI Crash Detection"
            description="Advanced algorithms analyze accelerometer and gyroscope data to detect crashes in real-time with high accuracy."
          />
          <FeatureCard
            icon={Smartphone}
            title="Smart Helmet Integration"
            description="Connect your smart helmet for enhanced monitoring, battery status, and firmware updates."
          />
          <FeatureCard
            icon={AlertCircle}
            title="Emergency Response"
            description="Automatic SOS alerts sent to emergency contacts with your precise GPS location."
          />
          <FeatureCard
            icon={Activity}
            title="Live Ride Monitoring"
            description="Real-time tracking of speed, acceleration, and ride metrics with instant incident detection."
          />
          <FeatureCard
            icon={BarChart3}
            title="Ride Analytics"
            description="Comprehensive analytics dashboard with safety scores, ride history, and improvement insights."
          />
          <FeatureCard
            icon={MapPin}
            title="Location Tracking"
            description="Precise GPS tracking for emergency services and ride route visualization."
          />
        </div>
      </section>

      {/* How It Works - Interactive Demo */}
      <section id="how-it-works" className="container mx-auto px-8 py-24">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            See How It Works
          </h2>
          <p className="text-secondary text-lg max-w-2xl">
            Monitor your helmet status and ride safety in real-time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Helmet Connected State */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">HELMET CONNECTED</h3>
              <span className="badge badge-success">Active</span>
            </div>
            <div className="bg-tertiary rounded-lg p-6 mb-4" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-secondary">Status</p>
                  <p className="text-white font-medium">Worn & Connected</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-secondary mb-1">Battery</p>
                  <p className="text-white font-medium">87%</p>
                </div>
                <div>
                  <p className="text-xs text-secondary mb-1">Signal</p>
                  <p className="text-white font-medium">Strong</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-success text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>All sensors operational</span>
            </div>
          </div>

          {/* Helmet Disconnected State */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">HELMET DISCONNECTED</h3>
              <span className="badge badge-danger">Inactive</span>
            </div>
            <div className="bg-tertiary rounded-lg p-6 mb-4" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-danger/10 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-danger" />
                </div>
                <div>
                  <p className="text-sm text-secondary">Status</p>
                  <p className="text-white font-medium">Not Detected</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-secondary mb-1">Battery</p>
                  <p className="text-white font-medium">--</p>
                </div>
                <div>
                  <p className="text-xs text-secondary mb-1">Signal</p>
                  <p className="text-white font-medium">None</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-danger text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>No helmet detected</span>
            </div>
          </div>
        </div>

        {/* Three Step Process */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-accent" />
            </div>
            <div className="text-xs font-bold text-accent mb-2">STEP 1</div>
            <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>
            <p className="text-sm text-secondary">Pair your smart helmet via Bluetooth</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Activity className="w-8 h-8 text-accent" />
            </div>
            <div className="text-xs font-bold text-accent mb-2">STEP 2</div>
            <h3 className="text-lg font-semibold text-white mb-2">Monitor</h3>
            <p className="text-sm text-secondary">Real-time sensor data and ride tracking</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <div className="text-xs font-bold text-accent mb-2">STEP 3</div>
            <h3 className="text-lg font-semibold text-white mb-2">Protect</h3>
            <p className="text-sm text-secondary">Automatic emergency alerts on crash detection</p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="container mx-auto px-8 py-24">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Core Technology
          </h2>
          <p className="text-secondary text-lg max-w-2xl">
            Advanced sensor fusion and AI-powered detection
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
            <p className="text-white font-medium mb-1">Detection Accuracy</p>
            <p className="text-sm text-secondary">AI-powered crash detection algorithms</p>
          </div>
          <div className="card">
            <div className="text-4xl font-bold text-accent mb-2">&lt;2s</div>
            <p className="text-white font-medium mb-1">Alert Response</p>
            <p className="text-sm text-secondary">Automatic emergency notification</p>
          </div>
          <div className="card">
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <p className="text-white font-medium mb-1">Monitoring</p>
            <p className="text-sm text-secondary">Continuous sensor data analysis</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-8 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Ride Safer?
          </h2>
          <p className="text-xl text-secondary mb-8">
            Join thousands of riders who trust RideSafe AI for their safety on the road.
          </p>
          <Link to="/signup" className="btn btn-primary btn-lg">
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-8 py-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white">RideSafe AI</span>
          </div>
          <p className="text-secondary text-sm">
            © 2024 RideSafe AI. Smart Helmet. Safer Rides.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="card">
      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-secondary text-sm leading-relaxed">{description}</p>
    </div>
  );
}
