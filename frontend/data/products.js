export const products = [
  {
    id: 1,
    brand: "Kryolan",
    name: "TV Paint Stick",
    originalPrice: 5280,
    salePrice: 4488,
    discount: 15,
    image: "/images/products/kryolan-tv-stick.jpg",
    colors: ["Ivory", "FS 45", "FS 38", "1W", "F1", "D32.1", "508", "3W", "2W", "303"],
    category: "Makeup"
  },
  {
    id: 2,
    brand: "The Ordinary",
    name: "Niacinamide 10% + Zinc 1% - 30ml",
    originalPrice: 3900,
    salePrice: 2925,
    discount: 25,
    image: "/images/products/ordinary-niacinamide.jpg",
    category: "Skincare"
  },
  {
    id: 3,
    brand: "ST London",
    name: "Dual Wet & Dry Compact Powder",
    originalPrice: 2600,
    salePrice: 1950,
    discount: 25,
    image: "/images/products/st-london-powder.webp",
    colors: ["Ivory", "BE 2", "Bisque", "BE 1", "Natural", "FS 38", "BE 3", "FS 45"],
    category: "Makeup"
  },
  {
    id: 4,
    brand: "Maybelline",
    name: "Lash Sensational Sky High Mascara - Very Black",
    originalPrice: 3600,
    salePrice: 2700,
    discount: 25,
    image: "/images/products/maybelline-mascara.png",
    category: "Makeup"
  },
  {
    id: 5,
    brand: "Sheglam",
    name: "Sheglam - Color Bloom Matte Liquid Blush",
    originalPrice: 1010,
    salePrice: 758,
    discount: 25,
    image: "/images/products/sheglam-color-bloom.webp",
    category: "Makeup",
    soldOut: true
  },
  {
    id: 6,
    brand: "Neutrogena",
    name: "Hydro Boost Cleanser Water Gel - 200ml",
    originalPrice: 2800,
    salePrice: 2800,
    image: "/images/products/neutrogena-gel.webp",
    category: "Skincare"
  }
];

export const categories = [
  {
    name: "Makeup",
    image: "https://images.pexels.com/photos/2633986/pexels-photo-2633986.jpeg",
    description: "Professional Makeup Collection"
  },
  {
    name: "Skincare",
    image: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg",
    description: "Luxury Skincare Products"
  },
  {
    name: "Haircare",
    image: "https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg",
    description: "Professional Hair Products"
  },
  {
    name: "Perfume",
    image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg",
    description: "Luxury Fragrances"
  },
  {
    name: "Nails",
    image: "https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg",
    description: "Professional Nail Care"
  },
  {
    name: "Spa",
    image: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg",
    description: "Spa & Relaxation"
  }
];

export const brands = [
  "ST London",
  "Maybelline",
  "L'Oreal Paris",
  "Revlon",
  "NYX Professional Makeup",
  "Essence",
  "Wet n Wild",
  "Rimmel London"
];

// Product Categories and Subcategories
export const makeupCategories = {
  Face: ["Foundation", "Powder", "Concealer", "Primer", "Blush", "Bronzer", "Highlighter"],
  Eyes: ["Mascara", "Eyeliner", "Eyeshadow", "Eyebrow", "Eye Primer"],
  Lips: ["Lipstick", "Lip Gloss", "Lip Liner", "Lip Balm"],
  Cheeks: ["Blush", "Bronzer", "Highlighter", "Contour"],
  "Brushes & Tools": ["Face Brushes", "Eye Brushes", "Lip Brushes", "Sponges", "Brush Sets"]
};

// Navigation Categories (simple strings)
export const navCategories = [
  'All',
  'Face',
  'Eyes',
  'Lips',
  'Cheeks',
  'Brushes & Tools',
  'Sets',
  'New Arrivals'
];

// Products Data with Lorem Picsum images
export const makeupProducts = [
  {
    id: 1,
    brand: "ST London",
    name: "Dual Wet & Dry Compact Powder",
    price: 1950,
    originalPrice: 2600,
    discount: 25,
    image: "https://images.pexels.com/photos/2633986/pexels-photo-2633986.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Face",
    subCategory: "Powder",
    isNew: false,
    isBestSeller: true,
    outOfStock: false,
    colors: ["Ivory", "BE 2", "Bisque"]
  },
  {
    id: 2,
    brand: "Maybelline",
    name: "Fit Me Matte + Poreless Foundation",
    price: 2200,
    originalPrice: 2800,
    discount: 21,
    image: "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Face",
    subCategory: "Foundation",
    isNew: true,
    isBestSeller: true,
    colors: ["128 Warm Nude", "220 Natural Beige"]
  },
  {
    id: 3,
    brand: "L'Oreal Paris",
    name: "Voluminous Lash Paradise Mascara",
    price: 1800,
    originalPrice: 2200,
    discount: 18,
    image: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Eyes",
    subCategory: "Mascara",
    isNew: false,
    isBestSeller: false,
    colors: ["Black", "Blackest Black"]
  },
  {
    id: 4,
    brand: "NYX",
    name: "Soft Matte Lip Cream",
    price: 1500,
    originalPrice: 1800,
    discount: 17,
    image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Lips",
    subCategory: "Lipstick",
    isNew: true,
    isBestSeller: true,
    colors: ["Stockholm", "Rome", "Paris"]
  },
  {
    id: 5,
    brand: "MAC",
    name: "Retro Matte Lipstick",
    price: 2800,
    originalPrice: 3200,
    discount: 13,
    image: "https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Lips",
    subCategory: "Lipstick",
    isNew: false,
    isBestSeller: true,
    colors: ["Ruby Woo", "Russian Red"]
  },
  {
    id: 6,
    brand: "Fenty Beauty",
    name: "Pro Filt'r Soft Matte Foundation",
    price: 4500,
    originalPrice: 5000,
    discount: 10,
    image: "https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Face",
    subCategory: "Foundation",
    isNew: true,
    isBestSeller: false,
    colors: ["150", "180", "220"]
  },
  {
    id: 7,
    brand: "Huda Beauty",
    name: "Rose Gold Eyeshadow Palette",
    price: 6500,
    originalPrice: 7500,
    discount: 13,
    image: "https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Eyes",
    subCategory: "Eyeshadow",
    isNew: false,
    isBestSeller: true,
    colors: ["Rose Gold Edition"]
  },
  {
    id: 8,
    brand: "Rare Beauty",
    name: "Soft Pinch Liquid Blush",
    price: 3200,
    originalPrice: 3800,
    discount: 16,
    image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Cheeks",
    subCategory: "Blush",
    isNew: true,
    isBestSeller: true,
    colors: ["Joy", "Love", "Hope"]
  }
];

// Featured Brands Data
export const featuredBrands = [
  {
    id: 1,
    name: "ST London",
    logoUrl: "/images/brands/st-london.png"
  },
  {
    id: 2,
    name: "Maybelline",
    logoUrl: "/images/brands/maybelline.png"
  },
  // ... other brands
]; 