import what_icon from '../../public/whats_icon.png';
import gmail_icon from '../../public/gmail_icon.png';

const Footer = () => {

   function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   }

   return (
      <div className="flex items-center w-screen h-[70px] bg-black justify-between">
         <button onClick={() => scrollToTop()} className="pl-10 text-white transition duration-300 hover:scale-[1.05]">
            Voltar ao topo
         </button>

         <div className='flex justify-center ml-[270px] gap-10 mr-12'>
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
      </div>
   )
}

export default Footer