import React, { useState } from "react";
import ImgContainer from "@/app/ui/components/Gallery/ImgContainer";
import ImgModal from "@/app/ui/components/Gallery/ImgModal";

interface Props {
  images: string[];
}
export default function Gallery({ images }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");
  const openModal = (src: string) => {
    setModalSrc(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
      {images.map((photo, idx) => (
        <ImgContainer key={idx} src={photo} onClick={openModal}></ImgContainer>
      ))}
      <ImgModal isOpen={isOpen} onClose={closeModal} src={modalSrc}></ImgModal>
    </section>
  );
}
