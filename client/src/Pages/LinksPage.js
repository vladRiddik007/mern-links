import React, { useCallback, useContext, useEffect } from "react";
import { Linkslist } from "../components/Linkslist";
import { Loader } from "../components/Loader";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";

export const LinksPage = () => {
  const [links, setLinks] = React.useState([]);
  const { loading, request } = useHttp();
  const { token } = useContext(AuthContext);

  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request("/api/link", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setLinks(fetched);
    } catch (error) {}
  }, [request, token]);
  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  if (loading) {
    return <Loader />;
  }
  return <>{!loading && <Linkslist links={links} />}</>;
};
