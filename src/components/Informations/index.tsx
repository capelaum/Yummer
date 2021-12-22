import { SectionTitle } from "components/SectionTitle";

import { informations } from "data/informations";

import { Information } from "utils/types";

import { Details, InfoContainer } from "./styles";

interface InformationsProps {
  observe?: (element: HTMLElement) => void;
}

export function Informations({ observe }: InformationsProps) {
  function renderInformations(informations: Information[]) {
    return informations.map(({ title, text, list }, index) => (
      <Details key={index}>
        <summary>{title}</summary>
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
