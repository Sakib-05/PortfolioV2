import React from "react";

export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully!");
      event.target.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="Contact">
      <h1>Contact Me</h1>
      <p>
        Feel free to reach out to me through any of the following platforms or
        by filling out the form below:
      </p>
      <br />
      <div className="form-socials">
        <div className="form">
          <form onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-socials">
          <h2>Connect through socials</h2>
          <div>
            <a target="_blank" href="https://www.linkedin.com/in/sbque05/">
              <img src="public/images/LN logo.png" alt="LinkedIn" />
            </a>
            <a target="_blank" href="https://github.com/Sakib-05">
              <img src="public/images/github logo.png" alt="GitHub" />
            </a>
            <a target="_blank" href="https://www.instagram.com/soku_ui/">
              <img src="public/images/instagram logo.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}
