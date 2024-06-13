import { useEffect, useState } from "react";
import axios from "axios";

function TravelSearch() {
  const [locationDetail, setLocationDetail] = useState([]);
  const [search, setSearch] = useState("");
  const [link, setLink] = useState("");
  let inputMessage = search;

  const getLocationDetail = async () => {
    const result = await axios.get(
      `http://localhost:4001/trips?keywords=${search}`
    );
    console.log(search);
    setLocationDetail(result.data.data);
  };

  const handleInput = (search) => {
    if (!inputMessage.includes(search)) {
      inputMessage += search + " ";
      setSearch(inputMessage);
    }
  };

  const handleLink = async (item) => {
    const result = await navigator.clipboard.writeText(item);
    setLink(result);
    alert("Copied to clipboard!");
  };
  useEffect(() => {
    getLocationDetail();
  }, [search]);
  return (
    <div>
      <div className="flex justify-center">
        <div className=" flex justify-center font-Kanit  items-center h-[50px]">
          <input
            className="placeholder: text-center w-[1200px] border-b border-gray-400"
            type="text"
            placeholder="หาที่เที่ยวแล้วไปกัน ..."
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            setSearch("");
          }}
        >
          clear
        </button>
      </div>
      {locationDetail.map((item, index) => {
        return (
          <div className="flex w-screen h-80  font-Kanit" key={index}>
            <div className="flex justify-center items-center w-4/12 ">
              <img
                className=" w-[450px] h-[270px] rounded-[50px]"
                src={item.photos[0]}
                alt="iconicLocation"
              />
            </div>
            <div className="flex flex-col w-8/12 justify-center">
              <h1 className="text-3xl">{item.title}</h1>
              <p className="text-gray-400 line-clamp-1">{item.description}</p>
              <a
                className="inline  w-12 underline  text-blue-500"
                href={item.url}
                target="_blank"
              >
                อ่านต่อ
              </a>
              <div className="flex">
                <p className="text-gray-400 mr-1">หมวด</p>
                <div className="text-gray-400">
                  {item.tags.map((item, index) => {
                    return (
                      <button
                        key={index}
                        className="mr-1 underline"
                        onClick={() => {
                          handleInput(item);
                        }}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-between w-[900px]">
                <div className="flex justify-between items-center h-[150px] w-[350px]">
                  <img
                    className="w-[100px] h-[100px] rounded-lg"
                    src={item.photos[1]}
                    alt="Location"
                  />
                  <img
                    className="w-[100px] h-[100px] rounded-lg"
                    src={item.photos[2]}
                    alt="Location"
                  />
                  <img
                    className="w-[100px] h-[100px] rounded-lg"
                    src={item.photos[3]}
                    alt="Location"
                  />
                </div>
                <div>
                  <button
                    onClick={() => {
                      handleLink(item.url);
                    }}
                  >
                    <img
                      className="w-[50px] h-[50px] relative top-[70px]"
                      src="https://cdn-icons-png.flaticon.com/512/10016/10016975.png"
                      alt="Icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelSearch;
