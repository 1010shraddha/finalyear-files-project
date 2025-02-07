// Importing images
import productimg01 from "../image/cabinet1.jpeg";
import productimg02 from "../image/cabinet2.jpeg";
import productimg03 from "../image/cabinet3.jpeg";
import productimg04 from "../image/cabinet4.jpeg";
import productimg05 from "../image/cabinet5.jpeg";
import productimg06 from "../image/cabinet6.jpeg";
import productimg07 from "../image/bench1.jpeg";
import productimg08 from "../image/bench2.jpeg";
import productimg09 from "../image/bench3.jpeg";
import productimg10 from "../image/bench4.jpeg";
import productimg11 from "../image/bench5.jpeg";
import productimg12 from "../image/sofa1.jpeg";
import productimg13 from "../image/sofa2.jpeg";
import productimg14 from "../image/sofa3.jpeg";
import productimg15 from "../image/sofa4.jpeg";
import productimg16 from "../image/sofa5.jpeg";
import productimg17 from "../image/sofa6.jpeg";
import productimg18 from "../image/chair1.jpeg";
import productimg19 from "../image/chair2.jpeg";
import productimg20 from "../image/chair3.jpeg";
import productimg21 from "../image/chair4.jpeg";
import productimg22 from "../image/chair5.jpeg";
import productimg23 from "../image/chair6.jpeg";
import productimg24 from "../image/chair7.jpeg";
import productimg25 from "../image/matress1.jpeg";
import productimg26 from "../image/matress2.jpg";
import productimg27 from "../image/matress3.jpg";
import productimg28 from "../image/matress4.jpg";
import productimg29 from "../image/matress5.jpg";
import productimg30 from "../image/studytable1.jpeg";
import productimg31 from "../image/studytable2.jpeg";
import productimg32 from "../image/studytable3.jpeg";
import productimg33 from "../image/studytable4.jpeg";
import productimg34 from "../image/studytable5.jpeg";
import productimg35 from "../image/studytable6.jpeg";
import productimg36 from "../image/laptoptable1.jpeg";
import productimg37 from "../image/laptoptable2.jpeg";
import productimg38 from "../image/laptoptable3.jpeg";
import productimg39 from "../image/laptoptable4.jpeg";
import productimg40 from "../image/laptoptable5.jpeg";
import productimg41 from "../image/laptoptable6.jpeg";
// import productimg36 from "../image/";





