export default function Users({ user, show, setShow }) {
  return (
    <div className="w-[360px] h-[400px] flex flex-col justify-center items-center bg-tertiary sm:bg-white p-[20px] mt-[20px] md:mt-0">
      <p className="my-2 text-center">{user.name}</p>
      <p className="my-2 text-center">{user.lastName}</p>
      <p className="my-2 text-center">{user.module}</p>
      <img className="my-2 h-full object-cover" src={user.photo} />
      {show ? (
        <input
          type="button"
          className="w-full bg-primary text-[violetin] hover:bg-secondary focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
          value="Hide!"
          onClick={() => setShow(!show)}
        />
      ) : (
        <input
          type="button"
          className="w-full bg-primary hover:bg-secondary focus:outline-none text-black font-bold py-2 px-4 rounded cursor-pointer"
          value="Mis talleres"
          onClick={() => setShow(!show)}
        />
      )}
    </div>
  );
}
