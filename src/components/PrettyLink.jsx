import { Link } from "react-router-dom";

export const PrettyLink = ({ path, children }) => {
  return (
    <Link style={{ textDecoration: "none", color: "inherit" }} to={path}>
      {children}
    </Link>
  );
};