const product = [
  {
    id: "01",
    productName: "Solid Oak Wooden Storage Cabinet",
    imgUrl: productimg01,
    category: "Cabinet",
    price: 24999,
    shortDesc: "A sturdy solid oak storage cabinet with a natural wood finish and two doors.",
    description: "This cabinet is crafted from premium solid oak, ensuring durability and a timeless look. It features two spacious compartments with adjustable shelves, providing ample storage for household essentials. The natural wood grain adds warmth to any living space.",
    reviews: [
      { rating: 4.4, text: "Beautiful solid wood piece! Very durable and worth the price." },
      
    ],
    avgRating: 4.6,
  },
  
  {
    id: "02",
    productName: " Rustic Pine Wood Sideboard",
    imgUrl: productimg02,
    category: "Cabinet",
    price: 29990,
    shortDesc: "A farmhouse-style sideboard made of reclaimed pine wood with a distressed finish.",
    description: "This handcrafted sideboard is made from 100% reclaimed pine wood, giving it a unique rustic charm. It includes three drawers and two cabinets, offering generous storage space. The distressed finish enhances the vintage aesthetic, making it a statement piece in any living room.",
    reviews: [
      { rating: 4.7, text: "Perfect rustic charm! Solid construction and lots of storage." },
      
    ],
    avgRating: 4.5,
  },
  {
    id: "03",
    productName: "Handcrafted Sheesham Wood Sideboard",
    imgUrl: productimg03,
    category: "Cabinet",
    price: 36999,
    shortDesc: "A hand-carved Sheesham wood sideboard with intricate detailing and ample storage.",
    description: "Made from high-quality Sheesham wood, this sideboard features intricate carvings on the cabinet doors. It includes two large cabinets and three drawers for versatile storage. The rich wood grain and handcrafted design make it a standout piece.",
    reviews: [
      { rating: 4.8, text: "Gorgeous craftsmanship! Adds an artistic touch to my living room." },
     
    ],
    avgRating: 5,
  },
  {
    id: "04",
    productName: " Minimalist Teak Wood Storage Cabinet",
    imgUrl: productimg04,
    category: "Cabinet",
    price: 33999,
    shortDesc: "A minimalist teak wood cabinet with a smooth, polished finish and soft-close doors.",
    description: "Designed for modern homes, this teak wood cabinet features clean lines and a sleek, polished surface. It offers two large compartments with soft-close doors for quiet functionality. The teak wood ensures longevity and resistance to wear.",
    reviews: [
      { rating: 4.6, text: "Looks elegant and modern! Very well-made with premium wood." },
      
    ],
    avgRating: 5,
  },
  {
    id: "05",
    productName: "Walnut Finish Wooden Storage Cabinet",
    imgUrl: productimg05,
    category: "Cabinet",
    price: 31499,
    shortDesc: "A mid-century walnut-finish wooden cabinet with tapered legs and sleek handles.",
    description: "This mid-century-inspired cabinet is made from engineered wood with a premium walnut veneer. It features three drawers and two cabinet sections, offering both style and practicality. The brass-accented handles and tapered legs enhance its elegant look.",
    reviews: [
      { rating: 4.5, text: "Stylish and functional! Matches my mid-century decor perfectly." },
    
    ],
    avgRating: 4.7,
  },
  {
    id: "06",
    productName: "Mango Wood Traditional Sideboard",
    imgUrl: productimg06,
    category: "Cabinet",
    price: 38999,
    shortDesc: "A traditional solid mango wood sideboard with a dark wood finish.",
    description: "This solid mango wood sideboard has a rich, dark finish that complements classic and traditional interiors. It offers two large storage cabinets and three deep drawers, providing ample space for household essentials. The brass hardware adds a touch of vintage charm.",
    reviews: [
      { rating: 4.6, text: "A stunning, well-crafted sideboard! The wood quality is top-notch." },
      { rating: 4.9, text: "A stunning, well-crafted sideboard! The wood quality is top-notch." }
    ],
    avgRating: 5,
  },
  {
    id: "07",
    productName: "TEAK WOOD",
    imgUrl: productimg07,
    category: "Bench",
    price: 2500,
    shortDesc: "This  wooden bench can be used as a coffee table, bench in a hallway, living room or bedroom. It is the perfect size for an end of bed bench for a King Size bed. Designed for indoor use only. Made from natural teak wood, so color differences and variations in wood grain are to be expected.",
    description: "Dimensions: 63 x 17 x 18 Material: teak wood Color: natural Max weight capacity: 325 lbs.This item requires freight shipping",
    reviews: [
      { rating: 4.6, text: "Smooth surface" },
      { rating: 4.9, text: "Perfect design" }
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: " Heritage Sheesham Wood Bench",
    imgUrl: productimg08,
    category: "Bench",
    price: 10000,
    shortDesc: " A sturdy Sheesham wood bench with cushion",
    description: "Crafted from high-quality Sheesham wood, this bench offers both style and functionality.The natural wood grain finish enhances its rustic appeal.",
    reviews: [
      { rating: 4.6, text: "Beautiful woodwork and comfortable " },
      { rating: 4.9, text: "" }
    ],
    avgRating: 4.2,
  },
  {
    id: "09",
    productName: "Classic Sheesham Wood School Bench",
    imgUrl: productimg09,
    category: "Bench",
    price: 7999,
    shortDesc: " A sturdy Sheesham wood school bench with a smooth finish.",
    description: "This durable school bench is crafted from high-quality Sheesham wood, ensuring long-lasting strength. It features a spacious seating area with a smooth wooden surface, making it ideal for classrooms. The solid wood construction provides stability and comfort for students.",
    reviews: [
      { rating: 4.6, text: "Strong and durable! Perfect for long study hours" },
      { rating: 4.9, text: "" }
    ],
    avgRating: 4.7,
  },
  {
    id: "10",
    productName: "Urban Oakwood Comfort Bench",
    imgUrl: productimg10,
    category: "Bench",
    price: 12500,
    shortDesc: "A simple yet elegant oak wood bench with a padded seat for extra comfort.",
    description: "This bench features a solid oak wood frame with a soft cushioned seat upholstered in high-quality fabric. Its minimalist design makes it ideal for entryways, bedrooms, or living rooms, providing both comfort and a stylish touch.",
    reviews: [
      { rating: 4.6, text: "Very comfortable and looks great in my hallway" },
      { rating: 4.9, text: "" }
    ],
    avgRating: 4.7,
  },
  {
    id: "11",
    productName: " Imperial Mango Wood Carved Bench",
    imgUrl: productimg11,
    category: "Bench",
    price: 11600,
    shortDesc: "bench with intricately carved leg.",
    description: "olid mango wood, featuring beautifully carved legs that add a touch of vintage charm. Its robust build ensures durability",
    reviews: [
      { rating: 4.6, text: "Stunning craftsmanship!" },
      { rating: 4.9, text: "" }
    ],
    avgRating: 4.7,
  },
  {
    id: "12",
    productName: "Heritage Sheesham Wood 2-Seater Sofa",
    imgUrl: productimg12,
    category: "Sofa",
    price: 35999,
    shortDesc: "* A sturdy Sheesham wood sofa with premium cushioned seating.",
    description: "Crafted from high-quality Sheesham wood, this 2-seater sofa combines elegance and durability. The solid wood frame ensures long-lasting strength, while the thick, high-density cushions provide superior comfort. The polished wood finish adds warmth to any living room decor.",
    reviews: [
      { rating: 4.8, text: "Beautifully carved and extremely durable! Worth the investment" },
      { rating: 4.9, text: "" }
    ],
    avgRating: 4.7,
  },

  {
    id: "13",
    productName: "Classic Sofa with White Cushions",
    imgUrl: productimg13,
    category: "Sofa",
    price:  39999,
    shortDesc: " A mid-century wooden sofa with thick white cushions",
    description: "Inspired by mid-century designs, this wooden sofa features a rich walnut finish and premium white cushions for a cozy seating experience. The armrests and frame provide a stylish contrast to the soft upholstery.",
    reviews: [
      { rating: 4.6, text: "Sturdy and comfortable! The cushions are very sofa" },
      { rating: 4.9, text: "" }
    ],
    avgRating: 4.7,
  },

  {
    id: "14",
    productName: "Urban Oakwood 3-Seater Sofa with Navy Blue Padded Seats",
    imgUrl: productimg14,
    category: "Sofa",
    price: 35999,
    shortDesc: " A contemporary oakwood sofa with deep navy blue cushions.",
    description: "Designed for modern homes, this 3-seater sofa is built with a strong oakwood frame and thick navy blue fabric cushions. The sleek design and high-density foam make it both stylish and comfortable",
    reviews: [
      { rating: 4.5, text: "Minimalist and stylish! The blue cushions are soft yet firm" },
      { rating: 4.9, text: "" }
    ],
    avgRating: 4.3,
  },

  {
    id: "15",
    productName: "Royal Teakwood 2-Seater Sofa with Plush Dark Grey Upholstery",
    imgUrl: productimg15,
    category: "Sofa",
    price: 31499,
    shortDesc: "   A premium teak wood sofa with soft dark grey cushions.",
    description: "This 2-seater sofa features a beautifully polished teakwood frame with thick, high-density foam cushions covered in dark grey fabric. Perfect for modern or classic interiors, it offers superior durability and style.",
    reviews: [
      { rating: 4.8, text: "Feels luxurious and is extremely comfortable" },
      { rating: 4.9, text: "" }
    ],
    avgRating: 4.5,
  },


  {
    id: "16",
    productName: "Imperial Mango Wood 2-Seater Sofa with Light Grey Linen Cushions",
    imgUrl: productimg16,
    category: "Sofa",
    price: 31499,
    shortDesc: "  A handcrafted mango wood sofa with high-density light grey cushion",
    description: "Designed for elegance and durability, this sofa is made from solid mango wood and features soft, breathable light grey linen cushions. The handcrafted wooden frame adds character to any living space.",
    reviews: [
      { rating: 4.8, text: "Love the craftsmanship! The light grey fabric is easy to clean and looks great" },
      { rating: 4.9, text: "" }
    ],
    avgRating: 4.5,
  },



  {
    id: "17",
    productName: "Royal Sheesham Wood Traditional Sofa with Cream Cushions",
    imgUrl: productimg17,
    category: "Sofa",
    price: 42999,
    shortDesc: "A hand-carved Sheesham wood sofa with elegant cream cushions.",
    description: "This stunning traditional sofa is crafted from solid Sheesham wood with intricate carvings on the arms and backrest. The soft cream-colored cushions provide a luxurious and comfortable seating experience, making it ideal for classic interiors.",
    reviews: [
      { rating: 4.8, text: "Beautiful craftsmanship! The cream cushions give a regal look" },
      { rating: 4.9, text: "" }
    ],
    avgRating: 4.6,
  },
  {
    id: "18",
    productName: " Modern Cane and Wood Accent Chair with Cream Cushion",
    imgUrl: productimg18,
    category: "Chair",
    price: 12999,
    shortDesc: " A stylish wooden chair with a woven cane backrest and a soft cream cushion.",
    description: "This contemporary accent chair is crafted from high-quality wood with a natural finish. The curved backrest features handwoven cane detailing, giving it a sophisticated and airy feel. The seat is cushioned with a soft cream fabric, making it comfortable for long seating. Ideal for living rooms, reading nooks, or lounge areas.",
    reviews: [
      { rating: 4.8, text: "Elegant design and very comfortable. Looks perfect in my living room!" },
      { rating: 4.9, text: "" }
    ],
    avgRating: 4.4,
  },
  {
    id: "19",
    productName: "Traditional Hand-Carved Wooden Armchair with Cream Cushion",
    imgUrl: productimg19,
    category: "Chair",
    price: 10499,
    shortDesc: "A solid wood armchair with intricate carvings and a plush cream cushion.",
    description: "This vintage-style wooden armchair is crafted with rich Sheesham wood and features intricate hand-carved detailing on the backrest and armrests. The turned wooden legs add a classic touch, while the cream cushion provides comfort. Perfect for traditional living spaces, heritage homes, or as a statement piece in any room.",
    reviews: [
      { rating: 4.8, text: "Beautiful craftsmanship! The chair feels sturdy and luxurious." },
      { rating: 4.9, text: "" }
    ],
    avgRating: 4.7,
  },
  {
    id: "20",
    productName: "Oak Elegance Chair",
    imgUrl: productimg20,
    category: "Chair",
    price: 8499,
    shortDesc: "Exquisitely crafted chair made from solid oak.",
    description: "The Oak Elegance Chair features a minimalist design that highlights the natural beauty of oak wood. Handcrafted with attention to detail, its ergonomic form offers both style and comfort. Perfect for modern and traditional living rooms, this chair combines durability with an elegant finish that complements any déco",
    reviews: [
      { rating: 4.8, text: "Absolutely stunning craftsmanship with superb comfort. A great addition to our living room" },
      { rating: 4.9, text: "" }
    ],
    avgRating: 4.7,
  },
  {
    id: "21",
    productName: " Modern Heritage Chair",
    imgUrl: productimg21,
    category: "Chair",
    price: 10499,
    shortDesc: "A sleek fusion of modern design with classic wooden detailing.",
    description: "The Modern Heritage Chair offers a contemporary silhouette enhanced by traditional wood craftsmanship. Featuring clean lines and a smooth, polished finish, it is designed to stand out in modern living rooms while maintaining a nod to timeless design traditions. Its balanced form ensures comfort during extended seating",
    reviews: [
      { rating: 4.8, text: "A modern twist on a classic design. Excellent quality and very comfortable." },
      { rating: 4.9, text: "" }
    ],
    avgRating: 4.7,
  },
  {
    id: "22",
    productName: " Vintage Walnut Accent Chair",
    imgUrl: productimg22,
    category: "Chair",
    price: 15199,
    shortDesc: "A luxurious accent chair made from rich walnut wood.",
    description: "This Vintage Walnut Accent Chair exudes elegance with its deep, warm tones and intricate wood grain patterns. Perfect for adding a touch of sophistication, it features a high back and supportive armrests. Whether placed in a formal living room or a stylish lounge area, its classic design elevates the space.",
    reviews: [
      { rating: 4.8, text: "Stunning piece that brings both comfort and a timeless look to our home." },
      { rating: 4.9, text: "" }
    ],
    avgRating: 4.7,
  },
  {
    id: "23",
    productName: " Wooden Rocking Chair with Wheel Design",
    imgUrl: productimg23,
    category: "Chair",
    price: 13499,
    shortDesc: "Elegant Design: Handcrafted wooden rocking chair with intricate carvings and a unique wheel-like design on the sides.",
    description: "Comfortable Seating: Features a woven backrest and seat for enhanced comfort and style Sturdy Construction: Solid wood construction ensures long-lasting durability and stability.Versatile Use: Perfect for living rooms, bedrooms, patios, or as a statement piece in any room.",
    reviews: [
      { rating: 4.2, text: " Excellent quality and very comfortable." },
      { rating: 4.9, text: "" }
    ],
    avgRating: 4.7,
  },
  {
    id: "24",
    productName: " Wood Vintage Chair Natural Brown colour",
    imgUrl: productimg24,
    category: "Chair",
    price: 15825,
    shortDesc: ".This Sheesham Wood Vintage Sofa Chair is a versatile addition to your home.",
    description: "Meet our special Sheesham Wood Vintage Sofa Chair in a Natural Brown Color –  This chair is made from really good Sheesham wood, and it's here to add warmth and a touch of class to your home.The natural brown color of the Sheesham wood gives it a rustic look, making it fit in well with any kind of home decoration. The chair has an old-fashioned design that brings a lot of character, and it's strong and durable, so it will last a long time.Material: Acacia wood, stone vinner in door, glass and iron legs,Dimensions: Dimensions in centimeter L 65 x D 70 x H 84 cm Package Contains: 1 Pc Chair",
    reviews: [
      { rating: 4.2, text: " Excellent quality and very comfortable." },
      { rating: 4.9, text: "" }
    ],
    avgRating: 4.1,
  },
  {
    id: "25",
    productName: "Single Bed Mattress ",
    imgUrl: productimg25,
    category: "Matress",
    price: 1025,
    shortDesc: "Multicolor Check Mattress with pillow",
    description: "72X36X5 Inches or 3X6 feet ,Cotton Mattress  (L x W: 72 inch x 36 inch)",
    reviews: [
      { rating: 3.6, text: "soft matress" },
      { rating: 4, text: "" }
    ],
    avgRating: 4,
  },
  {
    id: "26",
    productName: "Soft Cotton Multicolour Thick Mattress / Gadda",
    imgUrl: productimg26,
    category: "Matress",
    price: 1225,
    shortDesc: " 6 inch King Cotton Mattress  (L x W: 72 inch x 46 inch)",
    description: "Length: 72 inch, Width: 46 inch, Thickness: 6 inch (6 ft x 3 ft 10 in x 6 in)Support Type: Cotton,Comfort Layer: Cotton,Mattress Features: Orthopedic Mattress",
    reviews: [
      { rating: 3.1, text: "Decent quality, but could be softer." },
      { rating: 4, text: "Comfortable and good value for money." }
    ],
    avgRating: 4,
  },
  {
    id: "27",
    productName: "Single Cotton Mattress  (L x W: 72 inch x 36 inch)",
    imgUrl: productimg27,
    category: "Matress",
    price: 1175,
    shortDesc: "Heavy Border Fiber Cotton Mattress For Floor & Bed Size(Single 72x36x5) 5 inch ",
    description: "Length: 72 inch, Width: 36 inch, Thickness: 5 inch (6 ft x 3 ft x 5 in),Support Type: Cotton,Comfort Layer: Cotton,Mattress Features: Reversible Mattress, Europedic Mattress, Foldable",
    reviews: [
      { rating: 4, text: " Excellent quality and very comfortable." },
      { rating: 3.4, text: "Good for single use, but slightly firm." }
    ],
    avgRating: 4.1,
  },
  {
    id: "28",
    productName: "Queen Cotton Mattress  ",
    imgUrl: productimg28,
    category: "Matress",
    price: 1050,
    shortDesc: "(L x W: 72 inch x 36 inch) 5INCH 6x3 5 inch",
    description: "Length: 72 inch, Width: 36 inch, Thickness: 5 inch (6 ft x 3 ft x 5 in),Support Type: Cotton,Comfort Layer: Cotton,Mattress Features: Foldable",
    reviews: [
      { rating: 3.5, text: " Excellent quality and very comfortable." },
      { rating: 3, text: "Average comfort, but durable." }
    ],
    avgRating: 3.5,
  },
  {
    id: "29",
    productName: "RAJASTHAN HANDLOOM Soft Cotton Multicolour",
    imgUrl: productimg29,
    category: "Matress",
    price: 1229,
    shortDesc: " 6X4ft Mattress / Gadda 6 inch King Cotton Mattress  (L x W: 72 inch x 48 inch)",
    description: "Length: 72 inch, Width: 48 inch, Thickness: 6 inch (6 ft x 4 ft x 6 in),Support Type: Cotton,Comfort Layer: Cotton,Mattress Features: Foldable",
    reviews: [
      { rating: 3.1, text: " Excellent quality and very comfortable." },
      { rating: 3.4, text: "" }
    ],
    avgRating: 3.5,
  },
  {
    id: "30",
    productName: " Sheesham Wood Office & Study Table ",
    imgUrl: productimg30,
    category: "Study Table",
    price: 15725,
    shortDesc: " Multi-Shelves, Door, and Drawer Storag| Solid Wood Multipurpose Table  (Free Standing, Finish Color - Honey Finish, Pre-assembled).",
    description: "Material: Rosewood (Sheesham),Configuration: Straight,Height x Width: 111.76 cm x 114.3 cm (3 ft 7 in x 3 ft 9 in),Storage Included,Pre Assembled (Ready to Use)",
    reviews: [
      { rating: 4.1, text: "Great storage space for books" },
      { rating: 4, text: "Sturdy build and elegant finish." }
    ],
    avgRating: 4.2,
  },
  {
    id: "31",
    productName: "Wood Study Table for Adults | Wooden Desk Computer Table for Home ",
    imgUrl: productimg31,
    category: "Study Table",
    price: 8590,
    shortDesc: "The study table comes with a basic assembly requirement, allowing you to personalize the setup according to your preferences.",
    description: "Product Dimensions	55D x 100W x 99H Centimeters,Colour	Natural Finish,Style	Traditional,Base Material	Wood",
    reviews: [
      { rating: 4, text: "Well-proportioned height and spacious surface for a comfortable working experience." },
      { rating: 3.9, text: "Excellent craftsmanship and smooth surface." }
    ],
    avgRating: 4.1,
  },
  {
    id: "32",
    productName: "Wood Study Table for Students",
    imgUrl: productimg32,
    category: "Study Table",
    price: 12749,
    shortDesc: "Writing Tables Office Desk with 4 Drawer Storage for Home Living Room Library (Honey Finish)",
    description: "Brand	WOODSTAGE,Product Dimensions	55.9D x 116.8W x 76.2H Centimeters,Colour	Honey Finish,Style	Modern,Base Material	Wood",
    reviews: [
      { rating: 4.1, text: "Easy-glide drawers ensure smooth opening and closing. Some models also come with lockable drawers for added security." },
      { rating: 3.8, text: "Spacious and well-designed for students." }
    ],
    avgRating: 4,
  },
  {
    id: "33",
    productName: "Wood Wall Mounted Folding Writing Table",
    imgUrl: productimg33,
    category: "Study Table",
    price: 15125,
    shortDesc: "This study table is a great addition to your living space which adds a touch of elegance to your modern decor theme.",
    description: "Product Dimensions	22.9D x 55.9W x 149.9H Centimeters,Colour	Natural Honey Finish,Style	Modern,Base Material	Wood",
    reviews: [
      { rating: 4.2, text: " Fits In Your Space, Fits On Your Budge" },
      { rating: 4.1, text: "Natural Honey Finish" }
    ],
    avgRating: 4,
  },
  {
    id: "34",
    productName: "study table with its natural finish",
    imgUrl: productimg34,
    category: "Study Table",
    price: 10825,
    shortDesc: "natural finish and simple, clean structure is the best addition to your office. Made with high quality acacia wood, this table has a simple structure that makes it comfortable and convenient to use.",
    description: "Dimensions: 145 L X 60 W X 76 H cm,Material: Acacia wood,Finish:Natural finish on wood",
    reviews: [
      { rating: 4.2, text: "Acacia wood is known for its strength and resistance to wear, ensuring longevity. " },
      { rating: 4.9, text: "" }
    ],
    avgRating: 4.1,
  },
  {
    id: "35",
    productName: "Floor Table - Natural",
    imgUrl: productimg35,
    category: "Study Table",
    price: 3825,
    shortDesc: "This Sheesham Wood Vintage Sofa Chair is a versatile addition to your home.",
    description: "Dimensions (inches): 19.6 x 15 x 12.4,Recommended Age: 2 - 9 Years,Product Weight (kg): 4",
    reviews: [
      { rating: 3.5, text: "Compact and easy to use for kids." },
    { rating: 4, text: "Durable and lightweight." }
    ],
    avgRating: 3.9,
  },
  {
    id: "36",
    productName: "Floor Table - Natural",
    imgUrl: productimg36,
    category: "Laptop Table",
    price: 1225,
    shortDesc: " 2 Compartments Brown Genuine Leather Writing Desk Adjustable Height Table Top Elevator ",
    description: "Dimensions (inches): 19.6 x 15 x 12.4,Recommended Age: 2 - 9 Years,Product Weight (kg): 4",
    reviews: [
      { rating: 3.4, text: "Good for small spaces and easy to move." },
      { rating: 3.5, text: "Solid construction, perfect for working from bed." }
    ],
    avgRating: 3.2,
  },
  {
    id: "37",
    productName: "Rusteak Wood Portable Laptop Table ",
    imgUrl: productimg37,
    category: "Laptop Table",
    price: 5825,
    shortDesc: "Finish Color - Brown, Pre Assembled",
    description: "Width 60.96 cm,Height 66.04 cm,Depth 45.72 cm,Weight 44 kg",
    reviews: [
      { rating: 3.6, text: "Premium feel but slightly heavy." },
    { rating: 4, text: "Perfect height and very stable." }
    ],
    avgRating: 3.4,
  },
  {
    id: "38",
    productName: "Wall Mounted Space Saving Desk",
    imgUrl: productimg38,
    category: "Laptop Table",
    price: 3825,
    shortDesc: "Invisible Bed Foldable Table with Ledge Study Table/Home Office/Laptop Table/Workstation",
    description: "Height x Width: 40.8 cm x 67.2 cm (1 ft 4 in x 2 ft 2 in),Our desk can be used a multipurpose shelf/ table in your bedroom, study room, kitchen, or living room space",
    reviews: [
      { rating: 3.2, text: "Saves space and easy to install." },
      { rating: 4, text: "Looks elegant and highly functional." }
    ],
    avgRating: 3.9,
  },
  
  {
    id: "39",
    productName: "Rosewood Wood Portable Laptop Table ",
    imgUrl: productimg39,
    category: "Laptop Table",
    price: 999,
    shortDesc: "Finish Color - Teak, Pre Assembled",
    description: "It can be used as laptop table, bed table, kids table etc.Dimensions:Width 43.18 cm,Height 20.32 cm,Depth 35.56 cm,Weight2.8 kg",
    reviews: [
      { rating: 3.2, text: "Good for casual use, but a bit small." },
      { rating: 3.6, text: "Nice finishing and compact design." }
    ],
    avgRating: 3.6,
  },
  {
    id: "40",
    productName: "Solid Wood Portable Laptop table",
    imgUrl: productimg40,
    category: "Laptop Table",
    price: 2125,
    shortDesc: "Color: Walnut,Material: Teak Wood Base & Top",
    description: "Foldable legs for easy storage and portability.,Smooth surface for comfortable laptop usage, writing, or eating.Sturdy structure with reinforced joints for stability.",
    reviews: [
      { rating: 4.2, text: "Elegant wood finish, sturdy build." },
      { rating: 4.9, text: "Portable and ideal for a laptop workstation." }
    ],
    avgRating: 3.4,
  },
  
  {
    id: "41",
    productName: "Solid Wood Portable Laptop Table with Compartment in Honey Oak Finish",
    imgUrl: productimg41,
    category: "Laptop Table",
    price: 2999,
    shortDesc: "This portable table is crafted from solid mango wood and features a warm honey oak finish",
    description: "Material: Solid Mango Wood,Finish: Honey OakDimensions: Height: 23 cm, Width: 61 cm, Depth: 36 cmWeight: 2.5 kgDesign: Foldable legs for convenient storage; smooth surface suitable for laptops, writing, or dining",
    reviews: [
      { rating: 4, text: "Elegant wood finish, sturdy build." },
      { rating: 3.8, text: "Compact, stylish, and very practical." }
    ],
    avgRating: 4,
  },
  


];

export default product;
