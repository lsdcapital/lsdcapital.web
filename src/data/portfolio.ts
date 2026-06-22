export type PortfolioCompany = {
  name: string
  url: string
  logo: string
  bg: 'white' | 'slate-800'
  clickable?: boolean
}

export const portfolio: PortfolioCompany[] = [
  { name: 'Prime Health Holdings', url: 'https://primehealthholdings.com/', logo: 'https://primehealthholdings.com/cdn/shop/files/build_muscle_1.png?v=1691137144&width=600', bg: 'white' },
  { name: 'Dope', url: 'https://drinkdope.com', logo: '/dope-logo.svg', bg: 'white', clickable: false },
  { name: 'Active Aligners', url: 'https://activealigners.com', logo: 'https://www.activealigners.com/wp-content/themes/yootheme/cache/d8/ACTIVE-ALIGNERS-1-d85080d4.png', bg: 'white' },
  { name: 'SME Metrics', url: 'https://smemetrics.com', logo: 'https://www.smemetrics.com/wp-content/uploads/2016/07/smemetrics-wide-360x75.png', bg: 'white' },
  { name: 'Altify (BitFund)', url: 'https://www.altify.app/', logo: 'https://cdn.prod.website-files.com/651feb57a8f9e7f1f40df0e0/651feb57a8f9e7f1f40df494_Altify_logo.svg', bg: 'white' },
  { name: 'FlexyForce', url: 'https://flexyforce.com/', logo: 'https://flexyforce.com/wp-content/uploads/2019/07/Flexyforce-Logo-Navy.png', bg: 'white' },
  { name: 'WeR1', url: 'https://www.wer1.ai/', logo: '/wer1-logo.svg', bg: 'white' },
  { name: 'Serova', url: 'https://serova.ai/', logo: 'https://serova.ai/serova-logo-black.png', bg: 'white' },
  { name: 'Amiti Cloud', url: 'https://amiti.cloud/', logo: 'https://amiti.cloud/wp-content/uploads/2020/08/amiti-plex-Logo-Landscape-option2.png', bg: 'white' },
  { name: 'Classic Wealth', url: 'https://classicwealth.co.za/', logo: 'https://classicwealth.co.za/wp-content/uploads/2024/09/Logo-01.png', bg: 'white' },
  { name: 'Frsh Minds', url: 'https://frshminds.com', logo: '/frsh-minds-logo.svg', bg: 'white', clickable: false },
  { name: 'The Green Side', url: 'https://thegreenside.co.za/', logo: 'https://thegreenside.co.za/wp-content/uploads/2020/08/the-greenside-logo.png', bg: 'white' },
  { name: 'Exclusible', url: 'https://exclusible.com/', logo: 'https://cdn.prod.website-files.com/682358e8a7e087aa01c50baf/682359869c1e2d9972027091_EXCLUSIBLE-LOGOTYPE.png', bg: 'white' },
  { name: 'Inv.es', url: 'https://inv.es/', logo: '/inves-logo.svg', bg: 'white' },
  { name: 'Noldor', url: 'https://noldor.co.za/', logo: 'https://www.noldor.co.za/wp-content/uploads/2019/03/Full-noldorlogo.svg', bg: 'slate-800' },
  { name: 'The Tryst', url: 'https://thetryst.co.za/', logo: 'https://thetryst.co.za/wp-content/uploads/2023/04/Logo-website-1-300x127.png', bg: 'slate-800' },
  { name: 'DIDX', url: 'https://didx.co.za/', logo: '/didx-logo.svg', bg: 'white' },
  { name: 'LSD Open', url: 'http://lsdopen.io/', logo: 'https://lsdopen.io/wp-content/uploads/2024/05/Group-16.svg', bg: 'slate-800' },
]
