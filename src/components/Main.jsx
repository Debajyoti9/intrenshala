import React from 'react'
import LeftMain from './LeftMain'
import RightMain from './RightMain'
import './Styles/Main.css';
function Main() {
    return (
        <div className="main">
            <LeftMain/>
            <RightMain/>
        </div>
    )
}

export default Main
