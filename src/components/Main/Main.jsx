import AppNavbar from "../AppNavbar/AppNavbar";
import ItemList from "../Content/ItemList/ItemList";
import Intro from "../Intro/Intro";
import Path from "../Path/Path";
import RelatedDeals from "../RelatedDeals/RelatedDeals";
import SignIn from "../SignIn/SignIn";

import "./Main.scss";
function Main() {
  return (
    <div className="mainContainer">
      <section className="main">
        <Intro />
        <AppNavbar />
        <Path />
        <ItemList />
        <RelatedDeals />
        <SignIn />
      </section>
    </div>
  );
}

export default Main;
