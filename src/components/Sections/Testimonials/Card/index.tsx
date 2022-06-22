import { useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { Testimonial } from "utils/types";
import * as S from "./styles";

export function Card({ id, author, imageSrc, text, index }: Testimonial) {
  const testimonialImageSrc = imageSrc
    ? `/Testimonials/${imageSrc}`
    : "/Testimonials/reviewer.jpg";

  useEffect(() => {
    const texts = document.querySelectorAll("p.description");

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList[
          entry.target.scrollHeight > entry.contentRect.height + 25
            ? "add"
            : "remove"
        ]("truncated");
      }
    });

    texts.forEach((text) => observer.observe(text));
  });

  return (
    <S.Card isOrange={index % 2 === 0}>
      <S.User>
        <S.Image src={testimonialImageSrc} loading="lazy" alt={author} />
        <S.Name>{author}</S.Name>
      </S.User>
      <S.Text isOrange={index % 2 === 0}>
        <input type="checkbox" id={`review-${id}`} />
        <p className="description">{text}</p>
        <label className="label-more" htmlFor={`review-${id}`}>
          Ver tudo
        </label>
      </S.Text>
    </S.Card>
  );
}
