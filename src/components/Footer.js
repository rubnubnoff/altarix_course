import React from 'react';

class Footer extends React.Component{
    handleSend = (e) => {
        e.preventDefault();
    }
    render(){
        return <footer className={'footer'}>
            <form className={'send_form'}>
                <textarea 
                className={'send_area'}
                placeholder={'Введите ваше сообщение...'}
                >
                </textarea>
                <button 
                    className={'send_button'}
                    onClick= {this.handleSend}
                    >
                </button>
            </form>
        </footer>;
    }
}

export default Footer;