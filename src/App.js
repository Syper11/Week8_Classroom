import React, { Component } from 'react'
import Nav from './Nav';
import Home from './Home';
import News from './News';
import{ Routes, Route, BrowserRouter } from 'react-router-dom';

export default class App extends Component {
  constructor(){
    super();
    this.state ={
      test:0
    }
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home testVar = {this.state.test} x='5000'/>}/>
          <Route path='/' element={<News />}/>
          
        </Routes>
        {/* <Content>
          <Feed>
            <Post>

            </Post>
          </Feed>
        </Content> */}


      </div>
      </BrowserRouter>
    )
  }
};
