"use client";

const GridTemplate = ({ list }: { list: any[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
      {list?.map((item) => {
        return (
            <div key={item?._id} className="flex flex-col justify-center items-center">
              <span>{item?.icon}</span>
              <div className="mt-2 text-white text-sm font-bold">
                {item?.title}
              </div>
            </div>
        );
      })}
    </div>
  );
};

export default GridTemplate;
