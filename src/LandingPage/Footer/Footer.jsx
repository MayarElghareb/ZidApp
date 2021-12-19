import { Container } from "react-bootstrap";
import zidwhite from "../../assets/images/zidwhite.jpg";
import "./footer.css";
import {
  RiTwitterFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiYoutubeFill,
} from "react-icons/ri";

function Footer() {
  return (
    <footer className="zid__footer" id="footer">
      <Container className="footer__container text-center pt-5">
        <figure>
          <img
            className="img-fluid footer_logo"
            src={zidwhite}
            alt="logo"
          ></img>
        </figure>

        <div className="social__media">
          <a
            href="https://www.youtube.com/channel/UCcPU3vP1sTR4f1zupXGYa8Q"
            target="_blank"
            rel="noreferrer"
          >
            <RiYoutubeFill className="ms-5" />
          </a>
          <a
            href="https://twitter.com/zidappcom"
            target="_blank"
            rel="noreferrer"
          >
            <RiTwitterFill className="ms-5" />
          </a>

          <a
            href="https://www.instagram.com/zidappcom/"
            target="_blank"
            rel="noreferrer"
          >
            <RiInstagramLine className="ms-5" />
          </a>

          <a
            href="https://www.linkedin.com/company/zidapp/"
            target="_blank"
            rel="noreferrer"
          >
            <RiLinkedinFill className="ms-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;
