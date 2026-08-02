import { Truck, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-zinc-900 sticky top-0 z-50 border-b border-zinc-200 h-16 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center">
              <Truck className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight uppercase">Hakot<span className="text-amber-600">Swift</span></span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-zinc-600">
            <a href="#services" className="hover:text-zinc-900 transition-colors">Services</a>
            <a href="#quote" className="hover:text-zinc-900 transition-colors">Pricing</a>
            <a href="#book" className="hover:text-zinc-900 transition-colors">Book Now</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-zinc-600 text-sm font-medium">
              <Phone className="h-4 w-4 text-amber-500" />
              <span>+63 2 8123 4567</span>
            </div>
            <a href="#book" className="bg-zinc-900 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-zinc-800 transition-colors">
              Login
            </a>
          </div>

          <button 
            className="md:hidden text-zinc-600 hover:text-zinc-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-zinc-200 px-4 py-4 space-y-4 shadow-lg">
          <a href="#services" className="block text-zinc-600 hover:text-zinc-900 font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#quote" className="block text-zinc-600 hover:text-zinc-900 font-medium" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <a href="#book" className="block text-zinc-600 hover:text-zinc-900 font-medium" onClick={() => setIsMenuOpen(false)}>Book Now</a>
          <div className="pt-4 border-t border-zinc-100 flex flex-col gap-4">
             <div className="flex items-center gap-2 text-zinc-600">
              <Phone className="h-5 w-5 text-amber-500" />
              <span className="font-semibold">+63 2 8123 4567</span>
            </div>
            <a href="#book" className="bg-zinc-900 text-white px-4 py-2 rounded-full font-bold text-center hover:bg-zinc-800" onClick={() => setIsMenuOpen(false)}>
              Login
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
