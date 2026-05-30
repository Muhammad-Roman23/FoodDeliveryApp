// src/data/products.js

export const products = [
    // Pizza
    { 
        id: 1, 
        name: "Margherita Pizza", 
        category: "Pizza", 
        price: 890, 
        image: "https://images.unsplash.com/photo-1604382354936-07c5d2446c77", 
        rating: 4.8,
        desc: "Classic pizza with fresh mozzarella, basil, and tomato sauce."
    },
    { 
        id: 2, 
        name: "Pepperoni Feast", 
        category: "Pizza", 
        price: 1290, 
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e", 
        rating: 4.9,
        desc: "Loaded with crispy pepperoni and extra cheese."
    },
    { 
        id: 3, 
        name: "Chicken Tikka Pizza", 
        category: "Pizza", 
        price: 1190, 
        image: "https://images.unsplash.com/photo-1565299623641-3f6e3e6e5b3e", 
        rating: 4.7,
        desc: "Spicy chicken tikka with special sauce and herbs."
    },

    // Burger
    { 
        id: 4, 
        name: "Classic Beef Burger", 
        category: "Burger", 
        price: 650, 
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add", 
        rating: 4.6,
        desc: "Juicy beef patty with fresh lettuce and special sauce."
    },
    { 
        id: 5, 
        name: "Cheese Loaded Burger", 
        category: "Burger", 
        price: 790, 
        image: "https://images.unsplash.com/photo-1568908863320-6f0c3b7a0b0e", 
        rating: 4.8,
        desc: "Extra cheese with crispy onions and pickles."
    },
    { 
        id: 6, 
        name: "Spicy Chicken Burger", 
        category: "Burger", 
        price: 720, 
        image: "https://images.unsplash.com/photo-1594212699900-2f8d1e0f7c0f", 
        rating: 4.5,
        desc: "Fiery chicken fillet with spicy mayo."
    },

    // Biryani
    { 
        id: 7, 
        name: "Chicken Biryani", 
        category: "Biryani", 
        price: 890, 
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe", 
        rating: 4.9,
        desc: "Aromatic basmati rice cooked with tender chicken."
    },
    { 
        id: 8, 
        name: "Beef Biryani", 
        category: "Biryani", 
        price: 1090, 
        image: "https://images.unsplash.com/photo-1631450005067-8c7d3b7e4b0e", 
        rating: 4.8,
        desc: "Rich and flavorful slow-cooked beef biryani."
    },
    { 
        id: 9, 
        name: "Vegetable Biryani", 
        category: "Biryani", 
        price: 690, 
        image: "https://images.unsplash.com/photo-1626502939635-3c3c3d3d3d3d", 
        rating: 4.4,
        desc: "Healthy mix of vegetables and fragrant spices."
    },

    // Drinks
    { 
        id: 10, 
        name: "Mango Lassi", 
        category: "Drinks", 
        price: 290, 
        image: "https://images.unsplash.com/photo-1542206395-9feb3b1c1c9d", 
        rating: 4.7,
        desc: "Refreshing mango yogurt drink with cardamom."
    },
    { 
        id: 11, 
        name: "Fresh Lime Soda", 
        category: "Drinks", 
        price: 220, 
        image: "https://images.unsplash.com/photo-1622296089863-9c9b0c3d3d3d", 
        rating: 4.6,
        desc: "Cool and tangy lime refreshment."
    },
    { 
        id: 12, 
        name: "Cold Coffee", 
        category: "Drinks", 
        price: 350, 
        image: "https://images.unsplash.com/photo-1517953400150-5e3c3d3d3d3d", 
        rating: 4.8,
        desc: "Creamy chilled coffee with ice cream."
    },

    // BBQ & Grill
    { 
        id: 13, 
        name: "Chicken Tikka", 
        category: "BBQ & Grill", 
        price: 890, 
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a9c", 
        rating: 4.9,
        desc: "Tender chicken marinated in yogurt and spices."
    },
    { 
        id: 14, 
        name: "Seekh Kebab", 
        category: "BBQ & Grill", 
        price: 750, 
        image: "https://images.unsplash.com/photo-1600585154529-990a3e4f4d3d", 
        rating: 4.8,
        desc: "Juicy minced meat kebabs grilled perfectly."
    },
    { 
        id: 15, 
        name: "Grilled Fish", 
        category: "BBQ & Grill", 
        price: 1290, 
        image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252", 
        rating: 4.7,
        desc: "Fresh fish seasoned and grilled to perfection."
    },

    // Desserts
    { 
        id: 16, 
        name: "Chocolate Lava Cake", 
        category: "Desserts", 
        price: 490, 
        image: "https://images.unsplash.com/photo-1563729784474-77d17bf4b2a5", 
        rating: 4.9,
        desc: "Warm chocolate cake with molten center."
    },
    { 
        id: 17, 
        name: "Kheer", 
        category: "Desserts", 
        price: 290, 
        image: "https://images.unsplash.com/photo-1604382354936-07c5d2446c77", 
        rating: 4.6,
        desc: "Creamy rice pudding with nuts and saffron."
    },
    { 
        id: 18, 
        name: "Gulab Jamun", 
        category: "Desserts", 
        price: 350, 
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51", 
        rating: 4.8,
        desc: "Soft and sweet milk dumplings in sugar syrup."
    },

    // Extra Products
    { 
        id: 19, 
        name: "Zinger Burger", 
        category: "Burger", 
        price: 680, 
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9", 
        rating: 4.5,
        desc: "Crispy chicken fillet with zinger sauce."
    },
    { 
        id: 20, 
        name: "Supreme Pizza", 
        category: "Pizza", 
        price: 1490, 
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591", 
        rating: 4.9,
        desc: "Loaded with multiple toppings and cheese."
    },
    { 
        id: 21, 
        name: "Egg Fried Rice", 
        category: "Biryani", 
        price: 590, 
        image: "https://images.unsplash.com/photo-1631450005067-8c7d3b7e4b0e", 
        rating: 4.4,
        desc: "Delicious stir-fried rice with egg and vegetables."
    },
    { 
        id: 22, 
        name: "Oreo Shake", 
        category: "Drinks", 
        price: 320, 
        image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5", 
        rating: 4.7,
        desc: "Creamy oreo milkshake with cookie chunks."
    },
    { 
        id: 23, 
        name: "Malai Boti", 
        category: "BBQ & Grill", 
        price: 920, 
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a9c", 
        rating: 4.8,
        desc: "Creamy and tender chicken malai boti."
    },
    { 
        id: 24, 
        name: "Rasmalai", 
        category: "Desserts", 
        price: 420, 
        image: "https://images.unsplash.com/photo-1563729784474-77d17bf4b2a5", 
        rating: 4.6,
        desc: "Soft cheese dumplings in sweet saffron milk."
    },
    { 
        id: 25, 
        name: "BBQ Chicken Pizza", 
        category: "Pizza", 
        price: 1350, 
        image: "https://images.unsplash.com/photo-1565299623641-3f6e3e6e5b3e", 
        rating: 4.8,
        desc: "Smoky BBQ chicken with onions and cheese."
    },
    { 
        id: 26, 
        name: "Crispy Chicken Burger", 
        category: "Burger", 
        price: 710, 
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add", 
        rating: 4.7,
        desc: "Crispy fried chicken with fresh veggies."
    },
    { 
        id: 27, 
        name: "Mutton Biryani", 
        category: "Biryani", 
        price: 1290, 
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe", 
        rating: 4.9,
        desc: "Royal mutton biryani with rich spices."
    },
    { 
        id: 28, 
        name: "Strawberry Milkshake", 
        category: "Drinks", 
        price: 340, 
        image: "https://images.unsplash.com/photo-1542206395-9feb3b1c1c9d", 
        rating: 4.6,
        desc: "Fresh strawberry blended with milk and ice cream."
    },
    { 
        id: 29, 
        name: "Grilled Wings", 
        category: "BBQ & Grill", 
        price: 680, 
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a9c", 
        rating: 4.8,
        desc: "Spicy and juicy grilled chicken wings."
    },
    { 
        id: 30, 
        name: "Brownie Fudge", 
        category: "Desserts", 
        price: 450, 
        image: "https://images.unsplash.com/photo-1563729784474-77d17bf4b2a5", 
        rating: 4.9,
        desc: "Rich chocolate brownie with fudge sauce."
    },
];