import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Read = (props) => {
  const { reading } = props;

  return (
    <>
      <h2>View Mode</h2>
      <hr />
      {reading.map((item, id) => (
        <div
          key={id}
          className="   text-center text-justify">
          <div className="row">
            <div className="col">
              <img
                src={item.pro}
                className="img-responsive img-circle"
                width="100"
                height="100"
                alt="Upload Picture"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5> User Name : {item.uname}</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5> First Name : {item.fname}</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5>Last Name : {item.lname}</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5> Email : {item.email}</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5> Number : {item.number}</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5> Bio : {item.bio}</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5> Background-color : {item.color}</h5>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Read;
