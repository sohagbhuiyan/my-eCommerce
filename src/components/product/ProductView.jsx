import { useState } from "react";
import { useParams } from "react-router-dom";
import { laptop, monitor } from "../../Utils/images";
import Add from "./Add";

const productData = {
  "HP M22F 21.5 Inch FHD IPS Monitor": {
    image: monitor,
    category: "Monitor",
    name: "HP M22F 21.5 Inch FHD IPS Monitor",
    description: "HP M22F 21.5 Inch FHD IPS Monitor #2E2Y3AA/2D...",
    specialprice: 12300,
    regularprice: 80000,
    discount: 600,
    productId: "91.07.154.108",
    details: {
      displaySize: "24 Inch",
      resolution: "1920x1080",
      panelType: "IPS",
      refreshRate: "75Hz",
      rotatable: "No",
      hdmiPort: "1",
    },
  },
  "Dell Inspiron 15 3511": {
    image: laptop,
    category: "Laptop",
    name: "Dell Inspiron 15 3511",
    description: "Intel Core i5 11th Gen, 8GB RAM, 512GB SSD...",
    specialprice: 75000,
    regularprice: 80000,
    discount: 1500,
    productId: "92.04.120.207",
    details: {
      displaySize: "15.6 Inch",
      resolution: "1920x1080",
      panelType: "IPS",
      refreshRate: "60Hz",
      rotatable: "No",
      hdmiPort: "1",
    },
  },
};

const ProductView = () => {
  const { name } = useParams();
  const product = productData[name];

  const [quantity, setQuantity] = useState(1);
  const [showTest, setShowTest] = useState(false);

  if (!product) {
    return <h2 className="text-center text-xl mt-6">Product Not Found</h2>;
  }

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    setShowTest(true); // Show Test component when Add to Cart is clicked
  };

  return (
    <div className="p-4 max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
      <div className="flex flex-col items-center">
        <img src={product.image} alt={product.name} className="w-80" />
      </div>

      <div className="flex-1">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-sm text-gray-600">Product Id: {product.productId}</p>

        <p className="text-lg font-bold text-red-700 mt-2">
          Special Price: Tk {product.specialprice}
        </p>
        <p className="text-md font-bold text-gray-700 mt-2">
          Regular Price: Tk {product.regularprice}
        </p>
        {product.discount && (
          <p className="text-purple-600 text-sm">Save Tk {product.discount} on online order</p>
        )}

        <button className="bg-red-600 text-white py-2 px-4 rounded mt-4">Check Availability</button>

        <h3 className="mt-4 font-semibold text-lg">Quick Overview</h3>
        <ul className="list-disc pl-6 text-sm text-gray-700">
          <li><strong>Display Size:</strong> {product.details.displaySize}</li>
          <li><strong>Display Resolution:</strong> {product.details.resolution}</li>
          <li><strong>Panel Type:</strong> {product.details.panelType}</li>
          <li><strong>Refresh Rate:</strong> {product.details.refreshRate}</li>
          <li><strong>Rotatable:</strong> {product.details.rotatable}</li>
          <li><strong>HDMI Port:</strong> {product.details.hdmiPort}</li>
        </ul>

        {/* Quantity Selector & Add to Cart */}
        <div className="mt-4 flex items-center gap-2">
          <button className="bg-gray-300 px-3 py-1 rounded" onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button className="bg-gray-300 px-3 py-1 rounded" onClick={increaseQuantity}>+</button>
          <button className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Render Test component conditionally when Add to Cart is clicked */}
      {showTest && <Add product={product} quantity={quantity} />}
    </div>
  );
};

export default ProductView;
