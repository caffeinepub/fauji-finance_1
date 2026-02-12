export const HERO = {
  title: 'FAUJI FINANCE',
  subtitle: 'Bharosa jo saalon se bana hua hai',
  description: '25+ saal ka experience, fauji discipline aur imaandari ke saath',
  tagline: 'Hum dete hain safe committee, saving aur byaj services – simple aur transparent tareeke se.',
  availability: 'All 7 Days Open | 24 Hours Service Available',
  onlineAvailability: 'Ab online bhi available – WhatsApp aur digital support 24/7 milta hai',
};

export const ABOUT = {
  title: 'Hamare Baare Me',
  intro: 'FAUJI FINANCE ek trusted local finance service hai jo pichhle kai saalon se logon ki saving aur financial needs me madad kar rahi hai.',
  founder: 'Is business ko Rajvir Singh Yadav (Ex-Army Man) chalate hain, jinko 25+ saal ka experience hai finance aur committee system me.',
  discipline: 'Fauji hone ke nate, yahan discipline, honesty aur commitment sabse upar rakha jata hai.',
  modernization: 'Ab yeh business online bhi available hai – WhatsApp support, digital records aur 24/7 connectivity ke saath.',
  priorities: [
    'Safe paisa jama',
    'Time par return',
    'Clear hisaab-kitab',
    'Long-term bharosa',
  ],
};

export const TEAM = [
  {
    name: 'Rajvir Singh Yadav',
    role: 'Founder | Ex-Army Man',
    phone: '9758501455',
    experience: '25+ years business experience',
    description: 'Discipline aur imaandari is business ki pehchaan hai.',
  },
  {
    name: 'Shekhar Yadav',
    role: 'Graduate | Operations Head',
    phone: '9084702802',
    experience: '8+ years experience',
    description: 'Daily customer handling aur committee management.',
  },
  {
    name: 'Mohit Yadav',
    role: 'B.Tech CSE Engineer | GATE Qualified',
    phone: '9690361230',
    email: 'mohityadav.23455@gmail.com',
    experience: 'GATE-qualified engineer',
    description: 'Technology, records aur transparency ko handle karte hain. Digital support aur WhatsApp service available.',
  },
];

export const REPRESENTATIVES = [
  {
    name: 'Mohit Yadav',
    role: 'B.Tech CSE Engineer | GATE Qualified',
    phone: '9690361230',
    photoPath: 'assets/mohit.jpeg',
    description: 'Digital support aur WhatsApp service available 24/7',
  },
  {
    name: 'Shekhar Yadav',
    role: 'Graduate | Operations Head',
    phone: '9084702802',
    photoPath: 'assets/shekhar-2.jpeg',
    description: 'Daily customer handling aur committee management',
  },
  {
    name: 'Rajvir Singh Yadav',
    role: 'Founder | Ex-Army Man',
    phone: '9758501455',
    photoPath: 'assets/rajvirsinghyadav-2.jpeg',
    description: '25+ years business experience with discipline',
  },
];

// Keep legacy REPRESENTATIVE for backward compatibility
export const REPRESENTATIVE = REPRESENTATIVES[0];

export const SERVICES = [
  {
    title: 'Committee (Chit Fund) Service',
    icon: 'handshake',
    items: [
      '₹10 Lakh Committee',
      '₹20 Lakh Committee',
      'Monthly / Daily installment option',
      'Safe aur trusted system',
    ],
  },
  {
    title: 'Paisa Jama (Saving Service)',
    icon: 'shield',
    items: [
      'Daily saving option',
      'Monthly saving option',
      'Secure record keeping',
      'Full transparency',
    ],
  },
  {
    title: 'Byaj (Interest) Service',
    icon: 'rupee',
    items: [
      'Simple byaj system',
      'Clear terms & conditions',
      'No hidden charges',
      'Samajhne me easy process',
    ],
  },
];

export const WHY_CHOOSE = [
  '25+ saal ka experience',
  'Ex-Army discipline',
  'Local & trusted service',
  'Simple language & process',
  'Kam padhe-likhe log bhi aasani se samajh sake',
  'Har customer ko personal attention',
];

