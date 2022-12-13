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
}

export const THREEPRODUCTS: Product[] = [
	{
        id: 1,
		visibility: true,
        category: 'Plante',
        productImage: 'assets/img/product-img/pilea.png',
        productImageAlt: 'photo de piléa',
		productName: 'Piléa Léa',
        productPrice: 50,
        productStock: 'Ajouter au panier',
	},
    {
        id: 2,
		visibility: true,
        category: 'Bouquet',
        productImage: 'assets/img/product-img/bouquet.png',
        productImageAlt: 'photo du Bouquet du marché',
		productName: 'le Bouquet du marché',
        productPrice: 50,
        productStock: 'Ajouter au panier',
	},
    {
        id: 3,
		visibility: true,
        category: 'Plante',
        productImage: 'assets/img/product-img/strelitzia.png',
        productImageAlt: 'photo de Strelitzia Stanislas',
		productName: 'Strelitzia Stanislas',
        productPrice: 50,
        productStock: 'Ajouter au panier',
	}
];