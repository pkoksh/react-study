import React,{Component} from 'react';
//숫자 4개를 겹치지 않게 뽑는 함수
function getNumbers(){
    const candidate = [0,1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i=0;i<4;i++){
        array = [...array, candidate.splice(Math.floor( Math.random()*candidate.length ),1) ];
    }
    return array;
}
class NumberBaseball extends React.Component{
    state = {
        result:'', //결과값
        value:'', //input 입력
        answer:getNumbers(), //맞춰야 할 번호
        tries:[]
    }
    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.value == this.state.answer.join("")){
            this.setState({
                "result" : '홍런', 
            });
        }else{
            if(this.state.tries.length>=9){
                alert("Game over!! try again?");
                this.setState({
                    tires:[],
                    value:"",
                    answer:getNumbers(),
                });
            }else{
                const arrayNumber = this.state.value.split("").map( (v) => {return v});
                let strike = 0;
                let ball = 0;
                for(let i=0;i<arrayNumber.length;i++){
                    if(answer[i] == arrayNumber[i]){
                        strike++;
                    }else if(answer.include(arrayNumber[i])){
                        ball++;
                    }
                }

                this.setState({
                    'value':'',
                    'tries':[...tries,{try:this.state.value,result:'${strike} 스트라이크, ${ball} 볼'}]
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
                    {this.tries.map( (v,i) => 
                        //고유한 key가 있어야 한다.
                        (
                        <li key={v.result+i}>
                            <b>{v.try}</b> - {v.result}
                        </li>
                        )
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