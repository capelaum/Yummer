import { SectionTitle } from "components/SectionTitle";
import { testimonials } from "data/testimonials";
import Slider from "react-slick";
import { sliderSettings } from "utils/sliderSettings";
import { Card } from "./Card";
import { Container, SliderContainer, Wrapper } from "./styles";

export function Testimonials() {
  return (
    <Wrapper>
      <Container>
        <SectionTitle
          title="Opinião de quem já provou"
          subtitle="depoimentos"
        />

        <SliderContainer>
          <Slider {...sliderSettings}>
            {testimonials.map(({ id, text, author, imageSrc }, index) => (
              <Card
                key={author}
                author={author}
                text={text}
                imageSrc={imageSrc}
                id={id}
                index={index}
              />
            ))}
          </Slider>
        </SliderContainer>
      </Container>
    </Wrapper>
  );
}
