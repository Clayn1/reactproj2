import React from 'react';

function fetchData(WrappedComponent) {
    return class extends React.Component {
        result = () => fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json());

        render() {
            return <WrappedComponent {...this.props} fetchData = {this.result}/>;
        }
    }
}

export default fetchData;

//fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response => response.json())
//         .then(result => {
//             console.log(result);
//             this.setState({data: result})
//         })