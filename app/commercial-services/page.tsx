import { CommercialServiceCards } from "@/app/ui/components/CardGroups";
import { CommercialServicesHero } from "@/app/ui/components/Hero/CommercialServicesHero";

export default function Page() {
  return (
    <div>
      <div className="h-24"></div>
      <CommercialServicesHero></CommercialServicesHero>
      <CommercialServiceCards></CommercialServiceCards>
    </div>
  );
}
