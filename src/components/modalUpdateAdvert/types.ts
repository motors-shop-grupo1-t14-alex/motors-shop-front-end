export interface iCarUpdateInfos {
    brand: string 
    fuel: number
    id: string
    name: string
    value: number
    year: string
}

export interface iRequestBodyUpdateAdvert {
    brand: string 
    model: string
    year: number
    fuel_type: string | undefined
    mileage: string 
    color: string 
    fipe_price: number
    price: number
    description: string
    cover_image: string
    gallery_images?: object[]
    is_published: boolean 
}