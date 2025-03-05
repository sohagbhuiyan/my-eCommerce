import { useState } from "react";

const CollectionCard = ({ image, category, name, price, discount, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="border border-gray-300 rounded-lg p-3 shadow-md hover:shadow-lg transition duration-300 bg-white cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative p-2 overflow-hidden rounded-md">
        <img 
          src={image} 
          alt={name} 
          className={`w-full h-40 object-cover rounded-md transition-transform duration-400 ${
            isHovered ? "scale-120" : "scale-100"
          }`}
        />
      </div>
      
      <div className="mt-2 text-center ">
        <h2 className="text-sm font-bold text-gray-800">{category}</h2>
        <p className="text-xs text-gray-600">{description}</p>
        <p className="text-lg font-bold text-black mt-1">Tk {price}</p>
        {discount && (
          <p className="text-purple-600 text-sm font-semibold">
            Save Tk {discount} on online order
          </p>
        )}
      </div>
    </div>
  );
};

export default CollectionCard;
