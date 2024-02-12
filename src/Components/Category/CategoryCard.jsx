import React from "react";
import classes from "./catagory.module.css";
import { Link } from "react-router-dom";
function CategoryCard({ datay }) {
  return (
    <div className={classes.category}>
      <a href={datay.name}>
        <span>
          <h2>{datay?.title}</h2>
        </span>
        <img src={datay?.imgLink} alt="" />
        <p>shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
