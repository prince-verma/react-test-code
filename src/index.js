import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    data: [
      {
        name: "South Indian",
        carrier: "Zomato",
        provider: ["smith", "john", "george"]
      },
      {
        name: "North Indian",
        carrier: "Food Panda",
        provider: ["smith", "john", "george"]
      },
      {
        name: "Italian",
        carrier: "Swiggy",
        provider: ["smith", "john", "george"]
      },
      { name: "Chinese", carrier: "Fresh Menu", provider: ["smith", "john"] },
      { name: "Organic", carrier: "One Table", provider: ["george", "john"] },
      { name: "Japanese", carrier: "Foody", provider: ["george", "smith"] }
    ],

    selectedProvider: ""
  };

  onCheckBoxClick = provider => {
    this.setState({ selectedProvider: provider });
  };

  render() {
    const { data, selectedProvider } = this.state;
    let list = [];
    if (selectedProvider) {
      list = data.filter(({ carrier, provider }) => {
        if (provider.indexOf(selectedProvider) > -1) return <h2>{carrier}</h2>;
      });
    } else {
      list = data.map(({ carrier, provider }) => {
        return <h2>{carrier}</h2>;
      });
    }

    return (
      <div className="App">
        <input
          type="checkbox"
          onClick={this.onCheckBoxClick.bind(this, "john")}
        />
        John
        <input
          type="checkbox"
          onClick={this.onCheckBoxClick.bind(this, "smith")}
        />
        smith
        <input
          type="checkbox"
          onClick={this.onCheckBoxClick.bind(this, "george")}
        />
        george
        {list}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
