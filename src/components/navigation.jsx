export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        {/* <div
          className="navbar-header"
          // style={{
          //   marginLeft: '-65px'
          // }}
        >
          <img
            src="img/logos/YAIS1.png"
            style={{ maxHeight: "50px", maxWidth: "50px" }}
            alt="YAIS Logo 1"
          />
        </div> */}
        <div className="navbar-header">
          <img
            src="img/logos/YAIS1.png"
            style={{ maxHeight: "50px", maxWidth: "50px" }}
            alt="YAIS Logo 1"
          />
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>

          <a
            style={{
              fontSize: "14px",
              color: "white",
            }}
            className="navbar-brand page-scroll"
            href="#page-top"
          >
            2022 Yale Africa Innovation Symposium
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#sponsors" className="page-scroll">
                Sponsors
              </a>
            </li>
            <li>
              <a href="#labs" className="page-scroll">
                Innovation Labs
              </a>
            </li>
            <li>
              <a href="#agenda" className="page-scroll">
                Agenda
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
