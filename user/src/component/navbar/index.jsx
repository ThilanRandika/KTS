import { NavLink } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";

const linkClassNames =
  "w-[125px]  pt-[2px]  pl-[6px]  pr-[6px]  pb-[7px] flex justify-center items-center border-l-[1px]";
function Navbar() {
  return (
    <div className="bg-main_blue h-[60px] flex justify-between font-roboto text-white">
      <div>
        <img
          src="https://kdu.ac.lk/wp-content/uploads/2023/06/kdu-logo2.png.webp"
          alt=""
          className="h-[60px]"
        />
      </div>
      <div className="mt-[14px] flex items-center text-[17px] font-medium">
        <NavLink to="/">
          <div className={linkClassNames}>Home</div>
        </NavLink>
        <NavLink to="/routes">
          <div className={linkClassNames}>Routes</div>
        </NavLink>
        <NavLink to="/journey">
          <div className={linkClassNames}>Journey</div>
        </NavLink>
        <NavLink to="/booking">
          <div className={linkClassNames}>Booking</div>
        </NavLink>
        <NavLink to="/prices">
          <div className={linkClassNames}>Prices</div>
        </NavLink>
        <NavLink to="/contact-us">
          <div className={`${linkClassNames} border-r-[1px]`}>Contact Us</div>
        </NavLink>
      </div>
      <div className="font-roboto_slab flex items-center mr-3 gap-3">
        <img
          src="https://res.cloudinary.com/dnoobzfxo/image/upload/v1701265468/Danushi-Uthpala_or3qbd.jpg"
          alt=""
          className="h-[60px]"
        />
        <div>
          <p>IT21038914</p>
          <p className="text-[17px]">P.L.Dhanushi uthpala</p>
        </div>
        <div className="relative ml-2">
          <IoIosNotifications className="text-[23px]" />
          <span className="absolute top-[-4px] right-[-3px] bg-red-600 text-white w-4 h-4 text-xs flex  items-center justify-center rounded-full">
            1
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
