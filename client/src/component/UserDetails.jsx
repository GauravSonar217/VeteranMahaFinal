import React from "react";
import { IoMdClose } from "react-icons/io";

function UserDetails({ close, userData }) {
  const { name, email, phone, message, file, services } = userData;

  return (
    <React.Fragment>
      <section className="userDetailSec">
        <div className="userInfoCont">
          {/* <div className="usernamebox"> */}
            <IoMdClose onClick={close} className="closeuser"/>
            <h2>User Details</h2>
          {/* </div> */}
          <hr />
          <div className="infoBox">
            <label>Name:</label>
            <p>{name}</p>
            <label>Email:</label>
            <p>{email}</p>
            <label>Phone No:</label>
            <p>{phone}</p>
            <label>Service:</label>
            <p>{services}</p>
            <label>Message:</label>
            <p>{message}</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default UserDetails;
