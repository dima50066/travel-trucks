export interface GalleryItem {
  thumb: string;
  original: string;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  gallery: GalleryItem[];
  [key: string]: unknown;
}

export type CampersResponse = Camper[];

export type FetchError = string;

export interface CampersState {
  items: Camper[];
  loading: boolean;
  error: string | null;
  camperDetails: Camper | null;
  favorites: string[];
}
