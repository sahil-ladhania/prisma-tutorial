const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting database seeding...');

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await prisma.orderItem.deleteMany();
    await prisma.order.deleteMany();
    await prisma.review.deleteMany();
    await prisma.userFavoriteRestaurant.deleteMany();
    await prisma.couponRestaurant.deleteMany();
    await prisma.coupon.deleteMany();
    await prisma.menuItem.deleteMany();
    await prisma.menuCategory.deleteMany();
    await prisma.restaurant.deleteMany();
    await prisma.address.deleteMany();
    await prisma.user.deleteMany();

    // ===================================
    // USERS
    // ===================================
    console.log('👤 Creating users...');

    const users = await Promise.all([
        // Customers
        prisma.user.create({
            data: {
                name: 'Rahul Sharma',
                email: 'rahul@example.com',
                phone: '9876543210',
                role: 'CUSTOMER',
                status: 'ACTIVE',
            },
        }),
        prisma.user.create({
            data: {
                name: 'Priya Singh',
                email: 'priya@example.com',
                phone: '9876543211',
                role: 'CUSTOMER',
                status: 'ACTIVE',
            },
        }),
        prisma.user.create({
            data: {
                name: 'Amit Kumar',
                email: 'amit@example.com',
                phone: '9876543212',
                role: 'CUSTOMER',
                status: 'ACTIVE',
            },
        }),
        prisma.user.create({
            data: {
                name: 'Sneha Patel',
                email: 'sneha@example.com',
                phone: '9876543213',
                role: 'CUSTOMER',
                status: 'ACTIVE',
            },
        }),
        prisma.user.create({
            data: {
                name: 'Vikas Gupta',
                email: 'vikas@example.com',
                phone: '9876543214',
                role: 'CUSTOMER',
                status: 'INACTIVE',
            },
        }),

        // Restaurant Owners
        prisma.user.create({
            data: {
                name: 'Rajesh Verma',
                email: 'rajesh@restaurant.com',
                phone: '9876543220',
                role: 'RESTAURANT_OWNER',
                status: 'ACTIVE',
            },
        }),
        prisma.user.create({
            data: {
                name: 'Anjali Reddy',
                email: 'anjali@restaurant.com',
                phone: '9876543221',
                role: 'RESTAURANT_OWNER',
                status: 'ACTIVE',
            },
        }),
        prisma.user.create({
            data: {
                name: 'Suresh Mehta',
                email: 'suresh@restaurant.com',
                phone: '9876543222',
                role: 'RESTAURANT_OWNER',
                status: 'ACTIVE',
            },
        }),

        // Delivery Partners
        prisma.user.create({
            data: {
                name: 'Ramesh Yadav',
                email: 'ramesh@delivery.com',
                phone: '9876543230',
                role: 'DELIVERY_PARTNER',
                status: 'ACTIVE',
            },
        }),
        prisma.user.create({
            data: {
                name: 'Dinesh Kumar',
                email: 'dinesh@delivery.com',
                phone: '9876543231',
                role: 'DELIVERY_PARTNER',
                status: 'ACTIVE',
            },
        }),

        // Admin
        prisma.user.create({
            data: {
                name: 'Admin User',
                email: 'admin@foodapp.com',
                phone: '9876543240',
                role: 'ADMIN',
                status: 'ACTIVE',
            },
        }),
    ]);

    console.log(`✅ Created ${users.length} users`);

    // ===================================
    // ADDRESSES
    // ===================================
    console.log('📍 Creating addresses...');

    const addresses = await Promise.all([
        // Rahul's addresses
        prisma.address.create({
            data: {
                user_id: users[0].id,
                address_line1: '123, MG Road',
                address_line2: 'Near Metro Station',
                city: 'Mumbai',
                state: 'Maharashtra',
                pincode: '400001',
                latitude: 19.0760,
                longitude: 72.8777,
                address_type: 'HOME',
                is_default: true,
            },
        }),
        prisma.address.create({
            data: {
                user_id: users[0].id,
                address_line1: '456, Tech Park',
                address_line2: 'Building A',
                city: 'Mumbai',
                state: 'Maharashtra',
                pincode: '400002',
                latitude: 19.0770,
                longitude: 72.8787,
                address_type: 'WORK',
                is_default: false,
            },
        }),

        // Priya's address
        prisma.address.create({
            data: {
                user_id: users[1].id,
                address_line1: '789, Park Street',
                city: 'Delhi',
                state: 'Delhi',
                pincode: '110001',
                latitude: 28.6139,
                longitude: 77.2090,
                address_type: 'HOME',
                is_default: true,
            },
        }),

        // Amit's address
        prisma.address.create({
            data: {
                user_id: users[2].id,
                address_line1: '321, Gandhi Nagar',
                city: 'Bangalore',
                state: 'Karnataka',
                pincode: '560001',
                latitude: 12.9716,
                longitude: 77.5946,
                address_type: 'HOME',
                is_default: true,
            },
        }),

        // Sneha's address
        prisma.address.create({
            data: {
                user_id: users[3].id,
                address_line1: '654, Civil Lines',
                city: 'Pune',
                state: 'Maharashtra',
                pincode: '411001',
                latitude: 18.5204,
                longitude: 73.8567,
                address_type: 'HOME',
                is_default: true,
            },
        }),
    ]);

    console.log(`✅ Created ${addresses.length} addresses`);

    // ===================================
    // MENU CATEGORIES
    // ===================================
    console.log('📋 Creating menu categories...');

    const categories = await Promise.all([
        prisma.menuCategory.create({
            data: { name: 'Starters', description: 'Appetizers and starters', display_order: 1 },
        }),
        prisma.menuCategory.create({
            data: { name: 'Main Course', description: 'Main dishes', display_order: 2 },
        }),
        prisma.menuCategory.create({
            data: { name: 'Breads', description: 'Indian breads', display_order: 3 },
        }),
        prisma.menuCategory.create({
            data: { name: 'Rice', description: 'Rice dishes', display_order: 4 },
        }),
        prisma.menuCategory.create({
            data: { name: 'Desserts', description: 'Sweet dishes', display_order: 5 },
        }),
        prisma.menuCategory.create({
            data: { name: 'Beverages', description: 'Drinks', display_order: 6 },
        }),
        prisma.menuCategory.create({
            data: { name: 'Chinese', description: 'Chinese cuisine', display_order: 7 },
        }),
        prisma.menuCategory.create({
            data: { name: 'Italian', description: 'Italian cuisine', display_order: 8 },
        }),
    ]);

    console.log(`✅ Created ${categories.length} menu categories`);

    // ===================================
    // RESTAURANTS
    // ===================================
    console.log('🏪 Creating restaurants...');

    const restaurants = await Promise.all([
        // Restaurant 1 - Rajesh's Indian Restaurant
        prisma.restaurant.create({
            data: {
                owner_id: users[5].id,
                name: 'Spice Garden',
                description: 'Authentic Indian cuisine with traditional flavors',
                address: '12, Food Street, Bandra',
                city: 'Mumbai',
                state: 'Maharashtra',
                pincode: '400050',
                latitude: 19.0596,
                longitude: 72.8295,
                phone: '9876540001',
                email: 'spicegarden@restaurant.com',
                cuisine_type: 'INDIAN',
                status: 'ACTIVE',
                rating: 4.5,
                total_reviews: 150,
                opening_time: '11:00',
                closing_time: '23:00',
                is_pure_veg: false,
                delivery_time: 35,
                cost_for_two: 600.00,
            },
        }),

        // Restaurant 2 - Anjali's Pure Veg
        prisma.restaurant.create({
            data: {
                owner_id: users[6].id,
                name: 'Green Leaf',
                description: 'Pure vegetarian restaurant with healthy options',
                address: '45, Health Plaza, Connaught Place',
                city: 'Delhi',
                state: 'Delhi',
                pincode: '110002',
                latitude: 28.6289,
                longitude: 77.2065,
                phone: '9876540002',
                email: 'greenleaf@restaurant.com',
                cuisine_type: 'INDIAN',
                status: 'ACTIVE',
                rating: 4.2,
                total_reviews: 89,
                opening_time: '10:00',
                closing_time: '22:00',
                is_pure_veg: true,
                delivery_time: 30,
                cost_for_two: 400.00,
            },
        }),

        // Restaurant 3 - Suresh's Chinese
        prisma.restaurant.create({
            data: {
                owner_id: users[7].id,
                name: 'Dragon Wok',
                description: 'Best Chinese food in town',
                address: '78, Commercial Street',
                city: 'Bangalore',
                state: 'Karnataka',
                pincode: '560002',
                latitude: 12.9822,
                longitude: 77.6088,
                phone: '9876540003',
                email: 'dragonwok@restaurant.com',
                cuisine_type: 'CHINESE',
                status: 'ACTIVE',
                rating: 4.3,
                total_reviews: 120,
                opening_time: '12:00',
                closing_time: '23:30',
                is_pure_veg: false,
                delivery_time: 40,
                cost_for_two: 700.00,
            },
        }),

        // Restaurant 4 - Italian
        prisma.restaurant.create({
            data: {
                owner_id: users[5].id,
                name: 'Pizza Paradise',
                description: 'Authentic Italian pizzas and pasta',
                address: '90, FC Road',
                city: 'Pune',
                state: 'Maharashtra',
                pincode: '411005',
                latitude: 18.5314,
                longitude: 73.8446,
                phone: '9876540004',
                email: 'pizzaparadise@restaurant.com',
                cuisine_type: 'ITALIAN',
                status: 'ACTIVE',
                rating: 4.6,
                total_reviews: 200,
                opening_time: '11:30',
                closing_time: '23:00',
                is_pure_veg: false,
                delivery_time: 45,
                cost_for_two: 800.00,
            },
        }),

        // Restaurant 5 - Multi-cuisine
        prisma.restaurant.create({
            data: {
                owner_id: users[6].id,
                name: 'Food Junction',
                description: 'Multi-cuisine restaurant with variety of options',
                address: '23, Main Market',
                city: 'Mumbai',
                state: 'Maharashtra',
                pincode: '400060',
                latitude: 19.0728,
                longitude: 72.8826,
                phone: '9876540005',
                email: 'foodjunction@restaurant.com',
                cuisine_type: 'MULTI_CUISINE',
                status: 'ACTIVE',
                rating: 4.0,
                total_reviews: 75,
                opening_time: '10:00',
                closing_time: '22:30',
                is_pure_veg: false,
                delivery_time: 35,
                cost_for_two: 500.00,
            },
        }),

        // Restaurant 6 - Temporarily Closed
        prisma.restaurant.create({
            data: {
                owner_id: users[7].id,
                name: 'Tandoor House',
                description: 'Traditional tandoor items',
                address: '56, Old City',
                city: 'Delhi',
                state: 'Delhi',
                pincode: '110003',
                latitude: 28.6369,
                longitude: 77.2249,
                phone: '9876540006',
                email: 'tandoorhouse@restaurant.com',
                cuisine_type: 'INDIAN',
                status: 'TEMPORARILY_CLOSED',
                rating: 3.8,
                total_reviews: 45,
                opening_time: '11:00',
                closing_time: '22:00',
                is_pure_veg: false,
                delivery_time: 40,
                cost_for_two: 550.00,
            },
        }),
    ]);

    console.log(`✅ Created ${restaurants.length} restaurants`);

    // ===================================
    // MENU ITEMS
    // ===================================
    console.log('🍽️  Creating menu items...');

    const menuItems = [];

    // Spice Garden Menu (Indian)
    const spiceGardenItems = await Promise.all([
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[0].id,
                category_id: categories[0].id,
                name: 'Paneer Tikka',
                description: 'Cottage cheese marinated in spices and grilled',
                price: 250.00,
                discount_price: 225.00,
                food_type: 'VEG',
                is_available: true,
                is_recommended: true,
                preparation_time: 20,
                calories: 300,
                spice_level: 'MEDIUM',
            },
        }),
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[0].id,
                category_id: categories[0].id,
                name: 'Chicken Tikka',
                description: 'Boneless chicken marinated and grilled',
                price: 280.00,
                food_type: 'NON_VEG',
                is_available: true,
                is_recommended: true,
                preparation_time: 25,
                calories: 350,
                spice_level: 'HOT',
            },
        }),
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[0].id,
                category_id: categories[1].id,
                name: 'Butter Chicken',
                description: 'Creamy tomato-based chicken curry',
                price: 350.00,
                food_type: 'NON_VEG',
                is_available: true,
                is_recommended: true,
                preparation_time: 30,
                calories: 450,
                spice_level: 'MILD',
            },
        }),
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[0].id,
                category_id: categories[1].id,
                name: 'Dal Makhani',
                description: 'Black lentils cooked with butter and cream',
                price: 220.00,
                food_type: 'VEG',
                is_available: true,
                is_recommended: false,
                preparation_time: 25,
                calories: 280,
                spice_level: 'MILD',
            },
        }),
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[0].id,
                category_id: categories[2].id,
                name: 'Butter Naan',
                description: 'Soft leavened bread with butter',
                price: 40.00,
                food_type: 'VEG',
                is_available: true,
                is_recommended: false,
                preparation_time: 10,
                calories: 150,
            },
        }),
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[0].id,
                category_id: categories[3].id,
                name: 'Biryani',
                description: 'Fragrant rice with spices and chicken',
                price: 300.00,
                food_type: 'NON_VEG',
                is_available: true,
                is_recommended: true,
                preparation_time: 35,
                calories: 500,
                spice_level: 'MEDIUM',
            },
        }),
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[0].id,
                category_id: categories[4].id,
                name: 'Gulab Jamun',
                description: 'Sweet milk dumplings in sugar syrup',
                price: 80.00,
                food_type: 'VEG',
                is_available: true,
                is_recommended: false,
                preparation_time: 5,
                calories: 200,
            },
        }),
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[0].id,
                category_id: categories[5].id,
                name: 'Mango Lassi',
                description: 'Sweet yogurt drink with mango',
                price: 90.00,
                food_type: 'VEG',
                is_available: true,
                is_recommended: true,
                preparation_time: 5,
                calories: 180,
            },
        }),
    ]);

    menuItems.push(...spiceGardenItems);

    // Green Leaf Menu (Pure Veg)
    const greenLeafItems = await Promise.all([
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[1].id,
                category_id: categories[0].id,
                name: 'Veg Manchurian',
                description: 'Mixed vegetable balls in spicy sauce',
                price: 180.00,
                food_type: 'VEG',
                is_available: true,
                is_recommended: true,
                preparation_time: 20,
                calories: 250,
                spice_level: 'MEDIUM',
            },
        }),
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[1].id,
                category_id: categories[1].id,
                name: 'Palak Paneer',
                description: 'Cottage cheese in spinach gravy',
                price: 240.00,
                discount_price: 210.00,
                food_type: 'VEG',
                is_available: true,
                is_recommended: true,
                preparation_time: 25,
                calories: 280,
                spice_level: 'MILD',
            },
        }),
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[1].id,
                category_id: categories[1].id,
                name: 'Chole Bhature',
                description: 'Spicy chickpeas with fried bread',
                price: 150.00,
                food_type: 'VEG',
                is_available: true,
                is_recommended: true,
                preparation_time: 20,
                calories: 400,
                spice_level: 'MEDIUM',
            },
        }),
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[1].id,
                category_id: categories[3].id,
                name: 'Veg Pulao',
                description: 'Basmati rice with mixed vegetables',
                price: 180.00,
                food_type: 'VEGAN',
                is_available: true,
                is_recommended: false,
                preparation_time: 25,
                calories: 320,
                spice_level: 'MILD',
            },
        }),
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[1].id,
                category_id: categories[5].id,
                name: 'Fresh Lime Soda',
                description: 'Refreshing lime drink',
                price: 60.00,
                food_type: 'VEGAN',
                is_available: true,
                is_recommended: false,
                preparation_time: 5,
                calories: 80,
            },
        }),
    ]);

    menuItems.push(...greenLeafItems);

    // Dragon Wok Menu (Chinese)
    const dragonWokItems = await Promise.all([
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[2].id,
                category_id: categories[6].id,
                name: 'Hakka Noodles',
                description: 'Stir-fried noodles with vegetables',
                price: 200.00,
                food_type: 'VEG',
                is_available: true,
                is_recommended: true,
                preparation_time: 20,
                calories: 350,
                spice_level: 'MEDIUM',
            },
        }),
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[2].id,
                category_id: categories[6].id,
                name: 'Chicken Fried Rice',
                description: 'Fried rice with chicken and vegetables',
                price: 250.00,
                food_type: 'NON_VEG',
                is_available: true,
                is_recommended: true,
                preparation_time: 25,
                calories: 420,
                spice_level: 'MILD',
            },
        }),
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[2].id,
                category_id: categories[6].id,
                name: 'Chilli Chicken',
                description: 'Spicy chicken in Chinese sauce',
                price: 280.00,
                food_type: 'NON_VEG',
                is_available: true,
                is_recommended: true,
                preparation_time: 30,
                calories: 380,
                spice_level: 'HOT',
            },
        }),
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[2].id,
                category_id: categories[6].id,
                name: 'Spring Rolls',
                description: 'Crispy vegetable rolls',
                price: 150.00,
                discount_price: 130.00,
                food_type: 'VEG',
                is_available: true,
                is_recommended: false,
                preparation_time: 15,
                calories: 200,
                spice_level: 'MILD',
            },
        }),
    ]);

    menuItems.push(...dragonWokItems);

    // Pizza Paradise Menu (Italian)
    const pizzaParadiseItems = await Promise.all([
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[3].id,
                category_id: categories[7].id,
                name: 'Margherita Pizza',
                description: 'Classic pizza with tomato and mozzarella',
                price: 350.00,
                food_type: 'VEG',
                is_available: true,
                is_recommended: true,
                preparation_time: 25,
                calories: 550,
            },
        }),
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[3].id,
                category_id: categories[7].id,
                name: 'Chicken BBQ Pizza',
                description: 'Pizza with BBQ chicken and cheese',
                price: 450.00,
                discount_price: 400.00,
                food_type: 'NON_VEG',
                is_available: true,
                is_recommended: true,
                preparation_time: 30,
                calories: 650,
            },
        }),
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[3].id,
                category_id: categories[7].id,
                name: 'Pasta Alfredo',
                description: 'Creamy white sauce pasta',
                price: 320.00,
                food_type: 'VEG',
                is_available: true,
                is_recommended: true,
                preparation_time: 20,
                calories: 480,
            },
        }),
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[3].id,
                category_id: categories[4].id,
                name: 'Tiramisu',
                description: 'Classic Italian coffee dessert',
                price: 200.00,
                food_type: 'VEG',
                is_available: true,
                is_recommended: true,
                preparation_time: 10,
                calories: 350,
            },
        }),
    ]);

    menuItems.push(...pizzaParadiseItems);

    // Food Junction Menu (Multi-cuisine)
    const foodJunctionItems = await Promise.all([
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[4].id,
                category_id: categories[0].id,
                name: 'Mixed Platter',
                description: 'Assorted starters from different cuisines',
                price: 400.00,
                food_type: 'NON_VEG',
                is_available: true,
                is_recommended: true,
                preparation_time: 30,
                calories: 600,
                spice_level: 'MEDIUM',
            },
        }),
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[4].id,
                category_id: categories[1].id,
                name: 'Grilled Chicken',
                description: 'Healthy grilled chicken breast',
                price: 320.00,
                food_type: 'NON_VEG',
                is_available: true,
                is_recommended: false,
                preparation_time: 25,
                calories: 280,
            },
        }),
        prisma.menuItem.create({
            data: {
                restaurant_id: restaurants[4].id,
                category_id: categories[5].id,
                name: 'Cold Coffee',
                description: 'Chilled coffee with ice cream',
                price: 120.00,
                food_type: 'VEG',
                is_available: false,
                is_recommended: false,
                preparation_time: 10,
                calories: 250,
            },
        }),
    ]);

    menuItems.push(...foodJunctionItems);

    console.log(`✅ Created ${menuItems.length} menu items`);

    // ===================================
    // ORDERS
    // ===================================
    console.log('📦 Creating orders...');

    const orders = await Promise.all([
        // Order 1 - Completed
        prisma.order.create({
            data: {
                user_id: users[0].id,
                restaurant_id: restaurants[0].id,
                delivery_partner_id: users[8].id,
                address_id: addresses[0].id,
                order_number: 'ORD-2024-001',
                status: 'DELIVERED',
                subtotal: 870.00,
                delivery_fee: 40.00,
                tax: 78.30,
                discount: 50.00,
                total_amount: 938.30,
                payment_method: 'UPI',
                payment_status: 'COMPLETED',
                estimated_delivery_time: new Date('2024-12-10T19:30:00'),
                actual_delivery_time: new Date('2024-12-10T19:25:00'),
                special_instructions: 'Please ring the doorbell',
            },
        }),

        // Order 2 - Preparing
        prisma.order.create({
            data: {
                user_id: users[1].id,
                restaurant_id: restaurants[1].id,
                delivery_partner_id: null,
                address_id: addresses[2].id,
                order_number: 'ORD-2024-002',
                status: 'PREPARING',
                subtotal: 570.00,
                delivery_fee: 30.00,
                tax: 51.30,
                discount: 0.00,
                total_amount: 651.30,
                payment_method: 'CARD',
                payment_status: 'COMPLETED',
                estimated_delivery_time: new Date('2024-12-12T14:00:00'),
                actual_delivery_time: null,
            },
        }),

        // Order 3 - Delivered
        prisma.order.create({
            data: {
                user_id: users[2].id,
                restaurant_id: restaurants[2].id,
                delivery_partner_id: users[9].id,
                address_id: addresses[3].id,
                order_number: 'ORD-2024-003',
                status: 'DELIVERED',
                subtotal: 630.00,
                delivery_fee: 50.00,
                tax: 56.70,
                discount: 30.00,
                total_amount: 706.70,
                payment_method: 'CASH',
                payment_status: 'COMPLETED',
                estimated_delivery_time: new Date('2024-12-11T20:30:00'),
                actual_delivery_time: new Date('2024-12-11T20:45:00'),
            },
        }),

        // Order 4 - Pending
        prisma.order.create({
            data: {
                user_id: users[3].id,
                restaurant_id: restaurants[3].id,
                delivery_partner_id: null,
                address_id: addresses[4].id,
                order_number: 'ORD-2024-004',
                status: 'PENDING',
                subtotal: 1120.00,
                delivery_fee: 60.00,
                tax: 100.80,
                discount: 100.00,
                total_amount: 1180.80,
                payment_method: 'WALLET',
                payment_status: 'COMPLETED',
                estimated_delivery_time: new Date('2024-12-12T15:00:00'),
                actual_delivery_time: null,
            },
        }),

        // Order 5 - Cancelled
        prisma.order.create({
            data: {
                user_id: users[0].id,
                restaurant_id: restaurants[4].id,
                delivery_partner_id: null,
                address_id: addresses[0].id,
                order_number: 'ORD-2024-005',
                status: 'CANCELLED',
                subtotal: 720.00,
                delivery_fee: 40.00,
                tax: 64.80,
                discount: 0.00,
                total_amount: 824.80,
                payment_method: 'UPI',
                payment_status: 'REFUNDED',
                estimated_delivery_time: new Date('2024-12-09T13:00:00'),
                actual_delivery_time: null,
                special_instructions: 'Leave at door',
            },
        }),

        // Order 6 - Delivered (Rahul's second order)
        prisma.order.create({
            data: {
                user_id: users[0].id,
                restaurant_id: restaurants[3].id,
                delivery_partner_id: users[8].id,
                address_id: addresses[1].id,
                order_number: 'ORD-2024-006',
                status: 'DELIVERED',
                subtotal: 670.00,
                delivery_fee: 50.00,
                tax: 60.30,
                discount: 50.00,
                total_amount: 730.30,
                payment_method: 'CARD',
                payment_status: 'COMPLETED',
                estimated_delivery_time: new Date('2024-12-08T21:00:00'),
                actual_delivery_time: new Date('2024-12-08T21:15:00'),
            },
        }),
    ]);

    console.log(`✅ Created ${orders.length} orders`);

    // ===================================
    // ORDER ITEMS
    // ===================================
    console.log('📦 Creating order items...');

    const orderItems = await Promise.all([
        // Order 1 items
        prisma.orderItem.create({
            data: {
                order_id: orders[0].id,
                menu_item_id: spiceGardenItems[2].id, // Butter Chicken
                quantity: 2,
                price: 350.00,
            },
        }),
        prisma.orderItem.create({
            data: {
                order_id: orders[0].id,
                menu_item_id: spiceGardenItems[4].id, // Butter Naan
                quantity: 4,
                price: 40.00,
            },
        }),
        prisma.orderItem.create({
            data: {
                order_id: orders[0].id,
                menu_item_id: spiceGardenItems[7].id, // Mango Lassi
                quantity: 1,
                price: 90.00,
            },
        }),

        // Order 2 items
        prisma.orderItem.create({
            data: {
                order_id: orders[1].id,
                menu_item_id: greenLeafItems[1].id, // Palak Paneer
                quantity: 2,
                price: 210.00,
            },
        }),
        prisma.orderItem.create({
            data: {
                order_id: orders[1].id,
                menu_item_id: greenLeafItems[2].id, // Chole Bhature
                quantity: 1,
                price: 150.00,
            },
        }),

        // Order 3 items
        prisma.orderItem.create({
            data: {
                order_id: orders[2].id,
                menu_item_id: dragonWokItems[0].id, // Hakka Noodles
                quantity: 2,
                price: 200.00,
            },
        }),
        prisma.orderItem.create({
            data: {
                order_id: orders[2].id,
                menu_item_id: dragonWokItems[3].id, // Spring Rolls
                quantity: 2,
                price: 130.00,
            },
        }),

        // Order 4 items
        prisma.orderItem.create({
            data: {
                order_id: orders[3].id,
                menu_item_id: pizzaParadiseItems[1].id, // Chicken BBQ Pizza
                quantity: 2,
                price: 400.00,
            },
        }),
        prisma.orderItem.create({
            data: {
                order_id: orders[3].id,
                menu_item_id: pizzaParadiseItems[2].id, // Pasta Alfredo
                quantity: 1,
                price: 320.00,
            },
        }),

        // Order 5 items
        prisma.orderItem.create({
            data: {
                order_id: orders[4].id,
                menu_item_id: foodJunctionItems[0].id, // Mixed Platter
                quantity: 1,
                price: 400.00,
            },
        }),
        prisma.orderItem.create({
            data: {
                order_id: orders[4].id,
                menu_item_id: foodJunctionItems[1].id, // Grilled Chicken
                quantity: 1,
                price: 320.00,
            },
        }),

        // Order 6 items
        prisma.orderItem.create({
            data: {
                order_id: orders[5].id,
                menu_item_id: pizzaParadiseItems[0].id, // Margherita Pizza
                quantity: 1,
                price: 350.00,
            },
        }),
        prisma.orderItem.create({
            data: {
                order_id: orders[5].id,
                menu_item_id: pizzaParadiseItems[2].id, // Pasta Alfredo
                quantity: 1,
                price: 320.00,
            },
        }),
    ]);

    console.log(`✅ Created ${orderItems.length} order items`);

    // ===================================
    // REVIEWS
    // ===================================
    console.log('⭐ Creating reviews...');

    const reviews = await Promise.all([
        // Restaurant reviews
        prisma.review.create({
            data: {
                user_id: users[0].id,
                restaurant_id: restaurants[0].id,
                menu_item_id: null,
                order_id: orders[0].id,
                rating: 5,
                comment: 'Excellent food and service! Loved the butter chicken.',
                review_type: 'RESTAURANT',
            },
        }),
        prisma.review.create({
            data: {
                user_id: users[2].id,
                restaurant_id: restaurants[2].id,
                menu_item_id: null,
                order_id: orders[2].id,
                rating: 4,
                comment: 'Good Chinese food, but delivery was slightly delayed.',
                review_type: 'RESTAURANT',
            },
        }),
        prisma.review.create({
            data: {
                user_id: users[0].id,
                restaurant_id: restaurants[3].id,
                menu_item_id: null,
                order_id: orders[5].id,
                rating: 5,
                comment: 'Best pizza in town! Will order again.',
                review_type: 'RESTAURANT',
            },
        }),

        // Menu item reviews
        prisma.review.create({
            data: {
                user_id: users[0].id,
                restaurant_id: null,
                menu_item_id: spiceGardenItems[2].id, // Butter Chicken
                order_id: orders[0].id,
                rating: 5,
                comment: 'Butter chicken was amazing!',
                review_type: 'MENU_ITEM',
            },
        }),
        prisma.review.create({
            data: {
                user_id: users[2].id,
                restaurant_id: null,
                menu_item_id: dragonWokItems[0].id, // Hakka Noodles
                order_id: orders[2].id,
                rating: 4,
                comment: 'Tasty noodles with good spice level.',
                review_type: 'MENU_ITEM',
            },
        }),

        // Delivery reviews
        prisma.review.create({
            data: {
                user_id: users[0].id,
                restaurant_id: null,
                menu_item_id: null,
                order_id: orders[0].id,
                rating: 5,
                comment: 'Quick delivery! Driver was very polite.',
                review_type: 'DELIVERY',
            },
        }),
    ]);

    console.log(`✅ Created ${reviews.length} reviews`);

    // ===================================
    // USER FAVORITE RESTAURANTS
    // ===================================
    console.log('❤️  Creating favorite restaurants...');

    const favorites = await Promise.all([
        prisma.userFavoriteRestaurant.create({
            data: {
                user_id: users[0].id,
                restaurant_id: restaurants[0].id,
            },
        }),
        prisma.userFavoriteRestaurant.create({
            data: {
                user_id: users[0].id,
                restaurant_id: restaurants[3].id,
            },
        }),
        prisma.userFavoriteRestaurant.create({
            data: {
                user_id: users[1].id,
                restaurant_id: restaurants[1].id,
            },
        }),
        prisma.userFavoriteRestaurant.create({
            data: {
                user_id: users[2].id,
                restaurant_id: restaurants[2].id,
            },
        }),
    ]);

    console.log(`✅ Created ${favorites.length} favorite restaurants`);

    // ===================================
    // COUPONS
    // ===================================
    console.log('🎟️  Creating coupons...');

    const coupons = await Promise.all([
        prisma.coupon.create({
            data: {
                code: 'WELCOME50',
                description: 'Welcome offer - Flat 50 off',
                discount_type: 'FLAT',
                discount_value: 50.00,
                min_order_amount: 300.00,
                max_discount_amount: 50.00,
                valid_from: new Date('2024-12-01'),
                valid_till: new Date('2024-12-31'),
                usage_limit: 100,
                used_count: 15,
                status: 'ACTIVE',
                applicable_to: 'ALL',
            },
        }),
        prisma.coupon.create({
            data: {
                code: 'BIGSAVE20',
                description: '20% off on orders above 500',
                discount_type: 'PERCENTAGE',
                discount_value: 20.00,
                min_order_amount: 500.00,
                max_discount_amount: 150.00,
                valid_from: new Date('2024-12-01'),
                valid_till: new Date('2024-12-31'),
                usage_limit: 50,
                used_count: 8,
                status: 'ACTIVE',
                applicable_to: 'ALL',
            },
        }),
        prisma.coupon.create({
            data: {
                code: 'SPICE100',
                description: 'Spice Garden special - 100 off',
                discount_type: 'FLAT',
                discount_value: 100.00,
                min_order_amount: 600.00,
                max_discount_amount: 100.00,
                valid_from: new Date('2024-12-01'),
                valid_till: new Date('2024-12-25'),
                usage_limit: 30,
                used_count: 20,
                status: 'ACTIVE',
                applicable_to: 'SPECIFIC_RESTAURANTS',
            },
        }),
        prisma.coupon.create({
            data: {
                code: 'EXPIRED10',
                description: 'Expired coupon',
                discount_type: 'PERCENTAGE',
                discount_value: 10.00,
                min_order_amount: 200.00,
                max_discount_amount: 50.00,
                valid_from: new Date('2024-11-01'),
                valid_till: new Date('2024-11-30'),
                usage_limit: 100,
                used_count: 45,
                status: 'EXPIRED',
                applicable_to: 'ALL',
            },
        }),
    ]);

    console.log(`✅ Created ${coupons.length} coupons`);

    // ===================================
    // COUPON RESTAURANTS
    // ===================================
    console.log('🎟️  Linking coupons to restaurants...');

    const couponRestaurants = await Promise.all([
        prisma.couponRestaurant.create({
            data: {
                coupon_id: coupons[2].id, // SPICE100
                restaurant_id: restaurants[0].id, // Spice Garden
            },
        }),
    ]);

    console.log(`✅ Created ${couponRestaurants.length} coupon-restaurant links`);

    console.log('\n✅ Database seeding completed successfully! 🎉\n');
    console.log('📊 Summary:');
    console.log(`   👥 Users: ${users.length}`);
    console.log(`   📍 Addresses: ${addresses.length}`);
    console.log(`   🏪 Restaurants: ${restaurants.length}`);
    console.log(`   📋 Menu Categories: ${categories.length}`);
    console.log(`   🍽️  Menu Items: ${menuItems.length}`);
    console.log(`   📦 Orders: ${orders.length}`);
    console.log(`   📦 Order Items: ${orderItems.length}`);
    console.log(`   ⭐ Reviews: ${reviews.length}`);
    console.log(`   ❤️  Favorite Restaurants: ${favorites.length}`);
    console.log(`   🎟️  Coupons: ${coupons.length}`);
    console.log(`   🎟️  Coupon-Restaurant Links: ${couponRestaurants.length}`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error('❌ Error seeding database:', e);
        await prisma.$disconnect();
        process.exit(1);
    });