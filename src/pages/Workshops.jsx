/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import CardWorkshop from "../components/Body/Carousel/Card/CardWorkshop";
import { useDispatch, useSelector } from "react-redux";
import workshops_actions from "../store/actions/workshops";
import workshops_reducer from "../store/reducers/workshops";

const { read_workshops } = workshops_actions;

export default function Workshops() {
  const [reEffect, setReEffect] = useState(true);
  const text = useRef();
  const workshops_redux = useSelector((store) => store.workshops.workshops);
  const dispatch = useDispatch();

  function handlerFilter() {
    setReEffect(!reEffect);
  }
  useEffect(() => {
    dispatch(
      read_workshops({
        workshops: workshops_reducer,
        text: text.current.value.trim(),
      })
    );
  }, [reEffect]);

  return (
    <div className="flex flex-col min-h-screen">
      <label
        htmlFor=""
        className="flex justify-center items-center mt-10 mb-10"
      >
        <div
          className="flex justify-start w-[60%] items-center border-2 px-2 rounded-xl
           md:w-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            ref={text}
            type="text"
            id="text"
            onKeyUp={handlerFilter}
            className="w-full h-[45px] p-4 border-none outline-none hover:outline-none"
            placeholder="Encuentra tu Taller"
          />
        </div>
      </label>
      <div className="flex flex-col items-center gap-10 justify-center mb-8 md:flex-wrap md:flex-row">
        {workshops_redux.length > 0 ? (
          workshops_redux.map((each) => (
            <>
              <CardWorkshop
                key={each._id}
                src={each.photo}
                workshop={each.workshop}
                module={each.module}
                id={each._id}
              />
            </>
          ))
        ) : (
          <div className="flex flex-col min-h-screen">
            <p className="text-xl text-center font-semibold">
              No encontrado
            </p>
            <p className="text-xl text-center font-semibold">
              No hay coincidencias, inténtalo de nuevo
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
