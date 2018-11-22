import React from 'react';
import Message from './Message';

class Content extends React.Component{
    render(){
        return (
            <div id={'content'}>
                <Message 
                    className={'userMessage'} 
                    text={'Привет'}
                    name={'Ivan Ivanov'}
                />
                <Message 
                    className={'userMessage'}
                    text={'Как дела с Java-script?'}
                    name={'Ivan Ivanov'}
                />
                <Message
                    className={'myMessage'} 
                    text={'((('}
                />
            </div>
        );
    }
}

export default Content;