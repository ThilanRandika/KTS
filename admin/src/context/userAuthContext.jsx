import { createContext, useEffect, useReducer } from "react";

export const UserContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("payload1", action.payload);
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};
export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  console.log("state", state);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("manager"));
    console.log(user);
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
