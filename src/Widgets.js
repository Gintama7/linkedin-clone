import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("React is back", "Top News - 9099 readers")}
            {newsArticle("Coronvirus: UK updates", "Top News - 886 readers")}
            {newsArticle("Tesla hits new highs", "Cars & Auto - 300 readers")}
            {newsArticle("Bitcoin breaks $22k", "Crypto - 8000 readers")}
            {newsArticle("Is redux too good", "Coding and Programming - 300 readers")}
        </div>
    )
}

export default Widgets;