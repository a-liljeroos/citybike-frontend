import { useEffect, useState } from "react";
import { URL } from "../constants";

export default function useFetchTotalJourneys() {
  const [totalJourneys, setTotalJourneys] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTotalJourneys() {
      try {
        const response = await fetch(`${URL}/journeys/total`);
        const data: { totalJourneys: number } = await response.json();
        setTotalJourneys(data.totalJourneys.toLocaleString("fi-FI"));
      } catch (error) {
        console.error("Error fetching total journeys:", error);
        setError("Error fetching total journeys. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchTotalJourneys();
  }, []);

  return { totalJourneys, loading, error };
}
