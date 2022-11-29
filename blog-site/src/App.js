import Navbar from './Navbar'
import './App.css';
import Blog from './Blog'
import data from './data'

function App() {

  const prop = data.map(item => {
    return <Blog  
        key = {item.id}
        items = {item}
    />
  })

  return (
    <div className="App">
         <Navbar />
         {prop}
    </div>
  );
}

export default App;
