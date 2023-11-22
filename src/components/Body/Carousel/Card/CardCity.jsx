import ButtonViewMore from "./ButtonViewMore";
import LocationCities from "./LocationCities";

export default function CardCity({ src, city, country, id }) {
  return (
    <>
      <div
        className="flex flex-col w-[80%] h-64 justify-between bg-center bg-no-repeat items-center p-2 bg-cover rounded-md md:w-1/3 md:h-64 lg:w-1/4 lg:h-64"
        style={{ backgroundImage: `url(${src})` }}
      >
        <LocationCities city={city} country={country} />
        <ButtonViewMore id={id} />
      </div>
    </>
  );
}
