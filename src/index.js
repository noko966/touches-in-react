import React from "react";
import ReactDOM from "react-dom";
import Header from './components/header'
import Dragable from './components/dragable/drag'

const Index = () => {
  return <div>
      <Header/>
      <Dragable/>
      <Dragable/>

      <Dragable/>

      <Dragable/>

  </div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));

