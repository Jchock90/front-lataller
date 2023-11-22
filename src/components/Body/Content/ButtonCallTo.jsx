import { Link as Anchor } from "react-router-dom";

export default function ButtonCallTo() {
  return (
    <>
      <Anchor
        to="/blog"
        className="flex py-4 px-4 justify-center text-center mb-5 lowercase gap-1 items-center bg-[#c3a9f7] 
        rounded-full text-2xl font-thin text-white w-1/1 h-5 lg:text-1xl lg:w-1/1" id="gothicFont"
      >
        Últimos posts
      </Anchor>
    </>
  );
}
