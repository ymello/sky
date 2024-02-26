import skyLightDefaultRed from "../assets/sky-light-default-red.svg";

export function Loading() {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-[#fffffffc] flex flex-col items-center justify-center"
    >
      <img
        src={skyLightDefaultRed}
        alt=""
        className="w-[176px] h-[66px] animate-pulse"
      />
    </div>
  );
}