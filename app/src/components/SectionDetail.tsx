// Icon from: https://materialdesignicons.com/

import useSWR from 'swr'
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from 'react';
import { mdiChevronDown, mdiChevronUp, mdiPlus, mdiDeleteCircle, mdiDotsVerticalCircle  } from '@mdi/js';
import Icon from '@mdi/react';
import { SectionCreation } from './SectionCreation';


interface Inputs {
    test: string,
    selfDestroy: Function
    index: number
}



// Create section on the course creation page
export const SectionDetail = ({test, selfDestroy, index}:Inputs) :JSX.Element=> {
    const [arrowDirction, setArrowDirection] = useState<any>(mdiChevronDown);
    const [sectionTitle, setSectionTitle] = useState<string>("Nome da seção");
    
    //Toggles the arrow direction between up and down
    function changeArrowDirection (){
      if (arrowDirction === mdiChevronDown){
        setArrowDirection(mdiChevronUp);
      }else{
        setArrowDirection(mdiChevronDown);
      }
    }

    //Deletes the section from the list
    function cancelSection (){
      console.log("cancel section");
      selfDestroy(index)
      
    }

    //Changes the order of the sections
    function changeOrder(){
      console.log("change order");
    }

    return (  

      <div className='collapse w-full rounded border bg-white shadow-lg rounded-lg '>
        <input type="checkbox" className="peer w-3/4" onChange={changeArrowDirection} />

        <div className="collapse-title rounded-top hover:text-gray-700 text-primaryDarkBlue normal-case peer-checked:bg-primaryDarkBlue peer-checked:text-white ">
            <div className=' flex float-left'>
              <Icon path={arrowDirction} size={1} />
              <p className="font-semibold">
                {sectionTitle}
              </p>
            </div>
          </div> 
          {/**delete and move buttons on the left side of the section headers */}
            <label className=' btn std-btn flex absolute right-0 mt-2 border border-transparent  bg-transparent hover:bg-transparent peer-checked:text-white text-primaryDarkBlue' onMouseUpCapture={changeOrder}><Icon path={mdiDotsVerticalCircle} size={1.2}></Icon></label>
            <label className='btn std-btn flex absolute right-16 mt-2  border border-transparent bg-transparent hover:bg-transparent peer-checked:text-white text-primaryDarkBlue' onMouseDownCapture={cancelSection}><Icon path={mdiDeleteCircle} size={1.2}></Icon></label>

          <div className="collapse-content w-full">
            <div className="flex flex-col rounded-lg h-100  w-full rounded space-2  p-4 px-128 space-y-5">
              
              <div className=" ">
                      <label htmlFor='title'>Nome </label> {/*Title of section*/}
                      <input type="text"  placeholder={"Nome da seção"} onChange={(e) => setSectionTitle(e.target.value)}
                        className="text-gray-500 form-field bg-secondary focus:outline-none focus:ring-2 focus:ring-primaryDarkBlue focus:border-transparent"
                      />
                      
                    </div>

                <div className="">
                      <label htmlFor='title'>Descrição </label> {/*description of section*/}
                      <input type="text" placeholder={"Descrição da seção"}
                        className="text-gray-500 form-field bg-secondary focus:outline-none focus:ring-2 focus:ring-primaryDarkBlue focus:border-transparent"
                      />
                      
                    </div>
                
                {/**ADD lecture and exercise to the section */}
                    <div className="mt-5 flex  w-full h-12 border border-dashed border-gray-400 rounded-lg flex-col-3 justify-center space-x-2 ">
                        <label className=" btn std-btn  bg-inherit hover:bg-transparent border border-transparent w-1/4 border rounded-lg flex space-x-2 mb-5 ">
                          <p className="hover:text-gray-500 text-gray-500 normal-case flex items-center "> 
                          <Icon path={mdiPlus} size={1} className=" " />
                          Adicionar Aula</p>
                        </label>
                        <p className='text-gray-500 flex items-center text:align-right '>ou</p>
                        <label className="btn std-btn bg-inherit hover:bg-transparent border border-transparent w-1/4 rounded-lg flex justify-right space-x-2  mb-5 ">
                          <p className="hover:text-gray-500 text-gray-500 normal-case flex items-center text:align-right"> 
                          <Icon path={mdiPlus} size={1} className=" " />
                          Adicionar Exercício</p>
                        </label>
                   </div>

                   {/** PLACEHOLDER FOR NUMBER OF ITEMS IN SECTION*/}
                   <div className='flex flex-row-reverse'>                            
                        <label htmlFor='description'>0/10 items</label>{/** PLACEHOLDER TEXT */}</div>
                    </div>

            </div>

        </div>
        
    
    );}