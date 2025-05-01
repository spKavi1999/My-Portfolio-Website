import React from 'react'
import {Link} from 'react-scroll'
import Header from './assets/components/header/header'
import Topcontainer from './assets/components/topcontainer/topcontainer'
import Skillcontainer from './assets/components/skillcontainer/skillcontainer'
import Contact from './assets/components/contact/contact'
import Projectcontainer from './assets/components/projectcontainer/Projectcontainer'
import Experience from './assets/components/Experience/Experience'

const App = () => {
  return (
    <div>
      <Header/>
      <Topcontainer/>
      <Skillcontainer/>
      <Projectcontainer/>
      <Experience/>
      <Contact/>
      
      
    </div>
  )
}

export default App