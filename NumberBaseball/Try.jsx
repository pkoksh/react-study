import React,{memo} from 'react';

const Try = memo((pp) => {
    return (
        <li>
            <b>{pp.vv.try}</b> - {pp.vv.result}
        </li>
    );
});

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