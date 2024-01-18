import Logo from "./Logo";
import NavBar from "./NavBar/NavBar";
import HamMenu from "./HamMenu/HamMenu";


export default function Header(src) {
/*   src = "/fondonav.png";
 */  return (
    <>
      <div className="flex justify-between w-full bg-gradient-to-r from-[#c3a9f7] to-[#f5d0fe] shadow-md bg-center bg-no-repeat bg-cover h-2/5" style={{ backgroundImage: `url(${src})` }}>
        <Logo/>
        <HamMenu/>
        <NavBar/>
      </div>
    </>
  );
}
