import React, {useState, useEffect} from 'react';
import logo from './abc_logo.svg';
//import b from './backgrounds.slide_one.jpg';
//import PageUI from './PageUI';
import './App.css';

function App(props) {

  const [state, setState] = useState(props.pages[0].title);
  const [blocks, setBlocks] = useState(props.pages[0].blocks);
  const [backgroundName, setBackgroundName] = useState(props.pages[0].blocks[0].background);

  useEffect(() => {
    //console.log(backgroundName);
    //console.log(document.body.style);
    //document.body.style.backgroundImage = "url('backgroundName')";
  });

  const changePage = (page) => {
    setState(page.title);
    setBlocks(page.blocks);
    setBackgroundName(page.blocks[0].background);
  }

  const renderPageList = () => {
    return (
      <ul className="page-list">
        {props.pages.map((page, key) => {
          return (
            <li>
              <span className={(state === page.title) ? "active" : ""} 
                    onClick={() => {changePage(page)}}>
                {page.title}
              </span>
            </li>
          );
        })}
      </ul>
    );
  }

  const renderHeadline = () => {
    return (
      <div className="headline">
        <h1>{blocks[0].headline}</h1>
      </div>
    );
  }

  const renderSubHead = () => {
    return (
      <div className="subhead">
        <h4>{blocks[0].subhead}</h4>
      </div>
    );
  }

  const renderCallToAction = () => {
    return (
      <div className="cta-content">
        <h3>{blocks[0].cta}</h3>
      </div>
    );
  }

  const renderTalk = () => {
    return (
      <div className="cta-talk">
        <h6>Let's Talk.&emsp;<span className="talk-arrow">&rarr;</span></h6>
      </div>
    );
  }

  return (
    <div className="App"
         style={{ backgroundImage: `url(/backgrounds/${backgroundName})` }}>
      <div className="app-body">
        
        <div className="list-logo">
          <img src={logo}></img>
          {renderPageList()}
        </div>
        <div className="contact">
          <button className="contact-btn">Contact Us</button>
        </div>

        {renderHeadline()}
        {renderSubHead()}

        {renderCallToAction()}
        {renderTalk()}
        
      </div>
    </div>
  );
}

export default App;
