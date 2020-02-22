import React,{setState} from 'react';

class ResponseCheck extends React.Component{
    state = {
        state:"waiting",
        message:"클릭해서 시작하세요.",
        result:[]
    }
    timeOut;
    startTime;
    endTime;
    onClickwork = () => {
        if(this.state.state == "waiting"){
            this.setState({
                state:"ready",
                message:"초록색이 되면 클릭하세요"
            });
            
            this.timeOut = setTimeout(()=>{
                this.setState({
                    state:"now",
                    message:"클릭하세요!!!!"
                });
                this.startTime = new Date();
            },Math.floor(Math.random()*1000+2000));
        }else if(this.state.state == "now"){
            this.endTime = new Date();
            this.setState(
                (prevState) => {
                   return {
                       state:"waiting",
                       result:[...prevState.result, this.endTime - this.startTime]
                    };
                }
            );
               
               
        }else if(this.state.state == "ready"){
         
            this.setState({
                state:"waiting",
                message:"성급하셨군요"
            })
            clearTimeout(this.timeOut);
        }

    }
    resultMessage = () => {
        return (
            this.state.result.length===0?
                null:
                <div> 평균 반응 속도는 :{this.state.result.reduce((a,c) => (a + c)) / this.state.result.length}ms 입니다.</div>
            );
    }
    render(){
        return (
            <>
                <div id='screen'
                     className={this.state.state}
                    onClick={this.onClickwork}     
                >
                    <div>{this.state.message}</div>
                </div>
               {this.resultMessage()} 
                
            </>
        );
    }
}

export default ResponseCheck;