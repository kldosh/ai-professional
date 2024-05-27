import Image from "next/image";

interface ReviewProps {
  text: string;
}

export default function Review({ text }: ReviewProps) {
  return (
    <div className="bg-white h-96 w-64 rounded-2xl flex flex-col justify-start shadow-[0px_0px_20px_5px] shadow-ai-blue">
      <Author></Author>
      <span className="text-black text-center m-3 overflow-ellipsis">
        {text}
      </span>
    </div>
  );
}

function Author() {
  return (
    <div className="flex justify-evenly mt-5">
      <ProfilePic></ProfilePic>
      <AuthorRating></AuthorRating>
    </div>
  );
}

function AuthorRating() {
  return (
    <div className="flex flex-col justify-center">
      <span className="text-black ml-1 text-xs">Dan Dosh</span>
      <StarRating></StarRating>
    </div>
  );
}

function ProfilePic() {
  return (
    <Image
      src="/Executive_portrait.jpeg"
      alt="profile pic"
      width={576}
      height={720}
      className="rounded-full w-14 h-14"
    ></Image>
  );
}

function StarRating() {
  return (
    <div className="flex items-center">
      <StarIcon filled={true}></StarIcon>
      <StarIcon filled={true}></StarIcon>
      <StarIcon filled={true}></StarIcon>
      <StarIcon filled={true}></StarIcon>
      <StarIcon filled={false}></StarIcon>
    </div>
  );
}

interface StarIconProps {
  filled: boolean;
}

function StarIcon({ filled }: StarIconProps) {
  return (
    <div className="w-5">
      <svg
        version="1.0"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        enableBackground="new 0 0 64 64"
        fill="#ffff"
        stroke="#ffff"
      >
        <path
          fill={filled ? "#faca15" : "#d3d3d3"}
          d="M63.893,24.277c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15 C33.479,0.448,32.773,0,31.998,0s-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343 c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957 c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719c0.302,0.166,0.636,0.25,0.968,0.25 c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704l14.294-14.657 C63.951,25.771,64.131,24.987,63.893,24.277z"
        ></path>
      </svg>
    </div>
  );
}
