import type { NextPage } from "next";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CounterOn: NextPage<{
  number: number;
  content: string;
  message: string;
}> = (props) => {
  const [counterOn, SetCounterOn] = useState(false);

  const Test = ScrollTrigger as any;
  return (
    <Test
      onEnter={() => {
        SetCounterOn(true);
      }}
      onExit={() => {
        SetCounterOn(false);
      }}
    >
      {counterOn && (
        <div>
          <div>
            <CountUp start={0} end={props.number} duration={2} />
            {props.content}
          </div>
          <p>{props.message}</p>
        </div>
      )}
    </Test>
  );
};

export default CounterOn;
