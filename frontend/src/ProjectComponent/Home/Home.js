import { useState, useEffect } from "react";
import apiMethods from "../../AppFuntions/apiMethods/apiMethods";

const url = "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo";

const Home = (props) => {
  const [urlData, setUrlData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiMethods.getData(url);
        setUrlData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div>
      <h1>{JSON.stringify(urlData)}</h1>
    </div>
  );
};

// export default Home;
