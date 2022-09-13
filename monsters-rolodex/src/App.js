import "./App.css";
import { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBar } from "./components/Search-bar/Search-bar.component";
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBar
          placeholder="Search Monsters"
          handleChange={(e) => this.setState({ search: e.target.value })}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
