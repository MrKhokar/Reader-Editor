import React from "react";
const Edit = (props) => {
  const { editing, handleimage, handlechange } = props;
  return (
    <>
      <div className="  text-center  ">
        <hr />
        <div className="row">
          <div className="col align-center">
            <input
              name="pro"
              type="file"
              onChange={handleimage}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5>
              User Name :
              <input
                name="uname"
                value={editing.uname}
                onChange={handlechange}
                required
              />
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5>
              {" "}
              First Name :{" "}
              <input
                name="fname"
                value={editing.fname}
                onChange={handlechange}
                required
              />
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5>
              Last Name :{" "}
              <input
                name="lname"
                value={editing.lname}
                onChange={handlechange}
                required
              />
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5>
              Email :
              <input
                name="email"
                value={editing.email}
                onChange={handlechange}
                required
              />
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5>
              {" "}
              Number :{" "}
              <input
                name="number"
                value={editing.number}
                onChange={handlechange}
                required
              />
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5>
              {" "}
              Bio :{" "}
              <input
                name="bio"
                value={editing.bio}
                onChange={handlechange}
                required
              />
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5>
              {" "}
              Background-color :{" "}
              <input
                name="color"
                value={editing.color}
                onChange={handlechange}
              />
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
