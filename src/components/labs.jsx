import { Image } from "./image";

export const Labs = (props) => {
  return (
    <div id="labs" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Innovation Labs</h2>
        </div>
        <div className="row">
          <div className="labs-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="row">
                    <a href="facebook.com">
                      <h4>{d.title}</h4>
                    </a>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
