import React from 'react';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaLinks:React.FC = () => {
  return (
    <div className="ml-2 mr-2">
      <h2 className="font-mono text-2xl font-bold mt-10 mb-10 text-center">It's Time for a Portrait, Contact me for more information</h2>
      <div className="flex justify-evenly container mx-auto">
      <a href="https://www.instagram.com/paintingsbychantal/?hl=en"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
      <a href="mailto:chantaldassanayake@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x"/></a>
      <a href="https://lk.linkedin.com/in/chantal-dassanayake-b7298a217"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
      <a href="https://www.facebook.com/public/Chantal-Dassanayake"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
    </div>
    </div>
  );
}

export default SocialMediaLinks;