import React from 'react';
import image from '../../images/Avatar.jpg'
class Message extends React.Component{
    
    render(){
        return (
            <div className={this.props.className}>
                <div className={`${this.props.className}_avatar`}>
                <img src={image} alt={'ava'}></img>
                {this.props.name}
                </div> 
                <div className={`${this.props.className}_text`}>{this.props.text}</div>
            </div>
        );
    }
}

export default Message;