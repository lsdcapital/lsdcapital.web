
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-200 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="text-2xl font-bold">LSD Capital</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Investing with heart, leading with purpose. Building the future of technology and innovation across Africa and beyond.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end space-y-6">
            <div className="flex items-center space-x-8 text-sm font-medium text-gray-400">
              <span>South Africa</span>
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              <span>Seychelles</span>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} LSD Capital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
