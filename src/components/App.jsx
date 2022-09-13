import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import Card from './images';

function App(){
    return (
      <div>
        <Header/>
        <Card 
          name="Model 1"
          img="./images/download1.jpg"
          tel="000000"
          email="model1.com"
        />
        <Card 
          name="Model 2"
          img="./images/download2.jpg"
          tel="111111"
          email="model2.com"
        />
        <Note/>
        <Footer/>
      </div>
    );
}

export default App;