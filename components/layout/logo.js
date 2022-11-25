import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/sites/logo.jpg"
        alt="ProNetwork2.0"
        width={100}
        height={100}
      />
    </Link>
  );
};

export default Logo;
