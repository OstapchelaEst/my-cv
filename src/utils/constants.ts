export const ROUTES = {
  presale: '/presale',
  landing: '/',
  claim: '/presale/claim',
  referral: '/presale/referral',
  about: '/presale/about',
}

export const ANCHORS = {
  home: 'home',
  sim: 'sim',
  ['how-to']: 'how-to',
  interface: 'interface',
  features: 'features',
  roadmap: 'roadmap',
  faq: 'faq',
}

export const NAVIGATION_LINKS_LANDING = [
  {
    label: 'Home',
    href: '/',
    to: ANCHORS.home,
  },
  {
    label: 'SIM-NFT',
    href: '/',
    to: ANCHORS.sim,
  },
  {
    label: 'How-To',
    href: '/',
    to: ANCHORS['how-to'],
  },
  {
    label: 'Features',
    href: '/',
    to: ANCHORS.features,
  },
  {
    label: 'Interface',
    href: '/',
    to: ANCHORS.interface,
  },
  {
    label: 'Roadmap',
    href: '/',
    to: ANCHORS.roadmap,
  },
  {
    label: 'FAQ',
    href: '/',
    to: ANCHORS.faq,
  },
]

export const NAVIGATION_LINKS_PRESALE = [
  {
    label: 'Presale',
    href: ROUTES.presale,
  },
  {
    label: 'Claim center',
    href: ROUTES.claim,
  },
  {
    label: 'Referral',
    href: ROUTES.referral,
  },
  {
    label: 'About',
    href: ROUTES.about,
  },
]

export const MEDIAS = [
  {
    img: '/img/icon/x.svg',
    href: '/',
  },
  {
    img: '/img/icon/telegram.svg',
    href: '/',
  },
  {
    img: '/img/icon/discord.svg',
    href: '/',
  },
]
