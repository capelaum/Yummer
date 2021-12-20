import Image from "next/image";
import Slider from "react-slick";

import { SectionTitle } from "components/SectionTitle";

import { Testimonial } from "utils/types";
import { Slidersettings } from "utils/sliderSettings";

import { Container, Item } from "./styles";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <Container>
      <SectionTitle title="Opinião de quem já provou" subtitle="depoimentos" />
      <Slider {...Slidersettings}>
        {testimonials.map(({ text, author, imageSrc, nick, link }, index) => (
          <Item key={index}>
            <p>{text}</p>
            <div className="author">
              <div className="author_image">
                <Image
                  src={`/testimonials/${imageSrc}`}
                  alt={author}
                  layout="fixed"
                  width={50}
                  height={50}
                />
              </div>
              <div className="author_info">
                <strong>{author}</strong>
                <a href={link} target="_blank" rel="noreferrer">
                  @{nick}
                </a>
              </div>
            </div>
          </Item>
        ))}
      </Slider>
    </Container>
  );
}
