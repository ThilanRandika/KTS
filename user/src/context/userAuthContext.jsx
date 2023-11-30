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
    const user = JSON.parse(localStorage.getItem("user"));
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
// "react": "^18.2.0",
// "react-dom": "^18.2.0",
// "react-icons": "^4.11.0",
// "react-material-ui-carousel": "^3.4.2",
// "react-router-dom": "^6.16.0",

// "react": "^18.2.0",
// "react-dom": "^18.2.0",
// "react-icons": "^4.12.0",
// "react-router-dom": "^6.20.0"
