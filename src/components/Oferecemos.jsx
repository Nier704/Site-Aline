import colchao from '../../public/colchao.jpg';
import estofado from '../../public/estofado.jpg';
import tapete from '../../public/tapete.jpeg';
export const Oferecemos = () => {
   return (
      <div className="flex flex-col">
         <h3 className="text-center text-5xl font-bold text-[#1E385A] mt-10">Oferecemos</h3>
         <Destaque />
      </div>
   )
}

export const Destaque = () => {
   return (
      <div className='flex justify-center gap-32 mt-10'>
         <div>
            <img
               className='w-[400px] h-[350px] rounded-[10px] transition opacity-[80%] duration-300 hover:opacity-[100%]'
               src={colchao}
               alt="icon"
            />
            <h3 className='text-3xl text-center mt-5 text-[#1E385A]'>Limpeza de Colchões</h3>
         </div>
         <div>
            <img
               className='w-[400px] h-[350px] rounded-[10px] transition opacity-[80%] duration-300 hover:opacity-[100%]'
               src={estofado}
               alt="icon"
            />
            <h3 className='text-3xl text-center mt-5 text-[#1E385A]'>Limpeza de Sofás</h3>
         </div>
         <div>
            <img
               className='w-[400px] h-[350px] rounded-[10px] transition opacity-[80%] duration-300 hover:opacity-[100%]'
               src={tapete}
               alt="icon"
            />
            <h3 className='text-3xl text-center mt-5 text-[#1E385A]'>Limpeza de Tapetes</h3>
         </div>
      </div>
   )
}