import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import Navbar from "../components/NavbarComp/Navbar/Navbar";
import "./Home.scss";
function Home() {
  return (
    <section className="homeSection">
      <header>
        <Navbar />
      </header>
      <main className="homeMain">
        <Main />
        <Footer />
      </main>
    </section>
  );
}

export default Home;
