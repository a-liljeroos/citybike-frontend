import CountUp from "react-countup";

interface ITrafficCounter {
  trafficAmount: number;
}

const TrafficCounter = ({ trafficAmount }: ITrafficCounter) => {
  return (
    <p className="traffic-amount">
      <CountUp
        start={Math.floor(trafficAmount * 0.8)}
        end={trafficAmount}
        duration={1}
      />
    </p>
  );
};

export default TrafficCounter;
