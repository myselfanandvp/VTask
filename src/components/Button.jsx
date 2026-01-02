// 1. THE BASE BUTTON
// We use 'children' to allow both text and icons
// We use '...props' to catch everything else (onClick, disabled, etc.)
export const Button = ({text="",type="button", onClick={}, color='blue', ...props }) => {
    const colorVariants = {
    blue: "bg-blue-500 hover:bg-blue-600",
    yellow: "bg-yellow-500 hover:bg-yellow-600",
    red: "bg-red-500 hover:bg-red-600",
    green: "bg-green-500 hover:bg-green-600",
  };
  return (
    <button
      type="`${type}`"
      onClick={onClick} // Fixed: Must be camelCase
      className={`${colorVariants[color.toLocaleLowerCase()]}   bg-blue-600  hover:bg-blue-700 transition duration-150 ease-in-out transform hover:scale-105 active:scale-95 shadow-xl/30 active:shadow-sm text-white p-4 font-bold h-5 w-30   rounded-lg m-2 flex items-center justify-center gap-2 text-shadow-lg/30`}
      {...props}
    >
      {text}
    </button>
  );
};


