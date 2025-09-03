/* eslint-disable react/prop-types */
export default function ProductCard({ image, title, description, price }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4">
      <img src={image} alt={title} className="rounded-xl mb-3 w-full h-48 object-cover" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm mb-2">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-green-600">${price}</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
          Buy
        </button>
      </div>
    </div>
  );
}
