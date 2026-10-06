export interface ContactInfo {
  primaryPhone: string;
  primaryPhoneRaw: string;
  secondaryPhone: string;
  secondaryPhoneRaw: string;
  email: string;
  location: string;
  brandName: string;
  brandFullName: string;
  tagline: string;
  statement: string;
  supportingTagline: string;
}

export const BRAND_CONTACT: ContactInfo = {
  primaryPhone: '+91 9620474391',
  primaryPhoneRaw: '919620474391',
  secondaryPhone: '+91 9886607607',
  secondaryPhoneRaw: '919886607607',
  email: 'ssaptravels@zohomail.in',
  location: 'Bangalore, Karnataka, India',
  brandName: 'SSAP TRAVELS',
  brandFullName: 'SSAP TRAVELS BANGALORE',
  tagline: 'YOUR COMPLETE TRAVEL PARTNER',
  statement: 'Travel with Comfort, Travel with Confidence, Travel with SSAP Travels.',
  supportingTagline: 'Book Anywhere... Travel Everywhere...'
};

export interface BookingEnquiry {
  name: string;
  phone: string;
  service: string;
  travelDate?: string;
  passengers?: string;
  destination?: string;
  pickupLocation?: string;
  notes?: string;
}
