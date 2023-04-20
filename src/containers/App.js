import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBundary from "../components/ErrorBundary";
import './App.css';


function App () {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {setRobots(users)});
      }, []);


    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    // render(){
        // const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()));
        return  !robots.length ?
                <h1 className="f1">Loading</h1> :
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBundary>
                    </Scroll>
                </div>
            );
    // }
}

export default App;
