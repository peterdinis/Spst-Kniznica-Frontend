import { Button } from "@/components/ui/button";
import { FC } from "react";
import Link from "next/link";

const Hero: FC = () => {
  return (
    <div className="mx-auto container relative z-0 px-4 xl:px-0">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-3/5 md:pt-24 lg:py-32">
          <h1 className="text-3xl lg:text-6xl xl:text-8xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">
            SPŠT Knižnica
          </h1>
          <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-700 text-lg lg:text-2xl">
           <q>Knihy sú jedinečne prenosné kúzlo - Stephen King</q>
          </h2>
          <div className="w-full flex justify-center md:block">
            <Button size="lg" variant={"default"}>
              <Link href="/books">Zobraziť všekty knihy</Link>
            </Button>
            <Button className="ml-4" size="lg" variant={"destructive"}>
              <Link href="/books">Školská stránka</Link>
            </Button>
          </div>
        </div>
        <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">
          <img
            className="md:absolute md:w-1/2 md:-ml-28 rounded-xl bg-transparent"
            src="https://www.purshology.com/wp-content/uploads/2020/06/school-technology-FB.png"
            alt="Empty"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
