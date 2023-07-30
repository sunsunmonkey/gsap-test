
import { movePage } from "./util/movePage";

interface Iprops {
  select: number;
  setSelect: React.Dispatch<React.SetStateAction<number>>;
}

export default function ChangePage({ select, setSelect }: Iprops) {

  return (
    <div className="ChangePage_main">
      <div
        className="ChangePage_first"
        style={{ color: select === 0 ? "red" : "black" }}
        onClick={() => {
          movePage("#first");
          setSelect(0);
        }}
      >
        first
      </div>
      <div
        className="ChangePage_second"
        style={{ color: select === 1 ? "red" : "black" }}
        onClick={() => {
          movePage("#second");
          setSelect(1);
        }}
      >
        second
      </div>
      <div
        className="ChangePage_third"
        style={{ color: select === 2 ? "red" : "black" }}
        onClick={() => {
          movePage("#third");
          setSelect(2);
        }}
      >
        third
      </div>
    </div>
  );
}
