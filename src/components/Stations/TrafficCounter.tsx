import CountUp from "react-countup";
import { useState } from "react";

interface ITrafficCounter {
  trafficAmount: number;
  counterKey: number;
}

const TrafficCounter = ({ trafficAmount, counterKey }: ITrafficCounter) => {
  const [countReady, setCountReady] = useState<boolean>(false);

  return (
    <>
      <p className="traffic-amount">
        <CountUp
          start={Math.floor(trafficAmount * 0.8)}
          end={trafficAmount}
          duration={1}
          onEnd={() => {
            setCountReady(true);
          }}
        />
      </p>
      {countReady && <div data-testid={`${counterKey} count-ready`} />}
    </>
  );
};

export default TrafficCounter;
