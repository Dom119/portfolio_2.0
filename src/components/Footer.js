import React from "react";

import { Row, Container } from "reactstrap";
import Button from "reactstrap/lib/Button";

export default () => {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Dom's Portfolio
                </a>
              </li>
              <li>
                <Button
                  href="https://dom119.github.io/portfolio/"
                  target="_blank"
                  className="btn-round"
                  color="primary"
                >
                  View Version 1.0
                </Button>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              {new Date().getFullYear()}
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

