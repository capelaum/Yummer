import Image from "next/image";
import Slider from "react-slick";

import { testimonials } from "data/testimonials";

import { SectionTitle } from "components/SectionTitle";

import { Slidersettings } from "utils/sliderSettings";

import { Container, Item } from "./styles";

// interface TestimonialsProps {
//   testimonials: Testimonial[];
// }

export function Testimonials() {
  return (
    <Container>
      <SectionTitle title="Opinião de quem já provou" subtitle="depoimentos" />
      <Slider {...Slidersettings}>
        {testimonials.map(({ text, author, imageSrc, nick, link }) => (
          <Item key={nick}>
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
