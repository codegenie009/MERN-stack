export default [
  {
    title: 'Company',
    links: [
      { children: 'Home', to: '/' },
      { children: 'Sign In', to: '/' },
      { children: 'Sign Up', to: '/' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { children: 'Help Center', to: '/' },
      { children: 'Premium', to: '/' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { children: 'Privacy Policy', to: '/' },
      { children: 'Terms of Service', to: '/' }
    ]
  },
  {
    title: 'Contact',
    links: [
      { children: '88 King Street' },
      { children: 'San Francisco, CA 94105' },
      { children: '+1 (650) 282-3388', href: 'tel:+16502823388' },
      { children: 'help@rembrance.com', href: 'mailto:help@rembrance.com' }
    ]
  }
];

export const SIMPLE_FOOTER = [
  { children: 'Privacy', to: '/' },
  { children: 'Contact', to: '/' },
  { children: 'Terms', to: '/' },
  { children: 'Help', to: '/' }
];
