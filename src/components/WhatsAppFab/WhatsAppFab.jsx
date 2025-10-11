import React from "react";
import "./WhatsAppFab.css";
import whatsappIcon from "../../../assets/social media icons/whatsapp_icon.svg";

export default function WhatsAppFab() {
  return (
    <a
      className="wa-fab"
      href="https://wa.me/201141341192?text=مرحباً، أريد الاستفسار عن المنتجات"
      target="_blank"
      rel="noreferrer"
    >
      <div>تواصل معنا</div>
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        style={{ width: "28px", height: "28px" }}
      />
      {/* <svg width="28" height="28" viewBox="0 0 24 24"><path fill="#fff" d="M20.5 3.5c-1.8-1.8-4.3-2.6-6.9-2.3-4.9.6-8.7 4.5-9.3 9.3-.4 3.2 1.1 6.3 4.2 8l.2.1-.9 3.1 3.2-.9c1.5.6 3.1.9 4.8.8 4.9-.2 8.8-4.2 8.5-9.1-.2-2.8-1.7-5.3-3.7-7.1z"/></svg> */}
    </a>
  );
}
