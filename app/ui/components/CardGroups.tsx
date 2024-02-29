import Card from "@/app/ui/components/Card";
import Image from "next/image";
import React from "react";

export function ResidentialServiceCards() {
  return (
    <div className="flex justify-center">
      <div className="p-14 grid grid-cols-3 gap-12">
        <Card
          link="/residential-services/av-solutions"
          image={
            <Image
              src="/Fireplace mount23.JPG"
              alt="Av Solutions"
              width={4032}
              height={3024}
              className="rounded-t-lg object-cover h-72"
            />
          }
          title="AV Solutions"
          description="Elevate your lifestyle with our expertly crafted AV experiences. From theater rooms to outdoor audio, we have the AV solutions that you need. Enjoy no-wire TV mounting, whole-house audio, smart home systems, and weather-proof outdoor TV solutions."
        ></Card>
        <Card
          link="/residential-services/data-wifi-solutions"
          image={
            <Image
              src="/networking-wifi1.JPG"
              alt="Data netorking"
              width={3024}
              height={4032}
              className="rounded-t-lg object-cover h-72"
            />
          }
          title="Data/Wi-Fi Solutions"
          description="Whether you're in an existing home or a new construction, we ensure reliable internet access throughout your space. Optimize your network for efficiency with Cat6 cabling. Extend your connectivity with outdoor Wi-Fi coverage. Experience the convenience of a fully connected home with our tailored solutions."
        ></Card>
        <Card
          link="/residential-services/surveillance-systems"
          image={
            <Image
              src="/Color at night camera example 1.JPG"
              alt="Data netorking"
              width={3024}
              height={4032}
              className="rounded-t-lg object-cover h-72"
            />
          }
          title="CCTV/Surveillance Solutions"
          description="Your home is your castle. Protect your home with our reliable CCTV/Surveillance Solutions. Our hardwired systems offer 30-day recording and remote viewing from professionally installed high-definition 4K cameras, including color at night options. No contracts; you own the equipment."
        ></Card>
      </div>
    </div>
  );
}
