import './App.css';
import Searchbar from './components/Searchbar.js'
import Menu from './components/Menu.js'
import  Banner from './components/Banner.js';
import Cards from './components/Cards.js';
import Mar from './components/Mar.js';
import './css/bootstrap.css'
import Cards2 from './components/Cards2';
import EditDel from './components/EditDel';

function App() {
  return (
   <>
   
   <div className='container-fluid'>
        <div className='row'>
                <Searchbar/>
                <Menu/>
                <Banner/>
                <Cards/>
                <Cards2/>
                <div>
                <Mar/>
                </div>
                
                <EditDel/>
        </div>
   </div>
  
   </>
  );
}

export default App;


