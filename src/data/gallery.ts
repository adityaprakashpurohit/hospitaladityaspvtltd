export interface GalleryImage {
  id: string;
  url: string;
  category: "Hospital" | "Doctors" | "Facilities" | "Technology" | "Events" | "Community";
  caption: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Hospital",
    caption: "Modern Hospital Exterior"
  },
  {
    id: "g2",
    url: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Hospital",
    caption: "Spacious Reception Area"
  },
  {
    id: "g3",
    url: "https://images.unsplash.com/photo-1551076805-e18690c5e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Technology",
    caption: "Advanced MRI Scanning Facility"
  },
  {
    id: "g4",
    url: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Facilities",
    caption: "State-of-the-art Operation Theatre"
  },
  {
    id: "g5",
    url: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Doctors",
    caption: "Our Medical Team in Consultation"
  },
  {
    id: "g6",
    url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Facilities",
    caption: "Comfortable Patient Recovery Rooms"
  },
  {
    id: "g7",
    url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Technology",
    caption: "Modern Laboratory Equipment"
  },
  {
    id: "g8",
    url: "https://images.unsplash.com/photo-1527613426401-41d9effd8ac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Community",
    caption: "Health Awareness Camp"
  }
];
