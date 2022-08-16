import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "삼겹살",
    description: "제주산 흑돼지!!!!!",
    price: 22.99,
  },
  {
    id: "m2",
    name: "냉면",
    description: "채수를 이용한 육수의 감칠맛을 느껴보세요!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "크림파스타",
    description: "까르보나라 크림 스파게티!!",
    price: 12.99,
  },
  {
    id: "m4",
    name: "샐러드 볼",
    description: "건강한 한끼...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
