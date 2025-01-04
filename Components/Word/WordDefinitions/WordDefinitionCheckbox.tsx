import styled from "@emotion/styled";
import * as Checkbox from "@radix-ui/react-checkbox";
import { useId, useState } from "react";
import { Check as CheckIcon } from "react-feather";

import { toggleWord } from "../../../lib/api-calls/supabase/word";
import { useWordsStore } from "../../../lib/zustand-store/useWordsStore";
import { appTheme } from "../../../styles/appTheme";
import { Loader } from "../../Common/Loader";

const Container = styled.div`
  display: flex;
  column-gap: 8px;
  justify-content: start;
  width: 100%;
  padding: 16px;
  background-color: ${appTheme.colors.primary["100"]};
`;

const StyledCheckbox = styled(Checkbox.Root)`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: ${appTheme.colors.white};
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 ${appTheme.colors.black};

  :hover {
    background-color: ${appTheme.colors.primary["200"]};
  }
`;
const StyledCheckboxIndicator = styled(Checkbox.Indicator)`
  width: 100%;
  height: 100%;
`;

const Label = styled.label`
  font-family: ${appTheme.fontFamily.montserrat},
    ${appTheme.fontFamily.alternativeFonts};
`;

export const WordDefinitionCheckbox = ({
  id,
  isRead,
}: WordDefinitionCheckboxProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Set unique ID to checkbox
  const checkboxID = useId();

  const toggleIsRead = useWordsStore((state) => state.toggleIsWordRead);

  const handleCheckboxChange = async () => {
    setIsLoading(true);
    try {
      await toggleWord(id);
      toggleIsRead(id);
      setIsLoading(false);
    } catch {
      throw new Error();
    }
  };

  return (
    <Container>
      <StyledCheckbox
        id={checkboxID}
        checked={isRead}
        onCheckedChange={handleCheckboxChange}
      >
        <StyledCheckboxIndicator>
          <CheckIcon size="24px" />
        </StyledCheckboxIndicator>
      </StyledCheckbox>
      <Label htmlFor={checkboxID}>Marquer comme Lu</Label>

      {isLoading ? <Loader size="21px" width="2px" /> : null}
    </Container>
  );
};

interface WordDefinitionCheckboxProps {
  id: number;
  isRead: boolean;
}
