import shampoo from '../../public/shampoo.png';
import lupa from '../../public/lupa.png';
import vacuum from '../../public/vacuum.png';
import Motivos from './Motivos'

const Passos = () => {
   return (
      <div className="w-screen bg-[#1E385A] mt-14 py-20">
         <h2
            className="text-4xl text-[#FFDE59] font-bold text-center uppercase"
         >
            Passo a passo da nossa limpeza de estofados
         </h2>
         <div className="flex gap-10 justify-center mt-10">
            <div className='flex flex-col gap-2 w-[300px] items-center'>
               <img
                  className='w-[90px] mb-1'
                  src={lupa}
                  alt="icon"
               />
               <h3 className='text-3xl text-white'>Inspeção</h3>
               <p className='text-center text-white'>Analisamos cada tipo de sofá de modo que seja aplicado o serviço adequado para seu estofado.</p>
            </div>

            <div className='flex flex-col gap-2 w-[300px] items-center'>
               <img
                  className='w-[90px] mb-1'
                  src={shampoo}
                  alt="icon"
               />
               <h3 className='text-3xl text-white'>Aplicação</h3>
               <p className='text-center text-white'>Aplicamos um shampoo bactericida que penetra nas fibras do tecido e age contra a sujeira, e o mau cheiro de todos os tipos, seja de suor, xixi pets, mofo, vômito ou similares.</p>
            </div>

            <div className='flex flex-col gap-2 w-[300px] items-center'>
               <img
                  className='w-[90px] mb-1'
                  src={vacuum}
                  alt="icon"
               />
               <h3 className='text-3xl text-white'>Aspiração</h3>
               <p className='text-center text-white'>Utilizamos equipamentos de sucção que retiram toda a sujeira mais grosseira do sofá.</p>
            </div>
         </div>

         <hr className='mt-10' />

         <Motivos />
      </div>
   )
}

export default Passos