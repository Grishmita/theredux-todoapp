import './App.css';
import Todos from './components/Todos';


function App() {
  return (
  <>
  <marquee style={{backgroundColor: '#fff', padding :'7px'}}>REDUX TODO APP</marquee>
    <div className="App w-6/12 my-24 mx-auto max-md:w-9/12 my-16 max-sm:w-11/12 my-10">
      <Todos />
    </div>
  </>
  );
}

export default App;
