import { IoGridSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
function Navbar() {
  return (
    <div className="flex justify-between pt-1 items-center pr-4 pl-3">
      <div className="text-[25px] text-main_blue">
        <IoGridSharp />
      </div>
      <div className="flex items-center">
        <div className="flex text-main_blue items-center gap-7">
          <FaSearch className="text-[20px]" />{" "}
          <IoSettings className="text-[22px]" />
        </div>
        <div className="flex items-center ml-7 gap-3">
          <div>
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
              alt=""
              className="h-[40px] w-[40px]  object-cover rounded-full "
              style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
            />
          </div>

          <p className="font-roboto font-bold text-main_blue">R.K.Rajapaksha</p>
        </div>
        <div className="relative ml-5">
          <IoIosNotifications className="text-[25px]" />
          <span className="absolute top-[-4px] right-[-3px] bg-main_blue text-white font-bold w-4 h-4 text-xs flex  items-center justify-center rounded-full">
            1
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
