export interface PilgrimageSpecial {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  description: string;
  keyPoints: string[];
  ctaText: string;
  notice: string;
}

export const pilgrimagesData: PilgrimageSpecial[] = [
  {
    id: 'tirupati-srivani-darshan',
    title: 'Tirupati Srivani VIP Break Darshan Tickets',
    subtitle: 'Assistance & Bangalore Travel Packages',
    badge: 'Divine Pilgrimage Special',
    image: '/images/temple-pilgrimage.jpg',
    description: 'Experience a seamless spiritual journey to the sacred sanctum of Sri Venkateswara Swamy in Tirumala. SSAP Travels provides dedicated guidance on Tirupati Srivani VIP Break Darshan ticket enquiries, coupled with comfortable door-to-door luxury transportation from Bangalore.',
    keyPoints: [
      'Assistance with Tirupati Srivani VIP Break Darshan ticket enquiries',
      'Doorstep pickup and drop anywhere across Bangalore',
      'Comfortable AC luxury car rental options (Innova Crysta, Sedan, Tempo Traveller)',
      'Experienced chauffeurs familiar with Tirumala travel guidelines',
      'Timely coordination for smooth travel schedules'
    ],
    ctaText: 'Enquire for Availability',
    notice: 'Information & travel coordination assistance only. All temple darshan permissions remain subject to Tirumala Tirupati Devasthanams (TTD) guidelines.'
  },
  {
    id: 'murugan-temple-tour',
    title: 'Arupadaiveedu Murugan Temple Special Tour',
    subtitle: 'Sacred Pilgrimage to the Six Holy Abodes',
    badge: 'Signature Spiritual Tour',
    image: '/images/murugan-temple.jpg',
    description: 'Embark on the revered Arupadaiveedu Murugan Temple Special Tour visiting the six sacred abodes of Lord Murugan. SSAP Travels offers dedicated pilgrimage travel assistance, custom route coordination from Bangalore, and comfortable vehicle options for devotees and families.',
    keyPoints: [
      'Comprehensive travel coordination for the sacred 6 abodes of Lord Murugan',
      'Spiritual route: Thirupparamkunram, Thiruchendur, Palani, Swamimalai, Thiruthani & Pazhamudircholai',
      'Comfortable vehicles suited for multi-day South Indian temple tours',
      'Courteous chauffeurs with knowledge of temple town routes and stopovers',
      'Customizable travel schedules for families and senior citizen groups'
    ],
    ctaText: 'Enquire for Tour Details',
    notice: 'Please enquire for customized tour schedules, transport arrangements, and vehicle availability tailored to your dates.'
  }
];
