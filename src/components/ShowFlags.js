import React from "react";

export default function ShowFlags(props) {
  return (
    <div className="container">
      <h1>Our Flags</h1>
      <div className="row justify-content-center mb-5">
        {props.initialData.map((current, index) => {
          return (
            <div className="col-10 col-md-4 mb-3" key={index}>
              <div className="card">
                <img
                  src={current.imgUrl}
                  className="card-img-top"
                  alt="country flag"
                  style={{ maxHeight: "236px" }}
                />
                <div className="card-body">
                  <h4 className="card-title">{current.countryName}</h4>
                  <h5 className="card-text">Capital</h5>
                  <p className="card-text">{current.capital}</p>
                  <hr />
                  <h5 className="card-text">Continent</h5>
                  <p className="card-text">{current.continent}</p>
                  <hr />
                  <h5 className="card-text">Population</h5>
                  <p className="card-text">{current.population}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
