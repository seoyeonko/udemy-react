// import './App.css';
// import MyHeader from './MyHader';
// import MyFooter from './MyFooter';
import Container from './Container';
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
  // #34. Props
  // : App 컴포넌트에서 Counter 컴포넌트에게 전해준 값으로 카운터 기능을 수행해야 하는 경우
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    initialValue: 5,
  };
  return (
    <Container>
      <div>
        {/* <Counter a={'hello'} initialValue={5} /> */}
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}

export default App;
