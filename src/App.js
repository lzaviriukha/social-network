import React from 'react';
import './App.css';


const App = () => {
  return (
  <div className='app-wrapper'>
    <header className='header'>
      <img src='https://s1.logaster.com/static/v3/img/products/logo.png' />
    </header>
    <nav className='nav'>
      <div>
        <a>Profile</a>
      </div>
      <div>
        <a>Messages</a>
      </div>
      <div>
        <a>News</a>
      </div>
      <div>
        <a>Music</a>
      </div>
      <div>
        <a>Settings</a>
      </div>
    </nav>
    <div className='content'>
      <div>
        <img src='https://ak.picdn.net/shutterstock/videos/6964852/thumb/8.jpg' />
      </div>
      <div>
        ava + descriptions
      </div>
      <div>
        my posts
        <div>
          New post
        </div>
        <div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>

    </div>
  </div>
  );
}


export default App;
