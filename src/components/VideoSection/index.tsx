import Image from "next/image";

import ReactPlayer from "react-player/youtube";

import { MdOutlinePlayCircleOutline } from "react-icons/md";

import { images } from "constants/images";

import { SectionTitle } from "components/SectionTitle";

import { Container, PlayerWrapper, VideoContent } from "./styles";

export function VideoSection() {
  return (
    <Container>
      <SectionTitle
        title="Conheça a Yummer"
        subtitle="Vídeo institucional"
        isBlue
      />

      <VideoContent>
        <div className="shape_left">
          <Image
            src={images.shape_left_video}
            alt="shape left"
            layout="responsive"
          />
        </div>
        <div className="shape_right">
          <Image
            src={images.shape_right_video}
            alt="shape right"
            layout="responsive"
          />
        </div>

        <PlayerWrapper>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/embed/e9njxWYHY_8"
            light={true}
            controls={true}
            playIcon={
              <MdOutlinePlayCircleOutline color="var(--color-secondary)" />
            }
            width="100%"
            height="100%"
            title="Vídeo de apresentação da Yummer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </PlayerWrapper>
      </VideoContent>
    </Container>
  );
}
