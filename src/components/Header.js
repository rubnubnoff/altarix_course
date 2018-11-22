import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <header id={'header'}>{this.props.name}</header>
        );
    }
}

export default Header;