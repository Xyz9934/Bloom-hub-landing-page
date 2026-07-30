export type GalleryItem = {
  id: string
  image: string
  alt: string
  featured?: boolean
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    image: '/assets/products/pink-blossom-pot.jpeg',
    alt: 'Blush Tulip Pot with soft pink and white tulips in a smiling crochet-style pot',
    featured: true,
  },
  {
    id: 'gallery-2',
    image: '/assets/products/lavender-flower-bouquet.jpeg',
    alt: 'Blue Serenity Bouquet with handcrafted blue tulips and white floral accents',
  },
  {
    id: 'gallery-3',
    image: '/assets/products/sunflower-daisy-bouquet.jpeg',
    alt: 'Sunflower Bloom Bouquet with a bright sunflower, pink tulips, and white flowers',
  },
  {
    id: 'gallery-4',
    image: '/assets/products/3-pink-tulips-bouquet.jpeg',
    alt: 'Blush Bloom Bouquet with soft pink flowers and elegant wrapping',
  },
  {
    id: 'gallery-5',
    image: '/assets/products/lavender-flower-bouquet.jpeg',
    alt: 'Lavender Dream Bouquet wrapped in soft lavender paper with ribbon detail',
    featured: true,
  },
  {
    id: 'gallery-6',
    image: '/assets/products/single-sunflower-black-wrap.jpeg',
    alt: 'Crimson Lily Bouquet shown with premium black and gold wrapping',
  },
]
