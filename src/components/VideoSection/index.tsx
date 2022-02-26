import { useState } from "react";
import Image from "next/image";

import ReactPlayer from "react-player/youtube";
import Loader from "react-loader-spinner";

import { MdOutlinePlayCircleOutline } from "react-icons/md";

import shapeLeft from "@public/video/shape_left.svg";
import shapeRight from "@public/video/shape_right.svg";

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
          <Image src={shapeLeft} alt="shape left" layout="responsive" />
        </div>
        <div className="shape_right">
          <Image src={shapeRight} alt="shape right" layout="responsive" />
        </div>

        <PlayerWrapper>
          <div className="loader">
            <Loader
              type="Puff"
              color="var(--color-secondary)"
              height={80}
              width={80}
              timeout={2000}
            />
          </div>
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
