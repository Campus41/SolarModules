interface ISolarModulesSelected {
  solarModulesSelected: Array<{ type: string; quantity: number; price: number; quantitySelected: number; }>;
  solarModulesFree: Array<{ type: string; quantity: number; price: number; }>;
  module?: { type: string; quantity: number; price: number };
  addSolarModuleHandler: (module: { type: string; quantity: number; price: number }) => void;
  removeSolarModuleHandler: (module: { type: string; quantity: number; price: number }) => void;
}

export const SolarModulesOrder = ({solarModulesSelected, solarModulesFree, addSolarModuleHandler, removeSolarModuleHandler}: ISolarModulesSelected) => {

  const addModuleHandler = (module: { type: string; quantity: number; price: number }) => {
    return addSolarModuleHandler(module);
  };

  const removeModuleHandler = (module: { type: string; quantity: number; price: number }) => {
    return removeSolarModuleHandler(module);
  };

  const totalSum = solarModulesSelected.reduce((acc, module) => acc += module.price * module.quantitySelected, 0)

  return (
    <div>
      <div>Orders:</div>
      {solarModulesSelected.map((module, index) => (
        <div key={index} className="flex justify-between items-center p-2 cursor-pointer">
          <div>{module.type}</div>
          <div>
            <button
              className="bg-red-700 text-white font-bold px-2 rounded-full"
              onClick={() => removeModuleHandler(module)}
            >
              <i className="fa fa-minus" aria-hidden="true"></i>
            </button>
            <span> {module.quantitySelected} / {module.quantity} </span>
            <button
              className="bg-green-700 text-white font-bold px-2 rounded-full"
              onClick={() => addModuleHandler(module)}
            >
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      ))}
      <div>Other modules:</div>
      {solarModulesFree.map((module, index) => (
        <div key={index} className="flex justify-between items-center p-2 cursor-pointer">
          <div>{module.type}</div>
          <div>
            <span> {module.quantity} </span>
          </div>
        </div>
      ))}
      <div className="flex justify-end mt-8 mr-6">Total cost: {totalSum}</div>
    </div>
  )
}