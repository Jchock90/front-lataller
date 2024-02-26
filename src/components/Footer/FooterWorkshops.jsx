import { Link as Anchor } from "react-router-dom";

export default function FooterWorkshops() {
  return (
    <>
      <Anchor
        to="/workshops"
        /* className="text-4xl font-semibold text-[black] lowercase rounded-xl px-4 py-2" */
      >
        Talleres
      </Anchor>
    </>
  );
}
