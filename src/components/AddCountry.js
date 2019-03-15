import React from "react";

const errorMessage = (
  <div className="container">
    <div className="alert alert-danger" role="alert">
      Please select a continent
    </div>
  </div>
);

export default function AddCountry(props) {
  return (
    <div className="container">
      <p>
        <a
          className="btn btn-primary d-block"
          data-toggle="collapse"
          href="#addFlag"
          role="button"
          aria-expanded="false"
          aria-controls="addFlag"
        >
          {props.message}
        </a>
      </p>
      <div className="collapse" id="addFlag">
        <form onSubmit={props.handleFormSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="countryName">Country Name</label>
              <input
                type="text"
                className="form-control"
                id="country-name"
                name="countryName"
                placeholder="e.g. Argentina"
                onChange={props.handleChange}
                value={props.flagData.countryName}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="capital">Capital</label>
              <input
                type="text"
                className="form-control"
                id="capital"
                name="capital"
                placeholder="e.g. Buenos Aires"
                onChange={props.handleChange}
                value={props.flagData.capital}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="continent">Continent</label>
              <select
                id="continent"
                name="continent"
                className="form-control"
                onChange={props.handleChange}
                value={props.flagData.continent || "no-selected"}
                required
              >
                <option defaultValue value="no-selected">
                  Please Select One
                </option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="australia">Australia</option>
                <option value="europe">Europe</option>
              </select>
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="population">Population</label>
              <input
                type="text"
                className="form-control"
                id="population"
                name="population"
                placeholder="e.g. 1,000,000"
                onChange={props.handleChange}
                value={props.flagData.population}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="imgUrl">Image Url</label>
            <input
              type="text"
              className="form-control"
              id="imgUrl"
              name="imgUrl"
              placeholder="www.myflag.com/flag.jpg"
              onChange={props.handleChange}
              value={props.flagData.imgUrl}
              required
            />
          </div>

          {props.error ? errorMessage : null}
          <button type="submit" className="btn btn-success">
            Submit Flag
          </button>
        </form>
      </div>
    </div>
  );
}
