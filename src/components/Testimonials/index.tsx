import Image from "next/image";
import Slider, { CustomArrowProps } from "react-slick";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";

import { testimonials } from "data/testimonials";

import { SectionTitle } from "components/SectionTitle";

import { sliderSettings } from "utils/sliderSettings";

import { Container, Item } from "./styles";

function NextArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <div className="next-arrow" onClick={onClick}>
      <MdKeyboardArrowRight size={36} />
    </div>
  );
}

function PrevArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <div className="prev-arrow" onClick={onClick}>
      <MdKeyboardArrowLeft size={36} />
    </div>
  );
}

export function Testimonials() {
  const arrowsSliderSettings = {
    ...sliderSettings,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Container>
      <SectionTitle title="Opinião de quem já provou" subtitle="depoimentos" />
      <Slider {...arrowsSliderSettings}>
        {testimonials.map(({ text, author, imageSrc, nick, link }, index) => (
          <Item key={nick} isOrange={index % 2 !== 0}>
            <RiDoubleQuotesL className="quote_icon" size={32} />
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
              <strong>{author}</strong>
            </div>
            <p>{text}</p>
          </Item>
        ))}
      </Slider>
    </Container>
  );
}
