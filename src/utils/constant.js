import blog1 from "../images/blog-1.jpg"
import blog2 from "../images/blog-2.jpg"
import blog3 from "../images/blog-3.jpg"
import blog4 from "../images/blog-4.jpg"
import blog5 from "../images/blog-5.jpg"
import blog6 from "../images/blog-6.jpg"
import blog7 from "../images/blog-7.jpg"
import blog8 from "../images/blog-8.jpg"
import offer1 from "../images/offer1.png"
import offer2 from "../images/offer2.png"
import offer3 from "../images/offer3.png"
import offer4 from "../images/offer4.png"
import offer5 from "../images/offer5.png"
import offer6 from "../images/offer6.png"
import offer7 from "../images/offer7.png"
import { FaClock, FaBox, FaTruck, FaLock } from "react-icons/fa";


export const RESTAURANT_GRID_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.51600&lng=76.21570&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
// export const RESTAURANT_GRID_URL = "../rawdata/v5.json"

export const RESTAURANT_IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

export const RESTAURANT_DETAIL_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.51600&lng=76.21570&restaurantId=";

export const location = {
  "Maharashtra": {
      "cities": ["Mumbai", "Pune", "Nagpur", "Nashik"]
  },
  "Karnataka": {
      "cities": ["Bengaluru", "Mysuru", "Mangaluru", "Hubli"]
  },
  "Tamil Nadu": {
      "cities": ["Chennai", "Coimbatore", "Madurai", "Salem"]
  },
  "Uttar Pradesh": {
      "cities": ["Lucknow", "Noida", "Kanpur", "Agra"]
  },
  "West Bengal": {
      "cities": ["Kolkata", "Siliguri", "Howrah", "Durgapur"]
  },
  "Gujarat": {
      "cities": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"]
  },
  "Rajasthan": {
      "cities": ["Jaipur", "Udaipur", "Jodhpur", "Ajmer"]
  },
  "Punjab": {
      "cities": ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar"]
  }
};

