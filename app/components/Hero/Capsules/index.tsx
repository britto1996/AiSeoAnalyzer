import React from "react";

const Capsules = ({
  setIsActive,
  isActive,
  capsuleList,
}: {
  setIsActive: React.Dispatch<
    React.SetStateAction<{ home: boolean; templates: boolean }>
  >;
  isActive: { home: boolean; templates: boolean };
  capsuleList: { _id: number; title: string; icon: React.ReactNode }[];
}) => {
  return <div className="flex justify-center sm:hidden lg:flex gap-4 mt-4 items-center text-center">
    {capsuleList?.map((capsule) => {
        const isCapsuleActive = isActive[capsule.title.toLowerCase() as keyof typeof isActive];
        return (
            <div key={capsule?._id} className={`px-4 py-2 rounded-full cursor-pointer ${isCapsuleActive ? 'bg-indigo-600 border-indigo-900 border text-sm text-white' : 'text-white border-amber-50 border text-sm bg-gray-800'}`} onClick={() => {
                setIsActive((prevState) => {
                    const newState = { ...prevState };
                    Object.keys(newState).forEach((key) => {
                        newState[key as keyof typeof newState] = false;
                    });
                    newState[capsule.title.toLowerCase() as keyof typeof newState] = true;
                    return newState;
                }
            )
            }}>
              {isCapsuleActive ? (
                <span className="flex items-center gap-2 text-sm">{capsule.icon} {capsule.title}</span>
              ) : (
                <span className="flex items-center gap-2 text-sm">{capsule.icon} {capsule.title}</span>
              )}
            </div>
        )
    })}
  </div>;
};

export default Capsules;
