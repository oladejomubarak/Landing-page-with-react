import "../styles/Home.css";
import TrueCallerHero from "../../../assets/images/truecaller.jpg"
import HomePageHero from "./TopNav"
import TopNav from "./TopNav";
import Hero from "./Hero";

function Home(){
  return(
    <div className="home_page">
      <TopNav/>
      <Hero/>
      {/* <HomePageHero/> */}
      {/* <div>
        <img src={TrueCallerHero} alt="hero image" className="image"/>
      </div> */}
    </div>
  );
}
export default Home;