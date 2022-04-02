import './CSS/app.css';
import {Search,Movies} from './components';
const App=()=>{
  return (
  <div className="wrapper">
    <div className="container">
      <Search />
      <Movies />
    </div>
  </div>
  )
}

export default App;