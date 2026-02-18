import { Home, Gavel, Scroll, Landmark, Pickaxe, Briefcase, Scale } from 'lucide-react';
import { ServiceItem, LocationItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our History', href: '#about' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'Expert guidance in Residential & Commercial Purchase/Sale and Mortgage Agreements.',
    icon: Home,
  },
  {
    id: 'mining-law',
    title: 'Mining Law',
    description: 'Specialized counsel for Mining Corporations, Lease Agreements, and Claim Searches.',
    icon: Pickaxe,
  },
  {
    id: 'business-law',
    title: 'Business Law',
    description: 'Strategic advice for Incorporations, Shareholder Agreements, and Franchising.',
    icon: Briefcase,
  },
  {
    id: 'estates-wills',
    title: 'Estates & Wills',
    description: 'Comprehensive planning including Family Trusts, Wills, and Estate Litigation.',
    icon: Scroll,
  },
  {
    id: 'american-estates',
    title: 'American Estates',
    description: 'Cross-border expertise in Resealing American Probate and Non-resident property transfers.',
    icon: Landmark,
  },
  {
    id: 'civil-litigation',
    title: 'Civil Litigation',
    description: 'Decisive representation in Commercial Disputes and Debt Collection.',
    icon: Gavel,
  },
];

export const LOCATIONS: LocationItem[] = [
  {
    id: 'bruce-mines',
    city: 'Bruce Mines',
    address: '2 Taylor Street',
    postalCode: 'P0R 1C0',
    phone: '(705) 785-3491',
  },
  {
    id: 'sault-ste-marie',
    city: 'Sault Ste. Marie',
    address: '626 Wellington Street East',
    postalCode: 'P6A 2M5',
    phone: '(705) 942-1011',
  },
  {
    id: 'blind-river',
    city: 'Blind River',
    address: '18 Lawton Street',
    postalCode: 'P0R 1B0',
    phone: '(705) 356-9877',
  },
];