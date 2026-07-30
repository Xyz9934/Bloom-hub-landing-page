export type Bouquet = {
  id: string
  name: string
  shortDescription: string
  description?: string
  features?: string[]
  price: string
  image: string
  featured: boolean
}

const assetPath = (fileName: string) => `${import.meta.env.BASE_URL}assets/products/${fileName}`

const commonFeatures = [
  'Material: Premium Pipe Cleaners, Floral Wrapping Paper & Satin Ribbon',
  "Care: Keep away from water and direct sunlight.",
  "Care: Handle gently to maintain the bouquet's shape.",
  'Care: A long-lasting handmade keepsake for years to come.',
  'Customization: Yes (Color, flowers, wrapping, and message card can be customized on request.)',
  'Processing Time: 5–7 Business Days',
]

export const bouquets: Bouquet[] = [
  {
    id: 'blush-tulip-pot-pink-white',
    name: 'Blush Tulip Pot (Pink & White)',
    shortDescription: 'A little pot of happiness, handcrafted with love.',
    description:
      'Our Blush Tulip Pot features soft pink and white handcrafted tulips arranged in an adorable smiling crochet-style pot. A timeless décor piece that\'s perfect for birthdays, room décor, study tables, work desks, or gifting someone special. Carefully handcrafted using premium-quality pipe cleaners for a neat and elegant finish.',
    features: commonFeatures,
    price: '₹249',
    image: assetPath('blush-tulip-pot-pink-white.jpeg'),
    featured: true,
  },
  {
    id: 'blue-serenity-bouquet',
    name: 'Blue Serenity Bouquet',
    shortDescription: 'A bouquet that speaks elegance in every shade of blue.',
    description:
      'Featuring handcrafted blue tulips, a graceful lily, and delicate white floral accents, this bouquet is designed for those who love modern and elegant gifts. Carefully handcrafted using premium-quality pipe cleaners with luxury wrapping for a sophisticated finish.',
    features: commonFeatures,
    price: '₹499',
    image: assetPath('blue-serenity-bouquet.jpeg'),
    featured: true,
  },
  {
    id: 'sunflower-bloom-bouquet',
    name: 'Sunflower Bloom Bouquet',
    shortDescription:
      'Bring sunshine into every celebration with our handcrafted Sunflower Bloom Bouquet.',
    description:
      'A beautiful handmade pipe cleaner bouquet featuring a vibrant sunflower, soft pink tulips, and delicate white flowers. Thoughtfully handcrafted to create a timeless gift for birthdays, anniversaries, graduations, and special moments. Every bouquet is made with premium-quality materials and wrapped in elegant premium paper.',
    features: commonFeatures,
    price: '₹499',
    image: assetPath('sunflower-bloom-bouquet.jpeg'),
    featured: true,
  },
  {
    id: 'blush-bloom-bouquet',
    name: 'Blush Bloom Bouquet',
    shortDescription: 'Soft, elegant, and made to leave a lasting impression.',
    description:
      'A handcrafted bouquet featuring blush pink lilies, tulips, and tiny floral accents. Perfect for birthdays, anniversaries, bridal gifts, and heartfelt surprises. Made with premium-quality materials and wrapped beautifully for a luxurious presentation.',
    features: commonFeatures,
    price: '₹649',
    image: assetPath('blush-bloom-bouquet.jpeg'),
    featured: true,
  },
  {
    id: 'lavender-dream-bouquet',
    name: 'Lavender Dream Bouquet',
    shortDescription: 'A dreamy bouquet inspired by the beauty of lavender fields.',
    description:
      'Handcrafted with elegant lavender lilies, tulips, and lavender stems, this bouquet offers a soft and luxurious aesthetic. Designed for gifting on birthdays, anniversaries, graduations, or simply to make someone smile. Carefully made with premium-quality pipe cleaners and elegant wrapping.',
    features: commonFeatures,
    price: '₹699',
    image: assetPath('lavender-dream-bouquet.jpeg'),
    featured: true,
  },
  {
    id: 'crimson-lily-bouquet',
    name: 'Crimson Lily Bouquet',
    shortDescription: 'Bold, timeless, and handcrafted with love.',
    description:
      'A striking handcrafted bouquet featuring rich red lilies, tulips, and delicate floral fillers. Perfect for romantic occasions, birthdays, anniversaries, and memorable celebrations. Crafted with premium-quality materials and finished with elegant luxury wrapping for a premium look.',
    features: commonFeatures,
    price: '₹599',
    image: assetPath('crimson-lily-bouquet.jpeg'),
    featured: true,
  },
  {
    id: 'pink-blossom-pot-legacy',
    name: 'Pink Blossom Pot',
    shortDescription: 'Delicate pink blooms that stay beautiful forever.',
    description:
      'This handcrafted Pink Blossom Pot features elegant pastel pink flowers arranged in a decorative planter with a cute ribbon detail. A perfect gift for birthdays, anniversaries, or anyone who loves floral décor. Carefully handcrafted with premium-quality pipe cleaners for a beautiful and lasting finish.',
    price: '₹199',
    image: assetPath('pink-blossom-pot.jpeg'),
    featured: true,
  },
  {
    id: 'lavender-flower-bouquet-legacy',
    name: 'Lavender Flower Bouquet',
    shortDescription:
      "Soft lavender blooms wrapped in elegant pastel paper - a graceful handmade bouquet that's perfect for birthdays, anniversaries, or simply making someone smile.",
    price: '₹249',
    image: assetPath('shared-lavender-pink-bouquet.jpeg'),
    featured: true,
  },
  {
    id: 'three-pink-tulips-bouquet',
    name: '3 Pink Tulips Bouquet',
    shortDescription: 'Three beautiful pink tulips wrapped in premium paper for a classy and timeless look.',
    price: '₹249',
    image: assetPath('3-pink-tulips-bouquet.jpeg'),
    featured: true,
  },
  {
    id: 'single-blue-tulip-bouquet',
    name: 'Single Blue Tulip Bouquet',
    shortDescription: 'A charming handmade blue tulip bouquet that adds a unique and elegant touch. Small in size but full of beauty.',
    price: '₹129',
    image: assetPath('single-blue-tulip.jpeg'),
    featured: true,
  },
  {
    id: 'single-sunflower-black-wrap',
    name: 'Single Sunflower Bouquet (Black Wrap)',
    shortDescription: 'A bright sunflower wrapped in premium black paper for a bold and elegant look. Perfect for gifting or desk décor.',
    price: '₹179',
    image: assetPath('single-sunflower-black-wrap.jpeg'),
    featured: true,
  },
  {
    id: 'single-pink-rust-flower-bouquet',
    name: 'Single Pink/Rust Flower Bouquet',
    shortDescription: 'A cute handcrafted single flower bouquet in soft pink wrapping, perfect for return gifts, small surprises, or heartfelt gestures.',
    price: '₹149',
    image: assetPath('single-pink-rust-flower.jpeg'),
    featured: true,
  },
  {
    id: 'single-pink-tulip-bouquet',
    name: 'Single Pink Tulip Bouquet',
    shortDescription:
      'A delicate handcrafted Single Pink Tulip Bouquet, beautifully wrapped in premium pastel paper and finished with a satin ribbon.',
    description:
      'Its elegant and minimal design makes it a perfect choice for birthdays, thank-you gifts, return gifts, or simply making someone feel special.',
    price: '₹119',
    image: assetPath('single-pink-tulip-1.jpeg'),
    featured: true,
  },
  {
    id: 'sunflower-daisy-bouquet',
    name: 'Sunflower & Daisy Bouquet',
    shortDescription:
      "Bring a smile to someone's day with this beautifully handcrafted Sunflower & Daisy Bouquet.",
    description:
      'Bring a smile to someone\'s day with this beautifully handcrafted Sunflower & Daisy Bouquet. Featuring vibrant sunflowers paired with delicate white daisies and wrapped in elegant black premium paper, this bouquet creates the perfect balance of charm and sophistication.',
    features: ['Handmade with love', 'Perfect for gifting', 'Premium wrapping'],
    price: '₹229',
    image: assetPath('sunflower-daisy-bouquet.jpeg'),
    featured: true,
  },
  {
    id: 'handmade-hanging-sunflower-pot',
    name: 'Handmade Hanging Sunflower Pot',
    shortDescription: 'Brighten your space with our handmade hanging sunflower pots! Handmade with love, crafted to make every corner bloom.',
    description:
      'Bring warmth and charm to your space with this handcrafted hanging sunflower pot. Carefully made with soft pipe cleaners, it\'s perfect for home décor, gifting, workspaces, or adding a cheerful touch to any corner.',
    features: [
      '100% Handmade',
      'Premium pipe cleaner flowers',
      'Perfect for home, office & gifting',
      'Great for birthdays, housewarming & special occasions',
      'Secure packaging',
    ],
    price: 'Single: ₹300 | Combo (2): ₹500',
    image: assetPath('handmade-hanging-sunflower-pot-combo.jpeg'),
    featured: true,
  },
]
