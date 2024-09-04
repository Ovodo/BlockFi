import { BarLoader } from "react-spinners";

const Loading = () => {
  return (
    <div>
      <BarLoader width={80} height={80} loading={true} />
    </div>
  );
};
export default Loading;
