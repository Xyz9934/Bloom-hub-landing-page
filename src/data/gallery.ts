export type GalleryItem = {
  id: string
  image: string
  alt: string
  featured?: boolean
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e6a9a?auto=format&fit=crop&w=900&q=80',
    alt: 'Gallery floral inspiration 1',
    featured: true,
  },
  {
    id: 'gallery-2',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80',
    alt: 'Gallery floral inspiration 2',
  },
  {
    id: 'gallery-3',
    image: 'https://images.unsplash.com/photo-1463862049139-8a2ad38ebf72?auto=format&fit=crop&w=900&q=80',
    alt: 'Gallery floral inspiration 3',
  },
  {
    id: 'gallery-4',
    image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=900&q=80',
    alt: 'Gallery floral inspiration 4',
  },
  {
    id: 'gallery-5',
    image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=900&q=80',
    alt: 'Gallery floral inspiration 5',
    featured: true,
  },
  {
    id: 'gallery-6',
    image: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=900&q=80',
    alt: 'Gallery floral inspiration 6',
  },
]
