import { useState } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const item = window.localStorage.getItem('lifeline_favorite_doctors');
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.warn('Error reading localStorage', error);
      return [];
    }
  });

  const toggleFavorite = (doctorId: string) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(doctorId)
        ? prev.filter(id => id !== doctorId)
        : [...prev, doctorId];
      
      try {
        window.localStorage.setItem('lifeline_favorite_doctors', JSON.stringify(newFavorites));
      } catch (error) {
        console.warn('Error setting localStorage', error);
      }
      
      return newFavorites;
    });
  };

  const isFavorite = (doctorId: string) => favorites.includes(doctorId);

  return { favorites, toggleFavorite, isFavorite };
}
