// Body.js

import { useSelector, useDispatch } from "react-redux";
import Carousel from "./Carousel/Carousel";
import Content from "./Content/Content";
import PromoImg from "./Content/PromoImg";
import WhatsAppButton from "../WhatsAppButton";
import InstagramButton from "../InstagramButton";
import SpotifyPlaylist from "../SpotifyPlaylist";
import { useEffect } from "react";

import cities_actions from "../../store/actions/cities";

const { read_carousel } = cities_actions;

export default function Body() {
  const carousel_redux = useSelector((store) => store.cities.carousel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(read_carousel({ carousel: carousel_redux }));
  }, []);

  // Ruta de la imagen para el fondo del div principal
  const backgroundMainImage = "/handcloud.png"; // Cambia a la ruta correcta

  return (
    <>
      <div className="lg:flex justify-evenly gap-2 mx-4 my-10">
        <Content />
        <Carousel data={carousel_redux} />
      </div>
      <div>
        <PromoImg />
      </div>
      <div className="flex flex-wrap justify-center gap-10 my-10">
        <WhatsAppButton />
        <InstagramButton />
      </div>
      <div
        className="flex w-[400px] mx-auto  flex-col items-center justify-center lg:flex-row gap-5 sm:gap-2 md:w-[600px] lg:w-[900px] my-5 lg:my-10 p-10 relative"
        style={{
          backgroundImage: `url(${backgroundMainImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-2xl text-center lg:text-left bg-gray-100 bg-opacity-30 p-4 rounded-xl lg:mb-40 " id="navStyle">
          <span className="text-4xl" id="gothicFont">
            música{" "}
          </span>
          para hacerte unas costuras
        </h2>
        <div className="flex items-center justify-center mt-2 lg:mt-0">
          <SpotifyPlaylist backgroundImage={backgroundMainImage} />
        </div>
      </div>
    </>
  );
}
