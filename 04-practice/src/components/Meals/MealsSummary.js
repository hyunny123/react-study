import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>맛있는 음식</h2>
      <p>집에서 시간에 상관없이 맛있는 음식을 즐기실수 있습니다.</p>
      <p>
        모든 음식은 좋은 위생시설에서 신선한 음식재료로 가지고 좋은 실력의
        요리사 님께서 만들어주십니다.
      </p>
    </section>
  );
};

export default MealsSummary;
