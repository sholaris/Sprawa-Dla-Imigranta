import Head from "next/head";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";
import { useEffect } from "react";

const Navigation = () => {
  return (
    <Navbar
      className="navbar-container"
      bg="dark-blue"
      expand="lg"
      variant="dark"
    >
      <Navbar.Brand href="/">SprawaDlaImigranta.pl</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav">
          <Nav.Link href="/">Strona główna</Nav.Link>
          <Nav.Link href="/cudzoziemcy">Katalog spraw</Nav.Link>
          <Nav.Link href="/wnioski">Wnioski</Nav.Link>
          <Nav.Link href="#link">Forum</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-nav">
        <Link href="/">
          <a>Strona główna</a>
        </Link>
        <Link href="/cudzoziemcy" as="cudzoziemcy">
          <a>Załatw sprawę</a>
        </Link>
        <Link href="/wnioski" as="wnioski">
          <a>Wnioski</a>
        </Link>
        <Link href="#">
          <a>Forum</a>
        </Link>
      </div>
      <div className="footer-copyright">
        <p>SprawaDlaImigranta.pl Wszelkie prawa zastrzeżone.</p>
      </div>
    </div>
  );
};

const BaseLayout = ({ children, title = "Sprawa Dla Imigranta" }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
        <link rel="stylesheet" href="../static/styles.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <title>{title}</title>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.11.3.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/js/bootstrap-datepicker.min.js"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/css/bootstrap-datepicker3.css"
        />
      </Head>
      <Navigation />
      <React.Fragment>{children}</React.Fragment>
      <Footer />
    </div>
  );
};

export default BaseLayout;
