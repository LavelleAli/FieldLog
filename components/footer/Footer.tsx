import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex justify-center gap-20 pl-8 pr-8 text-fairwindblue cursor-no-drop">
      <div className="text-lg text-accent">© Lavelle Ali 2026</div>
      <div className="grid lg:grid-cols-3 gap-8 text-left">
        <div>
          <div className="text-xl font-bold">Contact</div>
          <div className="w-20 border border-accent mb-2"></div>
          <div>
            <ul className="flex flex-col gap-2">
              <li>Email: FieldlogRep@email.com</li>
              <li>Phone: 340-561-7892</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center cursor-not-allowed">
          <div className="text-2xl text-fairwindblue font-bold mb-2">
            Follow Us!
          </div>
          <div className="w-50 border border-accent"></div>
          <div className="flex gap-4 text-xl mt-2">
            <FontAwesomeIcon
              icon={faXTwitter}
              style={{ color: "rgb(15, 10, 159)" }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "rgb(15, 10, 159)" }}
            />
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "rgb(15, 10, 159)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
