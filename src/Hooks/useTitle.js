import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} || The Law`;
  }, [title]);
};

export default useTitle;
