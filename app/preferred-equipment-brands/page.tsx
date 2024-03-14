import {
  AudioSystemBrands,
  TVBrands,
  TVMountBrands,
} from "@/app/ui/components/BrandSections";

export default function Page() {
  return (
    <div>
      <div className="h-24"></div>
      <div className="flex flex-col divide-y-2 divide-white m-5 gap-10">
        <TVBrands></TVBrands>
        <TVMountBrands></TVMountBrands>
        <AudioSystemBrands></AudioSystemBrands>
      </div>
    </div>
  );
}
