export type Bouquet = {
  id: string
  name: string
  shortDescription: string
  price: string
  image: string
  featured: boolean
}

export const bouquets: Bouquet[] = [
  {
    id: 'blush-serenade',
    name: 'Blush Serenade',
    shortDescription: 'Soft garden roses blended with delicate seasonal accents for an elegant statement.',
    price: 'Starting from ₹1,499',
    image: 'https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    id: 'lavender-whisper',
    name: 'Lavender Whisper',
    shortDescription: 'A graceful pastel bouquet inspired by calm tones, gentle textures, and fine detail.',
    price: 'Starting from ₹1,899',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    id: 'garden-grace',
    name: 'Garden Grace',
    shortDescription: 'Fresh white and green blooms arranged with a modern, airy feel for special gifting.',
    price: 'Starting from ₹2,199',
    image: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
]
