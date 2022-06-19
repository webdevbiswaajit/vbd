import React from "react";
import "./FormArea.css";

function FormArea() {
  return (
    <>
      <div className="form_area">
        <form action="">
          <div className="visitor_info">
            <div className="namef">
              <input required="1" type="text" placeholder="Name *" />
            </div>
            <div className="emailf">
              <input required="1" type="email" placeholder="Email * " />
            </div>
          </div>
          <div className="subject">
            <input type="text" placeholder="Subject *" />
          </div>
          <div className="meassage">
            <textarea
              name=""
              id=""
              cols=""
              rows=""
              placeholder="Please describe what you need."
            ></textarea>
          </div>
          <div className="submit_btn">
            <button>Send Message</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormArea;
