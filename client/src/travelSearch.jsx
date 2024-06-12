import { useEffect, useState } from "react";
import axios from "axios";
import TravelDetail from "./travelDetail";

function TravelSearch() {
  const [locationDetail, setLocationDetail] = useState([]);
  const [search, setSearch] = useState("");

  const getLocationDetail = async () => {
    const result = await axios.get(
      `http://localhost:4001/trips?keywords=${search}`
    );
    console.log(result.data.data);
    setLocationDetail(result.data.data);
  };

  useEffect(() => {
    getLocationDetail();
  }, [search]);
  return (
    <div>
      <div className=" flex justify-center font-Kanit  items-center h-[50px]">
        <input
          className="peer placeholder: text-center w-[1200px] border-b border-gray-400"
          type="text"
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      {locationDetail.map((item, index) => {
        return (
          <TravelDetail
            key={index}
            src={item.photos[0]}
            title={item.title}
            description={item.description}
            url={item.url}
            tags={item.tags}
            imgsrc1={item.photos[1]}
            imgsrc2={item.photos[2]}
            imgsrc3={item.photos[3]}
          />
        );
      })}
      <TravelDetail />
    </div>
  );
}

export default TravelSearch;
/*
src={item.photos[0]}
            title={item.title}
            description={item.description}
            tags={item.tags}
            imgsrc={item.photos[1]}*/

/*
{locationDetail.map((item, index) => {
        return (
          <TravelDetail
            key={index}
            src={item.photos[0]}
            title={item.title}
            description={item.description}
            url={item.url}
            tags={item.tags}
            imgsrc1={item.photos[1]}
            imgsrc2={item.photos[2]}
            imgsrc3={item.photos[3]}
          />
        );
      })}

*/
