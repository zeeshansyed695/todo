import React, { useState, useEffect } from "react";
import './components/App.css'
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,dogecoin,litecoin&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=24h"
      );
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Crypto Prices</h1>
      {data && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>24h Change</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {data.map((coin) => (
              <tr key={coin.id}>
                <td>{coin.name}</td>
                <td>${coin.current_price.toFixed(2)}</td>
                <td
                  className={
                    coin.price_change_percentage_24h >= 0
                      ? "positive"
                      : "negative"
                  }
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td>${coin.market_cap.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;