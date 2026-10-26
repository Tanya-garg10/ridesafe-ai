import { Menu, Activity } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  title?: string;
}

export default function Header({ onMenuClick, title }: HeaderProps) {
  return (
    <header
      className="flex items-center justify-between px-6 py-4 bg-secondary border-b border-white/10 lg:hidden backdrop-blur-lg"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <button
        onClick={onMenuClick}
        className="p-2 rounded-lg hover:bg-tertiary transition-all duration-200 hover-lift"
        style={{ backgroundColor: 'transparent' }}
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {title && (
        <h1 className="text-lg font-semibold text-white">{title}</h1>
      )}

      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center animate-pulse-glow">
        <Activity className="w-5 h-5 text-white" />
      </div>
    </header>
  );
}
