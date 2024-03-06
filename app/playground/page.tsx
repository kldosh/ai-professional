import TitleCard from "@/app/ui/home/TitleCard";
import VideoHero from "@/app/ui/components/VideoHero";
import {
  SaveTheDayTitle,
  SaveTheDayText,
} from "@/app/ui/components/Animation/VideoHeroAnimations";
import ImageCard from "@/app/ui/components/ImageCard";
import {
  ServicesImage,
  ServicesText,
  ServicesTitle,
} from "@/app/ui/components/Animation/ImageCardAnimations";
import Image from "next/image";
import YouTubeVideo from "@/app/ui/components/YouTubeEmbed";

export default function Page() {
  return (
    <div>
      <div className="h-48"></div>
    </div>
  );
}

// https://www.amazon.com/Sonos-Arc-Premium-Soundbar-Movies/dp/B087CD7H2G/ref=sr_1_10?crid=1BLLH6ILVTAPL&dib=eyJ2IjoiMSJ9.hT3Wxi8Hq0XIWGpk561YDTwmfrFLYJzx2sJc8NSzKyeZM0nV4NhyMMNZJtoZLcgJsbEu-vbkxC6GSorgHyIiTCO-w5tXwoN5uIQ5SEHFtbAT3FBLl_NA4AhEqxGq-FroNSYf0RZexhEVxtt_9oAmGmHQdsr85xi7Ro4vmcTmGJsKjWhSOM6RWelRbBugJpOZlNx8LKPQlIFGotLsgINSPrNfU3WJMPn2IVLnXxey01Q.yfq_nZvP_eGtiYz0JGDiFQ9Sr4EYnXXFnW4VCRtvGrc&dib_tag=se&keywords=sonos&qid=1709745742&sprefix=sonos%2Caps%2C153&sr=8-10&ufe=app_do%3Aamzn1.fos.2b70bf2b-6730-4ccf-ab97-eb60747b8daf
// https://www.amazon.com/VIZIO-Bluetooth-Subwoofer-Assistant-Compatible/dp/B08CGVTVMN/ref=sr_1_3?crid=LLG6N3Y09MZU&dib=eyJ2IjoiMSJ9.N4kkYUDB1Ej2pgMbv6zNJNrqIJ8V7U5Gdy7VdZ3tAIe4HZ0FfFyyrDzFxU81p5l9Kjp_8MtrGR_rZJeL3mB2sGJr4vkqyQ-N5FVSTojyvLrt6v8tqUiC_X-dAy9Ky_xoGdSXhufNP9HdZ8ZIWSwboDg4CK53AIoMtDu-pweGCG1KCjxoaRQJDCMLGdH7aofIvUTnikH7DWxdPhWsiaFm65zkLA3NmupMbFx9hRBRa_I.9GWllCoUcKMWXs8ZhHydv2VVNJQeCopP9FPK8tdvqQQ&dib_tag=se&keywords=sound+system&qid=1709745756&sprefix=sound+system%2Caps%2C145&sr=8-3
// https://www.amazon.com/Acoustic-Audio-AA5170-Theater-Bluetooth/dp/B00IBINI7K/ref=sr_1_13?crid=3TD42FS5EZNJV&dib=eyJ2IjoiMSJ9.N4kkYUDB1Ej2pgMbv6zNJNrqIJ8V7U5Gdy7VdZ3tAIe4HZ0FfFyyrDzFxU81p5l9Kjp_8MtrGR_rZJeL3mB2sNxj5vudshZlLK2OBE0v_fykqrPYTCptp7u1NkP4VhqqC_szWYRmp7ZhxoIHZm8dfTg4CK53AIoMtDu-pweGCG1KCjxoaRQJDCMLGdH7aofIvUTnikH7DWxdPhWsiaFm65zkLA3NmupMbFx9hRBRa_I.Wg5GEu07DwHflglb52UXFlcD75aPbk15Tdc7fC_qFX0&dib_tag=se&keywords=sound%2Bsystem&qid=1709745864&sprefix=sound%2Bsystem%2Caps%2C148&sr=8-13&th=1

