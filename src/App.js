import React, {useState, useEffect} from 'react';
import logo from './abc_logo.svg';
import './App.css';

function App(props) {

  // The state of the component is kept by the headline, blocks, and backgroundName variables.
  // The headline variable stores the headline of the current page. The blocks variable stores
  // all the content to be displayed on the current page, and the backgroundName stores the 
  // name of the background image to be used. These state variables will be initialized when
  // the component loads and changed by a handler function called when an item on the list of
  // pages is clicked.
  const [headline, setHeadline] = useState(props.pages[0].title);
  const [blocks, setBlocks] = useState(props.pages[0].blocks);
  const [backgroundName, setBackgroundName] = useState(props.pages[0].blocks[0].background);

  // Function that is called when state variables are changed. Used for changing the page's
  // background image in this component.
  useEffect(() => {
    //console.log(backgroundName);
    document.body.style.backgroundImage = `url(/backgrounds/${backgroundName})`;
  });

  // Handler function for changing pages. Will be called by clicking on page list items
  const changePage = (page) => {
    setHeadline(page.title);
    setBlocks(page.blocks);
    setBackgroundName(page.blocks[0].background);
  }

  // Renders the page logo and list of pages in the component
  const renderLogoAndPageList = () => {
    return (
      <div className="list-logo">
        <img src={logo}></img>
        {renderPageList()}
      </div>
    );
  }

  // Renders the list of pages. Called by renderLogoAndPageList()
  const renderPageList = () => {
    return (
      <ul className="page-list">
        {props.pages.map((page, key) => {
          return (
            <li>
              <span className={(headline === page.title) ? "active" : ""} 
                    onClick={() => {changePage(page)}}>
                {page.title}
              </span>
            </li>
          );
        })}
      </ul>
    );
  }

  // Renders the "Contact Us" button
  const renderContactButton = () => {
    return (
      <div className="contact">
        <button className="contact-btn">Contact Us</button>
      </div>
    );
  }

  // Renders the page headline
  const renderHeadline = () => {
    return (
      <div className="headline">
        <h1 className="headline-txt">{blocks[0].headline}</h1>
      </div>
    );
  }

  // Renders the page subhead
  const renderSubHead = () => {
    return (
      <div className="subhead">
        <p className="subhead-txt">{blocks[0].subhead}</p>
      </div>
    );
  }

  // Renders the call to action content
  const renderCallToAction = () => {
    return (
      <div className="cta-content">
        <h3>{blocks[0].cta}</h3>
      </div>
    );
  }

  // Renders the "Let's talk" section of the call to action
  const renderTalk = () => {
    return (
      <div className="cta-talk">
        <h6>Let's Talk.&emsp;<span className="talk-arrow">&rarr;</span></h6>
      </div>
    );
  }

  // Elements in this component are grouped in three rows. The logo, page list, and contact button
  // are grouped in the first row, the headline and subhead in the second, and the call to action
  // in the thrid.
  return (
    <div className="App">
      <div className="app-body">

        <div className="row-1">
          {renderLogoAndPageList()}
          {renderContactButton()}
        </div>
  
        <div className="row-2">
          {renderHeadline()}
          {renderSubHead()}
        </div>
        
        <div className="row-3">
          {renderCallToAction()}
          {renderTalk()}
        </div>
        
      </div>
    </div>
  );
}

export default App;
