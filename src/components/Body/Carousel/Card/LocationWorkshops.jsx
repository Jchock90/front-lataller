// eslint-disable-next-line react/prop-types
export default function LocationWorkshops({ workshop, module }) {
  return (
    <>
      <a className="flex flex-col gap-2 mt-2 mx-2">
        <h3 className="bg-white text-3xl text-black text-center w-60 tracking-widest px-1 rounded-xl lowercase  font-bold" id="gothicFont">
          {module}
        </h3>
        <h3 className="bg-violetin text-white text-center text-lg font-semibold  px-2 w-60 uppercase  rounded-xl">
          {workshop}
        </h3>
      </a>
    </>
  );
}
