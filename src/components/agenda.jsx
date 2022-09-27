export const Agenda = (props) => {
  return (
    <div id="agenda" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Agenda</h2>
          <p>Updated Yale Africa Innovation Symposium (YAIS) Schedule</p>
        </div>

        <ul>
          <li>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="row">
                    <div className="agenda">
                      <div className="agenda-image">
                        {/* <img
                          // style={{
                          //   paddingBottom: "0px",
                          //   position: "relative",
                          //   left: "00px",
                          // }}
                          src={d.img}
                          alt=""
                        /> */}
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

<div>
  {/* <ul>
  <div>
    <h2>Day 1 ~ Day Events</h2>
    {props.data
      ? props.data.map((d, i) => (
          <div key={`${d.title}-${i}`}>
            <li>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="agenda-image">
                  <p>{d.time1}</p>
                </div>
                <p>{d.description1}</p>
              </div>
            </li>
          </div>
        ))
      : "loading"}
  </div>
</ul>

<ul>
  <div>
    <h2>Day 1 ~ Evening Events</h2>
    {props.data
      ? props.data.map((d, i) => (
          <div key={`${d.title}-${i}`}>
            <li>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="agenda-image">
                  <p>{d.time1e}</p>
                </div>
                <p>{d.description1e}</p>
              </div>
            </li>
          </div>
        ))
      : "loading"}
  </div>
</ul>

<ul>
  <div>
    <h2>Day 2 ~ Day Events</h2>
    {props.data
      ? props.data.map((d, i) => (
          <div key={`${d.title}-${i}`}>
            <li>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="agenda-image">
                  <p>{d.time2}</p>
                </div>
                <p>{d.description2}</p>
              </div>
            </li>
          </div>
        ))
      : "loading"}
  </div>
</ul>

<ul>
  <div>
    <h2>Day 2 ~ Evening Events</h2>
    {props.data
      ? props.data.map((d, i) => (
          <div key={`${d.title}-${i}`}>
            <li>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="agenda-image">
                  <p>{d.time2e}</p>
                </div>
                <p>{d.description2e}</p>
              </div>
            </li>
          </div>
        ))
      : "loading"}
  </div>
</ul> */}
</div>;
