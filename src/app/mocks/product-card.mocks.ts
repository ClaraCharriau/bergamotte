type Category = 'Bouquet' | 'Plante';
type Stock = 'Ajouter au panier' | 'En réapprovisionnement'

export interface Product {
    id: number;
    visibility: boolean;
    category: Category;
    productImage: string;
    productImageAlt: string;
    productName: string;
    productPrice: number;
    productStock: Stock;
    slug: string;
    isAvailable: boolean;
}

export const PRODUCTS: Product[] = [
    {
        id: 1,
        visibility: true,
        category: 'Plante',
        productImage: 'assets/img/product-img/pilea.png',
        productImageAlt: 'photo de piléa',
        productName: 'Piléa Léa',
        productPrice: 50,
        productStock: 'Ajouter au panier',
        slug: "#",
        isAvailable: true
    },
    {
        id: 2,
        visibility: true,
        category: 'Bouquet',
        productImage: 'assets/img/product-img/bouquet.png',
        productImageAlt: 'photo du Bouquet du marché',
        productName: 'le Bouquet du marché',
        productPrice: 15,
        productStock: 'Ajouter au panier',
        slug: "#",
        isAvailable: true
    },
    {
        id: 3,
        visibility: true,
        category: 'Plante',
        productImage: 'assets/img/product-img/strelitzia.png',
        productImageAlt: 'photo de Strelitzia Stanislas',
        productName: 'Strelitzia Stanislas',
        productPrice: 40,
        productStock: 'Ajouter au panier',
        slug: "#",
        isAvailable: true
    },
    {
        id: 4,
        visibility: true,
        category: 'Plante',
        productImage: 'assets/img/product-img/pilea.png',
        productImageAlt: 'photo de piléa',
        productName: 'Piléa Léa',
        productPrice: 15,
        productStock: 'Ajouter au panier',
        slug: "#",
        isAvailable: false
    },
    {
        id: 5,
        visibility: true,
        category: 'Bouquet',
        productImage: 'assets/img/product-img/bouquet.png',
        productImageAlt: 'photo du Bouquet du marché',
        productName: 'le Bouquet du marché',
        productPrice: 30,
        productStock: 'Ajouter au panier',
        slug: "#",
        isAvailable: true
    },
    {
        id: 6,
        visibility: true,
        category: 'Plante',
        productImage: 'assets/img/product-img/strelitzia.png',
        productImageAlt: 'photo de Strelitzia Stanislas',
        productName: 'Strelitzia Stanislas',
        productPrice: 45,
        productStock: 'Ajouter au panier',
        slug: "#",
        isAvailable: true
    },
    {
        id: 7,
        visibility: true,
        category: 'Plante',
        productImage: 'assets/img/product-img/pilea.png',
        productImageAlt: 'photo de piléa',
        productName: 'Piléa Léa',
        productPrice: 50,
        productStock: 'Ajouter au panier',
        slug: "#",
        isAvailable: false
    },
    {
        id: 8,
        visibility: true,
        category: 'Bouquet',
        productImage: 'assets/img/product-img/bouquet.png',
        productImageAlt: 'photo du Bouquet du marché',
        productName: 'le Bouquet du marché',
        productPrice: 12,
        productStock: 'Ajouter au panier',
        slug: "#",
        isAvailable: false
    },
    {
        id: 9,
        visibility: true,
        category: 'Plante',
        productImage: 'assets/img/product-img/strelitzia.png',
        productImageAlt: 'photo de Strelitzia Stanislas',
        productName: 'Strelitzia Stanislas',
        productPrice: 25,
        productStock: 'Ajouter au panier',
        slug: "#",
        isAvailable: true
    }
];