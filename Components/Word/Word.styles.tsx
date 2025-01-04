import styled from "@emotion/styled";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown as ChevronIcon } from "react-feather";

import { appTheme } from "../../styles/appTheme";

export const AccordionItem = styled(Accordion.Item)`
  width: 95vw;
  min-width: 300px;
  max-width: 800px;

  @media ${appTheme.queries.tabletAndUp} {
    width: 75vw;
  }
`;

export const AccordionTrigger = styled(Accordion.Trigger)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 12px;
  background-color: ${appTheme.colors.white};
  cursor: pointer;
  border: none;
  isolation: isolate;

  ::after {
    position: absolute;
    z-index: -1;
    inset: 0 0;
    width: 100%;
    height: 100%;
    background-color: ${appTheme.colors.tertiary["200"]};
    opacity: 0;
    transition: opacity 250ms ease-out;
    content: "";
  }

  :hover {
    font-weight: ${appTheme.fontWeight.bold};
  }

  :hover::after {
    opacity: 1;
  }
`;

export const AccordionChevron = styled(ChevronIcon)`
  transition: transform 300ms;

  [data-state="open"] & {
    transform: rotate(180deg);
  }
`;

export const AccordionContent = styled(Accordion.Content)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
