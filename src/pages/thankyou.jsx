import Header from "../layout/header"
import Footer from "../layout/footer"
import Image from "next/image"
import Back from "../../public/assets/thanks.png"
import Heroslider from "@/common/heroslider"
const thankyou=()=>{
    return(
      <div>
        <div className='hidden md:block relative w-full md:h-screen h-[500px] z-20'>
        <Header />
        <Heroslider texttwoclass={'!bg-[linear-gradient(0deg,_#FAECC9_0%,_#CCAB64_100%)] !bg-clip-text !text-transparent xl:!text-[130px] !font-bold !font-poppins '} thankyou={true} main={true} cloud={false} Home={false} bottom={'hidden'} overlay={true} texttwo='Thanks' />
              <Image  src={Back} className='left-0 right-0 bottom-0 top-0 w-full h-[100%]   !object-cover '/></div>
        
        <Footer />
      </div>
    )
}
export default thankyou