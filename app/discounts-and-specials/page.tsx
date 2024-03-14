import Special from "@/app/ui/components/Special";

export default function Page() {
  return (
    <div>
      <div className="h-24"></div>
      <div className="flex flex-col divide-y divide-white gap-12 px-5">
        <Special
          title="Fourth of July Special"
          description="15% off all installations"
          expiration={new Date("04/05/24 00:00:00")}
        ></Special>
        <Special
          title="Flash Discount"
          description="10% off home theater systems - Today only!"
          expiration={new Date("03/07/24 23:59:59")}
        ></Special>
      </div>
    </div>
  );
}
