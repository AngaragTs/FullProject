export const CheckList = (props) => {
  const { Number, Customer, Food, Date, Total, Address, state } = props;
  return (
    <div className="w-full h-10 bg-[#E4E4E7] flex items-center">
      <div className="w-24 h-12 flex items-center  justify-evenly">
        <input type="checkbox" />
        <p>{Number}</p>
      </div>
      <div className="w-260 h-12 flex items-center justify-evenly text-[#71717A]">
        <p>{Customer}</p>
        <p>{Food}</p>
        <div className="flex h-12 items-center gap-5">
          <p>{Date}</p>
          <UpDownIcon />
        </div>
        <p>{Total} </p>
        <p>{Address}</p>
        <div className="flex h-12 items-center gap-5">
          <p>{state}</p>
          <UpDownIcon />
        </div>
      </div>
    </div>
  );
};
