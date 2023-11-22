import ButtonViewMore from "./ButtonViewMore";
import Location from "./Location";

export default function Card({ src, city, id }) {
  return (
    <>
      <div
        className="flex flex-col justify-between w-80 h-40 bg-center bg-no-repeat bg-cover rounded-md md:w-full"
        style={{ backgroundImage: `url(${src})` }}
        id={id}
      >
        <Location city={city} />
        <ButtonViewMore id={id} />
      </div>
    </>
  );
}