export const CONTACT = {
  phones: {
    rajvir: '9758501455',
    shekhar: '9084702802',
    mohit: '9690361230',
  },
  whatsapp: '9690361230',
  email: 'mohityadav.23455@gmail.com',
  address: {
    street: 'Canal Road, Ganjdundwara',
    city: 'Kasganj',
    state: 'Uttar Pradesh',
    full: 'Canal Road, Ganjdundwara, Kasganj, Uttar Pradesh',
  },
  timing: {
    days: 'All 7 Days Open',
    hours: '24 Hours Service Available',
  },
};

// New content for profit examples section
export const PROFIT_EXAMPLES = {
  title: 'Real Savings Examples',
  subtitle: 'Asli Bachat',
  description: 'Dekho kaise hamare customers ne apne sapne pure kiye',
  examples: [
    {
      title: 'Committee Success',
      amount: '₹10 Lakh',
      duration: '20 months',
      saving: '₹50,000 saved',
      description: 'Monthly ₹50,000 jama karke ₹10 lakh ka committee benefit liya',
      icon: '🎯',
      highlight: 'Best for big purchases',
    },
    {
      title: 'Daily Saving Plan',
      amount: '₹1.5 Lakh',
      duration: '12 months',
      saving: '₹18,000 interest',
      description: 'Daily ₹400 jama karke saal me ₹1.5 lakh + interest',
      icon: '💰',
      highlight: 'Perfect for regular income',
    },
    {
      title: 'Interest Investment',
      amount: '₹5 Lakh',
      duration: '6 months',
      saving: '₹45,000 returns',
      description: '₹5 lakh invest karke 6 mahine me ₹45,000 ka return',
      icon: '📈',
      highlight: 'High returns guaranteed',
    },
  ],
};

// New content for testimonials/stats section
export const CUSTOMER_STATS = {
  title: 'Our Track Record',
  subtitle: 'Hamara Record',
  description: 'Numbers that speak for themselves',
  stats: [
    {
      number: '25+',
      label: 'Years Experience',
      sublabel: 'Saal ka Anubhav',
      icon: '⭐',
    },
    {
      number: '500+',
      label: 'Happy Customers',
      sublabel: 'Khush Grahak',
      icon: '👥',
    },
    {
      number: '₹50Cr+',
      label: 'Money Managed',
      sublabel: 'Paisa Sambhala',
      icon: '💼',
    },
    {
      number: '100%',
      label: 'Trust & Safety',
      sublabel: 'Vishwas aur Suraksha',
      icon: '🛡️',
    },
  ],
  testimonials: [
    {
      name: 'Ramesh Kumar',
      location: 'Kasganj',
      text: 'Fauji Finance ne meri beti ki shaadi me bahut madad ki. Committee se time par paisa mila.',
      rating: 5,
    },
    {
      name: 'Sunita Devi',
      location: 'Ganjdundwara',
      text: 'Daily saving scheme bahut acchi hai. Chote chote paise jama karke bada amount ban gaya.',
      rating: 5,
    },
    {
      name: 'Vijay Singh',
      location: 'Kasganj',
      text: '25 saal se inke saath kaam kar raha hoon. Kabhi koi problem nahi hui. Full trust hai.',
      rating: 5,
    },
  ],
};

// New content for ambassador section
export const AMBASSADORS = {
  title: 'Trusted by Thousands',
  subtitle: 'Hazaron ka Bharosa',
  description: 'Join our family of satisfied customers who trust us with their financial goals',
  bannerImage: 'assets/generated/celebrity-banner.dim_1920x800.png',
  portraits: [
    {
      image: 'assets/generated/celebrity-ambassador-1.dim_1200x1200.png',
      alt: 'Satisfied customer testimonial',
    },
    {
      image: 'assets/generated/celebrity-ambassador-2.dim_1200x1200.png',
      alt: 'Happy customer success story',
    },
  ],
  cta: {
    text: 'Start Your Journey Today',
    subtext: 'Aaj hi shuru karein apni financial planning',
  },
};
