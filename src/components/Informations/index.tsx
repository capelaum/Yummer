import cookies_icon from "@public/Menu/Icons/cookies_icon.svg";

import { BiCookie } from "react-icons/bi";

import { informations } from "data/informations";

import { Information } from "utils/types";

import { SectionTitle } from "components/SectionTitle";

import { Details, InfoContainer } from "./styles";
import Image from "next/image";

interface InformationsProps {
  observe?: (element: HTMLElement) => void;
}

export function Informations({ observe }: InformationsProps) {
  function renderInformations(informations: Information[]) {
    return informations.map(({ title, text, list }) => (
      <Details key={title}>
        <summary>
          <BiCookie size={24} />
          {title}
        </summary>
        <p>{text}</p>
        <ul>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Details>
    ));
  }

  return (
    <InfoContainer ref={observe}>
      <SectionTitle title="Informações" subtitle="Como Funciona" />
      {renderInformations(informations)}
    </InfoContainer>
  );
}
