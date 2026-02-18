import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface LocationItem {
  id: string;
  city: string;
  address: string;
  postalCode: string;
  phone: string;
}

export interface NavItem {
  label: string;
  href: string;
}