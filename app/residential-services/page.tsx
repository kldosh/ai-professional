import Hero from "@/app/ui/components/Hero/Hero";
import React from "react";
import Image from "next/image";
import Card from "@/app/ui/components/Card";
import { ResidentialServiceCards } from "@/app/ui/components/CardGroups";

export default function Page() {
  return (
    <div>
      <div className="h-24"></div>
      <Hero
        title={
          <h1 className="text-7xl font-bold leading-tight mb-4 text-shadow-dark">
            Residential Services
          </h1>
        }
        text={
          <p className="text-2xl text-white mb-8 w-2/3 text-shadow-dark transition-transform translate-y-12">
            AI Professional provides an array of services and products. From
            project design, consultation, product recommendation and acquisition
            to project implementation, end user training, and post project
            completion support. All systems are designed with one thing in mind,
            ease of use!!!
          </p>
        }
        image={
          <Image
            src="/King11.JPG"
            alt="Background Image"
            width={2000}
            height={1500}
            className="object-cover transition-transform -translate-y-48"
          />
        }
      ></Hero>
      <ResidentialServiceCards></ResidentialServiceCards>
    </div>
  );
}
