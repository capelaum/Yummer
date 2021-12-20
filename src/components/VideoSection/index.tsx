import Image from "next/image";
import { SectionTitle } from "components/SectionTitle";

import shapeLeft from "@public/video/shape_left.svg";
import shapeRight from "@public/video/shape_right.svg";

import { Container, VideoContent } from "./styles";

export function VideoSection() {
  return (
    <Container>
      <SectionTitle title="Vídeo institucional" subtitle="Quem Somos" isBlue />

      <VideoContent>
        <iframe
          src="https://www.youtube.com/embed/N9O_UFzXQrc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="shapeLeft">
          <Image src={shapeLeft} alt="Forma Esquerda" />
        </div>
        <div className="shapeRight">
          <Image src={shapeRight} alt="Forma Direita" />
        </div>
      </VideoContent>
    </Container>
  );
}
