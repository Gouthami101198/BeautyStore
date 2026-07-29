const products = [
  // ================= SKINCARE =================

  {
    id: 1,
    name: "Vitamin C Brightening Serum",
    brand: "BeautyGlow",
    category: "Skincare",
    skinType: "All",
    shade: "",
    price: 29.99,
    oldPrice: 39.99,
    discount: 25,
    rating: 4.8,
    stock: 18,
    description:
      "Brightens skin, fades dark spots, and improves skin texture.",
    image: "/images/products/serum.jpg",
    gallery: [
      "/images/products/serum.jpg",
      "/images/products/serum2.jpg",
      "/images/products/serum3.jpg",
    ],
  },

  {
    id: 2,
    name: "Hydrating Face Moisturizer",
    brand: "GlowCare",
    category: "Skincare",
    skinType: "Dry",
    shade: "",
    price: 34.99,
    oldPrice: 44.99,
    discount: 20,
    rating: 4.9,
    stock: 12,
    description:
      "Deep hydration with Hyaluronic Acid and Vitamin E.",
    image: "/images/products/moisturizer.jpg",
    gallery: [
      "/images/products/moisturizer.jpg",
      "/images/products/moisturizer2.jpg",
      "/images/products/moisturizer3.jpg",
    ],
  },

  {
    id: 3,
    name: "Aloe Vera Face Wash",
    brand: "NatureCare",
    category: "Skincare",
    skinType: "Oily",
    shade: "",
    price: 16.99,
    oldPrice: 22.99,
    discount: 26,
    rating: 4.6,
    stock: 20,
    description:
      "Gentle cleanser enriched with Aloe Vera for fresh and healthy skin.",
    image: "/images/products/facewash.jpg",
    gallery: [
      "/images/products/facewash.jpg",
      "/images/products/facewash2.jpg",
      "/images/products/facewash3.jpg",
    ],
  },

  // ================= MAKEUP =================

  {
    id: 4,
    name: "Matte Lipstick",
    brand: "Beauty Luxe",
    category: "Makeup",
    skinType: "All",
    shade: "Rose Pink",
    price: 18.99,
    oldPrice: 24.99,
    discount: 22,
    rating: 4.7,
    stock: 30,
    description:
      "Long-lasting matte lipstick with rich color payoff.",
    image: "/images/products/lipstick.jpg",
    gallery: [
      "/images/products/lipstick.jpg",
      "/images/products/lipstick2.jpg",
      "/images/products/lipstick3.jpg",
    ],
  },

  {
    id: 5,
    name: "Liquid Foundation",
    brand: "Beauty Luxe",
    category: "Makeup",
    skinType: "All",
    shade: "Ivory",
    price: 27.99,
    oldPrice: 35.99,
    discount: 22,
    rating: 4.8,
    stock: 25,
    description:
      "Lightweight foundation with full-day coverage.",
    image: "/images/products/foundation.jpg",
    gallery: [
      "/images/products/foundation.jpg",
      "/images/products/foundation2.jpg",
      "/images/products/foundation3.jpg",
    ],
  },

  {
    id: 6,
    name: "Waterproof Mascara",
    brand: "BeautyGlow",
    category: "Makeup",
    skinType: "All",
    shade: "Black",
    price: 15.99,
    oldPrice: 21.99,
    discount: 27,
    rating: 4.6,
    stock: 35,
    description:
      "Smudge-proof waterproof mascara for longer lashes.",
    image: "/images/products/mascara.jpg",
    gallery: [
      "/images/products/mascara.jpg",
      "/images/products/mascara2.jpg",
      "/images/products/mascara3.jpg",
    ],
  },

  // ================= HAIRCARE =================

  {
    id: 7,
    name: "Hair Repair Shampoo",
    brand: "NatureCare",
    category: "Haircare",
    skinType: "Combination",
    shade: "",
    price: 22.99,
    oldPrice: 29.99,
    discount: 15,
    rating: 4.6,
    stock: 20,
    description:
      "Repairs damaged hair and strengthens roots.",
    image: "/images/products/shampoo.jpg",
    gallery: [
      "/images/products/shampoo.jpg",
      "/images/products/shampoo2.jpg",
      "/images/products/shampoo3.jpg",
    ],
  },

  {
    id: 8,
    name: "Silky Hair Conditioner",
    brand: "NatureCare",
    category: "Haircare",
    skinType: "Normal",
    shade: "",
    price: 19.99,
    oldPrice: 26.99,
    discount: 26,
    rating: 4.7,
    stock: 18,
    description:
      "Smoothens hair and reduces frizz after every wash.",
    image: "/images/products/conditioner.jpg",
    gallery: [
      "/images/products/conditioner.jpg",
      "/images/products/conditioner2.jpg",
      "/images/products/conditioner3.jpg",
    ],
  },

  {
    id: 9,
    name: "Herbal Hair Oil",
    brand: "GlowCare",
    category: "Haircare",
    skinType: "Normal",
    shade: "",
    price: 17.99,
    oldPrice: 23.99,
    discount: 25,
    rating: 4.8,
    stock: 24,
    description:
      "Natural herbal oil that nourishes hair and scalp.",
    image: "/images/products/hairoil.jpg",
    gallery: [
      "/images/products/hairoil.jpg",
      "/images/products/hairoil2.jpg",
      "/images/products/hairoil3.jpg",
    ],
  },

  // ================= FRAGRANCE =================

  {
    id: 10,
    name: "Luxury Perfume",
    brand: "Elegance",
    category: "Fragrance",
    skinType: "All",
    shade: "",
    price: 59.99,
    oldPrice: 79.99,
    discount: 25,
    rating: 4.8,
    stock: 15,
    description:
      "Premium floral fragrance with long-lasting freshness.",
    image: "/images/products/perfume.jpg",
    gallery: [
      "/images/products/perfume.jpg",
      "/images/products/perfume2.jpg",
      "/images/products/perfume3.jpg",
    ],
  },

  {
    id: 11,
    name: "Floral Body Mist",
    brand: "Elegance",
    category: "Fragrance",
    skinType: "All",
    shade: "",
    price: 24.99,
    oldPrice: 32.99,
    discount: 24,
    rating: 4.5,
    stock: 22,
    description:
      "Refreshing floral body mist for everyday use.",
    image: "/images/products/mist.jpg",
    gallery: [
      "/images/products/mist.jpg",
      "/images/products/mist2.jpg",
      "/images/products/mist3.jpg",
    ],
  },

  {
    id: 12,
    name: "Fresh Deodorant Spray",
    brand: "SkinShield",
    category: "Fragrance",
    skinType: "All",
    shade: "",
    price: 13.99,
    oldPrice: 18.99,
    discount: 26,
    rating: 4.5,
    stock: 28,
    description:
      "Keeps you fresh and confident all day long.",
    image: "/images/products/deodorant.jpg",
    gallery: [
      "/images/products/deodorant.jpg",
      "/images/products/deodorant2.jpg",
      "/images/products/deodorant3.jpg",
    ],
  },

  // ================= BODY CARE =================

  {
    id: 13,
    name: "Sunscreen SPF 50+",
    brand: "SkinShield",
    category: "BodyCare",
    skinType: "Sensitive",
    shade: "",
    price: 24.99,
    oldPrice: 31.99,
    discount: 18,
    rating: 4.8,
    stock: 22,
    description:
      "Broad-spectrum SPF 50+ sunscreen for daily UV protection.",
    image: "/images/products/sunscreen.jpg",
    gallery: [
      "/images/products/sunscreen.jpg",
      "/images/products/sunscreen2.jpg",
      "/images/products/sunscreen3.jpg",
    ],
  },

  {
    id: 14,
    name: "Nourishing Body Lotion",
    brand: "GlowCare",
    category: "BodyCare",
    skinType: "Dry",
    shade: "",
    price: 19.99,
    oldPrice: 25.99,
    discount: 23,
    rating: 4.7,
    stock: 20,
    description:
      "Deep moisturizing body lotion for soft and healthy skin.",
    image: "/images/products/bodylotion.jpg",
    gallery: [
      "/images/products/bodylotion.jpg",
      "/images/products/bodylotion2.jpg",
      "/images/products/bodylotion3.jpg",
    ],
  },

  {
    id: 15,
    name: "Refreshing Body Wash",
    brand: "NatureCare",
    category: "BodyCare",
    skinType: "All",
    shade: "",
    price: 17.99,
    oldPrice: 23.99,
    discount: 25,
    rating: 4.6,
    stock: 30,
    description:
      "Gentle body wash that cleanses and refreshes your skin.",
    image: "/images/products/bodywash.jpg",
    gallery: [
      "/images/products/bodywash.jpg",
      "/images/products/bodywash2.jpg",
      "/images/products/bodywash3.jpg",
    ],
  },
];

export default products;