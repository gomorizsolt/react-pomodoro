import React, { useEffect, useReducer } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { FiPlus, FiMinus } from "react-icons/fi";
import { RiRestartLine } from "react-icons/ri";
import Wrapper from "./components/Wrapper";
import Button from "./components/Button";

const BASE_POMODORO_MINUTES = 25;
const BREAK_MINUTES = 5;

const padPomodoroTimer = (value: number) => value.toString().padStart(2, "0");

type State = {
  timeLeft: number;
  isActive: boolean;
  intervalId: number;
};

type Action =
  | { type: "start"; payload: { intervalId: number } }
  | { type: "increase-session" }
  | { type: "decrease-session" }
  | { type: "decrease-timer" }
  | { type: "stop" }
  | { type: "restart" };

const assertNever = (x: never): never => {
  throw new Error("Not all variants of the discriminated union all covered.");
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "start": {
      return {
        ...state,
        isActive: true,
        intervalId: action.payload.intervalId,
      };
    }
    case "decrease-timer": {
      if (state.timeLeft >= 1) {
        return {
          ...state,
          timeLeft: state.timeLeft - 1,
        };
      }

      clearInterval(state.intervalId);

      return {
        ...state,
        isActive: false,
        timeLeft: BREAK_MINUTES * 60,
      };
    }
    case "stop": {
      clearInterval(state.intervalId);

      return {
        ...state,
        isActive: false,
      };
    }
    case "restart": {
      clearInterval(state.intervalId);

      return {
        ...state,
        isActive: false,
        timeLeft: BASE_POMODORO_MINUTES * 60,
      };
    }
    case "increase-session": {
      return {
        ...state,
        timeLeft: state.timeLeft + BASE_POMODORO_MINUTES * 60,
      };
    }
    case "decrease-session": {
      const minutes = Math.floor(state.timeLeft / 60);

      if (minutes >= 25) {
        return {
          ...state,
          timeLeft: state.timeLeft - BASE_POMODORO_MINUTES * 60,
        };
      }

      return {
        ...state,
      };
    }
    default:
      return assertNever(action);
  }
};

const Pomodoro: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    timeLeft: BASE_POMODORO_MINUTES * 60,
    isActive: false,
    intervalId: -1,
  });

  const minutes = padPomodoroTimer(Math.floor(state.timeLeft / 60));
  const seconds = padPomodoroTimer(state.timeLeft - Number(minutes) * 60);

  const startPomodoro = () => {
    const intervalId = window.setInterval(() => {
      dispatch({ type: "decrease-timer" });
    }, 1000);

    dispatch({ type: "start", payload: { intervalId } });
  };

  const stopPomodoro = () => {
    dispatch({ type: "stop" });
  };

  const restartPomodoro = () => {
    dispatch({ type: "restart" });
  };

  const increasePomodoro = () => {
    dispatch({ type: "increase-session" });
  };

  const decreasePomodoro = () => {
    dispatch({ type: "decrease-session" });
  };

  useEffect(() => {
    return () => {
      clearInterval(state.intervalId);
    };
  }, [state.intervalId]);

  return (
    <Wrapper>
      <div className="text-6xl font-semibold">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="grid grid-cols-5 col-gap-2">
        <Button
          title="Start session"
          onClick={startPomodoro}
          disabled={state.isActive}
        >
          <BsFillPlayFill />
        </Button>
        <Button
          title="Stop session"
          onClick={stopPomodoro}
          disabled={!state.isActive}
        >
          <BsPauseFill />
        </Button>
        <Button title="Restart session" onClick={restartPomodoro}>
          <RiRestartLine />
        </Button>
        <Button
          title="Increase the pomodoro with 25 minutes"
          onClick={increasePomodoro}
        >
          <FiPlus />
        </Button>
        <Button
          title="Decrease the pomodoro with 25 minutes"
          onClick={decreasePomodoro}
          disabled={Number(minutes) < 25}
        >
          <FiMinus />
        </Button>
      </div>
    </Wrapper>
  );
};

export default Pomodoro;
