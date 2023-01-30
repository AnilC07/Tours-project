import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTour = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      console.log({ tours });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTour();
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <Tours tours={tours}/>
    </main>
  );
}

export default App;