// https://www.amazon.com/USX-MOUNT-TVs-Fits-600x400mm-Weight-Capacity/dp/B07CXF452P/ref=sr_1_2_sspa?crid=2M1RT2VZV4F2H&dib=eyJ2IjoiMSJ9.8OJ9J3MFE3AAVRCRDnQLwkT9j_clD99h3cIjHhvQq_6x1EWNpaH6Fa9D23JjqFKZG1btvDYS1n-Vx1OJt7fPs5N2J4gS9bl-IaijanDps7cWFmCR5u1c9p2KobyRSZIGvy-A69CWRjS5-Dc1Hz4pkdNH2gd57OiN5A_ZBYOEyH1wzjgPXkhDdD7OzwvHGOpg-58noUEAbiMC5U7wWoWbWMrJWLce-dOdFPBIIBQUeOE.ASsvgbQd_gwXZSIZiwaEXbNNSRNaKCPEr1ejXFClZ3g&dib_tag=se&keywords=TV+mount&qid=1709745919&sprefix=tv+mount%2Caps%2C145&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1
// https://www.amazon.com/Mounting-Dream-600x400mm-Capacity-MD2268-LK/dp/B00NKYYMAW/ref=sr_1_3?crid=2M1RT2VZV4F2H&dib=eyJ2IjoiMSJ9.8OJ9J3MFE3AAVRCRDnQLwkT9j_clD99h3cIjHhvQq_6x1EWNpaH6Fa9D23JjqFKZG1btvDYS1n-Vx1OJt7fPs5N2J4gS9bl-IaijanDps7cWFmCR5u1c9p2KobyRSZIGvy-A69CWRjS5-Dc1Hz4pkdNH2gd57OiN5A_ZBYOEyH1wzjgPXkhDdD7OzwvHGOpg-58noUEAbiMC5U7wWoWbWMrJWLce-dOdFPBIIBQUeOE.ASsvgbQd_gwXZSIZiwaEXbNNSRNaKCPEr1ejXFClZ3g&dib_tag=se&keywords=TV+mount&qid=1709745959&sprefix=tv+mount%2Caps%2C145&sr=8-3

// https://www.amazon.com/Sony-Inch-Ultra-X95K-Playstation%C2%AE/dp/B09R9NS9BF/ref=sr_1_2_sspa?crid=3CV5YZ6K8E9YK&dib=eyJ2IjoiMSJ9.fzi_6KdU1x9RglX4sdgC-ZL_LaIERPAPx767oWybDAN7WFqEV_YushC4qu55N_PWpw4aMnOyimNnWf_6TY5xJh-8nA5yi8D9hQuj51q5rMKx1V-NcJQImECxoqX_7_jQ7FDvhsJDPVgbWBq7FLvhuQE4ZvrVYQ-iaeDj7mCEONdim37B8zGspgykWZtfNgR_inZXyX11OEViO0Zrbo0KGtVqN8ITCq8ORAvEWTjpR6w.oVspOb1YC3sbgcX4LUdrXPFpQOTsksArNYRdzeNCxlk&dib_tag=se&keywords=tv&qid=1709746023&sprefix=tv%2Caps%2C163&sr=8-2-spons&ufe=app_do%3Aamzn1.fos.17f26c18-b61b-4ce9-8a28-de351f41cffb&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1
// https://www.amazon.com/SAMSUNG-PurColor-Q-Symphony-Xcelerator-UN43CU8000/dp/B0BVMYQXGZ/ref=sr_1_11?crid=3CV5YZ6K8E9YK&dib=eyJ2IjoiMSJ9.fzi_6KdU1x9RglX4sdgC-ZL_LaIERPAPx767oWybDAN7WFqEV_YushC4qu55N_PWpw4aMnOyimNnWf_6TY5xJh-8nA5yi8D9hQuj51q5rMKx1V-NcJQImECxoqX_7_jQ7FDvhsJDPVgbWBq7FLvhuQE4ZvrVYQ-iaeDj7mCEONdim37B8zGspgykWZtfNgR_Nedag_1h9NFgJR4GSmnqgxsKcxtrI3L8jSJTrJOcgck.Q7ydp05RWbEg7Ppcvz1Ds4z_vhZlr28hvTEEIqoVSVg&dib_tag=se&keywords=tv&qid=1709746152&sprefix=tv%2Caps%2C163&sr=8-11
// https://www.amazon.com/TCL-65S450F-Compatibility-Streaming-Television/dp/B0C1HZX7M1/ref=sr_1_13?crid=3CV5YZ6K8E9YK&dib=eyJ2IjoiMSJ9.fzi_6KdU1x9RglX4sdgC-ZL_LaIERPAPx767oWybDAN7WFqEV_YushC4qu55N_PWpw4aMnOyimNnWf_6TY5xJh-8nA5yi8D9hQuj51q5rMKx1V-NcJQImECxoqX_7_jQ7FDvhsJDPVgbWBq7FLvhuQE4ZvrVYQ-iaeDj7mCEONdim37B8zGspgykWZtfNgR_Nedag_1h9NFgJR4GSmnqgxsKcxtrI3L8jSJTrJOcgck.Q7ydp05RWbEg7Ppcvz1Ds4z_vhZlr28hvTEEIqoVSVg&dib_tag=se&keywords=tv&qid=1709746152&sprefix=tv%2Caps%2C163&sr=8-13&ufe=app_do%3Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3
