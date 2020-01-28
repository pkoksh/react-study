import React,{Component} from 'react';

class Try extends Component{
    render(){
        return (
            <li>
                <b>{this.props.vv.try}</b> - {this.props.vv.result}
            </li>
        );
    }
}

export default Try;