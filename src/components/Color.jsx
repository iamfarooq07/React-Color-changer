function Color({ onClick }) {
  const colors = [
    "blue",
    "red",
    "green",
    "yellow",
    "orange",
    "gray",
    "purple",
    "pink",
  ];
  const colorClasses = {
    blue: "bg-blue-500",
    red: "bg-red-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    orange: "bg-orange-500",
    gray: "bg-gray-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
  };
  return (
    <div className="flex flex-wrap justify-center items-center gap-3 px-3 rounded-full bg-black py-3">
      {colors.map((clr, indx) => (
        <button
          key={indx}
          onClick={() => onClick(clr)}
          className={`${colorClasses[clr]} px-3 py-2 text-white rounded-2xl`}
        >
          {clr}
        </button>
      ))}
    </div>
  );
}

export default Color;
