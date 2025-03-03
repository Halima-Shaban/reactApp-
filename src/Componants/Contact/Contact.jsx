import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "11cd7c82-9e92-4277-a9b1-e9d9df0d8cd5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((response) => response.json());

    if (response.success) {
      setResult(response.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(response.message);
    }
  };

  return (
    <div className=" row Contact d-flex justify-content-between">
      <div className="contact-col col-12 col-md-6 mb-3">
        <h3 className="d-flex align-items-center">
          Send Us A Massege <img className="img-fluid" src={msg_icon} alt="" />{" "}
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sunt
          nobis repudiandae quos reprehenderit ipsum optio sint aut error alias
          beatae facere, doloremque eum sequi soluta pariatur quia incidunt
          ducimus.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" /> Contact@me.gmail.com
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" /> +201552554555
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="" />
            15hamed street elmanshaeaa <br />
            JN,85,united stAates
          </li>
        </ul>
      </div>
      <div className="contact-col  col-12 col-md-6 mb-3 ">
        <form onSubmit={onSubmit}>
          <label>your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          ></input>
          <label>Phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Mobile Number"
            required
          ></input>
          <label>Write Your Message Here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}
