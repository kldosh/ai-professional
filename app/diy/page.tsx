import YouTubeVideo from "@/app/ui/components/YouTubeEmbed";

interface affiliateLink {
  name: string;
  link: string;
}

export default function Page() {
  const links: affiliateLink[] = [];

  links.push({
    name: "test tv link",
    link: "https://www.amazon.com/Amazon-Basics-Motion-Articulating-Mount/dp/B01KBEOL5E/ref=sr_1_1_ffob_sspa?crid=3DN5Z6UQLXK84&dib=eyJ2IjoiMSJ9.PGjjoydwZNF4dFs52y7ZuTJQyFImtxqCUFgFVGMxxnqVAWv7Y6TlcAHQT7KtKleHTu-whc-IevzxHK9tlNcWHxphIxEJ6ZjlcniNMBMhG5BpyxhmtMhD6kLX1IQbyNYH4Y3YTz09Mv7ukHL0I2hEEvxHabqWtEzqHV5KO65cXXJXaDsLXxLX_QvOf8ZqEgDzroOeOIMrG75YWwqjbDw00_B-AEjPRgV3hdFCp7gKJcs.KBjKNBHeS6torh_1Mlkd8ilENpT9_0qkHutmzKX1WLI&dib_tag=se&keywords=tv+wall+mount&qid=1709729283&sprefix=tv%2Caps%2C129&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
  });

  links.push({
    name: "test tv mount link",
    link: "https://www.amazon.com/Amazon-Basics-Motion-Articulating-Mount/dp/B01KBEOL5E/ref=sr_1_1_ffob_sspa?crid=3DN5Z6UQLXK84&dib=eyJ2IjoiMSJ9.PGjjoydwZNF4dFs52y7ZuTJQyFImtxqCUFgFVGMxxnqVAWv7Y6TlcAHQT7KtKleHTu-whc-IevzxHK9tlNcWHxphIxEJ6ZjlcniNMBMhG5BpyxhmtMhD6kLX1IQbyNYH4Y3YTz09Mv7ukHL0I2hEEvxHabqWtEzqHV5KO65cXXJXaDsLXxLX_QvOf8ZqEgDzroOeOIMrG75YWwqjbDw00_B-AEjPRgV3hdFCp7gKJcs.KBjKNBHeS6torh_1Mlkd8ilENpT9_0qkHutmzKX1WLI&dib_tag=se&keywords=tv+wall+mount&qid=1709729283&sprefix=tv%2Caps%2C129&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
  });

  links.push({
    name: "test sound system link",
    link: "https://www.amazon.com/Amazon-Basics-Motion-Articulating-Mount/dp/B01KBEOL5E/ref=sr_1_1_ffob_sspa?crid=3DN5Z6UQLXK84&dib=eyJ2IjoiMSJ9.PGjjoydwZNF4dFs52y7ZuTJQyFImtxqCUFgFVGMxxnqVAWv7Y6TlcAHQT7KtKleHTu-whc-IevzxHK9tlNcWHxphIxEJ6ZjlcniNMBMhG5BpyxhmtMhD6kLX1IQbyNYH4Y3YTz09Mv7ukHL0I2hEEvxHabqWtEzqHV5KO65cXXJXaDsLXxLX_QvOf8ZqEgDzroOeOIMrG75YWwqjbDw00_B-AEjPRgV3hdFCp7gKJcs.KBjKNBHeS6torh_1Mlkd8ilENpT9_0qkHutmzKX1WLI&dib_tag=se&keywords=tv+wall+mount&qid=1709729283&sprefix=tv%2Caps%2C129&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
  });

  return (
    <div>
      <div className="h-48"></div>
      <h1 className="text-center text-7xl text-ai-blue mb-5">
        DIY Tips and Tricks
      </h1>
      <div className="grid grid-cols-3 gap-3">
        <YouTubeVideo
          title="DIY Test Video 1"
          src="https://www.youtube.com/embed/QjWPq33J7UE?si=YO3LKAp7GJ88lhxN"
          links={links}
        ></YouTubeVideo>
        <YouTubeVideo
          title="DIY Test Video 2"
          src="https://www.youtube.com/embed/0PvuwLda_ac?si=JAicSKTwoFqs6wbN"
          links={links}
        ></YouTubeVideo>
        <YouTubeVideo
          title="DIY Test Video 3"
          src="https://www.youtube.com/embed/MY6PoN7hetU?si=zlct_Lr-a24bwOKK"
          links={links}
        ></YouTubeVideo>
        <YouTubeVideo
          title="DIY Test Video 4"
          src="https://www.youtube.com/embed/fAhDznfK2mQ?si=V-kTipWOFyWHnUhm"
          links={links}
        ></YouTubeVideo>
        <YouTubeVideo
          title="DIY Test Video 5"
          src="https://www.youtube.com/embed/quE96Dsxaj0?si=5NRTSXASIlJ-XD0o"
          links={links}
        ></YouTubeVideo>
        <YouTubeVideo
          title="DIY Test Video 6"
          src="https://www.youtube.com/embed/osNnMjEhmZw?si=x2_cVUsVT2s9bGHp"
          links={links}
        ></YouTubeVideo>
        <YouTubeVideo
          title="DIY Test Video 7"
          src="https://www.youtube.com/embed/WHXYlEB_QmY?si=e5nRFm4uuAZG14XG"
          links={links}
        ></YouTubeVideo>
        <YouTubeVideo
          title="DIY Test Video 8"
          src="https://www.youtube.com/embed/XswfTeMFqmg?si=psMju4oRLPh8MNZ9"
          links={links}
        ></YouTubeVideo>
        <YouTubeVideo
          title="DIY Test Video 9"
          src="https://www.youtube.com/embed/og78pvlsbA8?si=ewed46MOx1fagrUI"
          links={links}
        ></YouTubeVideo>
      </div>
    </div>
  );
}
