import ButtonViewMore from "./ButtonViewMore";
import LocationWorkshops from "./LocationWorkshops";

export default function CardWorkshop({ src, workshop, module, id }) {
  return (
    <>
      <div
        className="flex flex-col w-[360px] h-64 justify-between bg-center bg-no-repeat items-center p-2 bg-cover rounded-xl"
        style={{ backgroundImage: `url(${src})` }}
      >
        <LocationWorkshops workshop={workshop} module={module} />
        <ButtonViewMore id={id} />
      </div>
    </>
  );
}
