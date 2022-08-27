import ErrorPage from "../Components/_Pages/ErrorPages/ErrorPage";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";

const Custom404Page = () => {
  return (
    <StyledPageMain>
      <ErrorPage errorCode="404" />
    </StyledPageMain>
  );
};

export default Custom404Page;
