export interface data {
    page: number
    limit: number
    name?: string
}

export interface Request {
    get_products: (data: data) => any
    get_product: (id:string) => any
    like_product: (id:string) => any
    get_liked_products: () => any
    cart_product: (data: any) => any
    get_cart_products: (id:string | undefined) => any
    get_comments_product: (params: any) => any
    comment_product: (data: any) => any
}

export interface ProductStore {
    cart:any[],
    liked:any[],
    totalCount:number,
    likeCount:number
    getProducts: (data: data) => void
    getProduct: (id:any) => any
    likeProduct: (id:string) => void
    getLikedProducts: () => void
    cartProduct: (data: any) => void
    getCartProducts: (id: string | undefined) => void
    getCommentsProduct: (params: any) => void
    commentProduct: (data: any) => void
}