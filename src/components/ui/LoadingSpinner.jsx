import { HashLoader } from "react-spinners";


const LoadingSpinner = ({ size = 50, color = "#36d7b7" }) => {
  return (
    <div className="flex justify-center items-center h-40">
      <HashLoader size={size} color={color} />
    </div>
  );
}

export default LoadingSpinner;