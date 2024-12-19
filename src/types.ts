export interface GalleryItem {
  thumb: string;
  original: string;
}

export interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  gallery: GalleryItem[];
  reviews: Review[];
  transmission?: string;
  engine?: string;
  kitchen?: boolean;
  AC?: boolean;
  bathroom?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;
  form?: string;
  length?: number;
  width?: number;
  height?: number;
  tank?: number;
  consumption?: number;
  features?: string[];
}

export interface CampersResponse {
  items: Camper[];
  totalPages: number;
  total: number;
}

export type FetchError = string;

export interface CampersState {
  items: Camper[];
  loading: boolean;
  error: string | null;
  camperDetails: Camper | null;
  favorites: string[];
  currentPage: number;
  totalPages: number;
}
