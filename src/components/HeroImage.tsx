import Image from 'next/image';

type Props = { src: string; alt: string };

const HeroImage = ({ src, alt }: Props) => {
  return (
    <div className="relative group w-64 h-64 sm:w-auto sm:h-auto">
      <Image
        src={src}
        alt={alt}
        width={300}
        height={300}
        className="rounded shadow-xl"
      />
      <div className="absolute inset-0 border-[3px] z-[-1] rounded border-accent translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4 duration-150 hidden sm:block"></div>
      {/* background-blur-effect */}
      {/* <div className="z-30 hidden mdl:inline-block absolute w-52 h-80 lgl:w-80 lgl:h-80 bg-textGreen/20  top-0 left-0 group-hover:bg-transparent duration-150"></div> */}
    </div>
  );
};

export default HeroImage;
