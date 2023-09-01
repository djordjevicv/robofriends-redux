import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { requestRobots, setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        robotsRequestIsPending: state.requestRobots.robotsRequestIsPending,
        error: state.requestRobots.error
    };
};

const mapDispatchToProps = dispatch => { /* sends action to the reducer */
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
};

const App2 = (props) => {
    const { searchField, onSearchChange, robots, robotsRequestIsPending } = props;

    useEffect(() => props.onRequestRobots(), []);

    const filteredRobots = robots !== [] ? robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());;
    }) : [];

    return robotsRequestIsPending ?
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f2 f1-ns'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
}

export default connect(mapStateToProps, mapDispatchToProps)(App2);
// connect is higher-order function
// it returns the function, and that function
// runs App2