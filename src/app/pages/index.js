import Footer from "./Footer";
import Header from "./Header"
import HeroSection from "./HeroSection";
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useQuery , gql } from "@apollo/client";


const HEROES = gql`
        query GetHeroes{
            heroes {
                id
                name
                xman
                snapped
                power
                image
                views
              }
        }

`


const Body = () =>{
    const {loading, error ,data} = useQuery(HEROES);
    const a = loading ? 'Loading...' : '';
    const b = error ? `Error! ${error.message}`: '';

    const dataArray =[];

    return(
        <>
        <Header/>
        <HeroSection/>
        <div className="container">
            {a} {b}
            <div className="row">
                {data?.heroes.map((item)=>{
                    return <Card  src={item.image} snapped={item.snapped} power={item.power} name={item.name} views={item.views}/>
                })}
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Body;