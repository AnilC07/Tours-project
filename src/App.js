import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) =>{
    console.log(id)
    const newTours = tours.filter((tour)=>tour.id !== id)
    setTours(newTours)
  }

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

  if(tours.length === 0){
    return(
      <main>
        <div className="Title">
          <h2>No tour left</h2>
          <button className="btn" onClick={fetchTour}>Refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
