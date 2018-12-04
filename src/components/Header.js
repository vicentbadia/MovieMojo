import React, { Component } from 'react';

class Header extends Component {
 	render() {
		//crear un elemento HTML:
    		return ( <h2>{this.props.text}</h2> );
	}
}
 
export default Header;
