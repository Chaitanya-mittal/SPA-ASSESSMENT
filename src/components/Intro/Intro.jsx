import "./Intro.scss";
function Intro() {
  return (
    <section className="intro">
      <h1>Best Website builders in the US</h1>
      <div className="websiteUpdates">
        <div className="left">
          <div className="updateField">
            <img src="/lastUpd.png" alt="lastUPD" />
            <span>Last Updated- </span>

            <span>February 22, 2020</span>
          </div>
          <div className="updateField">
            <img src="/advIcon.png" alt="icon" />
            <span>Advertising Disclosure</span>
          </div>
        </div>
        <div className="right">
          <div className="updateField">
            <span>Top Relevant</span>
            <img src="/dropdown.png" alt="ddicon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
