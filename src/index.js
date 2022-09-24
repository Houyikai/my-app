// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';

//使用 camelCase 语法来设置内联样式,React 会在指定元素数字后自动添加 px
var myStyle = {
  fontSize: 100,
  color: '#FF0000'
};

function Hello(props) {
  //元素是构成 React 应用的最小单位，它用于描述屏幕上输出的内容。
  //JSX 就是用来声明 React 当中的元素
  return <h1 style = {myStyle}>Hello World!</h1>; 
}

ReactDOM.render(<Hello />, document.getElementById('root'));

//React 元素都是不可变的。当元素被创建之后，你是无法改变其内容或属性的。
//更新界面的唯一办法是创建一个新的元素，然后将它传入 ReactDOM.render() 方法
// const element = <h1>Hello, world!</h1>;
// ReactDOM.render(
//     element,
//     document.getElementById('example')
// );

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('example')
//   );
// }
 
///////////////////////////////////////函数声明会和类声明冲突/////////////////////////////////////
//类Clock 和 方法Clock 实现了同样的目的

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       {/* 在 HTML DOM 对象中使用花括号调用方法 */}
//       <h2>现在是 {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }


class Clock extends React.Component {
  render() {
    return (
      //可以在以上代码中嵌套多个 HTML 标签，需要使用一个 div 元素包裹它
      <div>
        <h1>使用 JavaScript 表达式,表达式写在花括号中,1+1={1+1}.</h1>
        <h2>现在是 {this.props.date.toLocaleTimeString()}.</h2>
        {/* p 元素添加了自定义属性 data-myattribute，添加自定义属性需要使用 data- 前缀。 */}
        <p data-myattribute = "somevalue">向元素添加自定义属性,使用 data- 前缀</p>
      </div>
    );
  }
}

//用户自定义的组件
const element = <Clock date={new Date()} />;

function tick() {
  //要将 React 元素渲染到根 DOM 节点中，我们通过把
  //它们都传递给 ReactDOM.render() 的方法来将其渲染到页面上
  ReactDOM.render(
    element,
    document.getElementById('example')
  );
}

 //每秒钟调用一次 tick() 方法
setInterval(tick, 1000);



