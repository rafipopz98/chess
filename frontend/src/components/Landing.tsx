import "./style.css";
import Button from "./Button";
import { useSocket } from "../hooks/useSocket";

export const INTI_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";

const Landing = () => {
  const socket = useSocket();

  if (!socket) return <div>connectingg......</div>;
  return (
    // body
    <div className="landing">
      {/* //logo */}
      <div>
        <img
          className="w-11 absolute"
          style={{ left: "5%", top: "1%", filter: "invert(1)" }}
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      {/* navbar */}
      <div className="p-4 pb-48 flex justify-center items-center">
        <a
          className="text-black text-2xl no-underline hover:text-slate-800 hover:scale-90"
          style={{ transition: "0.5s", margin: "0 25px" }}
          href="#"
        >
          Home
        </a>
        <a
          className="text-black text-2xl no-underline hover:text-slate-800 hover:scale-90"
          style={{ transition: "0.5s", margin: "0 25px" }}
          href="#"
        >
          About
        </a>
        <a
          className="text-black text-2xl no-underline hover:text-slate-800 hover:scale-90"
          style={{ transition: "0.5s", margin: "0 25px" }}
          href="#"
        >
          Contact Us
        </a>
      </div>

      <h1 className="text-8xl font-bold mb-5 mt-56 xl:mt-96 text-white">
        The Chess Game
      </h1>
      <Button
        onClick={() =>
          socket.send(
            JSON.stringify({
              type: INTI_GAME,
            })
          )
        }
      >
        Play Now
      </Button>

      <div className="mt-5 fixed bottom-5 left-1/2 transform -translate-x-1/2 space-x-4 text-2xl">
        <a className="text-black no-underline hover:text-slate-700" href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a className="text-black no-underline hover:text-slate-700" href="#">
          <i className="fab fa-github"></i>
        </a>
        <a className="text-black no-underline hover:text-slate-700" href="#">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Landing;
