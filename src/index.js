import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 추가) src/index.js에서
  // App 컴포넌트가 <React.StrictMode> 태그로 감싸져 있는 경우,
  // 개발 모드에서 오류를 잘 잡기 위해 두 번씩 렌더링 됨
  // StrictMode: 리액트에서 제공하는 검사 도구
  // 로직에는 전혀 문제가 없으므로 지워도 됨
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
