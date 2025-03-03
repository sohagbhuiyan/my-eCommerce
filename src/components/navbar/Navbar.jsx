import { useState } from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaExchangeAlt,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const menuItems = [
  { name: "Home" },
  { name: "Laptop", subMenu: ["HP", "Acer", "Asus", "Dell", "Walton"] },
  { name: "Desktop & Server", subMenu: ["Gaming PC", "Workstation", "Server"] },
  { name: "Gaming", subMenu: ["Consoles", "Accessories", "Games"] },
  { name: "Monitor", subMenu: ["Samsung", "HP", "Dell"] },
  { name: "Tablet PC", subMenu: ["Samsung", "HP", "Dell"] },
  { name: "Printer", subMenu: ["Samsung", "HP", "Dell", "Tep", "QWD"] },
  { name: "Camera", subMenu: ["Canon", "Sony", "MSI"] },
  { name: "Security System", subMenu: ["XYZ", "ABC", "WFDSD"] },
  { name: "Network", subMenu: ["SDVX", "DFDF", "Ddfell", "ABC", "SFDSD"] },
  { name: "Sound System", subMenu: ["WCSAC", "Tep", "QWD"] },
  { name: "Office Items", subMenu: ["CSDD", "TGVE", "BEFxs"] },
  { name: "Accessories", subMenu: ["CEW", "BGD", "NTgf", "ABC", "AFDSD"] },
  { name: "Software", subMenu: ["ZEDSA", "MJHg", "HFASD"] },
  { name: "Daily Life", subMenu: ["WDWD", "TWWW", "VDSE"] },
  { name: "Store", subMenu: ["OPhg", "Crsd", "Dell"] },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [desktopSubmenuOpen, setDesktopSubmenuOpen] = useState(null);

  return (
    <div className="bg-[#CF212B] text-white">
      {/* Top Bar */}
      
      <div className="flex items-center justify-center space-x-6 px-6 py-2 text-sm">
        <span className="hover:text-gray-300 cursor-pointer">Big Sale</span>
        <span className="hover:text-gray-300 cursor-pointer">Offers</span>
        <span className="hover:text-gray-300 cursor-pointer">System Builder</span>
        <span className="hover:text-gray-300 cursor-pointer">Customer Service</span>
      </div>
      <div className="flex items-center justify-between px-4 py-3 md:px-6 lg:px-12">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-xl"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="flex-1 flex items-center justify-center gap-3 px-2 md:gap-10">

          <h1 className="text-sm sm:text-2xl font-bold md:text-4xl text-center">SaverFavor</h1>

          <div className="relative bg-white w-full max-w-xs sm:max-w-xs md:max-w-lg lg:max-w-xl rounded-md flex">
            <input
              type="text"
              placeholder="Enter Your Keyword..."
              className="w-full px-2 text-sm md:text-lg sm:px-4 text-black rounded-md outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && console.log("Searching:", searchQuery)}
            />
            <button
              className="p-1 sm:p-2 bg-green-500 hover:bg-green-600 rounded-r-md"
              onClick={() => console.log("Searching:", searchQuery)}
            >
              <AiOutlineSearch className="text-white text-xl" />
            </button>
          </div>

          <div className="hidden md:flex items-center justify-center space-x-4">
            <FaShoppingCart className="text-lg cursor-pointer hover:text-gray-300" />
            <FaHeart className="text-lg cursor-pointer hover:text-gray-300" />
            <FaExchangeAlt className="text-lg cursor-pointer hover:text-gray-300" />
            <FaUser className="text-lg cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center justify-center space-x-2 px-2 py-3 text-sm md:space-x-4 md:px-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="relative cursor-pointer group"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() => setDesktopSubmenuOpen(desktopSubmenuOpen === index ? null : index)}
          >
            <span className="hover:text-gray-300">{item.name}</span>

            {item.subMenu && (
              <div
                className={`${
                  (hoverIndex === index || desktopSubmenuOpen === index) ? 'block' : 'hidden'
                } absolute left-0 mt-2 w-48 bg-gray-300 text-black shadow-lg rounded-md`}
              >
                {item.subMenu.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {subItem}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu (Sidebar) */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-48 bg-gray-900 text-white transform ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-4 right-4 text-xl cursor-pointer"
        >
          <FaTimes />
        </button>

        {/* Mobile Menu Title */}
        <h2 className="text-sm font-bold text-green-400 p-4">Items</h2>

        {/* Mobile Menu Items */}
        <div className="flex flex-col space-y-2 px-4 overflow-y-auto pb-10 h-[calc(100vh-60px)]">
          {menuItems.map((item, index) => (
            <div key={index} className="py-2 text-xs border-b border-gray-700">
              {/* Parent Menu Item */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  setMobileSubmenuOpen(mobileSubmenuOpen === index ? null : index)
                }
              >
                <span>{item.name}</span>
                {item.subMenu && <span>{mobileSubmenuOpen === index ? "▲" : "▼"}</span>}
              </div>

              {/* Mobile Submenu */}
              {item.subMenu && mobileSubmenuOpen === index && (
                <div className="ml-0 mt-2">
                  {item.subMenu.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className="text-white text-xs bg-gray-700 p-1 cursor-pointer hover:bg-gray-600"
                    >
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation (Only on Mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#CF212B] p-3 flex justify-around items-center text-white">
        <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-300" />
        <FaHeart className="text-xl cursor-pointer hover:text-gray-300" />
        <FaExchangeAlt className="text-xl cursor-pointer hover:text-gray-300" />
        <FaUser className="text-xl cursor-pointer hover:text-gray-300" />
      </div>
    </div>
  );
};

export default Navbar;
