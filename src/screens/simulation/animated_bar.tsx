interface AnimatedBarProps {
  winChance: number;
}
const AnimatedBar = (props: AnimatedBarProps) => {
  return (
    <div className="mx-auto bg-red-600 rounded-full w-[60vw] h-2 overflow-clip">
      <div className={`bg-green-800 h-full`} style={{width:`${props.winChance.toFixed()}%`}}></div>
    </div>
  );
};

export default AnimatedBar;
