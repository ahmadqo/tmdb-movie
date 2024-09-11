interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button className="bg-orange-500 rounded-full py-2 px-10 text-white font-medium focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 ">
      <span className="mr-2">{label}</span>
    </button>
  );
};

export default Button;
