import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footerItem}>
        <p className={classes.footerItemHed}>MENU</p>
        <div>
          <p className={classes.footerItemContent}>Home</p>
          <p className={classes.footerItemContent}>Market</p>
          <p className={classes.footerItemContent}>Crop converter</p>
        </div>
      </div>
      <div className={classes.footerItem}>
        <p className={classes.footerItemHed}>ABOUT</p>
        <div>
          <p className={classes.footerItemContent}>Our Company</p>
          <p className={classes.footerItemContent}>Our people</p>
          <p className={classes.footerItemContent}>FAQ</p>
        </div>
      </div>
      <div className={classes.footerItem}>
        <p className={classes.footerItemHed}>LEGAL</p>
        <div>
          <p className={classes.footerItemContent}>Terms and Conditions</p>
          <p className={classes.footerItemContent}>Privacy Policy</p>
          <p className={classes.footerItemContent}>Cookie Policy</p>
        </div>
      </div>
      <div className={classes.footerItem}>
        <p className={classes.footerItemHed}>CONTACT US</p>
        <div>
          <div style={{ display: "flex" }}>
            <FontAwesomeIcon
              icon={faPhoneVolume}
              style={({ color: "#000000" }, { padding: "5px" })}
            />
            <p className={classes.footerItemContent}>2222222222</p>
          </div>
          <div style={{ display: "flex" }}>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={({ color: "#000000" }, { padding: "5px" })}
            />
            <p className={classes.footerItemContent}>xyz@abc.com</p>
          </div>
          <div>
            {/* <FontAwesomeIcon
            icon={faFacebookSquare}
            style={{ color: "#000000" }}
          />
          <FontAwesomeIcon icon={faLinkedIn} style={{ color: "#000000" }} />
          <FontAwesomeIcon icon={faYouTube} style={{ color: "#000000" }} />
          <FontAwesomeIcon icon={faTwitter} style={{ color: "#000000" }} />
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#000000" }}
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
