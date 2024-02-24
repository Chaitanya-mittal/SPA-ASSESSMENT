import Item from "../Item/Item";
import "./ItemList.scss";
const CardInfo = [
  {
    imageCaption: "Builder 1",
    overview: {
      title: "WixPro 72-Inch Responsive Website Builder-",
      content:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    },
    highlights:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    review: {
      rating: 9.8,
      comment: "Exceptional",
      stars: "/card1stars.png",
    },
    special: {
      icon: "/bestchoice.png",
      text: "Best Choice",
    },
  },
  {
    imageCaption: "Builder",
    overview: {
      title: "SiteCraft 68-Inch Ultimate Web Design Studio-",
      content:
        "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    },
    highlights:
      "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    review: {
      rating: 9.5,
      comment: "Excellent",
      stars: "/card2stars.png",
    },
    special: {
      icon: "/bestvalue.png",
      text: " Best Value",
    },
  },
  {
    imageCaption: "Builder 1",
    overview: {
      title: "WixPro 72-Inch Responsive Website Builder-",
      content:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    },
    highlights:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    review: {
      rating: 9.3,
      comment: "Exceptional",
      stars: "/card1stars.png",
    },
  },
  {
    imageCaption: "CDK",
    overview: {
      title: "CDK Resposive Builder:",
      content:
        "An extensive library of widgets and apps, and detailed step-by-step guides",
    },
    sale: 26,
    highlights: [
      { rating: 9.9, title: "Building Responsive" },
      { rating: 8.9, title: "Cool" },
      { rating: 8.9, title: "Docs" },
    ],
    review: {
      rating: 9.1,
      comment: "Very Good",
      stars: "/card4stars.png",
    },
    WhyLoveIt: ["Documentation", "Easy use", "Out of Box"],
  },
];
function ItemList() {
  return (
    <ul className="itemList">
      {CardInfo.map((card, i) => {
        return <Item key={i + 1} info={card} uniId={i + 1} />;
      })}
    </ul>
  );
}

export default ItemList;
