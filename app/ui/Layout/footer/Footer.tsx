import Socials from "@/app/ui/Layout/footer/Socials";

export default function Footer() {
  return (
    <footer className="w-full mt-auto">
      <hr className="mb-3 border-gray-700 sm:mx-auto" />
      <div className="mb-3 px-3 sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-white sm:text-center">
          Designed by kelstondosh@gmail.com
        </span>
        <span className="text-sm text-white sm:text-center md:pr-10">
          Copyright &copy; 2024 AI Professional LLC.
        </span>
        <Socials></Socials>
      </div>
    </footer>
  );
}
