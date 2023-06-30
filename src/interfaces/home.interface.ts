export interface iHomeProducts {
    brand: string
    color: string
    cover_image: string
    created_at: string
    description: string
    fipe_price: string
    fuel_type: string
    gallery_images: iImages[]
    id: number
    is_published: boolean
    mileage: string
    model: string
    price: string
    updated_at: string
    user: iSeller
    year: string
}

export interface iPages {
    previousPage: string
    nextPage: string
}

export interface iProtectHomeRoute {
    adverts: iHomeProducts[]
}

export interface iProductCardInfos {
    infos: iHomeProducts
}

interface iSeller {
    id: number
    name: string
    description?: string
}

interface iImages {
    url_image: string
}
