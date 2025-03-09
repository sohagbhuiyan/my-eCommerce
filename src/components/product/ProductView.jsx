import { useState } from "react";
import { useParams } from "react-router-dom";
import { laptop, monitor } from "../../Utils/images";
import toast, { Toaster } from "react-hot-toast";

const productData = {
  "HP M22F 21.5 Inch FHD IPS Monitor": {
    images: [monitor, laptop, monitor],
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
    images: [laptop,monitor,laptop],
    category: "Laptop",
    name: "Dell Inspiron 15 core i5 with Sata SSD",
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
  const [mainImage, setMainImage] = useState(product?.images[0] || "");
  const [zoomStyle, setZoomStyle] = useState({ display: "none" });

  if (!product) {
    return <h2 className="text-center text-xl mt-6">Product Not Found</h2>;
  }

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    setZoomStyle({
      backgroundImage: `url(${mainImage})`,
      backgroundSize: "200%",
      backgroundPosition: `${x}% ${y}%`,
      display: "block",
          });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: "none" });
  };
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex((item) => item.productId === product.productId);
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += quantity; // Update quantity
    } else {
      cart.push({ ...product, quantity });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart
  
    toast.success(`${product.name} added to cart!`, { duration: 2000, position: "top-right" });
  
    // Dispatch a custom event to notify Navbar about cart update
    window.dispatchEvent(new Event("cartUpdated"));
  };
  
  return (
    <div className="p-4 mx-auto flex flex-col md:flex-row gap-10">
      {/* Left Section: Thumbnails + Main Image */}
      <div className="flex md:flex-row flex-col  gap-8 items-center p-2">
        {/* Thumbnails */}
        <div className="flex-col space-y-3 px-8 mb-2">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="thumbnail"
              className="w-16 h-16 border border-gray-500 cursor-pointer"
              onMouseEnter={() => setMainImage(img)}
            />
          ))}
        </div>
        {/* Main Image with Zoom Effect */}
        <div
          className="relative w-96 h-96 border border-gray-400 overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img src={mainImage} alt={product.name} className="w-full h-full" />
          <div
            className="absolute top-0 left-0 w-full h-full cursor-zoom-in"
            style={zoomStyle}
          ></div>
        </div>
      </div>

      {/* Right Section: Product Details */}
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
          <button className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer"  onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default ProductView;
