import { Link } from 'react-router-dom';
import { 
  Shield, 
  Activity, 
  Smartphone, 
  AlertCircle, 
  ArrowRight,
  CheckCircle,
  BarChart3,
  MapPin
} from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-primary" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Navbar */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">RideSafe AI</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-secondary hover:text-white transition-colors"
            >
              Login
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
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Smart Rides.
            <span className="text-accent"> Safer Tomorrows.</span>
          </h1>
          <p className="text-xl text-secondary mb-8 leading-relaxed">
            Advanced AI-powered crash detection and emergency response for motorcycle riders. 
            Stay protected with real-time monitoring, smart helmet integration, and instant alerts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signup" className="btn btn-primary btn-lg">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/dashboard" className="btn btn-secondary btn-lg">
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Intelligent Safety Features
        </h2>
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

      {/* How It Works */}
      <section className="container mx-auto px-6 py-20 bg-secondary rounded-3xl" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <StepCard
            number="1"
            title="Connect Your Helmet"
            description="Pair your smart helmet with the RideSafe AI app via Bluetooth for seamless integration."
          />
          <StepCard
            number="2"
            title="Start Your Ride"
            description="Begin monitoring with one tap. The app tracks your ride in real-time with sensor data."
          />
          <StepCard
            number="3"
            title="Stay Protected"
            description="If a crash is detected, emergency alerts are sent automatically to your contacts."
          />
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
      <section className="container mx-auto px-6 py-20">
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
      <footer className="container mx-auto px-6 py-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white">RideSafe AI</span>
          </div>
          <p className="text-secondary text-sm">
            © 2024 RideSafe AI. Smart Rides. Safer Tomorrows.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="card hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-secondary text-sm">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl font-bold text-accent">{number}</span>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-secondary text-sm">{description}</p>
    </div>
  );
}

function BenefitCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="flex gap-4">
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
