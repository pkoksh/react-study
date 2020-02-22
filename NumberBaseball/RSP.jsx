import React, { useState,useRef,useEffect } from 'react'

// 클래스의 경우 -> constructor -> render -> ref -> componentDidMount
// (setState/props 바뀔때) -> shouldComponentUpdate(true) -> render -> componentDidUpdate
// 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
  };
  
  const scores = {
    가위: 1,
    바위: 0,
    보: -1,
  };
  const computerChoice = (imgCoord) =>{
    for(var key in rspCoords){
        if(rspCoords[key] == imgCoord){
            return key;
        }
    }
  }

const rsp = () =>{
    const [result,setResult] = useState('');
    const [imgCoord,setImgCoord] = useState(rspCoords['바위']);
    const [score,setScore] = useState(0);
    const interval = useRef();

    const changeHand = () => {
        if(imgCoord == rspCoords['가위']){
            setImgCoord(rspCoords['바위']);
        }else if(imgCoord == rspCoords['바위']){
            setImgCoord(rspCoords['보']);
        }else{
            setImgCoord(rspCoords['가위']);
        }
    }

    useEffect(()=>{
        interval.current = setInterval(()=>{changeHand();  },100);
        return (()=>{
            clearInterval(interval.current);
        });
    },[imgCoord])

    const onClickBtn  = (choice) => () => {
        clearInterval(interval.current);   
        const cpuChoice = scores[computerChoice(imgCoord)]
        const myChoice = scores[choice];
        console.log(`내 선택:  ${myChoice} , 컴퓨터 선택 ${cpuChoice}`);
        const diff = myChoice - cpuChoice;
        if(diff === 0){
                setResult("비겼습니다");
                setScore((prevScore)=>{return prevScore});
        }else if([-2,1].includes(diff)){
                setResult("졌습니다");
                setScore((prevScore)=>{return prevScore-1});
            }else{
                setResult("이겼습니다");
                setScore((prevScore)=>{return prevScore+1});
        }
        setTimeout( () => {
            interval.current = setInterval(()=>{changeHand();  },200);
        },1500);

    }

    return (
        <>
            <div id='computer' style={{background:`url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}} />
            <button type='button' onClick={onClickBtn('가위')} >가위</button>
            <button type='button' onClick={onClickBtn('바위')} >바위</button>
            <button type='button' onClick={onClickBtn('보')} >보</button>
            <div>{result}</div>
            <div>현재까지 점수 : {score}</div>
        </>
    );
}





// class rsp extends Component{

//     state = {
//         result:'',
//         imgCoord:rspCoords['바위'],
//         score:0
//     };
//     interval;
//     componentDidMount(){
//         this.interval = setInterval(()=>{this.chanageHand();  },100);
//     }
//     componentWillUnmount(){
//         clearInterval(this.interval);
//     }
//     chanageHand = () => {
//         const {imgCoord} = this.state;
//         if(imgCoord == rspCoords['가위']){
//             this.setState({
//                 imgCoord:rspCoords['바위']
//             });
//         }else if(imgCoord == rspCoords['바위']){
//             this.setState({
//                 imgCoord:rspCoords['보']
//             });
//         }else{
//             this.setState({
//                 imgCoord:rspCoords['가위']
//             });
//         }
//     }

//     onClickBtn  = (choice) => () => {
//         clearInterval(this.interval);   
//         const {imgCoord} = this.state;
//         const cpuChoice = scores[computerChoice(imgCoord)]
//         const myChoice = scores[choice];
//         console.log(`내 선택:  ${myChoice} , 컴퓨터 선택 ${cpuChoice}`);
//         const diff = myChoice - cpuChoice;
//         if(diff === 0){
//             this.setState((prevState) => {return {
//                 result:"비겼습니다",
//                 score:prevState.score
//             }});
//         }else if([-2,1].includes(diff)){
//             this.setState((prevState) => {return {
//                 result:"졌습니다.",
//                 score:prevState.score - 1
//             }});
//         }else{
//             this.setState((prevState) => {return {
//                 result:"이겼습니다.",
//                 score:prevState.score +1
//             }});
//         }
//         setTimeout( () => {
//             this.interval = setInterval(()=>{this.chanageHand();  },200);
//         },1500);

//     }
//     render(){
//         const {result,score,imgCoord} = this.state;
//         return (
//         <>
//             <div id='computer' style={{background:`url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}} />
//             <button type='button' onClick={this.onClickBtn('가위')} >가위</button>
//             <button type='button' onClick={this.onClickBtn('바위')} >바위</button>
//             <button type='button' onClick={this.onClickBtn('보')} >보</button>
//             <div>{result}</div>
//             <div>현재까지 점수 : {score}</div>
//         </>
//         );
//     } 
// }
export default rsp;