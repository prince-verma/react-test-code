import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const sampleData = [
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
];

const isInProviderArray = (arr, keys) => {
  let temp = keys.filter((key) => {
    return arr.indexOf(key) > -1;
  });
  return temp.length === keys.length;
};

class App extends React.Component {
  state = {
    data: [...sampleData],
    johnSelectedKey: '',
    georgeSelectedKey: '',
    smithSelectedKey: '',
  };

  onCheckBoxClick = (key, value) => {
    this.setState({ [key]: this.state[key] ? '' : value }, () => {
      const { johnSelectedKey, georgeSelectedKey, smithSelectedKey } = this.state;
      let keys = [johnSelectedKey, georgeSelectedKey, smithSelectedKey];
      // this filter is used to remove empty keys. 
      keys = keys.filter(elem => !!elem);
      const data = sampleData.filter(({ provider }) => {
        return ( isInProviderArray(provider, keys) );
      });
      
      this.setState({ data });
    });
  };

  render() {
    let { data, johnSelectedKey, georgeSelectedKey, smithSelectedKey } = this.state;
    data = georgeSelectedKey || smithSelectedKey || johnSelectedKey ? data : sampleData;

    const list = data.map(({ carrier, name }) => {
      return <h2 key={name}>{carrier}</h2>;
    });

    return (
      <div className="App">
        <div>
          <input
            type="checkbox"
            checked={!!johnSelectedKey}
            onChange={this.onCheckBoxClick.bind(this, 'johnSelectedKey', 'john')}
          />
          John
        </div>
        <div>
        <input
          type="checkbox"
          checked={!!smithSelectedKey}
          onChange={this.onCheckBoxClick.bind(this, 'smithSelectedKey', 'smith')}
        />
        smith
        </div>
        <input
          type="checkbox"
          checked={!!georgeSelectedKey}
          onChange={this.onCheckBoxClick.bind(this, 'georgeSelectedKey', 'george')}
        />
        george
        {list}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
