import Navbar from './components/Navbar';
import Greeting from './components/Greeting';
import Login from './components/Login'
import './styles/App.css'


const App = () => {
  return (
    <div>
      <Navbar />
      <Greeting />
      <Login />
    </div>
  );
};

export default App;
