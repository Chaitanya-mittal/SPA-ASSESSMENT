import "./Item.scss";
function Item({ info, uniId }) {
  return (
    <li className="item">
      <div className="cardImgBox">
        <img src="/cardImg.png" alt="cardImg" />
        <span>{info.imageCaption}</span>
      </div>
      <div className="cardInfoBox">
        <CardInfo info={info} />
        <CardReview
          rating={info.review.rating}
          comment={info.review.comment}
          stars={info.review.stars}
        />
      </div>

      <div className="indexing">{uniId}</div>

      {info.special && (
        <SpecialBox icon={info.special.icon} text={info.special.text} />
      )}
    </li>
  );
}

export default Item;

function CardInfo({ info }) {
  const isObjectorString = typeof info.highlights === "string";
  const isLoveItPresent = info.WhyLoveIt !== undefined;
  return (
    <div className="info">
      <p className="overview">
        <span>{info.overview.title} </span>
        {info.overview.content}
      </p>
      {info.sale && (
        <p className="saleBox">
          <span className="saleBtn">{info.sale}% off</span>
        </p>
      )}
      <p className={`highlights ${isLoveItPresent && "loveitPresent"}`}>
        <span className="heading">Main highlights</span>
        <span className={`content ${!isObjectorString && "contentIsObj"}`}>
          {isObjectorString ? (
            info.highlights
          ) : (
            <HighLightPoints highlights={info.highlights} />
          )}
        </span>
      </p>

      {info.WhyLoveIt && <LoveItPoints WhyLoveIt={info.WhyLoveIt} />}

      <p className="showMorebtn">
        <span>Show More </span>
        <img src="/seemore.png" alt="seemoreicon" />
      </p>
    </div>
  );
}

function CardReview({ rating, comment, stars }) {
  return (
    <div className="reviews">
      <div className="ratingBox">
        <h3>{rating}</h3>
        <p>{comment}</p>
        <img src={stars}></img>
        <img className="ibtn" src="/ibtn.png" alt="i" />
      </div>
      <div className="viewBtn">View</div>
    </div>
  );
}

function SpecialBox({ icon, text }) {
  return (
    <div className="special">
      <img src={icon} alt="spcIcon" />
      <span>{text}</span>
    </div>
  );
}

function HighLightPoints({ highlights }) {
  return (
    <div className="pointBox">
      {highlights.map((point) => {
        return (
          <p key={point.title} className="point">
            <span className="pointRating">{point.rating}</span>
            <span className="pointTitle">{point.title}</span>
          </p>
        );
      })}
    </div>
  );
}

function LoveItPoints({ WhyLoveIt }) {
  return (
    <div className="loveitBox">
      <p className="heading">Why we love it</p>
      <div className="pointBox">
        {WhyLoveIt.map((point) => {
          return (
            <p key={point} className="point">
              <img src="/tick.png" alt="tick"></img>
              <span>{point}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
}
