import React from "react";
import styles from "./Footer.module.css";

 export const Footer = () => {
  return (
    <>
    <div className={styles.Footercontainer}>
    <div className={styles.first}>
    <h5>Customer Service</h5>
    <br />
    <p>Help Center / FAQs</p>
    <p>Returns</p>
    <p>Shipping Information</p>
    <p>Track my order</p>
    <p>Cookies Setting</p>

    </div>

    <div className={styles.second}>
        <div>
        <h5>My Account</h5>
        <br />
        <p>Manage My Auto-Replenishments</p>
        <p>My Rewards</p>
        <p>My Favorites</p>
        <p>Refer a Friend</p>
        <p>Order History</p>

        </div>
        <div>
        <h5>Company</h5>
        <br />
            <p>About Us</p>
            <p>Press</p>
            <p>What is Klarna?</p>
        </div>
        <div>
            <h5>Legal</h5>
            <br />
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Modern Slavery Statement</p>
            <p>Product Recall</p>
            <p>Accessibility</p>
        </div>
    </div>
      {/* <div
        style={{
          // border: "1px  ",
          height: "280px",
          padding: "35px",
          backgroundColor: "#white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "75%",
            margin: "auto",
          }}
        >
          <div style={{ textDecoration: "start" }} className={styles.RedHover}>
            <a href="">
              <h1>FAQ's</h1>
            </a>
            <a href="">
              <h1>Contact Us</h1>
            </a>
            <a href="">
              <h1>Shipping & Return Policy</h1>
            </a>
            <a href="">
              <h1>Terms & Conditions</h1>
            </a>
            <a href="">
              <h1>Privacy Policy</h1>
            </a>
          </div>
          <div className={styles.Follow}>
            <h1>Follow us on</h1>
            <div
              style={{ display: "flex", gap: "10px" }}
              className={styles.imgHover}
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/fb-icon.png?v=1599571756"
                alt=""
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/insta-icon.png?v=1599571756"
                alt=""
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/twitter-icon.png?v=1599571756"
                alt=""
              />
            </div>
          </div>
        </div>
        <hr
          style={{
            color: "lightgray",
            width: "75%",
            margin: "auto",
            marginTop: "30px",
          }}
        />
        <div
          style={{
            display: "flex",
            // border: "1px ",

            width: "65%",
            margin: "auto",
            justifyContent: "space-between",
            marginTop: "25px",
          }}
        >
          <p>Copyright©2020. All Rights Reserved</p>
          <img
            style={{ width: "9%" }}
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/ting.png?v=1599565040"
            alt=""
          />
        </div> */}
      {/* </div> */}

      
    </div>
    </>
  );
};

export default Footer;
