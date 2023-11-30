import { Checkbox } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import userAxios from "../../baseURL";
import { useUserContext } from "../../hooks/useUserAuthContext";

function Login() {
  const { user, dispatch } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const res = await userAxios.post("/api/users/login", {
        email,
        password,
      });
      console.log(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch({ type: "LOGIN", payload: res.data });
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div className="flex h-screen w-full font-roboto ">
      <div className="w-[34%] flex items-center flex-col justify-center">
        <div className="flex flex-col items-center">
          <img
            src="https://res.cloudinary.com/dnoobzfxo/image/upload/v1701275328/Kotelawala_Defence_University_crest-removebg-preview_1_qprg9r.png"
            alt=""
            className="w-[210px]"
          />
          <div className="font-roboto_slab text-[30px] font-bold flex flex-col items-center leading-[92%]">
            <p>General</p>
            <p>Sir John Kotelawala</p>
            <p>Defence University</p>
            <p>Transport Management System</p>
          </div>
        </div>
        <div className="mt-[40px] w-full items-center">
          <form action="">
            <div className="flex flex-col items-center">
              <div className="w-[75%]">
                <label
                  htmlFor="email"
                  className="font-semibold text-[#383838] "
                >
                  University Email Address
                </label>
                <input
                  id="email"
                  type="text"
                  className="w-full bg-red-100 h-[56px] pl-[20px] py-[7px] font-normal text-sm text-[#515151]"
                  style={{
                    borderRadius: "7.979px",
                    border: "1px solid #747474",
                    background: "#FFF",
                  }}
                  placeholder="Enter your email address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col items-center mt-[12px]">
              <div className="w-[75%] relative">
                <label
                  htmlFor="password"
                  className="font-semibold text-[#383838]"
                >
                  Password
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-red-100 h-[56px] pl-[20px] py-[7px] font-normal text-sm text-[#515151]"
                  style={{
                    borderRadius: "7.979px",
                    border: "1px solid #747474",
                    background: "#FFF",
                  }}
                  placeholder="Enter your password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <VisibilityIcon
                  className="absolute top-[40px] right-4"
                  fontSize="medium"
                  color={showPassword ? "inherit" : "disabled"}
                  onClick={() => {
                    console.log("as");
                    setShowPassword((pre) => !pre);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[75%] flex justify-between items-center">
                <div>
                  <Checkbox />
                  <span className="text-gray-400 text-base font-medium">
                    Remember me
                  </span>
                </div>

                <div className="text-red-500 text-[15px] font-normal">
                  Reset Password
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-[15px]">
              <div className="w-[75%] ">
                <button
                  type="submit"
                  className="w-full text-white bg-main_blue h-[60px] rounded-lg text-[20px] font-medium"
                  onClick={(e) => {
                    login(e);
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className="flex-1 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dnoobzfxo/image/upload/v1701274834/bg-girl_qwuwun.png)",
        }}
      ></div>
    </div>
  );
}

export default Login;
