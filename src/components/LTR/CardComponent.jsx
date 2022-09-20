import React from "react";
import { Image } from "react-bootstrap";

const CardComponent = ({ img, title, text }) => {
  return (
    <div className="card__component p-0 p-lg-5">
      <Image fluid height={100} width={100} src={img} />
          <h5>{title}</h5>
          <p>{text}</p>
    </div>
  );
};

export default CardComponent;
