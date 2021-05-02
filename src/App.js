import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {Navbar} from './Components/Navbar'
import {Home} from './Pages/Home'
import {Contact} from './Pages/Contact'

import {GlobalStyle} from './globalStyles'

export const App = () => {
  return (
    
    <Router>
      <GlobalStyle/>
      <Navbar/>
      
      
      <Switch>
        <Route path='/#/contact' component={Contact} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}


