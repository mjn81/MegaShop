import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft , faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {  ButtonOutline } from "../core";
import { useEffect } from "react";



const carouselFunction = ()=>{
  const track = document.querySelector(".track-carousel");
  const slides = track.querySelectorAll("img");
  const boundary = slides[0].getBoundingClientRect().width;
  const setSlidePos = (slide,index)=>{
    slide.style.left = `${index * boundary}px`;
  }
  slides.forEach(setSlidePos);
}
const moveToSlide = (track, current , target)=>{
  if(target==null){
    return;
  }
  track.style.transform = 'translateX(-' +target.style.left + ')'; 
  current.classList.remove('active');
  target.classList.add('active');
}
const getElements = ()=>{
  const track = document.querySelector('.track-carousel');
  const current = track.querySelector('.active');
  return [track , current];
}

const Carousel = () => {
      const tmpCarousel = [
        {
            "id":1,
            "img":"https://via.placeholder.com/1000x800",
            "path":"/adsss",
            "title":"img1",
            "discription":"Hello world",
        },
        {
            "id":2,
            "img":"https://via.placeholder.com/2000x500",
            "path":"/adsss",
            "title":"img2",
            "discription":"The first component",
        },
        {
            "id":3,
            "img":"https://via.placeholder.com/3000x500",
            "path":"/adsss",
            "title":"img3",
            "discription":"The second component",
        },
        {
            "id":4,
            "img":"https://via.placeholder.com/3000x1000",
            "path":"/adsss",
            "title":"img4",
            "discription":"The third component",
        },
      ];
 
      //TODO: carousel auto movement + improvement + ...
      // TODO: the api functions will go here


      //-----
      
      // Button Handlers 
      const onNxtClickHandler = ()=>{
        const [track , current] = getElements();
        const next = current.nextElementSibling;
        moveToSlide(track , current , next);

      }
      const onPreClickHandler = ()=>{
        const [track , current] = getElements();
        const pre = current.previousElementSibling;
        moveToSlide(track , current , pre);
      }
      
      useEffect(()=>{
        window.addEventListener('resize' , ()=>{
          setTimeout(carouselFunction , 200);
        });
        const refrence = setTimeout(carouselFunction , 2000);
        return ()=>{
          clearTimeout(refrence);
        }
      },[]);
     
    return (
      <div className="rounded-lg overflow-hidden m-auto h-full relative">
          <div className="track-carousel transition-transform duration-200 ease-out relative h-full">
          {tmpCarousel.map((slide,i)=>(
            <img key={slide.id} src={slide.img} alt={slide.title}
              className={`w-full absolute object-cover ${i===0 ? 'active' : ''}`}
            />
          ))}
          </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 ">
          <ButtonOutline onSubmit={onPreClickHandler}>
            <FontAwesomeIcon icon={faChevronLeft} className="text-4xl text-white" />
          </ButtonOutline>
        </div>
        <div className="absolute left-full top-1/2 -translate-y-1/2 z-20 -translate-x-full">
          <ButtonOutline onSubmit={onNxtClickHandler}>
            <FontAwesomeIcon icon={faChevronRight} className="text-4xl text-white" />
          </ButtonOutline>
        </div>

      </div>    
    );
}
 
export default Carousel;