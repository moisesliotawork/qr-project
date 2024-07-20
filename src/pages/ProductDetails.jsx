import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../controllers/product";
import { FaArrowLeft } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProductById(id);
      setProduct(productData);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="text-red-600 mb-4 flex items-center"
      >
        <FaArrowLeft className="mr-2" />
        Volver
      </button>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-bold">{product.type}</p>
          <p className="text-lg font-bold text-red-600">
            {product.price.toFixed(2)}$
          </p>
        </div>
        <p className="mb-4">{product.description}</p>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
          Hacer pedido
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
