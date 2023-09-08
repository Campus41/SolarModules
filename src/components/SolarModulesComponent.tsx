import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSolarModules } from '../redux/actions/solarModulesActions';
import { RootState } from '../redux/store';
import { SolarModulesList } from './SolarModulesListComponent';
import { addSolarModule, removeSolarModule } from '../redux/reducers/solarModulesSelectedReducer'
import { SolarModulesOrder } from './SolarModulesOrderComponent';
import Modal from 'react-modal';

Modal.setAppElement('#root')

type SolarModule = {
  type: string;
  quantity: number;
  price: number;
};

function SolarModulesComponent() {
  const dispatch = useDispatch();

  const solarModules = useSelector((state: RootState) => state.solarModules.solarModules);
  const solarModulesSelected = useSelector((state: RootState) => state.solarModulesSelected.solarModulesSelected);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  useEffect(() => {
    dispatch(fetchSolarModules() as any);
  }, [dispatch, solarModulesSelected]);

  const solarModulesFree = useMemo(() => {
    return solarModules.filter((module) => {
      return !solarModulesSelected.some((item) => item.type === module.type);
    });
  }, [solarModules, solarModulesSelected]);

  const addSolarModuleHandler = (module: SolarModule): void => {
    dispatch(addSolarModule(module));
  }

  const removeSolarModuleHandler = (module: SolarModule): void => {
    dispatch(removeSolarModule(module));
  }

  return (
    <div className=''>
      <div className="flex justify-end bg-blue-500 text-white p-4">
        <button className="relative mr-2 transition duration-300 ease-in-out transform hover:scale-105" onClick={openModal}>
          <i className="fa fa-shopping-basket text-5xl"></i>
          {!!solarModulesSelected.length &&
            <div className='absolute top-0 right-0 bg-yellow-500 w-6 h-6 rounded-full'>{solarModulesSelected.length}</div>
          }
        </button>
      </div>
      <div className=''>
        <SolarModulesList solarModules={solarModules} addSolarModuleHandler={addSolarModuleHandler} />
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <SolarModulesOrder 
          solarModulesSelected={solarModulesSelected}
          solarModulesFree={solarModulesFree}
          addSolarModuleHandler={addSolarModuleHandler} 
          removeSolarModuleHandler={removeSolarModuleHandler} />
        <button 
          className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8 mr-8 transition duration-300 ease-in-out transform hover:scale-105" 
          onClick={closeModal}>
            Close Modal
        </button>
      </Modal>
    </div>
  );
}

export default SolarModulesComponent;