export const testimonials =  [
      {
        "name": "Alice Johnson",
        "content": "The food delivery service is outstanding! Orders are always delivered on time, and the quality of the food is consistently top-notch. I love the variety of restaurants available and the easy-to-use app interface."
      },
      {
        "name": "Carlos Martinez",
        "content": "I’ve tried several food delivery apps, and this one stands out. The delivery is quick, the customer support is excellent, and I appreciate the accurate tracking feature. It's my go-to app for ordering food."
      },
      {
        "name": "Sophia Lee",
        "content": "Fantastic experience every time. The app is user-friendly, and the delivery drivers are always polite and professional. The variety of choices is great, and the food always arrives hot and fresh."
      },
      {
        "name": "James Patel",
        "content": "I’m impressed with the prompt delivery and the quality of the food. The app is very easy to navigate, and I love the option to customize my orders. It’s a game-changer for busy days!"
      }
    ]
  
    export const blogs = [
      {
        bid: 1,
        title: "The Rise of Indian Street Food in Urban Areas",
        description: "Explore how traditional Indian street food is making its way into modern urban settings, bringing a taste of local culture to the city.",
        date: "2024-08-15",
        author: "Ayesha Singh",
        imageUrl: blog1,
        articleUrl: "https://example.com/articles/indian-street-food-rise",
        category: "Health & Nutrition",
        content: [
          "Indian street food has always been a vibrant part of the country’s culinary landscape. From the bustling streets of Mumbai to the vibrant markets of Delhi, street food vendors offer a variety of flavors that reflect India's rich cultural heritage.",
          "In recent years, there has been a noticeable shift as traditional Indian street food starts making its way into urban areas. This change is driven by a growing interest among city dwellers in experiencing authentic, diverse, and affordable culinary options.",
          "Urban areas are seeing a rise in food trucks and pop-up stalls that bring these beloved street food dishes to a new audience. This trend is not just about nostalgia; it’s about embracing the essence of local cuisine in a contemporary setting.",
          "As street food gains popularity in urban centers, it also opens up new opportunities for small vendors and entrepreneurs, contributing to the dynamic food culture of the city."
        ]
      },
      {
        bid: 2,
        title: "Health Benefits of Indian Spices: Turmeric and Beyond",
        description: "An in-depth look at how common Indian spices, such as turmeric, can contribute to a healthier lifestyle and their benefits.",
        date: "2024-08-20",
        author: "Raj Patel",
        imageUrl: blog2,
        articleUrl: "https://example.com/articles/health-benefits-indian-spices",
        category: "Health & Nutrition",
        content: [
          "Indian spices have been an integral part of traditional medicine and cuisine for centuries. Among these, turmeric stands out due to its powerful anti-inflammatory and antioxidant properties.",
          "Turmeric contains curcumin, the active compound responsible for its vibrant color and health benefits. Regular consumption of turmeric can help combat inflammation, support joint health, and enhance overall well-being.",
          "Beyond turmeric, other spices like ginger, cinnamon, and black pepper also offer various health benefits. Ginger, for instance, is known for its digestive aids and anti-nausea properties, while black pepper enhances the absorption of other nutrients.",
          "Incorporating these spices into daily meals not only adds flavor but also contributes to a more balanced and health-conscious diet, aligning with modern nutritional practices."
        ]
      },
      {
        bid: 3,
        title: "Fusion Cuisine: Indian Flavors Meet Global Trends",
        description: "Discover the exciting world of fusion cuisine where traditional Indian flavors are combined with global culinary trends.",
        date: "2024-08-25",
        author: "Neha Gupta",
        imageUrl: blog3,
        articleUrl: "https://example.com/articles/fusion-cuisine-indian-flavors",
        category: "Fusion Cuisine",
        content: [
          "Fusion cuisine represents an exciting culinary trend where traditional ingredients and techniques are combined with global flavors and cooking methods. This innovative approach results in unique dishes that blend the best of both worlds.",
          "Indian flavors are particularly well-suited to fusion cooking. Ingredients like spices, herbs, and sauces are being creatively combined with elements from various international cuisines, from Mexican to Japanese.",
          "Popular examples include Indian-inspired sushi rolls, curry-flavored tacos, and masala-infused pasta. These dishes not only offer a fresh twist on familiar foods but also celebrate the versatility of Indian spices.",
          "The rise of fusion cuisine reflects a broader trend of global culinary exploration and experimentation, appealing to adventurous eaters and food enthusiasts looking for new and exciting dining experiences."
        ]
      },
      {
        bid: 4,
        title: "The Art of Indian Pickling: Preserving Flavors",
        description: "A deep dive into the traditional art of Indian pickling, its history, and its importance in Indian cuisine.",
        date: "2024-09-01",
        author: "Sita Sharma",
        imageUrl: blog4,
        articleUrl: "https://example.com/articles/art-of-indian-pickling",
        category: "Health & Nutrition",
        content: [
          "Pickling is a time-honored tradition in Indian cuisine, reflecting regional flavors and personal family recipes. Each household often has its unique take on pickling, using seasonal fruits and vegetables.",
          "From mango to lime and even mixed vegetable pickles, the techniques vary across regions, influenced by local ingredients and climatic conditions.",
          "Not only do these pickles add a burst of flavor to meals, but they also serve as a means of preservation, extending the shelf life of fresh produce.",
          "In this blog, we explore various pickle recipes, the science behind fermentation, and tips on how to create your own Indian pickles at home."
        ]
      },
      {
        bid: 5,
        title: "Exploring Regional Cuisines of India",
        description: "An overview of the diverse regional cuisines of India, highlighting unique dishes and cooking techniques.",
        date: "2024-09-10",
        author: "Rahul Verma",
        imageUrl: blog5,
        articleUrl: "https://example.com/articles/regional-cuisines-india",
        category: "Fusion Cuisine",
        content: [
          "India is known for its vast diversity in culture, languages, and, most importantly, food. Each region offers distinct culinary styles shaped by local ingredients, traditions, and historical influences.",
          "From the spicy curries of the South to the tandooris of the North, and from the sweet treats of West Bengal to the street foods of Mumbai, the country offers an endless array of flavors.",
          "This blog will take you on a culinary journey through India, exploring signature dishes, cooking methods, and the stories behind them.",
          "Join us as we celebrate the rich tapestry of Indian cuisine and discover how regional differences contribute to its overall richness."
        ]
      },
      {
        bid: 6,
        title: "The Influence of Ayurveda on Indian Cooking",
        description: "Understanding how Ayurvedic principles shape traditional Indian cooking and eating habits.",
        date: "2024-09-15",
        author: "Ananya Rao",
        imageUrl: blog6,
        articleUrl: "https://example.com/articles/ayurveda-indian-cooking",
        category: "Fusion Cuisine",
        content: [
          "Ayurveda, the ancient Indian system of medicine, has a profound impact on Indian cooking and dietary practices. The philosophy emphasizes balance and harmony in all aspects of life, including food.",
          "Understanding the qualities of different foods, such as their taste, potency, and how they affect the body, is key to Ayurvedic cooking.",
          "This blog delves into the basic principles of Ayurveda, how they influence food preparation, and practical tips for incorporating Ayurvedic principles into your daily meals.",
          "Discover how simple changes in cooking can promote health, well-being, and balance in life."
        ]
      },
      {
        bid: 7,
        title: "Street Food vs. Fine Dining: A Culinary Debate",
        description: "An exploration of the differences between street food and fine dining, and what they reveal about culinary culture.",
        date: "2024-09-20",
        author: "Vikram Joshi",
        imageUrl: blog7,
        articleUrl: "https://example.com/articles/street-food-vs-fine-dining",
        category: "Culinary Culture",
        content: [
          "Street food and fine dining represent two ends of the culinary spectrum, each with its unique charm and challenges. While street food is accessible, vibrant, and often steeped in tradition, fine dining emphasizes sophistication, presentation, and exclusivity.",
          "This blog compares the two, exploring how each reflects the culture and society of its region. We'll discuss the ingredients, techniques, and experiences that set them apart.",
          "Join us as we dissect the culinary debate surrounding these two styles and what they reveal about our tastes and dining preferences."
        ]
      },
      {
        bid: 8,
        title: "Sustainable Cooking Practices in Indian Cuisine",
        description: "A look at how traditional Indian cooking can inspire sustainable practices in modern kitchens.",
        date: "2024-09-25",
        author: "Nisha Mehta",
        imageUrl: blog8,
        articleUrl: "https://example.com/articles/sustainable-cooking-india",
        category: "Fusion Cuisine",
        content: [
          "Sustainable cooking practices have gained importance in recent years, and Indian cuisine offers a wealth of traditional techniques that promote environmental consciousness.",
          "From utilizing local and seasonal ingredients to minimizing food waste through creative recipes, Indian cooking embodies sustainability.",
          "In this blog, we will explore how these practices can be incorporated into modern kitchens, highlighting recipes and tips for reducing your carbon footprint while enjoying delicious meals.",
          "Learn how embracing these methods can contribute to a healthier planet and a more fulfilling culinary experience."
        ]
      }
    ];
    
    

    export const OffersData = [
      {
        "category": "Rs Off",
        "offers": [
          {
            "offerName": "Save Rs 100",
            "offerSubheading": "Get Rs 100 off on orders above Rs 400.",
            "deadline": "2024-09-10",
            "couponCode": "RS100OFF",
            "discountAmount": 100,
            "image": offer1
          },
          {
            "offerName": "Save Rs 200",
            "offerSubheading": "Save Rs 200 on orders over Rs 700.",
            "deadline": "2024-09-15",
            "couponCode": "RS200OFF",
            "discountAmount": 200,
            "image": offer2
          },
          {
            "offerName": "Save Rs 50 on First Order",
            "offerSubheading": "Get Rs 50 off your first order over Rs 250.",
            "deadline": "2024-09-20",
            "couponCode": "FIRST50",
            "discountAmount": 50,
            "image": offer3
          }
        ]
      },
      {
        "category": "Percentage Off",
        "offers": [
          {
            "offerName": "10% Off All Orders",
            "offerSubheading": "Enjoy a 10% discount on all orders over Rs 300.",
            "deadline": "2024-09-12",
            "couponCode": "10PERCENT",
            "discountPercentage": 10,
            "image": offer5
          },
          {
            "offerName": "15% Off on Pizza",
            "offerSubheading": "Get 15% off on all pizzas.",
            "deadline": "2024-09-18",
            "couponCode": "PIZZA15",
            "discountPercentage": 15,
            "image": offer1
          },
          {
            "offerName": "20% Off on Desserts",
            "offerSubheading": "Save 20% on any dessert with your meal.",
            "deadline": "2024-09-25",
            "couponCode": "DESSERT20",
            "discountPercentage": 20,
            "image": offer6
          }
        ]
      },
      {
        "category": "Nearby Area",
        "offers": [
          {
            "offerName": "Free Delivery Within 3 km",
            "offerSubheading": "Enjoy free delivery for orders within 3 km of our location.",
            "deadline": "2024-09-15",
            "couponCode": "FREE3KM",
            "discountAmount": 100,
            "image": offer3
          },
          {
            "offerName": "Discounted Delivery Fee (4-6 km)",
            "offerSubheading": "Get a discounted delivery fee for orders 4-6 km away.",
            "deadline": "2024-09-20",
            "couponCode": "DISCOUNTED4-6KM",
            "discountAmount": 100,
            "image": offer7
          },
          {
            "offerName": "Free Delivery for Orders Above Rs 600",
            "offerSubheading": "Get free delivery on orders over Rs 600, regardless of distance.",
            "deadline": "2024-09-30",
            "couponCode": "FREER600",
            "discountAmount": 100,
            "image": offer1
          }
        ]
      },
      {
        "category": "Buy 1 Get 1",
        "offers": [
          {
            "offerName": "Buy 1 Burger, Get 1 Free",
            "offerSubheading": "Buy one burger and get another one free.",
            "deadline": "2024-09-10",
            "couponCode": "BUY1GET1BURGER",
            "discountPercentage": 50, 
            "image": offer2
          },
          {
            "offerName": "Buy 1 Pizza, Get 1 Small Pizza Free",
            "offerSubheading": "Purchase a large pizza and receive a small pizza for free.",
            "deadline": "2024-09-18",
            "couponCode": "BUY1GET1PIZZA",
            "discountPercentage": 50, 
            "image": offer5
          },
          {
            "offerName": "Buy 1 Get 1 Free on Appetizers",
            "offerSubheading": "Buy one appetizer and get another one free.",
            "deadline": "2024-09-25",
            "couponCode": "BUY1GET1APPETIZER",
            "discountPercentage": 50, 
            "image": offer4
          }
        ]
      }
    ];
    

export const features = [
  {
    title: "Product Packing",
    subtitle: "High-quality and secure packaging to protect your products during shipping.",
    icon: <FaBox />
  },
  {
    title: "24X7 Support",
    subtitle: "Round-the-clock customer support to assist you anytime, day or night.",
    icon: <FaClock />
  },
  {
    title: "Delivery in 5 Days",
    subtitle: "Swift and reliable delivery to ensure your order reaches you within five days.",
    icon: <FaTruck />
  },
  {
    title: "Payment Secure",
    subtitle: "Safe and encrypted payment methods to keep your transactions secure.",
    icon: <FaLock />
  }
];
