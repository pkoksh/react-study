import React, { Component } from 'react'
const imgPosition = {
    '가위':'0',
    '바위':'-142px',
    '보':'-284px'
}
class rsp extends Component{



    state = {
        result:'',
        imgCoord:0,
        score:0
    };
    interval;
    componentDidMount(){
        this.interval = setInterval(()=>{
            const {imgCoord} = this.state;
            if(imgCoord == imgPosition['가위']){
                this.setState({
                    imgCoord:imgPosition['바위']
                });
            }else if(imgCoord == imgPosition['바위']){
                this.setState({
                    imgCoord:imgPosition['보']
                });
            }else{
                this.setState({
                    imgCoord:imgPosition['가위']
                });
            }
            
            
        },1000);
        setTimeout(()=>{
            clearInterval(this.interval);
        },30000);
    }
    Calculate = (choice) =>{
        console.log(choice);
    }
    render(){
        const {result,score,imgCoord} = this.state;
        return (
        <>
            <div id='computer' style={{background:`url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}} />
            <button type='button' onClick={() => this.Calculate('가위')} >가위</button>
            <button type='button' onClick={() => this.Calculate('바위')} >바위</button>
            <button type='button' onClick={() => this.Calculate('보')} >보</button>
            <div>{result}</div>
            <div>현재까지 점수 : {score}</div>
        </>
        );
    } 
}
export default rsp;