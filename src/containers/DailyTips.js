import React from "react";
import TipsCard from "../components/Tips_Card";
import Tips from "../attributes/Tips";
function DailyTips() {
  const arr = Tips.map((Tips) => {
    return <TipsCard title={Tips.title} content={Tips.content} />;
  });
  return (
    <div>
      <h2>Daily Tips</h2>
      {arr}
    </div>
  );
}
export default DailyTips;
