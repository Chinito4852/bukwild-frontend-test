import React, {useState, useEffect} from 'react';
import './PageUI.css';

function PageUI(props) {

    useEffect(() => {
        console.log(props);
    });

    const renderHeadline = () => {
        return (
            <h1>{props.block.headline}</h1>
        );
    }
  
    const renderSubHead = () => {
        return (
            <h4>{props.block.subhead}</h4>
        );
    }
  
    const renderCallToAction = () => {
        return (
            <div id="call-to-action">
                <h3 id="cta-text">{props.block.cta}</h3>
                <h4></h4>
            </div>
        );
    }

    return (
        <div id="page-ui">
            <div id="headline">{renderHeadline()}</div>
            <div id="subhead">{renderSubHead()}</div>
            <div id="cta">
                <h3 className="cta-text">{props.block.cta}</h3>
            </div>
            <div id="cta-talk">
                <h5 className="cta-text">Let's talk.</h5>
            </div>
        </div>
    )
}

export default PageUI;