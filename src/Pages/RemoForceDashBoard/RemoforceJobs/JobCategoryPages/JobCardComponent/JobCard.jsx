const JobCard = ({ items, applyNowBtn }) => (
  <div className=" p-3 2xl:p-2.5 border  duration-300 ease-in xl:m-1 shadow-lg shadow-[#78a5c554] bg-white border-[#a5dbff9d] rounded-md flex flex-col justify-between">
    <div className="flex justify-between  items-center">
      <div className="flex items-center gap-2">
        {items?.startupsProfilePhoto ? (
          <img
            className="!w-[20px] object-cover rounded-full"
            src={items.startupsProfilePhoto}
            alt=""
          />
        ) : (
          <p className="w-8 h-8 grid place-items-center  text-white rounded-full bg-black">
            {items?.startupsName?.charAt(0).toUpperCase()}
          </p>
        )}
        <h2 className="text-md font-semibold">{items?.title}</h2>
      </div>
    </div>
    <div className="py-2">
      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
        {items?.categoryName}
      </span>
    </div>
    <div>
      <p className="text-start  text-sm ">
        {items?.description?.length > 55
          ? `${` ${items?.description?.slice(0, 55)} ...`}`
          : items?.description}
      </p>
    </div>
    {/* description, skills */}
    <div className="mt-1">
      {/* skills */}
      <div className="flex mt-[7px] flex-wrap  w-full gap-2 xl:gap-2">
        {items &&
          items?.skills?.slice(0, 3).map((skill) => (
            <div key={Math.random()} className="bg-[#F0F9FF]  rounded-md ">
              <p className="text-xs px-[5px] py-[5px] bg-green-100 rounded-md ">{skill}</p>
            </div>
          ))}
      </div>
      {/* salary  */}
      <div className="mt-3 border-b pb-2">
        <h4 className="text-start text-green-900 font-bold">Salary : {items?.salary} ₳ </h4>
      </div>
      {/* applied and apply now button */}
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => applyNowBtn(items)}
          className="px-6 py-3 lg:px-3 border border-[#00C42B] lg:py-2 bg-[#7DEC96] text-black text-[13px] font-semibold rounded-md"
          type="button"
        >
          Apply Now
        </button>
        {/* </Link> */}
      </div>
    </div>
  </div>
);

export default JobCard;
