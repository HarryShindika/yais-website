export const Sponsors = (props) => {
  return (
    <div id="sponsors" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Sponsors</h2>
          <p>We would like to thank our sponsors for this event.</p>
        </div>
        <ul>
          <li>
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    style={{ margin: "auto", width: "50%" }}
                    className="col-md-4"
                  >
                    <div className="polaroid">
                      <img src={d.image} />
                      <div
                        className="service-desc"
                        style={{
                          paddingBottom: "5px",
                        }}
                      >
                        <h3>{d.name}</h3>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </li>
        </ul>
      </div>
    </div>
  );
};
