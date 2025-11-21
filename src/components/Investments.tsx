
import { ArrowUpRight } from 'lucide-react';

const investments = [
  { name: 'Prime Health Holdings', url: 'https://primehealthholdings.com/', logo: 'https://primehealthholdings.com/cdn/shop/files/build_muscle_1.png?v=1691137144&width=600', bg: 'white' },
  { name: 'Dope', url: 'https://drinkdope.com', logo: 'https://drinkdope.com/wp-content/uploads/2022/02/cropped-FAV.jpg', bg: 'white' },
  { name: 'Active Aligners', url: 'https://activealigners.com', logo: 'https://www.activealigners.com/wp-content/themes/yootheme/cache/d8/ACTIVE-ALIGNERS-1-d85080d4.png', bg: 'white' },
  { name: 'SME Metrics', url: 'https://smemetrics.com', logo: 'https://www.smemetrics.com/wp-content/uploads/2016/07/smemetrics-wide-360x75.png', bg: 'white' },
  { name: 'Altify (BitFund)', url: 'https://www.altify.app/', logo: 'https://cdn.prod.website-files.com/651feb57a8f9e7f1f40df0e0/651feb57a8f9e7f1f40df494_Altify_logo.svg', bg: 'white' },
  { name: 'FlexyForce', url: 'https://flexyforce.com/', logo: 'https://flexyforce.com/wp-content/uploads/2019/07/Flexyforce-Logo-Navy.png', bg: 'white' },
  { name: 'WeR1', url: 'https://www.wer1.ai/', logo: '/wer1-logo.svg', bg: 'white' },
  { name: 'Amiti Cloud', url: 'https://amiti.cloud/', logo: 'https://amiti.cloud/wp-content/uploads/2020/08/amiti-plex-Logo-Landscape-option2.png', bg: 'white' },
  { name: 'Classic Wealth', url: 'https://classicwealth.co.za/', logo: 'https://classicwealth.co.za/wp-content/uploads/2024/09/Logo-01.png', bg: 'white' },
  { name: 'Frsh Minds', url: 'https://frshminds.com', logo: 'https://frshminds.com/wp-content/uploads/2021/12/frshminds-logo-186-40-logo.png', bg: 'white' },
  { name: 'The Green Side', url: 'https://thegreenside.co.za/', logo: 'https://thegreenside.co.za/wp-content/uploads/2020/08/the-greenside-logo.png', bg: 'white' },
  { name: 'Exclusible', url: 'https://exclusible.com/', logo: 'https://cdn.prod.website-files.com/682358e8a7e087aa01c50baf/682359869c1e2d9972027091_EXCLUSIBLE-LOGOTYPE.png', bg: 'white' },
  { name: 'Inv.es', url: 'https://inv.es/', logo: 'https://inv.es/images/inves.svg', bg: 'slate-800' },
  { name: 'Noldor', url: 'https://noldor.co.za/', logo: 'https://www.noldor.co.za/wp-content/uploads/2019/03/Full-noldorlogo.svg', bg: 'slate-800' },
  { name: 'The Tryst', url: 'https://thetryst.co.za/', logo: 'https://thetryst.co.za/wp-content/uploads/2023/04/Logo-website-1-300x127.png', bg: 'slate-800' },
  { name: 'DIDX', url: 'https://didx.co.za/', logo: 'https://didx.co.za/assets/images/logo/logo_white_2x.png', bg: 'slate-800' },
  { name: 'LSD Open', url: 'http://lsdopen.io/', logo: 'https://lsdopen.io/wp-content/uploads/2024/05/Group-16.svg', bg: 'slate-800' }
];

export function Investments() {
  return (
    <section id="investments" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-100 mb-6">
              Our Investments
            </h2>
            <p className="text-xl text-gray-400">
              We're proud to support innovative companies that are making a positive impact in their industries.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-gray-800 ml-12 mb-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {investments.map((investment) => (
            <a
              key={investment.name}
              href={investment.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative aspect-[4/3] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                investment.bg === 'white' ? 'bg-[#f8f9fa] border border-gray-200' : 'bg-[#1a1a1a] border border-gray-800'
              }`}
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-10"></div>
              
              {/* Logo Container */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <img
                  src={investment.logo}
                  alt={investment.name}
                  className="w-full h-full object-contain transition-all duration-500 transform group-hover:scale-110"
                />
              </div>

              {/* Top Right Icon */}
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <div className="bg-white rounded-full p-2 shadow-lg">
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </div>
              </div>
              
              {/* Bottom Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-900 text-center truncate">
                  {investment.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
