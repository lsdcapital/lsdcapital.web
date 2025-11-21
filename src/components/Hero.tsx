import { useEffect, useState } from 'react';
import { Mail, ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111] text-gray-100 pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-green-500/20 rounded-full mix-blend-screen filter blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-screen filter blur-[128px] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Badge */}
          <div className={`inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-sm font-medium text-gray-300">Investing in the future</span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-5xl md:text-7xl font-bold tracking-tight leading-tight transform transition-all duration-1000 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Heart based leaders <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              solving problems
            </span>
          </h1>

          {/* Description */}
          <p className={`text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            We partner with tech-focused angel and seed startups, investing with purpose, passion, and a commitment to positive impact.
          </p>

          {/* Actions */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a
              href="mailto:hello@lsd.capital"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Start a Conversation
            </a>
            <button
              onClick={() => document.getElementById('investments')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View Portfolio
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
