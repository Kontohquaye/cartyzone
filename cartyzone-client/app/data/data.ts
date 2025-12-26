import { urls } from "./hero_images";

const date = new Date(Date.now());
export const products = [
  {
    name: "apple juic",
    price: 4.99,
    rating: 3.4,
    instock: 300.5,
    category: "Phones",
    created_At: date,
    edited_At: date,
    _id: "1",
    product: urls[0],
    description:
      "Freshly pressed apple juice made from carefully selected, ripe apples to deliver a naturally sweet and refreshing taste. This juice is free from artificial flavors, preservatives, and added sugars, making it a healthy choice for all ages. Rich in essential vitamins and antioxidants, it helps keep you hydrated and energized throughout the day. Enjoy it chilled on its own or pair it with meals for a refreshing boost.",
  },
  {
    name: "Car",
    price: 21200.0,
    rating: 4.5,
    instock: 3,
    category: "Cars",
    created_At: date,
    edited_At: date,
    _id: "2",
    product: urls[1],
    description:
      "A reliable and well-engineered car designed to deliver comfort, performance, and safety in every drive. It features a modern interior with ergonomic seating, advanced infotainment, and efficient climate control. Built with fuel efficiency in mind, this car offers smooth handling and responsive braking, making it suitable for both city commutes and long-distance travel. Ideal for drivers looking for a balance of style, reliability, and practicality.",
  },
  {
    name: "A selling Beats Crops",
    price: 299.99,
    rating: 4,
    instock: 30,
    category: "Phones",
    created_At: date,
    edited_At: date,
    _id: "3",
    product: urls[2],
    description:
      "Premium Beats headphones crafted to deliver deep bass, clear mids, and crisp highs for an immersive audio experience. Designed for all-day comfort, they feature soft ear cushions and an adjustable fit. With durable construction and reliable performance, these headphones are perfect for music lovers, workouts, travel, and everyday use. Enjoy superior sound quality whether you're listening to music, watching movies, or taking calls.",
  },
  {
    name: "Mine",
    price: 49.99,
    rating: 2.5,
    instock: 30,
    category: "Telecel",
    created_At: date,
    edited_At: date,
    _id: "4",
    product: urls[1],
    description:
      "A practical and easy-to-use product designed for everyday convenience. Built with simplicity and reliability in mind, it offers consistent performance for routine tasks. Its straightforward design makes it suitable for a wide range of users, while its durable construction ensures long-term usability. A solid choice for those seeking functionality without unnecessary complexity.",
  },
  {
    name: "Hill figure",
    price: 129.99,
    rating: 4,
    instock: 30,
    category: "Apple Linses",
    created_At: date,
    edited_At: date,
    _id: "5",
    product: urls[0],
    description:
      "A thoughtfully designed product that combines style, comfort, and practicality. Made with quality materials, it offers a refined look while maintaining durability for daily use. Its lightweight design ensures ease of handling, while its modern aesthetic complements a wide range of setups. Ideal for users who value both performance and visual appeal in their accessories.",
  },
  {
    name: "Think Pad",
    price: 899.99,
    rating: 4,
    instock: 1,
    category: "Pipes",
    created_At: date,
    edited_At: date,
    _id: "6",
    product: urls[2],
    description:
      "A powerful and versatile laptop designed for professionals, students, and creators. Equipped with fast processing capabilities and a responsive keyboard, it supports efficient multitasking and long working sessions. The durable build ensures reliability, while the sleek and portable design makes it easy to carry anywhere. Ideal for productivity, entertainment, and everyday computing needs.",
  },
];
