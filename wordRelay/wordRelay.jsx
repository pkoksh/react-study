const React = require("react");
const {useState,useRef} = React;

const wordRelay = () => {
    const [word,setWord] = useState("대한민국"); 
    const [value,setValue] = useState('');
    const [result,setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) =>{
        e.preventDefault();
        if(word[word.length - 1] == value[0]){
            
            setWord(word);
            setValue("");
            setResult("딩동댕");
        }else{
            setValue("")
            setResult("땡");
        }
        inputRef.current.focus();
    }

    const onChangeInput = (e) =>{
        setValue(e.target.value);
    }


    return (
    <React.Fragment>
        <div>{word}</div>
        <form onSubmit={onSubmitForm}>
            <input ref={inputRef} onChange={onChangeInput} value={value}/>
            <button>입력</button>
        </form>
        <div>{result}</div>
    </React.Fragment>
    );

}

module.exports = wordRelay;