// Header and Logo Assets
import header_image from './header.jpg';
import logo_icon from './logo.webp';

// Icon Assets
import search_icon from './search.svg';
import list from './list.png';
import save_icon from './save-icon.png';
import saved_icon from './saved-icon.png';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import twitter from './twitter.svg';
import google_play from './g_play.png';
import app_store from './app_store.svg';
import cross_icon from './cross.png';
import white_add from './add_white.png';
import black_add from './black-add.png';
import red_remove from './red_remove.png';
import green_add from './green_add.png';
import star_rating from './rating.png';
import rating from './rating-star.png';

// Food Images
import quail_salad from './quail_salad.jpg';
import roast_chicken from './roast_chicken.jpg';
import spaghetti from './spaghetti.jpg';
import healthy_snack from './healthy_snack.avif';
import drinks from './drinks.webp';
import desserts from './desserts.jpeg';
import breakfast from './breakfast.jpeg';
import holiday from './holiday.jpeg';
import ugali from './ugali.jpeg';
import appetizers from './appetizers.jpg';
import chicken_salad from './chicken_salad.jpeg';
import choma from './choma.jpg';
import mojito from './mojito.jpg';
import cake from './red_velvet.jpg';
import waffles from './waffles.jpg';
import bolognese from './bolognese.jpg';
import pilau from './pilau.jpeg';
import brownies from './brownies.jpeg';
import stirfry from './stirfry.jpeg';
import rnb from './rnb.jpeg';
import mashed from './mashed.jpeg';
import burrito from './burrito.jpg';

// Comments:
// - Grouped assets based on their purpose for easier navigation and modification.
// - Each import is labeled for quick understanding of what each section represents.


// Exporting assets as a single object for easier imports and access throughout the project
export const assets = {
    // Header and Logo
    logo_icon,
    header_image,
    
    // Icons
    search_icon,
    list,
    rating,
    save_icon,
    saved_icon,
    facebook,
    instagram,
    twitter,
    google_play,
    app_store,
    cross_icon,
    white_add,
    black_add,
    red_remove,
    green_add,
    star_rating,
};

// Array of recipe categories with their names and associated images
export const explore = [
    {
        recipe_name: "Meat Match",        // Category: Meat dishes
        recipe_image: roast_chicken,
    },
    {
        recipe_name: "Salad Soiree",      // Category: Salads
        recipe_image: quail_salad,
    },
    {
        recipe_name: "Noodle Nirvana",    // Category: Noodle dishes
        recipe_image: spaghetti,
    },
    {
        recipe_name: "Wellness Wonders",  // Category: Healthy snacks
        recipe_image: healthy_snack,
    },
    {
        recipe_name: "Sip and Savor",     // Category: Beverages
        recipe_image: drinks,
    },
    {
        recipe_name: "Sugar Rush",        // Category: Desserts
        recipe_image: desserts,
    },
    {
        recipe_name: "Rise and Shine",    // Category: Breakfast items
        recipe_image: breakfast,
    },
    {
        recipe_name: "Traditional Treasures", // Category: Holiday/traditional foods
        recipe_image: holiday,
    },
    {
        recipe_name: "Motherland Treasures",  // Category: Traditional African dishes
        recipe_image: ugali,
    },
    {
        recipe_name: "Party Starters",    // Category: Appetizers
        recipe_image: appetizers,
    },
];

// Array of recipes, each containing details such as ID, name, image, price, description, and category
export const recipe_list = [
    {
        _id: "1",
        name: "Chicken Salad",            // Recipe: Chicken Salad
        image: chicken_salad,
        price: 6.15,
        description: "Perfect for a light yet satisfying meal, it's a refreshing combination that hits all the right notes—crunch, zest, and savory goodness in every bite!",
        category: "Salad Soiree"
    },
    {
        _id: "2",
        name: "Nyama Choma",              // Recipe: Nyama Choma
        image: choma,
        price: 13.10,
        description: "East African favorite, served hot off the grill, is a true celebration of juicy cuts and rustic spices—perfect for sharing with friends over a cold drink and lively conversation.",
        category: "Motherland Treasures"
    },
    {
        _id: "3",
        name: "Mojito",                   // Recipe: Mojito
        image: mojito,
        price: 6.11,
        description: "Zesty blend of muddled mint, tangy lime, and a splash of sparkling soda, perfectly balanced with a hint of sweetness.",
        category: "Salad Soiree"
    },
    {
        _id: "4",
        name: "Red Velvet",               // Recipe: Red Velvet Cake
        image: cake,
        price: 28.10,
        description: "Rich, moist layers with a hint of cocoa, all wrapped in a luscious cream cheese frosting.",
        category: "Sugar Rush"
    },
    {
        _id: "5",
        name: "Waffles",                  // Recipe: Waffles
        image: waffles,
        price: 9.20,
        description: "Golden, crisp, and delightfully fluffy, our waffles are the ultimate breakfast treat.",
        category: "Rise and Shine"
    },
    {
        _id: "6",
        name: "Bolognese Spaghetti",      // Recipe: Bolognese Spaghetti
        image: bolognese,
        price: 21.80,
        description: "Slow-simmered to perfection with savory ground meat, ripe tomatoes, and a blend of aromatic herbs.",
        category: "Noodle Nirvana"
    },
    {
        _id: "7",
        name: "Pilau",                    // Recipe: Pilau
        image: pilau,
        price: 16.60,
        description: "Fragrant basmati rice cooked to perfection with a medley of spices, tender meat, and vibrant vegetables.",
        category: "Traditional Treasures"
    },
    {
        _id: "8",
        name: "Chicken StirFry",          // Recipe: Chicken StirFry
        image: stirfry,
        price: 10.50,
        description: "Fresh, crisp vegetables and tender proteins are tossed together in a sizzling pan, infused with savory sauces and aromatic spices.",
        category: "Meat Match"
    },
    {
        _id: "9",
        name: "Brownies",                 // Recipe: Brownies
        image: brownies,
        price: 9.65,
        description: "Topped with a sprinkle of sea salt or a drizzle of chocolate, these irresistible treats are the perfect companion for coffee or as a sweet pick-me-up.",
        category: "Sugar Rush"
    },
    {
        _id: "10",
        name: "Mashed potatoes",          // Recipe: Mashed Potatoes
        image: mashed,
        price: 9.93,
        description: "Fluffy, perfectly boiled potatoes and blended with rich butter and a touch of cream, every spoonful is a melt-in-your-mouth experience.",
        category: "Traditional Treasures"
    },
    {
        _id: "11",
        name: "RnB x Chapa-i!",           // Recipe: Beans and Chapati
        image: rnb,
        price: 8.11,
        description: "Nutritious, hearty beans simmered to perfection, bursting with flavor, paired with soft, warm chapati that's perfect for scooping up every last bite.",
        category: "Wellness Wonders"
    },
    {
        _id: "12",
        name: "Breakfast Burrito",        // Recipe: Breakfast Burrito
        image: burrito,
        price: 10.70,
        description: "A deliciously satisfying wrap packed with fluffy scrambled eggs, savory sausage, melted cheese, and fresh veggies, all nestled in a warm tortilla.",
        category: "Rise and Shine"
    },
];




