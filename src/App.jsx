import React from "react";
import "./App.css";
import CardList from "./components/cardlist";
import Searchbox from "./components/searchbox";
import Loading from "./components/loading";
import Scroll from "./components/scroll";
import ErrorBoundry from "./components/ErrorBoundry";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      loading: false,
      searchField: "",
    };
  }

  componentDidMount = () => {
    // https://jsonplaceholder.typicode.com/users/
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users/")
        .then((response) => response.json())
        .then((users) => this.setState({ robots: users, loading: false }));
    }, 600);
  };

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  render() {
    const { robots, searchField, loading } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>

        <Searchbox searchChange={this.onSearchChange} />
        {loading && (
          <div style={{ position: "relative" }}>
            <Loading />
          </div>
        )}
        {filteredRobots.length > 0 && (
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        )}
      </div>
    );
  }
}

export default App;
