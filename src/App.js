// import './App.css';
// import MyHeader from './MyHader';
// import MyFooter from './MyFooter';
import Counter from './Counter';

function App() {
  // #32. JSX
  // const style = {
  //   App: {
  //     backgroundColor: 'black',
  //     color: 'white',
  //   },
  //   h2: {
  //     color: 'red',
  //   },
  //   bold_text: {
  //     color: 'green',
  //   },
  // };
  // const func = () => {
  //   return 'func';
  // };
  // const number = 5;
  // return (
  //   <div style={style.App} className="App">
  //     <MyHeader />
  //     <h2 style={style.h2}>안뇽 {func()}</h2>
  //     <b style={style.bold_text} id="bold_text">
  //       React.js
  //     </b>
  //     <b style={{ backgroundColor: 'hotpink' }} id="bold_text">
  //       {number}는 {number % 2 === 0 ? '짝수' : '홀수'}
  //     </b>
  //     <MyFooter />
  //   </div>
  // );

  // #33. State
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
