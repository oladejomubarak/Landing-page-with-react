import "../styles/Hero.css"
import Button from "../../../reusableComponents/Button";
function Hero(){
  return(
    <div className="hero_main">
      <section className="hero_sec">
        <p className="hero_ptag_one">Turn your product
         into something that
          sticks forever!</p>
        <p className="hero_ptag_two">We offer a beautiful. high-end website that hooks your
           audience multiplying your enegagement and impressions.</p>
    
      <div className="hero_btn">
      <Button
          name="Get started"
          width="45%"
          height="50px"
          borderTopLeft="0px"
          borderBottomLeft="16px"
          borderBottomRight="0px"
          borderTopRight="16px"
          color="white"
          bgColor="red"
          border="none"
        />

        <Button
          name="Our Pricing"
          width="43%"
          height="50px"
          borderTopLeft="0px"
          borderBottomLeft="16px"
          borderBottomRight="0px"
          borderTopRight="16px"
          color="black"
          bgColor="white"
          border="none"
        />
        </div>
        
  

        </section>
    </div>
  );
}
export default Hero;