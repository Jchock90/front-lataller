import ButtonViewMore from "./ButtonViewMore";
import LocationWorkshops from "./LocationWorkshops";

export default function Card({ src, workshop, module, id }) {
  return (
    <>
      <div
        className="flex flex-col w-80 h-[180px] justify-between mx-3 bg-center bg-no-repeat items-center p-2 bg-cover rounded-xl"
        style={{ backgroundImage: `url(${src})` }}
      >
        <LocationWorkshops workshop={workshop} module={module} />
        <ButtonViewMore id={id} />
      </div>
    </>
  );
}
