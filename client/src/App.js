import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'

import Chat from './component/Chat/Chat'
import Join from './component/Join/Join'


const App = () =>(
    <Router>
        <Route path="/" exact component= {Join}/>
        <Route path="/chat" component={Chat}/>
    </Router>
)
export default App