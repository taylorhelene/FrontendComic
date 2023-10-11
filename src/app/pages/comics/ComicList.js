'use Client'
import Footer from "../Footer";
import Header from "../Header";
import Comic from "./Comic";
import {useQuery , gql } from "@apollo/client";
import ComicDescription from "./ComicDescription";
import React, { useEffect } from "react";

const COMICS = gql`
query Comics {
    comics {
      name
      date
      rating
      writer
      cover_artist
      editor
      digital
      link
      price
      url
    }
  }
`
const ComicList=()=>{

    const{ loading , error, data} = useQuery(COMICS);
    const a = loading ? 'Loading...' : '';
    const b = error ? `Error! ${error.message}`: '';
    const [id,setId]=React.useState({});
   
    return(
        <>
        <Header/>
        <div className="container">
            {a} {b}
            <div className="row ">

             {data?.comics.map((comic)=>{
                return (
                <>
                <Comic  src={comic.url} name={comic.name} price={comic.price} onclick={()=> setId(comic)} />
               
                </>)
             })}
             </div>
        </div>
        <ComicDescription id='desc' name={id.name} src={id.url}/>
        <Footer/>
        </>
    )

}

export default ComicList;