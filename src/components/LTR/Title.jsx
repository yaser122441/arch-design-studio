import React from "react";
import Button from "react-bootstrap/Button";

const Title = () => {
  return (
        <div className="title__div">
          <h1>Arch Design Studio</h1>
          <h6>A Very Personal Approach To Every Client</h6>
          <sub>Elegant solution to every problem</sub>
          <br></br>
          <Button variant="dark" className="btn  btn-outline-secondary m-2 ps-4 pe-4">
            GET STARTED
          </Button>
        </div>

  );
};

export default Title;
