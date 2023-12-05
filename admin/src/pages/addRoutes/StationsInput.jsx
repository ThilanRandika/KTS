import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";

function StationsInput({ setStations, currentMarker, setCurrentMaker }) {
  const [name, setName] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [price, setPrice] = useState(0);

  const addStation = () => {
    setStations((prev) => [
      ...prev,
      {
        id: name,
        lat: lat,
        lng: lng,
        price: price,
        distance: 0,
      },
    ]);
  };

  return (
    <div className="flex items-end justify-between">
      <div className="flex gap-2">
        <div className="">
          <p>Station Name</p>
          <input
            type="text"
            className="py-2 border rounded-lg font-roboto focus:outline-none w-[120px] pl-2 text-sm"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="">
          <p>Latitude </p>
          <input
            type="number"
            className="py-2 border rounded-lg font-roboto focus:outline-none w-[120px] pl-2 text-sm"
            onChange={(e) => {
              setLat(parseFloat(e.target.value));
              setCurrentMaker({
                ...currentMarker,
                lat: parseFloat(e.target.value),
              });
            }}
          />
        </div>
        <div className="">
          <p>Longitude</p>
          <input
            type="number"
            className="py-2 border rounded-lg font-roboto focus:outline-none w-[120px] pl-2 text-sm"
            onChange={(e) => {
              setLng(parseFloat(e.target.value));
              setCurrentMaker({
                ...currentMarker,
                lng: parseFloat(e.target.value),
              });
            }}
          />
        </div>
        <div className="">
          <p>Price</p>
          <input
            type="text"
            className="py-2 border rounded-lg font-roboto focus:outline-none w-[120px] pl-2 text-sm"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
      <button className="pb-[11px]" onClick={addStation}>
        <IoAddCircle />
      </button>
    </div>
  );
}

export default StationsInput;
