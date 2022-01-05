import Image from "next/image";
import ReactPlayer from "react-player/youtube";

import { SectionTitle } from "components/SectionTitle";

import shapeLeft from "@public/video/shape_left.svg";
import shapeRight from "@public/video/shape_right.svg";

import { Container, VideoContent } from "./styles";

export function VideoSection() {
  return (
    <Container>
      <SectionTitle title="Vídeo institucional" subtitle="Quem Somos" isBlue />

      <VideoContent>
        <div className="shape_left">
          <Image src={shapeLeft} alt="shape left" layout="responsive" />
        </div>
        <div className="shape_right">
          <Image src={shapeRight} alt="shape right" layout="responsive" />
        </div>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=58pJWTwQNWg&ab_channel=HaeeonEats%ED%95%B4%EC%96%B8"
            light={true}
            controls={true}
            width="100%"
            height="100%"
            title="Yummer Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </VideoContent>
    </Container>
  );
}
