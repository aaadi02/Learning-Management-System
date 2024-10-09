import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col justify-center items-center w-full bg-[1A2238]">
      <h1 className="text-white font-extrabold text-9xl tracking-widest">
        404
      </h1>

      <div className="bg-black text-white rounded rotate-12 absolute text-sm px-2">
        Page not found ...
      </div>

      <button className="mt-5">
        <a className=" text-sm font-medium text-[#FF6A3D] group-active:text-yellow-500 focus:outline-none focus-ring">
          <span onClick={() => navigate(-1)} className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            Go Back
          </span>
        </a>
      </button>
    </div>
  );
}

export default NotFound;