import React from "react";
import "../asset/Plan.css";
import recommed from"../asset/Subtract.svg"
import cross from"../asset/Vector.svg"
import tick from"../asset/Vector (1).svg"



const Plan = () => {
  return (
    <div className="container11">
      <div className="container-div">
        <div className="container-div-innerdiv">
          <div className="inner-div-free">Free</div>
          <div className="inner-div-zero">
            <div className="dollor">$</div>
            <div className="zero">0</div>
            <div className="month">month</div>
          </div>
          <div className="inner-div-free-forever ff">Free forever</div>
        </div>
        <div className="innerdiv-plan1">
          <ul>
            <li><img src={tick} alt="" className="tick"/>1000 emails/month</li>
            <li><img src={tick} alt="" className="tick"/> 1 team member</li>
            <li><img src={tick} alt="" className="tick"/>basic template</li>
          </ul>
        </div>
        
        <div className="innerdiv-plan2">
          <ul>
            <li><img src={cross} alt="" className="tick"/>No add on available in this plans</li>
          </ul>
        </div>
        
        <div className="innerdiv-plan1">
          <ul>
            <li><img src={cross} alt="" className="tick"/>Export options available</li>
            <li><img src={tick} alt="" className="tick"/>Gmail</li>
            <li><img src={cross} alt="" className="tick"/>Outlook</li>
            <li><img src={cross} alt="" className="tick"/>HTML</li>
            <li><img src={cross} alt="" className="tick"/>PDF</li>
            <li><img src={cross} alt="" className="tick"/>Image</li>
            <li><img src={cross} alt="" className="tick"/>Webhook</li>
            <li><img src={cross} alt="" className="tick"/>Zapier</li>
            <li><img src={cross} alt="" className="tick"/>Wide range of ESPs</li>
          </ul>
        </div>
      </div>
      
      <div className="container-div">
        <div className="container-div-innerdiv">
          <img src={recommed} className="recommend" alt="" />
          <div className="inner-div-free">Advanced</div>
          <div className="inner-div-zero">
            <div className="dollor">$</div>
            <div className="zero">515</div>
            <div className="month">month</div>
          </div>
          <div className="inner-div-free-forever">billed monthly</div>
          <button className="btn-select">Select</button>
        </div>
        <div className="innerdiv-plan1">
          <ul>
            <li><img src={tick} alt="" className="tick" /> 1000 emails/month</li>
            <li><img src={tick} alt="" className="tick" /> 1 team member</li>
            <li> <img src={tick} alt=""  className="tick"/>basic template</li>
          </ul>
        </div>
        
        <div className="innerdiv-plan2">
          <ul>
            <li> <img src={tick} alt="" className="tick"/>No add on available in this plans</li>
          </ul>
        </div>
        
        <div className="innerdiv-plan1">
          <ul>
            <li> <img src={tick} alt="" className="tick"/>Export options available</li>
            <li><img src={tick} alt="" className="tick"/>Gmail</li>
            <li><img src={tick} alt="" className="tick"/>Outlook</li>
            <li><img src={tick} alt="" className="tick"/>HTML</li>
            <li><img src={tick} alt="" className="tick"/>PDF</li>
            <li><img src={tick} alt="" className="tick"/>Image</li>
            <li><img src={tick} alt="" className="tick"/>Webhook</li>
            <li><img src={tick} alt="" className="tick"/>Zapier</li>
            <li><img src={tick} alt="" className="tick"/>Wide range of ESPs</li>
          </ul>
        </div>
      </div>

      <div className="container-div">
        <div className="container-div-innerdiv">
          <div className="inner-div-free">Standard</div>
          <div className="inner-div-zero">
            <div className="dollor">$</div>
            <div className="zero">115</div>
            <div className="month">month</div>
          </div>
          <div className="inner-div-free-forever">billed monthly</div>
          <button className="btn-select ">Select</button>

        </div>
        <div className="innerdiv-plan1">
          <ul>
            <li><img src={tick} alt="" className="tick"/>1000 emails/month</li>
            <li> <img src={tick} alt="" className="tick"/>1 team member</li>
            <li><img src={tick} alt="" className="tick"/>basic template</li>
          </ul>
        </div>
        
        <div className="innerdiv-plan2">
          <ul>
            <li><img src={tick} alt="" className="tick"/>No add on available in this plans</li>
          </ul>
        </div>
        
        <div className="innerdiv-plan1">
          <ul>
            <li><img src={tick} alt="" className="tick"/>Export options available</li>
            <li><img src={tick} alt="" className="tick"/>Gmail</li>
            <li><img src={tick} alt="" className="tick"/>Outlook</li>
            <li><img src={tick} alt="" className="tick"/>HTML</li>
            <li><img src={tick} alt="" className="tick"/>PDF</li>
            <li><img src={tick} alt="" className="tick"/>Image</li>
            <li><img src={tick} alt="" className="tick"/>Webhook</li>
            <li><img src={tick} alt="" className="tick"/>Zapier</li>
            <li><img src={cross} alt="" className="tick"/>Wide range of ESPs</li>
          </ul>
        </div>
      </div>
      
      <div className="container-div">
        <div className="container-div-innerdiv">
          <div className="inner-div-free">Basic</div>
          <div className="inner-div-zero">
            <div className="dollor">$</div>
            <div className="zero">22</div>
            <div className="month">month</div>
          </div>
          <div className="inner-div-free-forever">billed monthly</div>
          <button className="btn-select">Select</button>

        </div>
        <div className="innerdiv-plan1">
          <ul>
            <li><img src={tick} alt="" className="tick"/>1000 emails/month</li>
            <li><img src={tick} alt="" className="tick"/> 1 team member</li>
            <li><img src={tick} alt="" className="tick"/>basic template</li>
          </ul>
        </div>
        
        <div className="innerdiv-plan2">
          <ul>
            <li><img src={tick} alt="" className="tick"/>No add on available in this plans</li>
          </ul>
        </div>
        
        <div className="innerdiv-plan1">
          <ul>
            <li><img src={tick} alt="" className="tick"/>Export options available</li>
            <li><img src={tick} alt="" className="tick"/>Gmail</li>
            <li><img src={tick} alt="" className="tick"/>Outlook</li>
            <li><img src={tick} alt="" className="tick"/>HTML</li>
            <li><img src={tick} alt="" className="tick"/>PDF</li>
            <li><img src={tick} alt="" className="tick"/>Image</li>
            <li><img src={cross} alt="" className="tick"/>Webhook</li>
            <li><img src={cross} alt="" className="tick"/>Zapier</li>
            <li><img src={cross} alt="" className="tick"/>Wide range of ESPs</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Plan;