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
  const [loading, setLoading] = useState(false);

  function handleLoading() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <Container>
      <SectionTitle title="Vídeo institucional" subtitle="Quem Somos" isBlue />

      <VideoContent>
        {!loading && (
          <>
            <div className="shape_left">
              <Image src={shapeLeft} alt="shape left" layout="responsive" />
            </div>
            <div className="shape_right">
              <Image src={shapeRight} alt="shape right" layout="responsive" />
            </div>
          </>
        )}

        <PlayerWrapper onClick={handleLoading}>
          <div className="loader">
            <Loader
              visible={loading}
              type="Puff"
              color="var(--color-secondary)"
              height={80}
              width={80}
              timeout={2000}
            />
          </div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=58pJWTwQNWg&ab_channel=HaeeonEats%ED%95%B4%EC%96%B8"
            light={true}
            controls={true}
            playIcon={
              <MdOutlinePlayCircleOutline color="var(--color-secondary)" />
            }
            width="100%"
            height="100%"
            title="Yummer Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </PlayerWrapper>
      </VideoContent>
    </Container>
  );
}
