import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className="h-32"></div>
      <h1 className="text-center text-7xl text-ai-blue">About Us</h1>
      <div className="bg-white mx-40 my-8 rounded-2xl shadow-[0px_0px_20px_5px] shadow-ai-blue">
        <div className="flex gap-6 p-6 justify-evenly">
          <div className="flex flex-col gap-6 divide-y w-1/3">
            <div>
              <p className="text-ai-blue text-center text-4xl font-bold m-5">
                Sales
              </p>
              <p className="text-black px-3 text-justify">
                AI professional is here to help you through your AV, security
                camera, phone, or network system investment from the initial
                site survey all the way through implementation and beyond. Our
                experience in the industry ensures that we use only the best,
                most reliable products, with ease of use in mind, to ensure
                years of use for your family or business.
              </p>
            </div>
            <div>
              <p className="text-ai-blue text-center text-4xl font-bold m-5">
                Service
              </p>
              <p className="text-black px-3 text-justify">
                Not ready for an upgrade? AI Professional has the experience and
                know how to keep your older system running. Our longevity in the
                industry means we have either worked on or installed a system
                just like yours. Plus, we love to save the day when other
                contractors say they can’t or won’t fix your problem.
              </p>
            </div>
            <div>
              <p className="text-ai-blue text-center text-4xl font-bold m-5">
                Installation
              </p>
              <p className="text-black px-3 text-justify">
                AI Professional stands for Absolute Installations Professional.
                That&apos;s all that needs to be said but we will say a little
                more. We take pride in delivering an easy to use AV system, and
                even more pride in how we leave your house or business when
                finished. Our Techs will always clean up any mess so it is like
                we were never there.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/Executive_Portrait.jpeg"
              width={576}
              height={720}
              alt=""
              className="rounded-xl"
            ></Image>
            <div className="flex flex-col items-center pt-2">
              <p className="text-black font-bold">
                With over 20 years of experience in the audio/video industry,
              </p>
              <p className="text-black font-bold">
                Dan Dosh founded AI Professional in 2013.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
