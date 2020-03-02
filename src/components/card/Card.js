import ButtonX from "../button/ButtonX";
import React, {Component} from 'react';
import {ThemeContext} from "../../context/ThemeContext";

class Card extends Component {
    state = {
        open: true
    };
    close = () => {
        const {open} = this.state;
        const {itemHandlers} = this.props;
        open ? itemHandlers.inc() : itemHandlers.decr();
        this.setState({open: !open})
    };

    render() {
        const {user} = this.props;
        const {open} = this.state;
        return (
            <div key={user.id} className="card" style={{width: '18rem', float: 'left', height: '15rem'}}>
                <ButtonX open={open} closeFunc={this.close} style={{width: '25px', position: 'absolute', right: '0%'}}/>
                <ThemeContext.Consumer>
                    {
                        value => {
                            return (
                                <div className={`card-body ${value}`} style={{display: open ? 'block' : 'none'}}>
                                    <h3 className="card-title">{user.name}</h3>
                                    <h4 className="card-title">{user.username}</h4>
                                    <h5 className="card-title">{user.phone}</h5>
                                    <h5 className="card-title">{user.address.city}</h5>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            )
                        }
                    }

                </ThemeContext.Consumer>
            </div>
        );
    }
}

export default Card;