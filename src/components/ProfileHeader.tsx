import Image from 'next/image';
import { FaXTwitter, FaGithub, FaSteam, FaDiscord } from 'react-icons/fa6';
import { SiOsu, SiWhatsapp, SiTelegram } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="mb-4 rounded-full overflow-hidden w-24 h-24 border border-white/20">
        <Image
          src="/images/avatar.jpg"
          alt="Jacks avatar"
          width={96}
          height={96}
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-white text-2xl font-bold mb-2">
        <div
          className="relative inline-block"
          style={{
            backgroundImage: "url('/images/bg-gradient.gif')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "2.25rem"
          }}
        >
          <h1 className="text-2xl font-bold mb-2" style={{ color: 'white', backgroundClip: 'text', WebkitTextFillColor: 'currentcolor' }}>
            Jack
          </h1>
        </div>
      </h1>
      <div className="flex space-x-4 flex-wrap justify-center">
        <Link href="https://x.com/bonelet/" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={24} />
        </Link>
        <Link href="https://github.com/59n" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </Link>
        {/* <Link href="https://steamcommunity.com/id/" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
          <FaSteam size={24} />
        </Link>
        <Link href="#" className="text-white hover:text-gray-300">
          <FaDiscord size={24} />
        </Link>
        <Link href="#" className="text-white hover:text-gray-300">
          <SiWhatsapp size={24} />
        </Link>
        <Link href="#" className="text-white hover:text-gray-300">
          <SiTelegram size={24} />
        </Link>
        <Link href="#" className="text-white hover:text-gray-300">
          <MdEmail size={24} />
        </Link> */}
      </div>
    </div>
  );
};

export default ProfileHeader;
