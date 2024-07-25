import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// this is a layout component that will be used to protect the routes means if the user is not authenticated then it will redirect to the login page or if the user is authenticated then it will show the children components
export default function AuthLayout({ children, authentication = true }) {
  AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
    authentication: PropTypes.bool,
  };
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const authStaus = useSelector((state) => state.auth.status);

  useEffect(() => {
    //TODO: make sure to check if the user is authenticated or not
    if (authentication && authStaus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStaus !== authentication) {
      navigate("/");
    }

    setLoading(false);
  }, [authStaus, navigate, authentication]);

  return loading ? <div>Loading...</div> : <>{children}</>;
}
