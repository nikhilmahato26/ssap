export interface Vehicle {
  id: string;
  name: string;
  category: 'Luxury MPV' | 'Executive Sedan' | 'Group Travel' | 'Luxury Van';
  seating: string;
  luggage: string;
  features: string[];
  image: string;
  badge?: string;
  description: string;
}

/**
 * SSAP Travels Vehicle Fleet Architecture
 * Flexible fleet data structure ready for updates and dynamic extensions.
 */
export const vehicles: Vehicle[] = [
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    category: 'Luxury MPV',
    seating: '6+1 / 7+1 Seater',
    luggage: '4 Large Bags',
    features: ['Plush Captain Seats', 'Dual Climate AC', 'Superior Highway Comfort', 'Spacious Legroom'],
    image: '/images/innova-crysta.jpg',
    badge: 'Most Popular',
    description: 'The gold standard for executive travel in Bangalore and long-distance outstation comfort with uncompromised luxury.'
  },
  {
    id: 'executive-sedan',
    name: 'Premium Executive Sedan',
    category: 'Executive Sedan',
    seating: '4+1 Seater',
    luggage: '2-3 Medium Bags',
    features: ['Professional Chauffeur', 'Full Climate Control', 'Airport Punctuality', 'Smooth & Quiet Ride'],
    image: '/images/dzire.jpg',
    badge: 'City & Airport',
    description: 'Ideal for Bangalore city business meetings, seamless Kempegowda Airport transfers, and day-to-day corporate commutes.'
  },
  {
    id: 'family-mpv-ertiga',
    name: 'Premium Family MPV',
    category: 'Luxury MPV',
    seating: '6+1 Seater',
    luggage: '3 Bags',
    features: ['Flexible 3-Row Seating', 'Rear AC Vents', 'Economic & Comfortable', 'Impeccable Hygiene'],
    image: '/images/ertiga.jpg',
    badge: 'Family Choice',
    description: 'Spacious and reliable multi-seater for comfortable family trips, temple darshans, and weekend getaways from Bangalore.'
  },
  {
    id: 'force-urbania',
    name: 'Force Urbania Luxury Van',
    category: 'Luxury Van',
    seating: '10 / 13 / 17 Seater',
    luggage: 'Dedicated Boot Space',
    features: ['European Design Cabin', 'Individual Reclining Seats', 'Personal Air Vents & USB', 'Ultra-Smooth Suspension'],
    image: '/images/urbania.jpg',
    badge: 'VIP Executive',
    description: 'Next-generation luxury passenger vehicle offering first-class comfort for VIP delegations, family weddings, and pilgrimage yatras.'
  },
  {
    id: 'tempo-traveller',
    name: 'Luxury Tempo Traveller',
    category: 'Group Travel',
    seating: '12 / 16 / 20 Seater',
    luggage: 'Large Carrier & Boot',
    features: ['High-Roof Standing Cabin', 'Comfort Reclining Seats', 'Audio System', 'Experienced Chauffeur'],
    image: '/images/tempo-traveller.jpg',
    badge: 'Pilgrimage Special',
    description: 'The preferred choice for extended group tours, spiritual pilgrimages, and South India sightseeing journeys with maximum space.'
  }
];
