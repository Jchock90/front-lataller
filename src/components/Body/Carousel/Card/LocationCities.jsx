// eslint-disable-next-line react/prop-types
export default function LocationCities({ city, country }) {
  return (
    <>
      <a className="flex flex-col gap-2 mt-2 mx-2">
        <h3 className="bg-white text-3xl text-black text-center w-60 tracking-widest px-1 rounded-md lowercase border-2 border-black font-bold" id="gothicFont">
          {country}
        </h3>
        <h3 className="bg-black text-white text-center text-lg  px-2 w-60 uppercase border-2 rounded-md">
          {city}
        </h3>
      </a>
    </>
  );
}
