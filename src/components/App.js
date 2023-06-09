import React, { Component } from 'react';
import CreateLink from './CreateLink';
import Login from './Login';
import Header from './Header';
import LinkList from './LinkList';
import Createimage from './images-davinci';
import Textdavinci003 from './text-davinci-003';
import { Route, Routes } from 'react-router-dom';


class App extends Component {
  render() {
    
    return (
      <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<LinkList/>} />
          <Route
            path="/create"
            element={<CreateLink/>}
          />
          <Route
            path="/text-davinci-003"
            element={<Textdavinci003/>}
          />
           <Route
            path="/images-davinci"
            element={<Createimage/>}
          />

          <Route path="/login" element={<Login/>} />

        </Routes>
        
      </div>
    </div>
    )
  }
}

export default App;