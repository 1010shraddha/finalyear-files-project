// Importing images
import productimg01 from "../image/cabinet1.jpeg";
import productimg02 from "../image/cabinet2.jpeg";
import productimg03 from "../image/cabinet3.jpeg";
import productimg04 from "../image/cabinet4.jpeg";
import productimg05 from "../image/cabinet5.jpeg";
import productimg06 from "../image/cabinet6.jpeg";
import productimg07 from "../image/armchair07.jpg";
import productimg08 from "../image/chair1.jpg";


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
    avgRating: 5,
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
    productName: "Wooden Rocking Chair",
    imgUrl: productimg07,
    category: "Chair",
    price: 10500,
    shortDesc: "Polished Teak Wood Rocking Chair",
    description: "Armrest Available With Armrest Material, Teak Wood Surface Finish Polished, Chair Type-Rocking Chair, Back Type-Low Back",
    reviews: [
      { rating: 4.6, text: "" },
      { rating: 4.9, text: "" }
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "Wooden Rocking Chair",
    imgUrl: productimg08,
    category: "Chair",
    price: 10500,
    shortDesc: "Polished Teak Wood Rocking Chair",
    description: "Armrest Available With Armrest Material, Teak Wood Surface Finish Polished, Chair Type-Rocking Chair, Back Type-Low Back",
    reviews: [
      { rating: 4.6, text: "" },
      { rating: 4.9, text: "" }
    ],
    avgRating: 4.7,
  },

];

export default product;
