function TravelDetail(props) {
  return (
    <div className="flex w-screen h-80  font-Kanit">
      <div className="flex justify-center items-center w-4/12 ">
        <img
          className=" w-[450px] h-[270px] rounded-[50px]"
          src={props.src}
          alt="iconicLocation"
        />
      </div>
      <div className="flex flex-col w-8/12 justify-center ">
        <h1 className="text-3xl">{props.title}</h1>
        <p className="text-gray-400 line-clamp-1">{props.description}</p>
        <a
          className="inline  w-12 underline  text-blue-500"
          href={props.url}
          target="_blank"
        >
          อ่านต่อ
        </a>
        <div className="flex">
          <p className="text-gray-400">หมวด</p>
          <p className="text-gray-400">{props.tags}</p>
        </div>
        <div className="flex justify-between items-center h-[150px] w-[350px]">
          <img
            className="w-[100px] h-[100px] rounded-lg"
            src={props.imgsrc1}
            alt="Location"
          />
          <img
            className="w-[100px] h-[100px] rounded-lg"
            src={props.imgsrc2}
            alt="Location"
          />
          <img
            className="w-[100px] h-[100px] rounded-lg"
            src={props.imgsrc3}
            alt="Location"
          />
        </div>
      </div>
    </div>
  );
}

export default TravelDetail;
