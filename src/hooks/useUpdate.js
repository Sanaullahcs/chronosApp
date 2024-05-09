import { useState, useCallback } from "react";

const useUpdate = (url, method = "POST") => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateData = useCallback(
    async (data) => {
      setLoading(true);

      try {
        const response = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        return result;
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [url, method]
  );

  return { updateData, loading, error };
};

export default useUpdate;
