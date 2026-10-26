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
  Wifi,
  Lock,
  Zap
} from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-primary relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mint/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navbar */}
      <nav className="container mx-auto px-6 py-6 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-mint flex items-center justify-center shadow-lg animate-pulse-glow">
              <Activity className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-white">RideSafe AI</span>
              <p className="text-xs text-secondary">Smart Helmet. Safer Rides. A Brighter Tomorrow.</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/dashboard"
              className="text-secondary hover:text-accent transition-colors font-medium"
            >
              Features
            </Link>
            <Link
              to="/dashboard"
              className="text-secondary hover:text-accent transition-colors font-medium"
            >
              How It Works
            </Link>
            <Link
              to="/dashboard"
              className="text-secondary hover:text-accent transition-colors font-medium"
            >
              Safety
            </Link>
            <Link
              to="/login"
              className="text-secondary hover:text-white transition-colors font-medium"
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
      <section className="container mx-auto px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-mint/5 pointer-events-none" />
        <div className="max-w-4xl relative animate-fade-in-up">
          <div className="badge-premium mb-6 inline-block animate-gradient">
            AI-Powered Safety Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Every Ride Deserves a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-mint animate-gradient"> Safer Journey.</span>
          </h1>
          <p className="text-xl text-secondary mb-8 leading-relaxed max-w-2xl">
            Advanced AI-assisted crash detection, connected helmet monitoring, and intelligent emergency workflows.
            Transform your smartphone into a comprehensive safety system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/login" className="btn btn-primary btn-lg hover-lift">
              Explore Dashboard
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/dashboard" className="btn btn-secondary btn-lg hover-lift">
              See How It Works
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-accent mb-1">99.9%</p>
              <p className="text-sm text-secondary">Detection Accuracy</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent mb-1">&lt;2s</p>
              <p className="text-sm text-secondary">Alert Response</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent mb-1">24/7</p>
              <p className="text-sm text-secondary">Monitoring</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent mb-1">Zero</p>
              <p className="text-sm text-secondary">False Alarms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Intelligent Safety Features
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Powered by advanced AI and real-time sensor fusion
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Shield}
            title="AI Crash Detection"
            description="Advanced algorithms analyze accelerometer and gyroscope data to detect crashes in real-time with high accuracy."
          />
          <FeatureCard
            icon={Cpu}
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

      {/* How It Works */}
      <section className="container mx-auto px-6 py-20 bg-secondary rounded-3xl relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-mint/5 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Connect Your Helmet"
              description="Pair your smart helmet with the RideSafe AI app via Bluetooth for seamless integration."
              icon={Wifi}
            />
            <StepCard
              number="2"
              title="Start Your Ride"
              description="Begin monitoring with one tap. The app tracks your ride in real-time with sensor data."
              icon={Zap}
            />
            <StepCard
              number="3"
              title="Stay Protected"
              description="If a crash is detected, emergency alerts are sent automatically to your contacts."
              icon={Lock}
            />
          </div>
        </div>
      </section>

      {/* Safety Benefits */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Why RideSafe AI?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <BenefitCard
            icon={CheckCircle}
            title="Proactive Safety"
            description="Detect incidents before they become emergencies with real-time monitoring and early warning systems."
          />
          <BenefitCard
            icon={CheckCircle}
            title="Peace of Mind"
            description="Ride with confidence knowing that help will be alerted automatically if you can't respond."
          />
          <BenefitCard
            icon={CheckCircle}
            title="Data-Driven Insights"
            description="Improve your riding habits with detailed analytics and personalized safety recommendations."
          />
          <BenefitCard
            icon={CheckCircle}
            title="Emergency Ready"
            description="Pre-configured emergency contacts and automatic location sharing for rapid response."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 relative">
        <div className="card text-center max-w-2xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-mint/5 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Ride Safer?
            </h2>
            <p className="text-xl text-secondary mb-8">
              Join thousands of riders who trust RideSafe AI for their safety on the road.
            </p>
            <Link to="/signup" className="btn btn-primary btn-lg hover-lift">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white">RideSafe AI</span>
          </div>
          <p className="text-secondary text-sm">
            © 2024 RideSafe AI. Smart Helmet. Safer Rides. A Brighter Tomorrow.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="card group hover-lift">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-mint/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-accent" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-secondary text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description, icon: Icon }: { number: string; title: string; description: string; icon: any }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
        <Icon className="w-8 h-8 text-accent" />
      </div>
      <div className="text-xs font-bold text-accent mb-2">STEP {number}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-secondary text-sm">{description}</p>
    </div>
  );
}

function BenefitCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="flex gap-4 p-4 rounded-lg bg-tertiary hover:bg-card transition-colors" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-success" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-secondary text-sm">{description}</p>
      </div>
    </div>
  );
}
