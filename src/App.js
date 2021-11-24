import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{counter.num}</h1>
      <button
        onClick={() => 
          dispatch({
            type: "INCREMENT",
            step: 1,
          })}
      >INCREMENT
      </button>
      <button
        onClick={() => 
          dispatch({
            type: "DECREMENT",
            step: 1,
          })}
      >DECREMENT
      </button>
    </div>
  );
}

export default App;
