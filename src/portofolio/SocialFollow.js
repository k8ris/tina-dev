import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div>
      <a href="https://www.instagram.com/tinolina_art/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>tinolina_art
    </div>
  );
}