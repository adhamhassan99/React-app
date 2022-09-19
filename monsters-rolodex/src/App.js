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
    fetch("https://reqres.in/api/users/")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users.data }));
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter(
      (monster) =>
        monster.first_name.toLowerCase().includes(search.toLowerCase()) ||
        monster.last_name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBar
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
