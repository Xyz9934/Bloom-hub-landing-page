export type GalleryItem = {
  id: string
  image: string
  alt: string
  featured?: boolean
}

const assetPath = (fileName: string) => `${import.meta.env.BASE_URL}assets/products/${fileName}`

export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    image: assetPath('blush-tulip-pot-pink-white.jpeg'),
    alt: 'Blush Tulip Pot with soft pink and white tulips in a smiling crochet-style pot',
    featured: true,
  },
  {
    id: 'gallery-2',
    image: assetPath('blue-serenity-bouquet.jpeg'),
    alt: 'Blue Serenity Bouquet with handcrafted blue tulips and white floral accents',
  },
  {
    id: 'gallery-3',
    image: assetPath('sunflower-bloom-bouquet.jpeg'),
    alt: 'Sunflower Bloom Bouquet with a bright sunflower, pink tulips, and white flowers',
  },
  {
    id: 'gallery-4',
    image: assetPath('blush-bloom-bouquet.jpeg'),
    alt: 'Blush Bloom Bouquet with soft pink flowers and elegant wrapping',
  },
  {
    id: 'gallery-5',
    image: assetPath('lavender-dream-bouquet.jpeg'),
    alt: 'Lavender Dream Bouquet wrapped in soft lavender paper with ribbon detail',
    featured: true,
  },
  {
    id: 'gallery-6',
    image: assetPath('crimson-lily-bouquet.jpeg'),
    alt: 'Crimson Lily Bouquet shown with premium black and gold wrapping',
  },
]
