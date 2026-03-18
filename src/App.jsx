import headshot from "./assets/headshot.jpg";
import Button from "@mui/material/Button";
import emailIcon from "./icons/Icon.svg";
import linkedIn from "./icons/linkedin.svg";

import twitter from "./footer/Twitter Icon.svg";
import facebook from "./footer/Facebook Icon.svg";
import instagram from "./footer/Instagram Icon.svg";
import github from "./footer/GitHub Icon.svg";

export default function App() {
  return (
    <>
      <main>
        <img
          style={{ borderRadius: "10px 10px 0 0" }}
          width={317}
          height={317}
          src={headshot}
        ></img>
        <section>
          <h3>Matija Zuber</h3>
          <p>Frontend Developer</p>
          <p className="websiteP">matijazuber.website</p>
          <div className="buttonDiv">
            <Button
              sx={{
                width: "115px",
                height: "34px",
                padding: "10px 13px 9px 11px",
                borderRadius: "6px",
                fontSize: "16px",
                lineHeight: "16px",
                fontWeight: "500",
                textTransform: "none",
                backgroundColor: "#FFFFFF",
                color: "#374151",
                letterSpacing: "0%",
                fontFamily: "Inter",
                "& .MuiButton-startIcon": {
                  marginRight: "8px",
                  marginLeft: "0px",
                },
              }}
              variant="contained"
              startIcon={<img src={emailIcon}></img>}
            >
              Email
            </Button>
            <Button
              sx={{
                width: "115px",
                height: "34px",
                padding: "10px 13px 9px 11px",
                borderRadius: "6px",
                fontSize: "14px",
                lineHeight: "16px",
                fontWeight: "500",
                textTransform: "none",
                backgroundColor: "#5093E2",
                color: "#FFFFFF",
                letterSpacing: "0%",
                fontFamily: "Inter",
                "& .MuiButton-startIcon": {
                  marginRight: "8px",
                  marginLeft: "0px",
                },
              }}
              variant="contained"
              startIcon={<img src={linkedIn}></img>}
            >
              LinkedIn
            </Button>
          </div>
          <div className="divAbout">
            <div>
              <h2>About</h2>
              <p>
                I am a frontend developer with a particular interest in making
                things simple and automating daily tasks. I try to keep up with
                security and best practices, and am always looking for new
                things to learn.
              </p>
              <h2>Interests</h2>
              <p>
                Food expert. Music scholar. Reader. Internet fanatic. Bacon
                buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee
                fanatic.
              </p>
            </div>
          </div>
        </section>
        <footer>
          <img src={twitter}></img>
          <img src={facebook}></img>
          <img src={instagram}></img>
          <img src={github}></img>
        </footer>
      </main>
    </>
  );
}
