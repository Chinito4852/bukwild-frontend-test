import React, {useState, useEffect} from 'react';
import logo from './abc_logo.svg';
import PageUI from './PageUI';
import './App.css';

function App(props) {

  const [state, setState] = useState(props.pages[0].title);
  const [blocks, setBlocks] = useState(props.pages[0].blocks);

  useEffect(() => {
    //console.log(props.pages);
    //console.log(state);
    //console.log(blocks);
  });

  const renderLayoutUI = () => {
    return (
      <div className="layout-ui">
        <div id="list-logo" >
          <img src={logo}/>
          {renderPageList()}
        </div>
        <div id="contact">
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    );
  }

  const renderPageList = () => {
    return (
      <div className="pageList">
        <ul>
          {props.pages.map((page, key) => {
            return (
              <li className={(state === page.title) ? "active" : ""}>{page.title}</li>
            );
          })}
        </ul>
      </div>
    );
  }

  const renderPageUI = () => {
    return (
      <PageUI block={blocks[0]}/>
    );
  }

  return (
    <div className="App">
      {renderLayoutUI()}
      {renderPageUI()}
    </div>
  );
}

export default App;
