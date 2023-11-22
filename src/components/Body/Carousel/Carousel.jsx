import Arrow from "./Arrow";
import Card from "./Card/Card";
import { useState } from "react";

export default function Carousel({ data }) {
  const [counterFrom, setCounterFrom] = useState(0);
  const [counterTo, setCounterTo] = useState(2);
  const [counterFromMobile, setCounterFromMobile] = useState(0);
  const [counterToMobile, setCounterToMobile] = useState(1);

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
      <div className="hidden items-center flex-col gap-10 mx-2 md:mb-10 md:flex lg:w-2/3">
        <h1 className="text-5xl font-bold mt-5 text-[#1C1C1C] lowercase" id="gothicFont">
          Talleres recomendados
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-2 md:flex-nowrap lg:justify-between">
          <Arrow
            direction="M15.75 19.5L8.25 12l7.5-7.5"
            className="inline-flex"
            onClick={previous}
          />
          {data.slice(counterFrom, counterTo).map((item) => (
            <>
              <Card
                key={item._id}
                src={item.photo}
                city={item.city}
                id={item._id}
              />
            </>
          ))}
          <Arrow
            direction="M8.25 4.5l7.5 7.5-7.5 7.5"
            className="inline-flex"
            onClick={next}
          />
        </div>
      </div>
      <div className="flex items-center flex-col gap-10 mb-4 md:hidden lg:w-2/3">
        <h1 className="font-bold text-[#1C1C1C] lowercase text-3xl md:text-4xl xl:text-5xl" id="gothicFont">
          Talleres recomendados
        </h1>
        <div className="flex flex-nowrap p-2 items-center justify-center gap-2 lg:justify-between ">
          <Arrow
            direction="M15.75 19.5L8.25 12l7.5-7.5"
            className="inline-flex"
            onClick={previousMobile}
          />
          {data.slice(counterFromMobile, counterToMobile).map((item) => (
            <Card key={item.city} src={item.photo} city={item.city} />
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
