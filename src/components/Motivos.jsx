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
               <h3 className='text-white text-xl font-bold'>Orçamento grátis e rápido!</h3>
               <p className='text-center text-white'>Fazemos o seu orçamento no próprio dia, sem esperas e nem complicações, temos sempre uma equipe de comerciais disponíveis para lhe atender e tirar todas as suas dúvidas acerca do seu serviço de limpeza.


               </p>
            </div>

            <div className='flex flex-col items-center w-[400px] gap-2'>
               <img
                  className='w-[70px]'
                  src={truck}
                  alt="icon"
               />
               <h3 className='text-white text-xl font-bold'>Rápida marcação do serviço!</h3>
               <p className='text-center text-white'>Após a sua aprovação do orçamento, temos capacidade para marcar o seu serviço de limpeza de imediato para o dia seguinte, pois dispomos de diversas equipas de intervenção, sempre aptas.
               </p>
            </div>

            <div className='flex flex-col items-center w-[400px] gap-2'>
               <img
                  className='w-[70px]'
                  src={calendar}
                  alt="icon"
               />
               <h3 className='text-white text-xl font-bold'>Horário alargado, 7 dias/semana, 24h/dia!</h3>
               <p className='text-center text-white'>Trabalhamos sete dias por semana e 24h por dia, com equipas rotativas, que realizam os serviços de limpezas normais e também serviços s.o.s.
               </p>
            </div>
         </div>
      </div>
   )
}

export default Motivos