import Link from "next/link";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";
import { BiMessageRoundedDots } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-4">
        <Link href="/" className="font-black text-tertiary-dark">
          Mestil
        </Link>
        <h4 className="font-semibold text-2xl py-6">Contact</h4>
        <div className="flex flex-wrap gap-16 items-center justify-between">
          <div className="flex-1 mb-8 md:mb-0">
            <h5>123 Road</h5>
            <div className="flex items-center pt-4">
              <BsFillSendFill />
              <p className="ml-2">Nuno's code</p>
            </div>
            <div className="flex items-center pt-4">
              <BsTelephoneOutbound />
              <p className="ml-2">000-000</p>
            </div>
            <div className="flex items-center pt-4">
              <BiMessageRoundedDots />
              <p className="ml-2">Mestil</p>
            </div>
          </div>
          <div className="flex-1 md:text-right">
            <p className="pb-4">Our story</p>
            <p className="pb-4">Get in touch</p>
            <p className="pb-4">Our privacy commitment</p>
            <p className="pb-4">Terms of services</p>
            <p>Customer Assistance</p>
          </div>
          <div className="flex-1 md:text-right">
            <p className="pb-4">Dining Experience</p>
            <p className="pb-4">Wellness</p>
            <p className="pb-4">Fitness</p>
            <p className="pb-4">Sports</p>
            <p>Events</p>
          </div>
        </div>
      </div>
      <div className="bg-tertiary-light h-10 md:h-70 mt-16 w-full bottom-0 left-0" />
    </footer>
  );
}

export default Footer;
