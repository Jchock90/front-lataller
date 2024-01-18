import { Link as Anchor } from "react-router-dom";

export default function FooterCities() {
  return (
    <>
      <Anchor
        to="/guide"
        /* className="text-4xl font-semibold text-[black] lowercase rounded-xl px-4 py-2" */
      >
        Guía de medidas
      </Anchor>
    </>
  );
}
