import React from "react";
import "./figma.css";
import frame85 from "../asset/Frame85.svg";
import frame86 from "../asset/Frame86.svg";

function Figma() {
  return (
    // <section class="mail">
      <div class="container">
        <div class="flex-row">
          <div className="col-6 im">
            <img src={frame85} alt="mail" />
          </div>
          <div className="col-6">
            <h2 class="mail__part1__title">
              What's an <span class="highlight">AMP</span> email?
            </h2>

            <p class="mail__part1__content">
              AMP email is a technology that allows you to incorporate
              interactive elements like checkout buttons, quizzes, webinar
              forms, calendars etc into your emails without needing to open a
              new tab to visit a website.
            </p>
          </div>
        </div>
        <div class="flex-row">
          <div className="col-6">
            <h2 class="mail__part1__title">
              Why does it <span className="highlight"></span>Matter?
            </h2>

            <p class="mail__part1__content">
              What if you could circumvent the steps that we have usually
              focused on which is a click through on an email, then a landing
              page visit and then a form fill or a booking request or a
              checkout. The new flow will be open email and fill the form,
              checkout or submit a booking request right in the email. No
              redirect to safari or chrome, no open a new tab, no waiting for a
              new page to load. How will this impact your conversion rates?
            </p>
          </div>
          <div className="col-6 im">
            <img src={frame86} alt="mail" />
          </div>
        </div>
      </div>
    // </section>
  );
}

export default Figma;
