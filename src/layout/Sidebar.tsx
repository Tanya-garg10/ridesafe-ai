import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Activity,
  Cpu,
  AlertTriangle,
  History,
  BarChart3,
  Settings,
  LogOut,
  Home
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Live Monitoring', href: '/monitoring', icon: Activity },
  { name: 'Device Management', href: '/device', icon: Cpu },
  { name: 'Emergency Center', href: '/emergency', icon: AlertTriangle },
  { name: 'Ride History', href: '/history', icon: History },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-full w-64 bg-secondary z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-0
        `}
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-white/10">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform animate-pulse-glow">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">RideSafe AI</h1>
                <p className="text-xs text-secondary">Smart Helmet. Safer Rides.</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <Link
              to="/"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-secondary hover:bg-tertiary hover:text-white transition-all duration-200 hover-lift"
              onClick={onClose}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>

            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                    ${isActive
                      ? 'bg-accent/10 text-accent border border-accent/20 shadow-lg'
                      : 'text-secondary hover:bg-tertiary hover:text-white hover-lift'
                    }
                  `}
                  onClick={onClose}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-white/10">
            <button
              className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-secondary hover:bg-tertiary hover:text-danger transition-all duration-200 hover-lift"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
