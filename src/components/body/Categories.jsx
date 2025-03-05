import { Link } from "react-router-dom";
import { FaLaptop, FaGamepad, FaPrint, FaCogs, FaMicrochip, FaTv, FaCamera, FaSpeakerDeck } from "react-icons/fa";

const categories = [
  { name: "Laptop", icon: <FaLaptop />, path: "/laptop" },
  { name: "Gaming", icon: <FaGamepad />, path: "/gaming" },
  { name: "Printer", icon: <FaPrint />, path: "/printer" },
  { name: "Software", icon: <FaCogs />, path: "/software" },
  { name: "GPU", icon: <FaMicrochip />, path: "/gpu" },
  { name: "Monitor", icon: <FaTv />, path: "/monitor" },
  { name: "Camera", icon: <FaCamera />, path: "/camera" },
  { name: "Speaker", icon: <FaSpeakerDeck />, path: "/speaker" },
];

const Categories = () => {
  return (
    
    <div className="mt-1 pb-12">
      <div className="bg-[#CF212B] flex justify-between px-10 text-white text-xs md:text-lg font-semibold py-2">
       <p>Top Categories</p> 
       <p 
          className="underline cursor-pointer"
          onClick={() => window.location.href = "/all-categories"}
        >
          See all categories
        </p>
      </div>
      <div className="bg-white shadow-xs p-4 flex justify-around items-center flex-wrap gap-4">
        {categories.map((category, index) => (
          <Link to={category.path} key={index} className="md:flex flex-col items-center text-center cursor-pointer">
            <div className="text-green-600">{category.icon}</div>
            <span className="text-xs md:text-sm font-medium text-center">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
