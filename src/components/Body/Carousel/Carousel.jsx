import Arrow from "./Arrow";
import Card from "./Card/Card";
import { useState, useEffect } from "react";

export default function Carousel({ data }) {
  const [counterFrom, setCounterFrom] = useState(0);
  const [counterTo, setCounterTo] = useState(2);
  const [counterFromMobile, setCounterFromMobile] = useState(0);
  const [counterToMobile, setCounterToMobile] = useState(1);

  // Temporizador para el modo tablet/desktop
  useEffect(() => {
    const tabletDesktopInterval = setInterval(() => {
      next();
    }, 5000); // Cambia el valor en milisegundos según la velocidad que desees
    return () => clearInterval(tabletDesktopInterval);
  }, [counterFrom, counterTo]);

  // Temporizador para el modo mobile
  useEffect(() => {
    const mobileInterval = setInterval(() => {
      nextMobile();
    }, 5000); // Cambia el valor en milisegundos según la velocidad que desees
    return () => clearInterval(mobileInterval);
  }, [counterFromMobile, counterToMobile]);

  function next() {
    if (counterTo >= data.length) {
      setCounterFrom(0);
      setCounterTo(2);
    } else {
      setCounterFrom(counterFrom + 2);
      setCounterTo(counterTo + 2);
    }
  }

  function previous() {
    if (counterFrom <= 0) {
      setCounterFrom(data.length - 2);
      setCounterTo(data.length);
    } else {
      setCounterFrom(counterFrom - 2);
      setCounterTo(counterTo - 2);
    }
  }

  function nextMobile() {
    if (counterToMobile >= data.length) {
      setCounterFromMobile(0);
      setCounterToMobile(1);
    } else {
      setCounterFromMobile(counterFromMobile + 1);
      setCounterToMobile(counterToMobile + 1);
    }
  }

  function previousMobile() {
    if (counterFromMobile <= 0) {
      setCounterFromMobile(data.length - 1);
      setCounterToMobile(data.length);
    } else {
      setCounterFromMobile(counterFromMobile - 1);
      setCounterToMobile(counterToMobile - 1);
    }
  }

  return (
    <>
      {/* Modo Tablet/Desktop */}
      <div className="hidden items-center flex-col gap-4 mx-2 md:flex lg:w-2/3 ">
        <h1
          className="text-5xl font-bold mt-5 text-[#1C1C1C] lowercase"
          id="gothicFont"
        >
          Talleres recomendados
        </h1>
        
        
        <div className="flex flex-wrap items-center justify-center gap-1 md:flex-nowrap lg:justify-between">
        <Arrow
            direction="M15.75 19.5L8.25 12l7.5-7.5"
            className="inline-flex"
            onClick={previous}
          />
          {data.slice(counterFrom, counterTo).map((item, index) => (
            <div
              key={item._id}
              className={`card-transition tablet-desktop-slide-in-right delay-${index}`}
            >
              <Card
                src={item.photo}
                country={item.country}
                city={item.city}
                id={item._id}
              />
            </div>
          ))};
          <Arrow
            direction="M8.25 4.5l7.5 7.5-7.5 7.5"
            className="inline-flex"
            onClick={next}
          />
        </div>
       
          
          
        
      </div>

      {/* Modo Mobile */}
      <div className="flex items-center flex-col gap-2 mb-4 md:hidden lg:w-2/3">
        <h1
          className="font-bold text-[#1C1C1C] lowercase text-4xl md:text-4xl xl:text-5xl"
          id="gothicFont"
        >
          Talleres recomendados
        </h1>
        <div className="flex flex-nowrap p-2 items-center justify-center gap-1 lg:justify-between ">
          <Arrow
            direction="M15.75 19.5L8.25 12l7.5-7.5"
            className="inline-flex"
            onClick={previousMobile}
          />
          {data.slice(counterFromMobile, counterToMobile).map((item, index) => (
            <div
              key={item.city}
              className={`card-transition mobile-slide-in-right delay-${index}`}
            >
              <Card src={item.photo} city={item.city} country={item.country} />
            </div>
          ))}
          <Arrow
            direction="M8.25 4.5l7.5 7.5-7.5 7.5"
            className="inline-flex"
            onClick={nextMobile}
          />
        </div>
      </div>
    </>
  );
}
