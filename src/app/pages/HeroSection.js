import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Carousel';


const HeroSection =()=>{
    return(
        <div className="container">
        <div className="row">
            <div className="col-sm-6">
                <h1>Comic Enthusiasts Assemble</h1>
                <p>We make votes of our favourite superheroes and subscribe to some of our comic books</p>
            </div>
            <div className="col-sm-6 bg-image " style={{borderRadius: "5%",
                                                        borderColor:"violet",
                                                        borderWidth:"2%",
                                                        backgroundColor:"InactiveCaptionText",
                                                        }}>
                <Carousel/>
               
            </div>
        </div>
        </div>
    )
}
export default HeroSection;