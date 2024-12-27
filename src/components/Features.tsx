import React from 'react';
import { Activity, AlertTriangle, BarChart3, Wifi } from 'lucide-react';

const features = [
  {
    icon: <Activity className="h-6 w-6 text-blue-400" />,
    title: "Real-time Monitoring",
    description: "Continuous monitoring of gas levels, pressure, and temperature using ESP8266 and MQ2 sensors"
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-red-400" />,
    title: "Instant Alerts",
    description: "Immediate notifications through LED indicators and piezo buzzer when gas leaks are detected"
  },
  {
    icon: <Wifi className="h-6 w-6 text-green-400" />,
    title: "IoT Integration",
    description: "Remote monitoring and control through Arduino Uno and ESP8266 connectivity"
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-purple-400" />,
    title: "Predictive Analytics",
    description: "Advanced data analytics for maintenance prediction and system optimization"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Comprehensive Safety Features
          </h2>
          <p className="text-xl text-gray-400">
            Advanced technology for maximum protection and peace of mind
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="gradient-card p-6 rounded-lg hover:shadow-lg transition-all">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}