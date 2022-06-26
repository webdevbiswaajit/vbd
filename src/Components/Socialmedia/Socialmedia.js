import React from "react";
import "./Socialmedia.css";
import { Icon } from "@iconify/react";
import facebookWithCircle from "@iconify/icons-entypo-social/facebook-with-circle";
import twitterWithCircle from "@iconify/icons-entypo-social/twitter-with-circle";
import instagramWithCircle from "@iconify/icons-entypo-social/instagram-with-circle";
import youtubeWithCircle from "@iconify/icons-entypo-social/youtube-with-circle";
import linkedinWithCircle from "@iconify/icons-entypo-social/linkedin-with-circle";
import { ExternalLink } from "react-external-link";

function Socialmedia() {
  return (
    <>
      <div className="social_media">
        <ul>
          <li>
            <ExternalLink href="https://www.twitter.com">
              <Icon icon={twitterWithCircle} />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.facebook.com/TheVirtualBD">
              <Icon icon={facebookWithCircle} />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://instagram.com">
              <Icon icon={instagramWithCircle} />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://youtube.com">
              <Icon icon={youtubeWithCircle} />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.linkedin.com/company/thevirtualbd/?fbclid=IwAR2m8FL5D5L5m6wGU4-JNUfUp23_CN_HtRxDrRTJ0G3mPWaKu4VUUCK-WrI">
              <Icon icon={linkedinWithCircle} />
            </ExternalLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Socialmedia;
