import React from 'react';

class ResponseCheck extends React.Component{
    state = {
        state:"waiting",
        message:"클릭해서 시작하세요.",
        result:[]
    }
    onClickwork = () => {

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
                {this.state.result.length===0?
                null:
                <div>{this.state.result.reduce((a,c) => (a + c)) / this.state.result.length}</div>
                }
                
            </>
        );
    }
}

export default ResponseCheck;