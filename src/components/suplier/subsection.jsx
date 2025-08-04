import Image from "next/image";
import mail from "../../../public/assets/mail.svg";
import phone from "../../../public/assets/phone.svg";

export default function subsection() {
  return (
    <div className="bg-[#0E1527] text-white py-20 px-4 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-light mb-6">
    Direct Contact Options
      </h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
        <div className="flex items-center gap-2">
          <Image src={phone} alt="Phone Icon" width={20} height={20} />
          <span>+971 800 700007</span>
        </div>

        <div className="flex items-center gap-2">
          <Image src={mail} alt="Mail Icon" width={20} height={20} />
          <span>info@empiredevelopment.ae</span>
        </div>
      </div>
      </div>)}