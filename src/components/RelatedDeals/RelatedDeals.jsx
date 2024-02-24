import "./RelatedDeals.scss";
function RelatedDeals() {
  return (
    <div className="relatedDealsBox">
      <h1>Related deals you might like for</h1>
      <div className="cardList">
        <Card />
        <Card />

        <Card />
      </div>
    </div>
  );
}

export default RelatedDeals;

function Card() {
  const discounted = 39.96;
  const old = 49.96;
  const sale = 20;
  return (
    <div className="card">
      <img src="/cardImg.png" alt="card" />
      <div className="cardInfo">
        <p className="btnBox">
          <span className="saleBtn">{sale}% off</span>
          <span className="saleBtn">Limited Offer</span>
        </p>
        <p className="cardHead">Webbuilder 1</p>
        <p className="cardBrief">Computer Modern clasic with wix support</p>
        <p className="priceBox">
          <span className="discounted">${discounted}</span>
          <span className="old">${old}</span>
          <span className="sale">({sale}% off)</span>
        </p>
        <p className="viewBtn">view</p>
      </div>
    </div>
  );
}
