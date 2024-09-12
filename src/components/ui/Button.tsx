interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="inline-block w-auto rounded-full text-center font-medium min-w-[200px] px-10 py-2 text-white transition-all shadow-xl sm:w-auto bg-gradient-to-r from-orange-600 to-orange-500 hover:bg-gradient-to-b dark:shadow-orange-900 shadow-orange-200 hover:shadow-2xl hover:orange-blue-400 hover:-tranneutral-y-px"
      // className="bg-orange-500 rounded-full py-2 px-10 text-white font-medium focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50"
    >
      <span className="mr-2">{label}</span>
    </button>
  );
};

export default Button;
