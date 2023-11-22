import { Link as Anchor } from "react-router-dom";

export default function FooterCities() {
  return (
    <>
      <Anchor
        to="/cities"
        /* className="text-4xl font-semibold text-[black] lowercase rounded-lg px-4 py-2" */
      >
        Talleres
      </Anchor>
    </>
  );
}
