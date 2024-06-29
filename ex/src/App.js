import React, { useState } from "react";
import "./App.css";
import data from "./data.json";

function App() {
  const [filteredData, setFilterdata] = useState([]);
  const handleFIlter = (event) => {
    const searchword = event.target.value;
    const newfilter = data.filter((value) => {
      return value.username.includes(searchword);
    });
    setFilterdata(newfilter);
  };
  return (
    <div className="wrapper">
      <div>search.bar</div>
      <br></br>
      <input
        className="r"
        type="text"
        placeholder="search here..."
        onChange={handleFIlter}
      />

      {filteredData.length != 0 && (
        <div className="data...Result">
          {data &&
            filteredData.map((value, key) => (
              <>
                <a className="dataitem">{value.username}</a>
                <br />
              </>
            ))}
        </div>
      )}
    </div>
  );
}

export default App;
