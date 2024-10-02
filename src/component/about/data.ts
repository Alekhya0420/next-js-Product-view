import shirtOne from '../../../public/images/products/n1.jpg';
import shirtTwo from '../../../public/images/products/n2.jpg';
import shirtThree from '../../../public/images/products/n3.jpg';
import shirtFour from '../../../public/images/products/n4.jpg';
import shirtFive from '../../../public/images/products/n5.jpg';
import shirtSix from '../../../public/images/products/n6.jpg';
import shirtSeven from '../../../public/images/products/n7.jpg';
import shirtEight from '../../../public/images/products/f1.jpg';
import { StaticImageData } from 'next/image';

// Define the Shirt interface
interface Shirt {
    name: string;
    color: string;
    images: StaticImageData; 
    price: string;
    rating: number;
    description: string;
}

// Create the array of shirts
export const myShirts: Shirt[] = [
    {
        name: "Shirt One",
        color: "Red",
        images: shirtOne,
        price: "200",
        rating: 4.5,
        description: "A stylish red shirt perfect for casual outings."
    },
    {
        name: "Shirt Two",
        color: "Blue",
        images: shirtTwo,
        price: "180",
        rating: 4.0,
        description: "A comfortable blue shirt ideal for everyday wear."
    },
    {
        name: "Shirt Three",
        color: "Green",
        images: shirtThree,
        price: "250",
        rating: 4.2,
        description: "A trendy green shirt that adds a pop of color to your wardrobe."
    },
    {
        name: "Shirt Four",
        color: "Black",
        images: shirtFour,
        price: "240",
        rating: 4.8,
        description: "A classic black shirt that goes with everything."
    },
    {
        name: "Shirt Five",
        color: "green",
        images: shirtFive,
        price: "350",
        rating: 4.6,
        description: "A versatile white shirt that is a must-have."
    },
    {
        name: "Shirt Six",
        color: "Magenta",
        images: shirtSix,
        price: "300",
        rating: 4.1,
        description: "A cheerful yellow shirt to brighten your day."
    },
    {
        name: "Shirt Seven",
        color: "Gray",
        images: shirtSeven,
        price: "220",
        rating: 4.3,
        description: "A stylish gray shirt for a modern look."
    },
    {
        name: "Shirt Eight", // Updated name
        color: "Gray",
        images: shirtEight,
        price: "220",
        rating: 4.3,
        description: "A stylish gray shirt for a modern look."
    }
];
