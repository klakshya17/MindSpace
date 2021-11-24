import React from "react";
import "./Tips_Card.css";
function TipsCard(props) {
  return (
    <div class="tips">
      <div className="tipsTop">
        <h2>{props.title}</h2>
      </div>
      <p>{props.content}</p>
    </div>
  );
}
export default TipsCard;
