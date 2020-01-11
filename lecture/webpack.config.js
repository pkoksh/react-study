const path = require("path"); //노드는 모르더라도 이건 그냥 쓰자. 

module.exports = {
    name:"webpack-setting", //아무렇게나 줘도 된다.
    mode:"development",  //개발시에는 development 운영에서는 production
    devtool:"eval", //개발시 확인을 빠르게 해보겠다는 뜻??

    //이걸 선언해 주면 entry app에 파일의 확장자를 안써줘도 됨.
    // resolve:{
    //     extentions:['.js','.jsx']
    // },


    //매우 중요
    //합칠 파일들에 대한 설정
    entry:{
        app:['./client.jsx'],  //wordRelay.jsx는 client.jsx 내에서 불러오고 있기 때문에 않써줘도 알아서 같이 묶인다.
    },

    //매우 중요
    //합쳐진 파일을 어디에 둘지에 대한 설정
    output:{
        path:path.join(__dirname,"dist"),
        filename:"app.js"
    },



}