import Image from "next/image";
import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  src: string;
}
export default function ImgModal({ isOpen, onClose, src }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white mb-8 p-4 w-2/3 h-4/5 rounded shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute z-50 top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <Image
          src={src}
          alt=""
          fill={true}
          className="max-w-full h-auto object-cover rounded border border-gray-600"
        ></Image>
      </div>
    </div>
  );
}
