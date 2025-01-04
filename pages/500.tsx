import { ErrorPage } from "../Components/_Pages/ErrorPages/ErrorPage";
import { StyledPageMain } from "../Components/StyledComponents/StyledPageMain";

const Custom500Page = () => {
  return (
    <StyledPageMain>
      <ErrorPage errorCode="500" />
    </StyledPageMain>
  );
};

export default Custom500Page;
