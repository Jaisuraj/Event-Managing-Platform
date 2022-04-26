import React from "react";
import "./Bar.css";

function Bar() {
  return (
    <div>
      <div id="cover">
        <form method="get" action="">
          <div class="tb">
            <div class="td">
              <input type="text" placeholder="Search" required />
            </div>
            <div class="td" id="s-cover">
              <button type="submit">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="dropdown">
        {/*REPLACE WITH API SUGGESTIONS EMPTY WHEN NO CONTENT*/}
        <ul>
          <li>suggestion1</li>
          <li>Suggestion2</li>
          <li>sugesstion3</li>
          <li>suggestion1</li>
          <li>Suggestion2</li>
          <li>sugesstion3</li>
          <li>suggestion1</li>
          <li>Suggestion2</li>
          <li>sugesstion3</li>
        </ul>
      </div>
    </div>
  );
}

export default Bar;
