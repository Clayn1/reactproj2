import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import ButtonX from "./components/button/ButtonX";
import Form from "./components/form/Form";
import {ThemeContext} from "./context/ThemeContext";
import fetchData from "./fetchData";


class App extends React.Component {
    state = {
        data: null,
        items: 0,
        darkTheme: true
    };
    sortByName = () => {
        const {data} = this.state;
        this.setState(
            {data: data.sort((a, b) => ((a.name > b.name) - 1))}
        );
    };
    sortByCity = () => {
        const {data} = this.state;
        console.log("city");
        this.setState(
            {data: data.sort((a, b) => ((a.address.city > b.address.city) - 1))}
        );
    };
    incItems = () => {
        let {items} = this.state;
        this.setState({items: items + 1})
    };
    decrItems = () => {
        let {items} = this.state;
        this.setState({items: items - 1})
    };
    newElement = (user) => {
        let {data} = this.state;
        data.push(user);
        this.setState({data: data})
    };
    changeTheme = () => {
        const {darkTheme} = this.state;
        this.setState({darkTheme: !darkTheme})
    };
    delete = (user) => {
        let {data} = this.state;
        data.splice(data.indexOf(data.indexOf(user), 1));
        this.setState({data: data})
    };

    componentDidMount() {
        const {fetchData} = this.props;
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(response => response.json())
        //     .then(result => {
        //         console.log(result);
        //         this.setState({data: result})
        //     })
        fetchData().then(result => this.setState({data : result}));
    }

    render() {
        const {data, items} = this.state;
        console.log(this.props);
        return (
            <div className="App">
                <Header items={items} funcs={{sortByName: this.sortByName,
                    sortByCity: this.sortByCity,
                    changeTheme: this.changeTheme}}/>
                <ThemeContext.Provider value={this.state.darkTheme ? 'dark' : ''}>
                    {data
                        ? data.map(user => <Card user={user}
                                                 key={user.id}
                                                 deleteHandler={this.delete}
                                                 itemHandlers={{inc: this.incItems, decr: this.decrItems}}
                                                 data={data}/>)
                        : <h1>Loading...</h1>}
                </ThemeContext.Provider>
                <Form onClick={this.newElement} data={data}/>
            </div>
        );
    }
}

export default fetchData(App);