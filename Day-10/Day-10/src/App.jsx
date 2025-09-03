import ProductCard from "./components/ProductCard";

export default function App() {
  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      description: "High quality sound with noise cancellation.",
      price: 59.99,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Smart Watch",
      description: "Track your fitness with style and comfort.",
      price: 79.99,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Gaming Mouse",
      description: "Precision and comfort for long gaming sessions.",
      price: 39.99,
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
