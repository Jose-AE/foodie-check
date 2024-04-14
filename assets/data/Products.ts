interface Product {
  name: string;
  price: number;
  image: string;
}
export const ExampleProducts: Product[] = [
  {
    name: "Product 1",
    price: 10.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAOFAnwGi6K6gF5O9ltqB3whTihGSPOJ1gwuUr7VE0XA&s",
  },
  {
    name: "Product 2",
    price: 19.99,
    image: "https://example.com/product2.jpg",
  },
  {
    name: "Product 3",
    price: 7.49,
    image: "https://example.com/product3.jpg",
  },
];
