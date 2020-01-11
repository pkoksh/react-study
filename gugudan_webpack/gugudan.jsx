const React = require('react');
const {useState,useRef} = React;
const GuGuDan = () => {

    const [first,setFirst] = useState(Math.floor(Math.random() * 9));
    const [second,setSecond] = useState(Math.floor(Math.random() * 9));
    const [value,setValue] = useState('');
    const [result,setResult] = useState('');
    const inputEl = useRef(null);

    const onSubmitWork = (e) => {
        e.preventDefault();
        if(first * second == value){
            
                setFirst(Math.floor(Math.random() * 9));
                setSecond(Math.floor(Math.random() * 9));
                setValue('');
                setResult('정답');
            
        }else{
                setValue('');
                setResult('땡');
        }
        inputEl.current.focus();
    };
    const onChangeWork = (e) => {
        setValue(e.target.value);
    };

  


    return (
        <React.Fragment>
            <div>{first} * {second} = ?</div>
            <form onSubmit={onSubmitWork}>
                <input ref={inputEl} onChange={onChangeWork} value={value}></input>
                <button>확인</button>
            </form>
            <div>{result}</div>
        </React.Fragment>
        );
}



module.exports = GuGuDan;