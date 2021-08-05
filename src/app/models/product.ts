export interface Product{
    id: number;
    title: string;
    description: string;
    price: number;
    quantity: number;
    images: Array<{ image: string }>;
    seller: { email: string, name: string };
    category: Array<{name: string}>
}