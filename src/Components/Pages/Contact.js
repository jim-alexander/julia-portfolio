import React from "react";

class Info extends React.Component {
  render() {
    return (
      <div>
        <h2>Phone</h2>
        <p>
          <a href="tel:+61438065255" className="contactLink">
            0438 065 255
          </a>
        </p>
        <br />
        <h2>Email</h2>
        <p>
          <a href="mailto:juwia4@hotmail.com" className="contactLink">
            juwia4@hotmail.com
          </a>
        </p>
        <br />
        <h2>Instagram</h2>
        <p>
          <a
            href="https://www.instagram.com/julzieegirl/"
            className="contactLink"
          >
            julzieegirl
          </a>
        </p>
      </div>
    );
  }
}

export default Info;
