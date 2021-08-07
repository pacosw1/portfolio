import { useContext } from "react";
import { ErrorContext } from "../context/errors";
import {
  InternalServerError,
  PageNotFound,
  UnauthorizedAccess,
} from "../pages/PageNotFound";
import { CenteredContainer } from "../styled";
export const ErrorHandler = ({ children }) => {
  let { currentCode } = useContext(ErrorContext);

  const getPage = () => {
    switch (currentCode) {
      case 401:
        return <UnauthorizedAccess />;
      case 500:
        return <InternalServerError />;
      case 404:
        return <PageNotFound />;
      default:
        return <>{children}</>;
    }
  };

  return <CenteredContainer>{getPage()}</CenteredContainer>;
};
