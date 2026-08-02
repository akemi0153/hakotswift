import { Armchair, Trash2, Home } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Furniture Moving',
    description: 'Safely transport your heavy and bulky furniture across Metro Manila with our professional moving team.',
    icon: Armchair,
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    startingPrice: '₱1,500'
  },
  {
    title: 'Appliance Disposal',
    description: 'Responsible and eco-friendly disposal of old refrigerators, washing machines, and other large appliances.',
    icon: Trash2,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    startingPrice: '₱1,200'
  },
  {
    title: 'Residential Cleanouts',
    description: 'Comprehensive cleanout services for homes, apartments, or condos. We handle the heavy lifting and disposal.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    startingPrice: '₱3,000'
  }
];

export default function Services() {
  return (
    <section id="services">
      <h3 className="text-sm font-bold uppercase tracking-wider mb-4 px-2 text-zinc-500">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl border border-zinc-200 p-3 hover:border-amber-500 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="h-40 rounded-2xl overflow-hidden mb-4 relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-xl text-amber-600 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    Available Today
                  </div>
                </div>
                <div className="px-3 pb-3">
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="px-3 pb-2 pt-2 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Starts at</span>
                <span className="text-lg font-bold text-amber-600">{service.startingPrice}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
