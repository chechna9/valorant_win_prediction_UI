import CustomButton from "../../components/custom_button";

const SimulationPage = () => {
  return (
    <div className="bg-myDark h-screen flex flex-col">
      <div className="flex p-4 flex-auto">
        {/* team 1 */}
        <div className="bg-myLight flex-auto"></div>
        {/* map*/}
        <div className="bg-myLight2 flex-auto"></div>
        {/* team 2 */}
        <div className="bg-myLight flex-auto"></div>
      </div>

      <CustomButton>Simulate</CustomButton>
    </div>
  );
};

export default SimulationPage;
