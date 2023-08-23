import { type } from "os";
import {
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
  memo,
  FormEvent,
} from "react";

const SignAction = {
  "+": (a: number, b: number, ansver: number) => a + b === ansver,
  "-": (a: number, b: number, ansver: number) => a - b === ansver,
  "*": (a: number, b: number, ansver: number) => a * b === ansver,
  "/": (a: number, b: number, ansver: number) => a / b === ansver,
};

export type Sign = keyof typeof SignAction;

export interface Example {
  a: number;
  b: number;
  sign: Sign;
  current?: number;
}

export interface MathGameProps {
  examples: Example[];
  maxTime: number;
  onWin: (result: Example[]) => void;
  onLos: (result: Example[]) => void;
}

export const MathGame: FC<MathGameProps> = memo(
  ({ examples, maxTime, onLos, onWin }) => {
    const examplesLeft = useRef([...examples]);
    const examplesResoult = useRef<Example[]>([]);
    const firstRender = useRef(true);
    const [time, setTime] = useState(0);
    const [curruntEx, setCurrentEx] = useState<Example | undefined>();
    const [value, setValue] = useState("");
    const mode = useRef<"Game" | "Lost" | "Win">("Game");

    const getRandomEx = useCallback(() => {
      if (!examplesLeft.current.length) {
        console.log("ты победил", examplesResoult.current);
        onWin(examplesResoult.current);
        mode.current = "Win";
        return;
      }

      const randIndex = Math.floor(Math.random() * examplesLeft.current.length);
      setCurrentEx({ ...examplesLeft.current[randIndex] });
      examplesLeft.current.splice(randIndex, 1);
      console.log("random");
    }, []);

    useEffect(() => {
      if (time > maxTime && mode.current === "Game") {
        onLos([
          ...examplesLeft.current,
          ...examplesResoult.current,
          ...(curruntEx ? [curruntEx] : []),
        ]);
        mode.current = "Lost";
      }
      const id = setInterval(() => setTime(time + 1), 1000);
      return () => {
        clearInterval(id);
      };
    }, [time, maxTime, onLos, curruntEx]);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    const checkExample = useCallback(
      (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("checkExample", event.currentTarget);
        if (!curruntEx) {
          return;
        }
        if (
          SignAction[curruntEx.sign](curruntEx.a, curruntEx.b, Number(value))
        ) {
          if (curruntEx.current === 0) {
            examplesLeft.current.push({
              ...curruntEx,
              current: undefined,
            });
          } else {
            examplesResoult.current.push({
              ...curruntEx,
              current: (curruntEx.current || 0) + 1,
            });
          }

          getRandomEx();
          setValue("");
          return;
        }
        setValue("");
        setCurrentEx((prev) => (prev ? { ...prev, current: 0 } : undefined));
      },
      [curruntEx, getRandomEx, value]
    );
    useEffect(() => {
      if (firstRender.current) {
        firstRender.current = false;
        getRandomEx();
      }
    }, [getRandomEx]);

    if (mode.current === "Win") {
      return <div>Вы победили</div>;
    }
    if (mode.current === "Lost") {
      return <div>Вы проиграли. Учи уроки</div>;
    }

    return (
      <>
        <form onSubmit={checkExample}>
          <div>
            {time}/{maxTime}
          </div>
          {`${curruntEx?.a} ${curruntEx?.sign} ${curruntEx?.b} = `}
          <input id="ans" type="text" value={value} onChange={onChange} />
        </form>
      </>
    );
  }
);
