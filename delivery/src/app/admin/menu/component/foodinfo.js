export const FoodInfo = ({ ingredients, foodname, price, image }) => {
  return (
    <div className="w-70 h-60 border rounded-2xl flex flex-col items-center justify-around border-[#E4E4E7]">
      <img className="w-60 h-30 border border-[#E4E4E7] rounded-2xl"></img>
      <div>
        <div className="w-60 h-20 flex flex-col justify-center gap-5">
          <div className="flex h-5 gap-5 justify-between">
            <p className="text-sm text-[#EF4444] font-medium">{foodname}</p>
            <p className="text-xs">${price}</p>
          </div>
          <div className="h-10">
            <p className="text-xs">{ingredients}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
