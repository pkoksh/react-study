//노드의 문법 common js 라고 함
// const React = require('react');
// const ReactDom = require('react-dom');

//ES2015 문법  
import React from 'react';
import ReactDom from 'react-dom';
 import {hot} from 'react-hot-loader/root';
import NumberBaseball from './NumberBaseball';


 const Hot = hot(NumberBaseball);

ReactDom.render(<Hot/>,document.getElementById('root'));