import { useEffect, useState } from "react";

import { Loader } from "../components/Loader/Loader";

function withApi(Component, fetchFunc) {
  return (props) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [reload, setReload] = useState(false);
    const update = () => {
      setReload(!reload);
    };
    useEffect(() => {
      (async () => {
        setLoading(true);
        const res = await fetchFunc();
        if (res) {
          setData(res);
        }
        setLoading(false);
      })();
    }, [reload]);
    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <Component {...props} data={data} reload={update} />
        )}
      </>
    );
  };
}
export { withApi };
