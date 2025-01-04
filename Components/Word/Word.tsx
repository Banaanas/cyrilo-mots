import styled from "@emotion/styled";

import { WiktionaryDefinitions } from "../../types/types";
import {
  AccordionChevron,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Word.styles";
import { WordDefinitionCheckbox } from "./WordDefinitions/WordDefinitionCheckbox";
import { WordDefinitions } from "./WordDefinitions/WordDefinitions";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Word = ({
  id,
  word,
  isRead,
  wiktionaryDefinitions,
}: WordProps) => {
  return (
    <AccordionItem value={id.toString()}>
      <AccordionTrigger>
        <span>{word}</span>
        <AccordionChevron aria-hidden size={32} />
      </AccordionTrigger>
      <AccordionContent asChild>
        <Article>
          <WordDefinitionCheckbox id={id} isRead={isRead} />
          <WordDefinitions wiktionaryDefinitions={wiktionaryDefinitions} />
        </Article>
      </AccordionContent>
    </AccordionItem>
  );
};

interface WordProps {
  id: number;
  word: string;
  isRead: boolean;
  wiktionaryDefinitions: WiktionaryDefinitions;
}
