import logo from '../../public/logo.png';
import what_icon from '../../public/whats_icon.png';
import gmail_icon from '../../public/gmail_icon.png';

const Banner = () => {
   return (
      <div className="flex items-center bg-[#1E385A] w-screen h-[170px]">
         <div className='flex'>
            <img
               className='w-[220px] ml-20'
               src={logo}
               alt="logo"
            />
         </div>
         <div className='flex flex-col'>
            <h1
               className='text-white text-3xl ml-[300px]'
            >
               Sua satisfação, Nossa Prioridade - Limpando com Excelência
            </h1>
            <div className='flex justify-center ml-[270px] mt-5 gap-10'>
               <div className='flex gap-2'>
                  <img className='w-[30px]' src={what_icon} alt="whatsapp" />
                  <div className='text-white text-xl'>+351 968 776 499</div>
               </div>
               <div className='flex gap-2'>
                  <img className='w-[30px]' src={gmail_icon} alt="gmail" />
                  <div className='text-white text-xl'>alinesoaresgyn@gmail.com
                  </div>
               </div>
            </div>
            <div></div>
         </div>
      </div>
   )
}

export default Banner