import React, { useState, useEffect } from 'react';
import { Heart, Mail, ExternalLink, ArrowUp } from 'lucide-react';

const investments = [
  { name: 'Prime Health Holdings', url: 'https://primehealthholdings.com/', logo: 'https://primehealthholdings.com/cdn/shop/files/build_muscle_1.png?v=1691137144&width=600', bg: 'white' },
  { name: 'Dope', url: 'https://drinkdope.com', logo: 'https://drinkdope.com/wp-content/uploads/2022/02/cropped-FAV.jpg', bg: 'white' },
  { name: 'Active Aligners', url: 'https://activealigners.com', logo: 'https://www.activealigners.com/wp-content/themes/yootheme/cache/d8/ACTIVE-ALIGNERS-1-d85080d4.png', bg: 'white' },
  { name: 'SME Metrics', url: 'https://smemetrics.com', logo: 'https://www.smemetrics.com/wp-content/uploads/2016/07/smemetrics-wide-360x75.png', bg: 'white' },
  { name: 'Altify (BitFund)', url: 'https://bitfund.co.za/', logo: 'https://cdn.prod.website-files.com/651feb57a8f9e7f1f40df0e0/651feb57a8f9e7f1f40df494_Altify_logo.svg', bg: 'white' },
  { name: 'Inv.es', url: 'https://inv.es/', logo: 'https://inv.es/images/inves.svg', bg: 'white' },
  { name: 'FlexyForce', url: 'https://flexyforce.com/', logo: 'https://flexyforce.com/wp-content/uploads/2019/07/Flexyforce-Logo-Navy.png', bg: 'white' },
  { name: 'Wer1 Tribe', url: 'https://wer1tribe.io/', logo: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400', bg: 'white' },
  { name: 'Noldor', url: 'https://noldor.co.za/', logo: 'https://www.noldor.co.za/wp-content/uploads/2019/03/Full-noldorlogo.svg', bg: 'white' },
  { name: 'Amiti Cloud', url: 'https://amiti.cloud/', logo: 'https://amiti.cloud/wp-content/uploads/2020/08/amiti-plex-Logo-Landscape-option2.png', bg: 'white' },
  { name: 'Classic Wealth', url: 'https://classicwealth.co.za/', logo: 'https://classicwealth.co.za/wp-content/uploads/2024/09/Logo-01.png', bg: 'white' },
  { name: 'Hedgehog Digital', url: 'https://hedgehog.digital/', logo: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400', bg: 'slate-800' },
  { name: 'Frsh Minds', url: 'https://frshminds.com', logo: 'https://frshminds.com/wp-content/uploads/2021/12/frshminds-logo-186-40-logo.png', bg: 'white' },
  { name: 'The Green Side', url: 'https://thegreenside.co.za/', logo: 'https://thegreenside.co.za/wp-content/uploads/2020/08/the-greenside-logo.png', bg: 'white' },
  { name: 'The Tryst', url: 'https://thetryst.co.za/', logo: 'https://thetryst.co.za/wp-content/uploads/2023/04/Logo-website-1-300x127.png', bg: 'white' },
  { name: 'Exclusible', url: 'https://exclusible.com/', logo: 'https://cdn.prod.website-files.com/682358e8a7e087aa01c50baf/682359869c1e2d9972027091_EXCLUSIBLE-LOGOTYPE.png', bg: 'white' },
  { name: 'DIDX', url: 'https://didx.co.za/', logo: 'https://didx.co.za/assets/images/logo/logo_white_2x.png', bg: 'slate-800' },
  { name: 'LSD Open', url: 'http://lsdopen.io/', logo: 'https://lsdopen.io/wp-content/uploads/2024/05/Group-16.svg', bg: 'white' }
];

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="relative bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                LSD Capital
              </span>
            </div>
            <a
              href="mailto:hello@lsd.capital"
              className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span className="font-medium">Get in Touch</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                    Heart
                  </span>
                  <span className="text-white"> based leaders passionate about solving</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  We typically work with people involved in tech focused angel and seed startups, 
                  investing with purpose and passion.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:hello@lsd.capital"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium"
                >
                  <Mail className="w-5 h-5" />
                  <span>Start a Conversation</span>
                </a>
                <button
                  onClick={() => document.getElementById('investments')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-500 text-green-400 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 font-medium"
                >
                  View Our Portfolio
                </button>
              </div>
            </div>
            
            <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-full p-20 shadow-2xl">
                  <Heart className="w-32 h-32 text-white mx-auto" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investments Section */}
      <section id="investments" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-4">
              Our Investments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to support innovative companies that are making a positive impact in their industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {investments.map((investment, index) => (
              <a
                key={investment.name}
                href={investment.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative aspect-square rounded-2xl border-2 border-gray-200 hover:border-green-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${
                  investment.bg === 'white' ? 'bg-white' : 
                  investment.bg === 'slate-800' ? 'bg-slate-800' : 'bg-black'
                } overflow-hidden`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-green-600/0 group-hover:from-green-400/10 group-hover:to-green-600/10 transition-all duration-300"></div>
                
                <div className="relative h-full flex items-center justify-center p-6">
                  <img
                    src={investment.logo}
                    alt={investment.name}
                    className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-green-500" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium text-center">{investment.name}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Heart Led Investments</h3>
              <div className="text-4xl">💚</div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-green-100">
              <span>South Africa</span>
              <span className="hidden sm:block">•</span>
              <span>Seychelles</span>
            </div>
            
            <div className="pt-8 border-t border-green-400/30">
              <p className="text-green-100">
                Copyright © 2024 <span className="font-semibold">LSD Capital</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default App;