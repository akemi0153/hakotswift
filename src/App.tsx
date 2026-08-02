/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import QuoteCalculator from './components/QuoteCalculator';
import Booking from './components/Booking';
import Footer from './components/Footer';
import ServiceMap from './components/ServiceMap';
import FAQ from './components/FAQ';
import WhatsAppButton from './components/WhatsAppButton';
import TopLoadingBar from './components/TopLoadingBar';
import { motion } from 'motion/react';
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-amber-500 selection:text-zinc-900 flex flex-col">
      <TopLoadingBar />
      <Header />
      
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 md:row-span-2"
          >
            <Hero />
          </motion.div>

          {/* Instant Quote Calculator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4 md:row-span-3"
          >
            <QuoteCalculator />
          </motion.div>

          {/* Quick Links / Promo Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-8 md:row-span-1 bg-amber-500 rounded-3xl p-6 flex flex-col justify-center border border-amber-600 relative overflow-hidden group"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Residential Cleanout" 
                className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-500 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/80 to-transparent"></div>
            </div>
            <div className="relative z-10">
              <h4 className="font-bold text-zinc-900 mb-2">Residential Cleanout Special</h4>
              <p className="text-sm text-zinc-900 leading-tight opacity-90 font-medium">
                Get 20% off for whole house decluttering service this weekend.
              </p>
              <button className="mt-4 w-fit bg-zinc-900 text-white px-4 py-2 text-xs font-bold rounded-full hover:bg-zinc-800 transition-colors">
                Claim Offer
              </button>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-12 mt-4"
          >
            <Services />
          </motion.div>

          {/* Map and Booking Side-by-side */}
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="md:col-span-7 lg:col-span-8"
            >
              <ServiceMap />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-5 lg:col-span-4"
            >
              <Booking />
            </motion.div>
          </div>

          {/* FAQ */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-12 mt-4"
          >
             <FAQ />
          </motion.div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton />
      <Analytics />
    </div>
  );
}
