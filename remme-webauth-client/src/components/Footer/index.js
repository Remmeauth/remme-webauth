import React from "react";

import { Link } from "react-router-dom";
import { Logo, Social } from "../index";
import "./style.scss";

const news = [
    {
        link: "https://medium.com/remme",
        image: "https://uploads-ssl.webflow.com/59936b7137d7050001f9b748/5a1718c0f4308f0001d50991_medium_white.svg",
    },
    {
        link: "https://steemit.com/@remme",
        image: "https://uploads-ssl.webflow.com/59936b7137d7050001f9b748/5a171835ca1ffe0001610868_steemit_white.svg",
    }
];
const follow_remme = [
  {
    link: "https://www.reddit.com/r/remme/",
    image: "https://uploads-ssl.webflow.com/59936b7137d7050001f9b748/5a171835b1b09d0001925ca8_reddit_white.svg",
  },
  {
    link: "https://www.facebook.com/remme.io/",
    image: "https://uploads-ssl.webflow.com/59936b7137d7050001f9b748/5a17183545a0eb000185e0aa_fb_white.svg",
  },
  {
    link: "https://twitter.com/remme_io",
    image: "https://uploads-ssl.webflow.com/59936b7137d7050001f9b748/5a17183745a0eb000185e0ac_twitter_white.svg",
  },
  {
    link: "https://www.youtube.com/channel/UCeSQ8UosUXwII-6JOh7Fi3g",
    image: "https://uploads-ssl.webflow.com/59936b7137d7050001f9b748/5a1718376b2f3a0001d3bfaa_youtube_white.svg",
  },
  {
    link: "https://github.com/Remmeauth",
    image: "https://uploads-ssl.webflow.com/5b17b889f5c16285d8014a1f/5b17b889f5c16285de014b11_github-logo.svg",
  },
];

export default () => (
  <div className="footer-section">
    <div className="contact-section">
      <div className="holder contact-section-wrapper">
          <h2>Join our friendly community!</h2>
          <div className="prefooter-blocks-wrapper f-m-top">
              <div className="prefooter-left">
                  <h6 className="f-m-top">News and updates</h6>
                  <div className="social-media-2">
                      {news.map(item => (
                          <Social image={item.image} link={item.link} />
                      ))}
                      <Link className="telegram-btn" to="https://t.me/remme_daily">News Channel</Link>
                  </div>
              </div>
              <div className="prefooter-right">
                  <h6>contact us</h6>
                  <div className="contact-info-wrapper">
                      <Link className="telegram-btn" to="https://t.me/remme">Ask in Telegram</Link>
                      <Link to="mailto:team@remme.io?subject=Hello%20REMME%20team">team@remme.io</Link>
                  </div>
                  <h6 className="f-m-top">follow remme</h6>
                  <div className="social-media-2">
                      {follow_remme.map(item => (
                          <Social image={item.image} link={item.link} />
                      ))}
                  </div>
              </div>
          </div>
      </div>
    </div>
    <div className="footer-layout">
      <div className="left-footer">
        <div className="logo footer-logo">
          <Logo/>
        </div>
        <div className="copyright-text">
          © 2016-{new Date().getFullYear()} REMME CAPITAL LTD. All rights reserved.
        </div>
      </div>
        <Link className="no-warp left-footer-link" to="https://remme.io/privacy-notice" target="_blank">Privacy Notice</Link>
    </div>
  </div>
)
