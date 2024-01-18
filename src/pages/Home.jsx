import Body from "../components/Body/Body";
import Hero from "../components/Header/Hero"

export default function Home() {
  return (
    <>
    <div>
        <Hero/>
      </div>
      <div className="min-h-screen flex flex-col justify-center">
        <Body />
      </div>
    </>
  );
}
