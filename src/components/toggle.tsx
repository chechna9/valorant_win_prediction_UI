interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement>{
}
const ToggleSwitch = (props:ToggleProps) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input {...props} type="checkbox" value="" className="sr-only peer" />
      <div className="w-11 h-6 bg-slate-900-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-transparent dark:peer-focus:ring-transparent rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-myLight  after:border-transparent after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-myDark2"></div>
      
    </label>
  );
};

export default ToggleSwitch;
