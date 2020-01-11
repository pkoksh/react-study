const React = require('react');
const {Component} = React;

class GuGuDan extends Component{
    state = {
        first:Math.floor(Math.random() * 9),
        second:Math.floor(Math.random() * 9),
        value:'',
        result:''
    };
    inputTag;
    inputRef = (c) =>{
        this.inputTag = c;
    };
    onSubmitWork = (e) => {
        e.preventDefault();
        if(this.state.first * this.state.second == this.state.value){
            this.setState({
                first:Math.floor(Math.random() * 9),
                second:Math.floor(Math.random() * 9),
                value:'',
                result:'정답'
            });
        }else{
            this.setState({
                value:'',
                result:'땡'
            });
        }
    };
    onChangeWork = (e) => {
        this.setState({'value': e.target.value});
    };

    render(){
        return (
        <React.Fragment>
            <div>{this.state.first} * {this.state.second} = ?</div>
            <form onSubmit={this.onSubmitWork}>
                <input ref={inputRef} onChange={this.onChangeWork} value={this.state.value}></input>
                <button>확인</button>
            </form>
            <div>{this.state.result}</div>
        </React.Fragment>
        );
    }
}
module.exports = GuGuDan;