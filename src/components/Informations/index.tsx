import { Information } from "utils/types";

import { Details, InfoContainer } from "./styles";

interface InformationsProps {
  informations: Information[];
}

export function Informations({ informations }: InformationsProps) {
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
    <InfoContainer>
      <h2>Como Funciona</h2>
      <h1>Informações</h1>
      {renderInformations(informations)}
    </InfoContainer>
  );
}
