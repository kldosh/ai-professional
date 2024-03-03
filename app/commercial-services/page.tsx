import Hero from "@/app/ui/components/Hero/Hero";
import Image from "next/image";
import { CommercialServiceCards } from "@/app/ui/components/CardGroups";

export default function Page() {
  return (
    <div>
      <div className="h-40"></div>
      <Hero
        title={
          <h1 className="text-7xl font-bold leading-tight mb-4 drop-shadow-outline">
            Commercial Services
          </h1>
        }
        text={
          <p className="text-2xl text-white mb-8 w-2/3 drop-shadow-outline">
            AI Professional provides an array of services and products. From
            project design, consultation, product recommendation and acquisition
            to project implementation, end user t raining, and post project
            completion support. System service/maintenance contracts available.
          </p>
        }
        image={
          <Image
            src="/Commercial-TV-Mounting-2.JPG"
            alt=""
            width={3264}
            height={2448}
            className="object-cover object-center w-full h-full"
          ></Image>
        }
      ></Hero>
      <CommercialServiceCards></CommercialServiceCards>
    </div>
  );
}
