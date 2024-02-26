import React from "react";
import { useState, useEffect, useDebugValue } from "react";
import useStateDisplayName from "./useStateDisplayName";

export default function useGithub(username) {
  //useDebugValue(`Fetching data for ${username}`);
  const [user, setUser] = useStateDisplayName(null, "userInfo");
  const [error, setError] = useStateDisplayName(null, "errorInfo");
  const [loading, setLoading] = useStateDisplayName(false, "loadingInfo");
  /*   useDebugValue(
    error
      ? `There is an error fetching the data for ${username}`
      : `No error fetching data for ${username}`
  ); */
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );

        if (!response.ok) {
          throw new Error(`Problem fetching data. ${response.status}`);
        }
        const data = await response.json();
        // console.log(data);
        setUser(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.log(err.message);
      }
    };
    fetchData();
  }, []);
  useDebugValue(user, (user) => user?.bio);
  return {
    user,
    loading,
    error,
  };
}
