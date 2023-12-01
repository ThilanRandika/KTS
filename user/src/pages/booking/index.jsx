function Booking() {
  return (
    <div className="px-[100px]">
      <p className="text-main_blue text-[37px] font-semibold font-barlows mt-[12px]">
        Recent Tickets
      </p>
      <div className="tickets flex flex-col gap-[30px] mt-[10px]">
        <div
          className="ticket w-full rounded-[16px] flex pt-[14px] px-[32px] pb-[14px] justify-between relative"
          style={{
            border: "1px solid #BBB",
            background: "#F5F5F5",
            boxShadow: "0px 3.199px 3.199px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="flex flex-col">
            <p
              className="font-barlows text-[37px] font-medium mb-[3px]"
              style={{ lineHeight: "normal" }}
            >
              Ticket ID - T#343423
            </p>
            <div className="flex gap-[100px]">
              <div className="left">
                <p className="font-barlows text-[23px] font-medium border-b-[3px] border-[#000] max-w-fit">
                  User Details
                </p>
                <div className="flex gap-[30px] items ">
                  <div className="flex flex-col gap-[1px] text-[20px] font-semibold">
                    <p>Ticket Owner</p>
                    <p>Ticket Owner Email</p>
                    <p>Date</p>
                  </div>
                  <div className="text-[20px] font-bold flex flex-col gap-[3px]">
                    <p style={{ lineHeight: "normal" }}>-</p>
                    <p>-</p>
                    <p>-</p>
                  </div>
                  <div className="text-[18px] flex flex-col gap-[6px]">
                    <p>M.K.Shehan Malinda</p>
                    <p>shehanmalinda123@gmail.com</p>
                    <p>12/11/2023</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <p className="font-barlows text-[23px] font-medium border-b-[3px] border-[#000] max-w-fit">
                  Journey Details
                </p>
                <div className="flex gap-[30px] items ">
                  <div className="flex flex-col gap-[1px] text-[20px] font-semibold">
                    <p>Travel Direction</p>
                    <p>Distance</p>
                    <p>Assigned Bus</p>
                  </div>
                  <div className="text-[20px] font-bold flex flex-col gap-[3px]">
                    <p style={{ lineHeight: "normal" }}>-</p>
                    <p>-</p>
                    <p>-</p>
                  </div>
                  <div className="text-[18px] flex flex-col gap-[6px]">
                    <p>Gampaha to KDU</p>
                    <p>30 km</p>
                    <p>B#4353242</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 text-white mt-[10px]">
              <button className="w-full bg-main_blue h-full rounded-[8px] py-[13px] text-[18px] font-roboto font-semibold">
                Download QR Code
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dnoobzfxo/image/upload/v1700669192/download_rvegos.png"
              alt=""
              className="w-[230px] "
            />
          </div>
          <div className="absolute top-[0px] left-[360px] text-white h-[45px] w-[100px] bg-main_red pt-[10px] flex justify-center rounded-b-[10px]  text-[18px] font-roboto font-medium">
            Validated
          </div>
        </div>
        <div
          className="ticket w-full rounded-[16px] flex pt-[14px] px-[32px] pb-[14px] justify-between relative"
          style={{
            border: "1px solid #BBB",
            background: "#F5F5F5",
            boxShadow: "0px 3.199px 3.199px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="flex flex-col">
            <p
              className="font-barlows text-[37px] font-medium mb-[3px]"
              style={{ lineHeight: "normal" }}
            >
              Ticket ID - T#343423
            </p>
            <div className="flex gap-[100px]">
              <div className="left">
                <p className="font-barlows text-[23px] font-medium border-b-[3px] border-[#000] max-w-fit">
                  User Details
                </p>
                <div className="flex gap-[30px] items ">
                  <div className="flex flex-col gap-[1px] text-[20px] font-semibold">
                    <p>Ticket Owner</p>
                    <p>Ticket Owner Email</p>
                    <p>Date</p>
                  </div>
                  <div className="text-[20px] font-bold flex flex-col gap-[3px]">
                    <p style={{ lineHeight: "normal" }}>-</p>
                    <p>-</p>
                    <p>-</p>
                  </div>
                  <div className="text-[18px] flex flex-col gap-[6px]">
                    <p>M.K.Shehan Malinda</p>
                    <p>shehanmalinda123@gmail.com</p>
                    <p>12/11/2023</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <p className="font-barlows text-[23px] font-medium border-b-[3px] border-[#000] max-w-fit">
                  Journey Details
                </p>
                <div className="flex gap-[30px] items ">
                  <div className="flex flex-col gap-[1px] text-[20px] font-semibold">
                    <p>Travel Direction</p>
                    <p>Distance</p>
                    <p>Assigned Bus</p>
                  </div>
                  <div className="text-[20px] font-bold flex flex-col gap-[3px]">
                    <p style={{ lineHeight: "normal" }}>-</p>
                    <p>-</p>
                    <p>-</p>
                  </div>
                  <div className="text-[18px] flex flex-col gap-[6px]">
                    <p>Gampaha to KDU</p>
                    <p>30 km</p>
                    <p>B#4353242</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 text-white mt-[10px]">
              <button className="w-full bg-main_blue h-full rounded-[8px] py-[13px] text-[18px] font-roboto font-semibold">
                Download QR Code
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dnoobzfxo/image/upload/v1700669192/download_rvegos.png"
              alt=""
              className="w-[230px] "
            />
          </div>
          <div className="absolute top-[0px] left-[360px] text-white h-[45px] w-[100px] bg-main_blue pt-[10px] flex justify-center rounded-b-[10px]  text-[18px] font-roboto font-medium">
            Validated
          </div>
        </div>{" "}
        <div
          className="ticket w-full rounded-[16px] flex pt-[14px] px-[32px] pb-[14px] justify-between relative"
          style={{
            border: "1px solid #BBB",
            background: "#F5F5F5",
            boxShadow: "0px 3.199px 3.199px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="flex flex-col">
            <p
              className="font-barlows text-[37px] font-medium mb-[3px]"
              style={{ lineHeight: "normal" }}
            >
              Ticket ID - T#343423
            </p>
            <div className="flex gap-[100px]">
              <div className="left">
                <p className="font-barlows text-[23px] font-medium border-b-[3px] border-[#000] max-w-fit">
                  User Details
                </p>
                <div className="flex gap-[30px] items ">
                  <div className="flex flex-col gap-[1px] text-[20px] font-semibold">
                    <p>Ticket Owner</p>
                    <p>Ticket Owner Email</p>
                    <p>Date</p>
                  </div>
                  <div className="text-[20px] font-bold flex flex-col gap-[3px]">
                    <p style={{ lineHeight: "normal" }}>-</p>
                    <p>-</p>
                    <p>-</p>
                  </div>
                  <div className="text-[18px] flex flex-col gap-[6px]">
                    <p>M.K.Shehan Malinda</p>
                    <p>shehanmalinda123@gmail.com</p>
                    <p>12/11/2023</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <p className="font-barlows text-[23px] font-medium border-b-[3px] border-[#000] max-w-fit">
                  Journey Details
                </p>
                <div className="flex gap-[30px] items ">
                  <div className="flex flex-col gap-[1px] text-[20px] font-semibold">
                    <p>Travel Direction</p>
                    <p>Distance</p>
                    <p>Assigned Bus</p>
                  </div>
                  <div className="text-[20px] font-bold flex flex-col gap-[3px]">
                    <p style={{ lineHeight: "normal" }}>-</p>
                    <p>-</p>
                    <p>-</p>
                  </div>
                  <div className="text-[18px] flex flex-col gap-[6px]">
                    <p>Gampaha to KDU</p>
                    <p>30 km</p>
                    <p>B#4353242</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 text-white mt-[10px]">
              <button className="w-full bg-main_blue h-full rounded-[8px] py-[13px] text-[18px] font-roboto font-semibold">
                Download QR Code
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dnoobzfxo/image/upload/v1700669192/download_rvegos.png"
              alt=""
              className="w-[230px] "
            />
          </div>
          <div className="absolute top-[0px] left-[360px] text-white h-[45px] w-[100px] bg-main_red pt-[10px] flex justify-center rounded-b-[10px]  text-[18px] font-roboto font-medium">
            Validated
          </div>
        </div>{" "}
        <div
          className="ticket w-full rounded-[16px] flex pt-[14px] px-[32px] pb-[14px] justify-between relative"
          style={{
            border: "1px solid #BBB",
            background: "#F5F5F5",
            boxShadow: "0px 3.199px 3.199px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="flex flex-col">
            <p
              className="font-barlows text-[37px] font-medium mb-[3px]"
              style={{ lineHeight: "normal" }}
            >
              Ticket ID - T#343423
            </p>
            <div className="flex gap-[100px]">
              <div className="left">
                <p className="font-barlows text-[23px] font-medium border-b-[3px] border-[#000] max-w-fit">
                  User Details
                </p>
                <div className="flex gap-[30px] items ">
                  <div className="flex flex-col gap-[1px] text-[20px] font-semibold">
                    <p>Ticket Owner</p>
                    <p>Ticket Owner Email</p>
                    <p>Date</p>
                  </div>
                  <div className="text-[20px] font-bold flex flex-col gap-[3px]">
                    <p style={{ lineHeight: "normal" }}>-</p>
                    <p>-</p>
                    <p>-</p>
                  </div>
                  <div className="text-[18px] flex flex-col gap-[6px]">
                    <p>M.K.Shehan Malinda</p>
                    <p>shehanmalinda123@gmail.com</p>
                    <p>12/11/2023</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <p className="font-barlows text-[23px] font-medium border-b-[3px] border-[#000] max-w-fit">
                  Journey Details
                </p>
                <div className="flex gap-[30px] items ">
                  <div className="flex flex-col gap-[1px] text-[20px] font-semibold">
                    <p>Travel Direction</p>
                    <p>Distance</p>
                    <p>Assigned Bus</p>
                  </div>
                  <div className="text-[20px] font-bold flex flex-col gap-[3px]">
                    <p style={{ lineHeight: "normal" }}>-</p>
                    <p>-</p>
                    <p>-</p>
                  </div>
                  <div className="text-[18px] flex flex-col gap-[6px]">
                    <p>Gampaha to KDU</p>
                    <p>30 km</p>
                    <p>B#4353242</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 text-white mt-[10px]">
              <button className="w-full bg-main_blue h-full rounded-[8px] py-[13px] text-[18px] font-roboto font-semibold">
                Download QR Code
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dnoobzfxo/image/upload/v1700669192/download_rvegos.png"
              alt=""
              className="w-[230px] "
            />
          </div>
          <div className="absolute top-[0px] left-[360px] text-white h-[45px] w-[100px] bg-main_red pt-[10px] flex justify-center rounded-b-[10px]  text-[18px] font-roboto font-medium">
            Validated
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
