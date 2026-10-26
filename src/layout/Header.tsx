import { Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  title?: string;
}

export default function Header({ onMenuClick, title }: HeaderProps) {
  return (
    <header
      className="flex items-center justify-between px-6 py-4 bg-secondary border-b border-white/10 lg:hidden"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <button
        onClick={onMenuClick}
        className="p-2 rounded-lg hover:bg-tertiary transition-colors"
        style={{ backgroundColor: 'transparent' }}
      >
        <Menu className="w-6 h-6 text-white" />
      </button>
      
      {title && (
        <h1 className="text-lg font-semibold text-white">{title}</h1>
      )}
      
      <div className="w-10" /> {/* Spacer for balance */}
    </header>
  );
}
