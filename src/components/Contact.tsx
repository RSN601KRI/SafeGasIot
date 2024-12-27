import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-400">
            Be part of the revolution in gas safety technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="gradient-card p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300">Name</label>
                <input 
                  type="text" 
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Email</label>
                <input 
                  type="email" 
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  rows={4} 
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-blue-400 mt-1" />
              <div>
                <h3 className="font-semibold text-white">Email Us</h3>
                <p className="text-gray-400">contact@saftgasiot.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-blue-400 mt-1" />
              <div>
                <h3 className="font-semibold text-white">Call Us</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-400 mt-1" />
              <div>
                <h3 className="font-semibold text-white">Visit Us</h3>
                <p className="text-gray-400">123 Safety Street, Tech Valley, CA 94025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}