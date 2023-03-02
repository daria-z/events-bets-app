import { Link } from "react-router-dom";

function HeaderLink({ linkTo, icon }) {
  return <Link to={linkTo}>{icon}</Link>;
}

export default HeaderLink;
