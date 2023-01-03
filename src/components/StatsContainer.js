import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from "react-icons/fa";
import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/StatsContainer";
import StateItem from "./StateItem";

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs);
  const defaultStats = [
    {
      title: "pending applications",
      icon: <FaSuitcaseRolling />,
      count: stats.pending || 0,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];
  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StateItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
