import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getGradientPosition(x: number, y: number) {
  return {
    backgroundPosition: `${x}px ${y}px`,
  };
} 