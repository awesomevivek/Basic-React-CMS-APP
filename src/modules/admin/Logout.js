import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import Cookies from "js-cookie";

const Logout = () => {
  const [loading, setLoading] = React.useState(false); 
  const history = useHistory();

  React.useEffect(() => {
    setLoading(true);
    Cookies.remove('access-token');
    history.go("/");
    setLoading(false);
  }, [])
 
  return (
    <>
        {
            loading && <h1 align="center">Loading...</h1>
        }
    </>
  );
};

export default withRouter(Logout);
