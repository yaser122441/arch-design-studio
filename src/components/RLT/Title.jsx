import React from "react";
import Button from "react-bootstrap/Button";
const Title = () => {
  return (
    <div className="aratitle__div">
      <h1>استوديو التصميم المعماري</h1>
      <h6>تعامُل بطريقة شخصية مع كل عميل</h6>
      <sub>حلٌ أنيق لكل مشكلة</sub>
      <br></br>
      <Button
        variant="dark"
        className="btn  btn-outline-secondary m-2 ps-4 pe-4"
      >
        ابدأ
      </Button>
    </div>
  );
};

export default Title;
