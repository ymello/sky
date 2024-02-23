import {
  FaAdjust,
  FaBars,
  FaFont,
  FaMinus,
  FaPlay,
  FaPlus,
  FaSearch,
  FaUser,
  FaUserAlt,
} from "react-icons/fa";
import skyLightDefaultRed from "../assets/sky-light-default-red.svg";

export function Navbar() {
  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between  py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 bg-[#fafaff] lg:py-4">
      <div className="flex container items-center justify-between">
        <div className="flex gap-4 items-center">
          <img src={skyLightDefaultRed} alt="" className="w-[88px] h-[33px]" />
          <div className="hidden lg:flex items-center gap-12">
            <div className="flex items-center gap-5">
              <FaUserAlt size={16} />
              <FaAdjust size={16} />
              <FaFont size={16} />
              <FaPlus size={16} />
              <FaMinus size={16} />
            </div>
            <div className="flex items-center gap-1">
              <FaPlay size={16} />
              <p className="font-bold text-[#00000099]">Play</p>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-1">
            <FaUser size={16} />
            <p className="font-bold text-[#00000099]">Entrar</p>
          </div>
          <FaSearch size={16} />
        </div>

        <div className="block sm:hiidden">
          <FaBars size={16} />
        </div>
      </div>
    </nav>
  );
}
