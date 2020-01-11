const React = require("react");
const {Component} = React; // extends React.Component 대신에 

class WordRelay extends Component{
    state = {
        text:'hello, webpack'
    };

    render(){
        return <h1>{this.state.text}</h1>
    }
}


//해당 클래스를 외부에서 사용하려면 있어야 한다.
module.exports = WordRelay;