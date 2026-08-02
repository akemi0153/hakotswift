import { Truck, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white uppercase">Hakot<span className="text-amber-500">Swift</span></span>
            </div>
            <p className="mb-4 max-w-sm text-sm">
              The most reliable and fastest hauling service exclusively serving Metro Manila. Insured loads and professional teams.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Furniture Moving</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Appliance Disposal</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Residential Cleanouts</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Business Deliveries</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>+63 2 8123 4567</li>
              <li>hello@hakotswift.com</li>
              <li>Makati City, Metro Manila</li>
              <li>Mon - Sun, 8:00 AM - 9:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-900 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center text-zinc-500">
          <p>&copy; {new Date().getFullYear()} HakotSwift Services. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
