export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    createdAt: Date;
}

export interface CartItem {
    product: Product
    quantity: number;
}