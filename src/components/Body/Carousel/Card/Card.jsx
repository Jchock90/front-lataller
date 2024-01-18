import ButtonViewMore from "./ButtonViewMore";
import LocationCities from "./LocationCities";

export default function Card({ src, city, country, id }) {
  return (
    <>
      <div
        className="flex flex-col w-80 h-[180px] justify-between mx-3 bg-center bg-no-repeat items-center p-2 bg-cover rounded-xl"
        style={{ backgroundImage: `url(${src})` }}
      >
        <LocationCities city={city} country={country} />
        <ButtonViewMore id={id} />
      </div>
    </>
  );
}
