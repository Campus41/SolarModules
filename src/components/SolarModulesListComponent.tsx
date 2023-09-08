interface ISolarModules {
  solarModules: Array<{ type: string; quantity: number; price: number }>;
  module?: { type: string; quantity: number; price: number };
  addSolarModuleHandler: (module: { type: string; quantity: number; price: number }) => void;
}

export const SolarModulesList = ({ solarModules, addSolarModuleHandler }: ISolarModules) => {

  const addModuleHandler = (module: { type: string; quantity: number; price: number }) => {
    return addSolarModuleHandler(module);
  };

  return (
    <div>
      {solarModules.map((module, index) => (
        <div key={index} className="flex p-4 hover:bg-gray-200 cursor-pointer">
          <div className="w-1/3">{module.type}</div>
          <div className="w-1/3">{module.quantity}</div>
          <button
            className="w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => addModuleHandler(module)}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
};
