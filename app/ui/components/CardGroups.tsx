"use client";

import Card from "@/app/ui/components/Card";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const variants1 = {
  offscreen: {
    y: 250,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      duration: 0.4,
    },
  },
  hover: {
    y: -25,
    transition: {
      type: "spring",
      duration: 0.4,
    },
  },
};

const variants2 = {
  offscreen: {
    y: 250,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      duration: 0.4,
    },
  },
  hover: {
    y: -25,
    transition: {
      type: "spring",
      duration: 0.4,
    },
  },
};

const variants3 = {
  offscreen: {
    y: 250,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      delay: 0.4,
      duration: 0.4,
    },
  },
  hover: {
    y: -25,
    transition: {
      type: "spring",
      duration: 0.4,
    },
  },
};
export function ResidentialServiceCards() {
  return (
    <div className="flex justify-center">
      <div className="p-14 grid grid-cols-3 gap-12">
        <motion.div
          initial="offscreen"
          animate="onscreen"
          whileHover="hover"
          variants={variants1}
        >
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
        </motion.div>
        <motion.div
          initial="offscreen"
          animate="onscreen"
          whileHover="hover"
          variants={variants2}
        >
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
        </motion.div>
        <motion.div
          initial="offscreen"
          animate="onscreen"
          whileHover="hover"
          variants={variants3}
        >
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
        </motion.div>
      </div>
    </div>
  );
}

export function CommercialServiceCards() {
  return (
    <div className="flex justify-center">
      <div className="p-14 grid grid-cols-3 gap-12">
        <motion.div
          initial="offscreen"
          animate="onscreen"
          whileHover="hover"
          variants={variants1}
        >
          <Card
            link="/commercial-services/av-solutions"
            image={
              <Image
                src="/Commercial-TV-Mounting-3.JPG"
                alt=""
                width={4032}
                height={3024}
                className="rounded-t-lg object-cover h-72"
              ></Image>
            }
            title="AV Solutions"
            description="Impress clients and customers with high-definition video display systems, expertly installed and supported for optimal performance. Enhance outdoor spaces with our range of outdoor TV and audio system sales, services, and installations."
          ></Card>
        </motion.div>
        <motion.div
          initial="offscreen"
          animate="onscreen"
          whileHover="hover"
          variants={variants2}
        >
          <Card
            link="/commercial-services/network-infrastructure"
            image={
              <Image
                src="/networking-wifi1.JPG"
                alt=""
                width={3024}
                height={4032}
                className="rounded-t-lg object-cover h-72"
              ></Image>
            }
            title="Network Infrastructure"
            description="We specialize in data networks, offering Cat6 and fiber optic solutions for reliable connectivity. Access top-quality network equipment, including racks, routers, switches, and more, with our sales, service, and installation expertise. Extend your connectivity outdoors with our outdoor premise WiFi solutions."
          ></Card>
        </motion.div>
        <motion.div
          initial="offscreen"
          animate="onscreen"
          whileHover="hover"
          variants={variants3}
        >
          <Card
            link="/commercial-services/surveillance-systems"
            image={
              <Image
                src="/Commercial-CCTV.JPG"
                alt=""
                width={4032}
                height={3024}
                className="rounded-t-lg object-cover h-72"
              ></Image>
            }
            title="CCTV/Surveillance Systems"
            description="Ensure comprehensive security with our HIPAA compliant CCTV and remote viewing solutions. Whether single or multi-location, we offer tailored setups. Services include 4k and color night vision, AI powered license plate and facial recognition, and object movement detection."
          ></Card>
        </motion.div>
        <motion.div
          initial="offscreen"
          animate="onscreen"
          whileHover="hover"
          variants={variants1}
        >
          <Card
            link="/commercial-services/access-control-solutions"
            image={
              <Image
                src="/Cloud solutions.jpg"
                alt=""
                width={1920}
                height={1040}
                className="rounded-t-lg object-cover h-72"
              ></Image>
            }
            title="Access/Entry control solutions"
            description="Secure your premises with our versatile access control solutions. We offer a range of entry options including biometric, card, key fob, keypad, code, and cellular app access. Our systems seamlessly integrate with CCTV/Surveillance systems."
          ></Card>
        </motion.div>
        <motion.div
          initial="offscreen"
          animate="onscreen"
          whileHover="hover"
          variants={variants2}
        >
          <Card
            link="/commercial-services/long-range-communication"
            image={
              <Image
                src="/phone-system.JPG"
                alt=""
                width={3264}
                height={2448}
                className="rounded-t-lg object-cover h-72"
              ></Image>
            }
            title="Long Range Communicatin Solutions"
            description="Experience uninterrupted long range communication with our point-to-point network bridges for seamless connectivity between buildings. Enhance cell phone coverage with our commercial cell phone boosters, ensuring reliable communication in commercial spaces."
          ></Card>
        </motion.div>
        <motion.div
          initial="offscreen"
          animate="onscreen"
          whileHover="hover"
          variants={variants3}
        >
          <Card
            link="/commercial-services/phone-systems"
            image={
              <Image
                src="/phone-system.JPG"
                alt=""
                width={3264}
                height={2448}
                className="rounded-t-lg object-cover h-72"
              ></Image>
            }
            title="Phone Systems"
            description="Upgrade your communication with our IP-based phone systems. From single site to multi-site, we cater to businesses of all sizes. Seamlessly integrate remote workers and enjoy features like site-wide paging and efficient call management with voicemail and automated attendants."
          ></Card>
        </motion.div>
        <motion.div
          initial="offscreen"
          animate="onscreen"
          whileHover="hover"
          variants={variants1}
        >
          <Card
            link="/commercial-services/project-management"
            image={
              <Image
                src="/pool-house-1.JPG"
                alt=""
                width={3264}
                height={2448}
                className="rounded-t-lg object-cover h-72"
              ></Image>
            }
            title="Project Management"
            description="Simplify your project management with our end-to-end services. Whether for new construction or commercial remodels, we offer one-stop solutions for AV, data, phone systems, access control, and surveillance. Trust us for low-voltage infrastructure, rough wire installations, and seamless integration of your systems."
          ></Card>
        </motion.div>
      </div>
    </div>
  );
}
