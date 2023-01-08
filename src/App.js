import React from "react";
import { CartList } from "./components/card-list/card-list.component";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Relodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        ></SearchBox>
        <CartList monsters={filterMonsters}></CartList>
      </div>
    );
  }
}

export default App;
