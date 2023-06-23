interface iGallery_images {
  url_image: string;
}

export interface iAdvert {
  brand: string;
  color: string;
  cover_image: string;
  created_at: string;
  description: string;
  fipe_price: string;
  fuel_type: string;
  gallery_images: iGallery_images[];
  id: number;
  is_published: boolean;
  mileage: string;
  model: string;
  price: string;
  updated_at: string;
  year: string;
}
