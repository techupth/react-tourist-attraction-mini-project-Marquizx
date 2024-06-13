import TravelSearch from "./travelSearch";
import "./App.css";

function App() {
  return (
    <div>
      <p className="flex justify-center items-center h-[100px] text-cyan-500 text-6xl  font-Kanit">
        เที่ยวไหนดี
      </p>
      <div className="flex justify-center font-Kanit items-center w-[400px]">
        <p>ค้นหาที่เที่ยว</p>
      </div>
      <TravelSearch />
    </div>
  );
}

export default App;
