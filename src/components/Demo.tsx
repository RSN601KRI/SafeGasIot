import React, { useState } from 'react';

export default function Demo() {
  const [media, setMedia] = useState<string | null>("/src/images/GasLeakageVD4.mp4"); // Replace with your image or video path
  const [mediaType, setMediaType] = useState<"image" | "video">("video"); // Set to "video" for videos

  return (
    <section id="demo" className="py-20 bg-dark-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-gray-400">
            Watch how our system detects and responds to gas leaks in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Media Display Section */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            {mediaType === "image" ? (
              <img
                src={media}
                alt="Uploaded Media"
                className="w-full h-[400px] object-cover"
              />
            ) : (
              <video
                controls
                src={media}
                className="w-full h-[400px] object-cover"
              />
            )}
          </div>

          {/* Hardware Components Section */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Hardware Components
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>• ESP8266 microcontroller board for wireless connectivity</li>
              <li>• MQ2 sensor for precise gas detection</li>
              <li>• LCD display with I2C model for real-time readings</li>
              <li>• Dual LED system for visual alerts</li>
              <li>• Arduino Uno for central processing</li>
              <li>• 5V Relay for automated control</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
