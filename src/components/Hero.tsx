import React from 'react';
import { Shield, Activity, Wifi } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="flex space-x-4">
              {[Shield, Activity, Wifi].map((Icon, index) => (
                <div key={index} className="p-3 glass-effect rounded-xl">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>
              ))}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Smart Gas
              <span className="block gradient-text">Safety System</span>
            </h1>
            
            <p className="text-xl text-gray-300">
              Advanced IoT-powered detection with real-time monitoring and instant alerts
            </p>
            
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all">
                Explore Technology
              </button>
              <button className="glass-effect text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-all">
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative animate-float">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800"
                alt="IoT Device"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -right-4 -bottom-4 glass-effect p-4 rounded-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white">System Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}