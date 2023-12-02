import { createContext } from "react";
import adminAxios from "../baseURL";
import { useEffect } from "react";
import { useReducer } from "react";

export const BusContext = createContext();

export const busReducer = (state, action) => {
  switch (action.type) {
    case "SET_BUSES":
      return { bus: action.payload };
    case "ADD_BUS":
      return [...state, action.payload];
    case "DELETE_BUS":
      return state.filter((bus) => bus.id !== action.payload);
    case "UPDATE_BUS":
      return state.map((bus) =>
        bus.id === action.payload.id ? action.payload : bus
      );
    default:
      return state;
  }
};

export const BusContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(busReducer, { bus: [] });

  useEffect(() => {
    const getBus = async () => {
      try {
        const bus = await adminAxios.get("/api/buses/");
        dispatch({ type: "SET_BUSES", payload: bus.data });
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <BusContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BusContext.Provider>
  );
};
