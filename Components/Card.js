import React from "react";
import card1 from '../images/card1.jpeg';
import card2 from '../images/card2.jpeg';
import card3 from '../images/card3.webp';
import "../Components/App.css";

export default function Card() {
  return (
    <><br /><br /><div class="card-group">
          <div class="card">
              <img src={card1} class="card-img-top" alt="..." />
              <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
              </div>
          </div>
          <div class="card">
              <img src={card2} class="card-img-top" alt="..." />
              <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
              </div>
          </div>
          <div class="card">
              <img src={card3} class="card-img-top" alt="..." />
              <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
              </div>
          </div>
      </div></>
  );
}
