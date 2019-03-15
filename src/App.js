import React, { Component } from "react";

import "./App.css";

import Jumbo from "./components/Jumbo";
import ShowFlags from "./components/ShowFlags";
import AddCountry from "./components/AddCountry";
import PopUp from "./components/popUp";

import dbContent from "./dbContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData: [],
      newFlag: {
        countryName: "",
        capital: "",
        continent: "",
        population: "",
        imgUrl: ""
      },
      added: false,
      error: false
    };
  }

  componentWillMount = () => {
    this.setState({ initialData: dbContent });
  };

  handleChange = event => {
    const { name, value } = event.target;
    const theFlag = this.state.newFlag;
    theFlag[name] = value;
    this.setState({ newFlag: theFlag });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let newFlag = this.state.newFlag;
    let currentData = this.state.initialData;
    console.log(newFlag);

    if (newFlag.continent === "no-selected" || newFlag.continent === "") {
      console.log("no slected");
      this.setState({
        error: true
      });
    } else {
      currentData.unshift(newFlag);

      let box = document.getElementById("addFlag");
      box.classList.toggle("show");

      this.setState({
        initialData: currentData,
        newFlag: {
          countryName: "",
          capital: "",
          continent: "",
          population: "",
          imgUrl: ""
        },
        added: true,
        error: false
      });
    }
  };

  render() {
    let showMessage = this.state.added;
    return (
      <div className="App">
        <Jumbo />
        <AddCountry
          handleChange={this.handleChange}
          handleFormSubmit={this.handleFormSubmit}
          flagData={this.state.newFlag}
          message={showMessage ? "Add another Flag!" : "Add a Flag"}
          error={this.state.error}
        />
        {showMessage ? <PopUp message={"Your flag has been added"} /> : null}
        <ShowFlags initialData={this.state.initialData} />
      </div>
    );
  }
}

export default App;
