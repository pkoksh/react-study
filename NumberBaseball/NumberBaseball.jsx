import React,{Component} from 'react';
import Try from './Try';
//숫자 4개를 겹치지 않게 뽑는 함수
function getNumbers(){
    const candidate = [0,1,2,3,4,5,6,7,8,9];
    let arr = [];
    for (let i=0;i<4;i++){
        arr.push(  candidate.splice(Math.floor( Math.random()*candidate.length ),1)[0] );
    }
    console.log(arr);
    return arr;
}
class NumberBaseball extends Component{
    state = {
        result:'', //결과값
        value:'', //input 입력
        answer:getNumbers(), //맞춰야 할 번호
        tries:[]  //시도한 내역
    }
    onSubmitForm = (e) => {
        e.preventDefault();

        if(this.state.value == this.state.answer.join("")){
            //예전 state값으로 부터 현재 state값을 만들때는 함수형으로 선언해야 한다.
            this.setState((prevState) => {
                return {
                    'result':"홈런!!!",
                    'tries':[...prevState.tries, {try:this.state.value , result:'홈런'}]
                }
            });
            alert("게임을 다시 시작합니다.");
            this.setState({
                tries:[],
                value:"",
                result:"",
                answer:getNumbers(),
            });
        }else{
            if(this.state.tries.length>=9){
                alert("Game over!! try again?");
                this.setState({
                    tries:[],
                    value:"",
                    result:"",
                    answer:getNumbers(),
                });
            }else{
                const arrayNumber = this.state.value.split("").map( (v) => {return ~~(v)});
                let strike = 0;
                let ball = 0;
                for(let i=0;i<arrayNumber.length;i++){
                    if(this.state.answer[i] == arrayNumber[i]){
                        strike = strike + 1;
                    }else if(this.state.answer.includes(arrayNumber[i])){
                        ball = ball + 1;
                    }
                }
                
                //예전 state값으로 부터 현재 state값을 만들때는 함수형으로 선언해야 한다.
                this.setState((prevState) => {
                    return {
                        'value':'',
                        'tries':[...prevState.tries,{try:this.state.value,result:`${strike} 스트라이크, ${ball} 볼` }]
                    }
                });
            }
        }
    };
    onChangeInput = (e) => {
        this.setState({
            "value":e.target.value
        })
    };

    fruits = [
        {fruit:"사과",taste:"맛있다."},
        {fruit:"배",taste:"맛없다."},
        {fruit:"감",taste:"떫다."},
    ];

    render(){
        return ( 
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도 : {this.state.tries.length}   </div>
                <ul>
                    {/*  화살표 함수에서 중괄호{}가 없으면 return 이 생략된다. */}
                    {this.state.tries.map( (v,i) => 
                        //고유한 key가 있어야 한다.
                        <Try key={`${i+1}차 시도`} vv={v} idx={i}/>
                    )}
                </ul>
            </>
        )
    }
}

//ES2015문법
export const hello = 'hello'
export default NumberBaseball;


//노드의 문법 common js 라고 불림
//const React = require("react");
// exports.hello = 'hello';
// module.export = NumberBaseball;  