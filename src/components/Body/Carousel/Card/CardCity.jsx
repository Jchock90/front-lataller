import ButtonViewMore from "./ButtonViewMore";
import LocationCities from "./LocationCities";

export default function CardCity({ src, city, country, id }) {
  return (
    <>
      <div
        className="flex flex-col w-[360px] h-64 justify-between bg-center bg-no-repeat items-center p-2 bg-cover rounded-xl"
        style={{ backgroundImage: `url(${src})` }}
      >
        <LocationCities city={city} country={country} />
        <ButtonViewMore id={id} />
      </div>
    </>
  );
}
