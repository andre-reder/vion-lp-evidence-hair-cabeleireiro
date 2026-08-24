import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PHONE = '12991069668';
export const PHONE_DISPLAY = '(12) 99106-9668';
export const WHATSAPP_URL = `https://wa.me/55${PHONE}`;
export const FACEBOOK_URL = 'https://www.facebook.com/1749974855293470';
export const CITY = 'São José dos Campos';
export const SALON_NAME = 'Evidence Hair Cabeleireiro';

export const PEXELS_IMAGE =
  'https://images.pexels.com/photos/27165074/pexels-photo-27165074.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const PEXELS_PHOTOGRAPHER = 'Wilcle Nunes';
export const PEXELS_PHOTOGRAPHER_URL = 'https://www.pexels.com/@wilcle-nunes-38713774';
