import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LinkCard } from "../components/LinkCard";
import { Loader } from "../components/Loader";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";

export const DetailPage = () => {
  const { token } = React.useContext(AuthContext);
  const { request, loading } = useHttp();
  const [link, setLink] = React.useState(null);
  const linkId = useParams().id;

  const getLink = useCallback(async () => {
    try {
      const data = await request(`/api/link/${linkId}`, "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setLink(data);
    } catch (error) {}
  }, [request, linkId, token]);

  useEffect(() => {
    getLink();
  }, [getLink]);

  if (loading) {
    return <Loader />;
  }
  return <>{!loading && link && <LinkCard link={link} />}</>;
};
