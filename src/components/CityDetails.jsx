export default function CityDetails( {city, country}) {
  
  return (
    <>
        <div className="flex self-center">
            <div className="flex flex-col items-center justify-center gap-2">
                <h2 className="text-6xl text-black pt-10 font-bold rounded-xl p-2 lowercase" id="gothicFont">
                    {country}
                </h2>
                <p className="text-3xl text-black font-bold rounded-xl p-2 uppercase" id="navStyle">
                    {city}
                </p>
            </div>
        </div>
    </>
  );
}
