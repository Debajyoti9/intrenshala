import React from 'react'
import './Styles/LeftMain.css';
function LeftMain() {
    return (
        <div className='leftMain'>
            <div class="vl"></div>
             <div className="leftMain_text">
                 <h1>
                     How we can Help?
                 </h1>
                 <p>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quos doloribus ipsam est illo nesciunt praesentium excepturi debitis cupiditate! Vero maiores incidunt impedit quis dicta eligendi nisi aspernatur saepe, temporibus, et obcaecati mollitia illo rerum, 
                 </p>
                 <div className="leftMain_text_steps">
                     <div className="leftMain_text_steps_num">
                         <li>STEP 1</li>
                         <li>STEP 2</li>
                         <li>STEP 3</li>
                         <li>STEP 4</li>
                     </div>
                     <div className="leftMain_text_steps_num_body">
                         <h4>SELF ANALYSIS</h4>
                         <h4>SELF ANALYSIS</h4>
                         <h4>SELF ANALYSIS</h4>
                         <h4>SELF ANALYSIS</h4>
                     </div>
                 </div>
             </div>
        </div>
    )
}

export default LeftMain
