import moedas from '../../public/coins.png';
import telefone from '../../public/call.png';
import truck from '../../public/truck.png';
import calendar from '../../public/calendar.png';


const Motivos = () => {
   return (
      <div className='flex flex-col gap-10 items-center justify-center mt-10'>
         <h2 className='text-4xl font-bold text-[#FFDE59] uppercase'>5 motivos para escolher os nossos serviços!
         </h2>

         <div className='flex gap-10'>
            <div className='flex flex-col items-center w-[400px] gap-2'>
               <img
                  className='w-[70px]'
                  src={moedas}
                  alt="icon"
               />
               <h3 className='text-white text-xl font-bold'>Serviço de qualidade a baixo custo!</h3>
               <p className='text-center text-white'>Realizamos um serviço de limpeza de alta qualidade e rigor, ainda assim a um custo reduzido, dando sempre garantia do trabalho realizado!
               </p>
            </div>

            <div className='flex flex-col items-center w-[400px] gap-2'>
               <img
                  className='w-[70px]'
                  src={telefone}
                  alt="icon"
               />
               <h3 className='text-white text-xl font-bold'>Serviço de qualidade a baixo custo!</h3>
               <p className='text-center text-white'>Realizamos um serviço de limpeza de alta qualidade e rigor, ainda assim a um custo reduzido, dando sempre garantia do trabalho realizado!
               </p>
            </div>

            <div className='flex flex-col items-center w-[400px] gap-2'>
               <img
                  className='w-[70px]'
                  src={truck}
                  alt="icon"
               />
               <h3 className='text-white text-xl font-bold'>Serviço de qualidade a baixo custo!</h3>
               <p className='text-center text-white'>Realizamos um serviço de limpeza de alta qualidade e rigor, ainda assim a um custo reduzido, dando sempre garantia do trabalho realizado!
               </p>
            </div>

            <div className='flex flex-col items-center w-[400px] gap-2'>
               <img
                  className='w-[70px]'
                  src={calendar}
                  alt="icon"
               />
               <h3 className='text-white text-xl font-bold'>Serviço de qualidade a baixo custo!</h3>
               <p className='text-center text-white'>Realizamos um serviço de limpeza de alta qualidade e rigor, ainda assim a um custo reduzido, dando sempre garantia do trabalho realizado!
               </p>
            </div>
         </div>
      </div>
   )
}

export default Motivos