import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectWrapper = ({ children, isRedirect, path }) => {
  const navigate = useNavigate();

  useEffect(() => isRedirect && navigate(path), [isRedirect, navigate, path]);

  return <>{children}</>;
};
export default RedirectWrapper;
