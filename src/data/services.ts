export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  details: string;
  iconName: string;
  tag?: string;
  ctaText: string;
  image?: string;
  category: 'rental' | 'ticketing' | 'pilgrimage' | 'holiday' | 'passport';
}

export const servicesData: ServiceItem[] = [
  {
    id: 'luxury-car-rental',
    number: '01',
    title: 'Luxury Car Rental',
    shortDesc: 'Luxury car rental services in Bangalore.',
    details: 'Travel comfortably around Bangalore and for outstation journeys with our premium vehicle options, professional chauffeurs, and punctual service.',
    iconName: 'Car',
    tag: 'Bangalore Fleet',
    ctaText: 'Enquire for Car Rental',
    image: '/images/innova-crysta.jpg',
    category: 'rental'
  },
  {
    id: 'train-ticket-booking',
    number: '02',
    title: 'Train Ticket Booking',
    shortDesc: 'Train ticket booking assistance.',
    details: 'Hassle-free train ticket reservations across Indian Railways, tatkal assistance, confirmation tracking, and planned travel guidance.',
    iconName: 'Train',
    tag: 'All-India Rail',
    ctaText: 'Enquire for Train Tickets',
    image: '/images/train-travel.jpg',
    category: 'ticketing'
  },
  {
    id: 'bus-ticket-booking',
    number: '03',
    title: 'Bus Ticket Booking',
    shortDesc: 'Bus ticket booking assistance.',
    details: 'Seamless inter-city bus booking assistance for premium sleeper, semi-sleeper, AC, and luxury multi-axle coaches connecting major South Indian cities.',
    iconName: 'Bus',
    tag: 'Interstate Routes',
    ctaText: 'Enquire for Bus Tickets',
    image: '/images/luxury-bus.png',
    category: 'ticketing'
  },
  {
    id: 'ksrtc-bus-booking',
    number: '04',
    title: 'KSRTC Bus Booking',
    shortDesc: 'KSRTC bus booking assistance.',
    details: 'Dedicated booking assistance for Karnataka State Road Transport Corporation services including Airavat Club Class, EV Power Plus, and Rajahamsa coaches.',
    iconName: 'Navigation',
    tag: 'Booking Assistance',
    ctaText: 'Enquire for KSRTC Booking',
    image: '/images/luxury-bus.png',
    category: 'ticketing'
  },
  {
    id: 'flight-ticket-booking',
    number: '05',
    title: 'Flight Ticket Booking',
    shortDesc: 'Flight ticket booking assistance.',
    details: 'Domestic and international flight ticketing assistance, schedule optimization, competitive fare enquiries, and round-the-clock booking support.',
    iconName: 'Plane',
    tag: 'Domestic & Global',
    ctaText: 'Enquire for Flight Tickets',
    image: '/images/flight-booking.jpg',
    category: 'ticketing'
  },
  {
    id: 'holiday-package-tours',
    number: '06',
    title: 'Holiday & Package Tours',
    shortDesc: 'Holiday and package tour booking assistance.',
    details: 'Curated holiday experiences across popular hill stations, coastal retreats, heritage circuits, and family holiday packages with customized transport.',
    iconName: 'Compass',
    tag: 'Custom Itineraries',
    ctaText: 'Enquire for Packages',
    image: '/images/holiday-tours.jpg',
    category: 'holiday'
  },
  {
    id: 'murugan-temple-tour',
    number: '07',
    title: 'Arupadaiveedu Murugan Temple Special Tour',
    shortDesc: 'Special pilgrimage travel service.',
    details: 'A dedicated spiritual pilgrimage tour covering the revered six holy abodes of Lord Murugan with comfortable transport and coordinated yatra arrangements.',
    iconName: 'Sparkles',
    tag: 'Spiritual Yatra',
    ctaText: 'Enquire for Tour Details',
    image: '/images/murugan-temple.jpg',
    category: 'pilgrimage'
  },
  {
    id: 'tirupati-srivani-darshan',
    number: '08',
    title: 'Tirupati Srivani VIP Break Darshan Tickets',
    shortDesc: 'Assistance with Tirupati Srivani VIP Break Darshan ticket enquiries.',
    details: 'Specialized assistance and guidance for Lord Venkateswara Tirupati Srivani VIP Break Darshan enquiries, travel coordination, and car rental from Bangalore.',
    iconName: 'Crown',
    tag: 'VIP Break Darshan',
    ctaText: 'Enquire for Availability',
    image: '/images/temple-pilgrimage.jpg',
    category: 'pilgrimage'
  },
  {
    id: 'passport-services',
    number: '09',
    title: 'Passport Assistance (New & Renewal)',
    shortDesc: 'We help applying new passport and renewal.',
    details: 'Complete end-to-end guidance for fresh passport applications, passport renewals, tatkal quota appointments, document verification, and Passport Seva Kendra slot booking in Bangalore.',
    iconName: 'FileCheck',
    tag: 'New & Renewal',
    ctaText: 'Enquire for Passport Help',
    image: '/images/passport-service.jpg',
    category: 'passport'
  }
];

export const quickServiceBarItems = [
  {
    id: 'luxury-car-rental',
    title: 'Luxury Car Rental',
    desc: 'Premium vehicle travel in Bangalore.',
    iconName: 'Car',
    badge: 'Chauffeur Driven'
  },
  {
    id: 'train-ticket-booking',
    title: 'Train Tickets',
    desc: 'Train ticket booking assistance.',
    iconName: 'Train',
    badge: 'Tatkal & Regular'
  },
  {
    id: 'bus-ticket-booking',
    title: 'Bus Tickets',
    desc: 'Bus and KSRTC booking assistance.',
    iconName: 'Bus',
    badge: 'KSRTC & Private'
  },
  {
    id: 'flight-ticket-booking',
    title: 'Flight Tickets',
    desc: 'Flight ticket booking assistance.',
    iconName: 'Plane',
    badge: 'Domestic & Global'
  }
];

export const brandPromises = [
  { label: 'SAFE', desc: 'Verified chauffeurs, maintained vehicles, and secure travel protocols.', icon: 'ShieldCheck' },
  { label: 'RELIABLE', desc: 'Punctual pickups, dependable itineraries, and transparent communication.', icon: 'Clock' },
  { label: 'AFFORDABLE', desc: 'Competitive, honest pricing with zero hidden surcharges.', icon: 'Tag' },
  { label: 'FAST', desc: 'Instant confirmations and rapid enquiry turnaround times.', icon: 'Zap' },
  { label: 'EASY', desc: 'Seamless booking across phone, WhatsApp, or email.', icon: 'Smile' },
  { label: 'TRUSTED', desc: 'Bangalore’s dedicated complete travel partner.', icon: 'Award' }
];

export const operationalBadges = [
  { title: 'EASY BOOKING', subtitle: 'Simple multi-channel booking' },
  { title: '100% SECURE', subtitle: 'Protected travel arrangements' },
  { title: '24/7 SERVICE', subtitle: 'Round-the-clock coordination' },
  { title: 'CUSTOMER SUPPORT', subtitle: 'Dedicated travel executives' }
];
