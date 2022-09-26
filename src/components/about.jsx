export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/logos/CRAZIER1.PNG" className="img-responsive" alt="YAIS logo 2" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About</h2>
              <p>{props.data ? props.data.paragraph1 : "loading..."}</p>
              <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
              <p>{props.data ? props.data.paragraph3 : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
