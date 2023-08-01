import { movePage } from "./util/movePage";

interface Iprops {
  select: number;
  setSelect: React.Dispatch<React.SetStateAction<number>>;
}

export default function ChangePage({ select }: Iprops) {
  return (
    <div className="ChangePage_main">
      <div
        className="ChangePage_first"
        style={{ color: select === 0 ? "red" : "black" }}
        onClick={() => {
          movePage("#first");
          console.log("0");
        }}
      >
        first
      </div>
      <div
        className="ChangePage_second"
        style={{ color: select === 1 ? "red" : "black" }}
        onClick={() => {
          movePage("#second");
          console.log("1");
        }}
      >
        second
      </div>
      <div
        className="ChangePage_third"
        style={{ color: select === 2 ? "red" : "black" }}
        onClick={() => {
          movePage("#third");
          console.log("2");
        }}
      >
        third
      </div>

      <div
        className="ChangePage_fourth"
        style={{ color: select === 3 ? "red" : "black" }}
        onClick={() => {
          movePage("#fourth");
          console.log("3");
        }}
      >
        fourth
      </div>
    </div>
  );
}
