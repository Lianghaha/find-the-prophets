import React, { useRef } from "react"
import "./TopProphets.css"
import ProphetCard from "./ProphetCard/ProphetCard"
//Antd
import { Carousel } from "antd"
//Icons
import { GoChevronRight, GoChevronLeft } from "react-icons/go"
//Button
import Button from "@material-ui/core/Button"

//Antd Carousel Settings
const settings = {
   arrows: false,
   dots: {className: "ProphetsDots"},
   infinite: false,
   speed: 1200,
   slidesToShow: 6,
   slidesToScroll: 6,
   initialSlide: 0,
   draggable: true,
   responsive: [
      {
         breakpoint: 2200,
         settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
         },
      },
      {
         breakpoint: 1750,
         settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
         },
      },
      {
         breakpoint: 1350,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
         },
      },
      {
         breakpoint: 1000,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            speed: 700,
         },
      },
      {
         breakpoint: 700,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
         },
      },
   ],
}

function TopProphets(props) {
   const carouselRef = useRef()

   function CarouselNext() {
      carouselRef.current.next()
   }
   function CarouselPrev() {
      carouselRef.current.prev()
   }

   return (
      <div className="TopProphets">
         <div className="TitleAndButtons">
            <h2>Top Prophets</h2>
            <div className="TitleButtons">
               <Button onClick={CarouselPrev} variant="outlined">
                  <GoChevronLeft color="white" size="1.8em" />
               </Button>
               <Button onClick={CarouselNext} variant="outlined">
                  <GoChevronRight color="white" size="1.8em" />
               </Button>
               <Button variant="outlined">ALL</Button>
            </div>
         </div>

         <div className="ProphetsList">
            <Carousel ref={carouselRef} {...settings}>
               {props.data.map((data) => {
                  return (
                     <div className="Card">
                        <ProphetCard data={data} />
                     </div>
                  )
               })}
            </Carousel>
         </div>
      </div>
   )
}

export default TopProphets
