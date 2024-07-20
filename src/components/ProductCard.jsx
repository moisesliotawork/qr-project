const ProductCard = ({ product }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <button className="bg-red-600 text-white px-4 py-2 rounded mt-2">
          Información
        </button>
      </div>
      <div className="text-lg font-semibold text-right">
        {product.price.toFixed(2)}$
      </div>
    </div>
  );
};

export default ProductCard;
