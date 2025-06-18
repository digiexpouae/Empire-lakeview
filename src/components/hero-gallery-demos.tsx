import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "@/components/blocks/hero-gallery-scroll-animation";
import { Button } from "@/components/ui/button";

const IMAGES = [
 "/assets/empirelivin (1).jpg",
  "/assets/empirelivin (2).jpg",
  "/assets/empirelivin (3).jpg",
  "/assets/empirelivin (4).jpg",
  "/assets/empirelivin (5).jpg",];

const HeroDemo1 = () => {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {IMAGES.map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-xl shadow-xl"
          >
            <img
              className="size-full object-cover object-center"
              src={imageUrl}
              alt=""
            />
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale className="relative z-10 text-center">
        <h1 className="max-w-xl text-5xl font-bold tracking-tighter text-slate-800 ">
          
        </h1>
        <p className="my-6 max-w-xl text-sm text-slate-700 md:text-base">
       
        </p>
      </ContainerScale>
    </ContainerScroll>
  );
};

const HeroDemo2 = () => {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid
        variant={"fourCells"}
        className="sticky left-0 top-0 h-svh w-full p-4"
      >
        {IMAGES.filter((_, index) => index <= 3).map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-xl shadow-xl"
          >
            <img
              className="size-full object-cover object-center"
              width="100%"
              height="100%"
              src={imageUrl}
            />
          </BentoCell>
        ))}
      </BentoGrid>
      <ContainerScale className="text-center">
        <h1
          className="max-w-xl text-5xl font-bold tracking-tighter"
        >
          
        </h1>
        <p className="my-6 max-w-xl text-sm text-stone-500 md:text-base">
         
        </p>

      </ContainerScale>
    </ContainerScroll>
  );
};

const HeroDemo3 = () => {
  return (
    <ContainerScroll className="h-[350vh] bg-slate-900 text-slate-100">
      <BentoGrid
        variant={"threeCells"}
        className="sticky left-0 top-0 h-svh w-full p-4"
      >
        {IMAGES.filter((_, index) => index <= 2).map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-xl shadow-xl"
          >
            <img
              className="size-full object-cover object-center"
              width="100%"
              height="100%"
              src={imageUrl}
            />
          </BentoCell>
        ))}
      </BentoGrid>
      <ContainerScale className="text-center">
        <h1 className="max-w-xl text-5xl font-bold tracking-tighter ">
  
        </h1>
        <p className="my-6 max-w-xl text-sm opacity-80 md:text-base">
          
        </p>

      </ContainerScale>
    </ContainerScroll>
  );
};

export { HeroDemo1, HeroDemo2, HeroDemo3 }; 