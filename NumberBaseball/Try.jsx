import React,{Component} from 'react';

const Try = (pp) => {
    return (
        <li>
            <b>{pp.vv.try}</b> - {pp.vv.result}
        </li>
    );
}

// class Try extends Component{
//     render(){
//         return (
//             <li>
//                 <b>{this.props.vv.try}</b> - {this.props.vv.result}
//             </li>
//         );
//     }
// }

export default Try;