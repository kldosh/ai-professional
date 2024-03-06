import Link from "next/link";

interface affiliateLink {
  name: string;
  link: string;
}

interface Props {
  title: string;
  src: string;
  links: affiliateLink[];
}
export default function YouTubeVideo({ title, src, links }: Props) {
  return (
    <div className="bg-white m-5 shadow-[0px_0px_20px_5px] shadow-ai-blue rounded-2xl flex flex-col items-center">
      <p className="text-black mt-5 text-2xl font-bold">{title}</p>
      <iframe
        className="m-5 rounded-xl"
        src={src}
        width={500}
        height={300}
        allowFullScreen
        loading="lazy"
      ></iframe>
      <p className="text-black font-bold">Affiliate Links:</p>
      <ul className="mb-5 text-center">
        {links.map((link) => (
          <li key={link.name}>
            <Link className="text-ai-blue underline" href={link.link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
