import React from 'react';
import AppItems from './AppItems';
import Popup from './Popup'
import './App.css';



class App extends React.Component {

  render(){
    
    return (
      <main className="app-main">
        <section className="app">
          <div className="content">
            <div className="title">
             <h1>Все фотографии</h1>
            </div>
            <AppItems />
          </div>
        </section>
        <Popup />
      </main>
    );

  }

}

export default App;
