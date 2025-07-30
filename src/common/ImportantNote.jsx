import Image from "next/image";
import mail from "../../public/assets/mail.svg";
import phone from "../../public/assets/phone.svg";

export default function AlternativeReporting() {
  return (
    <div className="bg-[#0E1527] text-white py-20 px-4 text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
        Alternative Reporting Methods
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

      <div className="bg-[#FFFFFF33] text-xs  text-white rounded-md px-6 py-6 max-w-5xl mx-auto">
        <h4 className="block mb-1 text-xl font-semibold mb-4">Important Note</h4>
        <p>
          This portal is for reporting genuine concerns about misconduct, violations, or unethical behavior.
          Knowingly false reports may result in disciplinary action. If you are unsure whether your concern qualifies,
          we encourage you to err on the side of reporting: "It’s better to raise a concern that proves unfounded
          than to remain silent about potential wrongdoing."
        </p>
      </div>
    </div>
  );
}
