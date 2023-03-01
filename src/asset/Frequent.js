import React from 'react'
import '../asset/frequent.css'

function Frequent() {
  return (
        
    <div className="container">
            <h1 className="question__title">Frequently Asked Questions</h1>
            <div className="inner-divs">
            <div className="question__content">
                <h3>What if the email provider doesn't open AMP emails?</h3>
                <p>We have an HTML fallback that you can configure. Gmail, GSuite, Yahoo and Mail.ru will allow AMP emails to open, for other email clients that don’t support AMP, an HTML fallback will open. </p>
            </div>
            <div className="question__content">
                <h3>How do I send AMP emails?</h3>
                <p>We allow you to export and send the AMP emails created on envoie from your current email tool.</p>
            </div>
            </div>
    </div>
       
  )
}

export default Frequent