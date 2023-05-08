import Sidebar from "../Sidebar/Sidebar";
import { PagewrapperTypes } from "./types";

const Pagewrapper = ({ children }: PagewrapperTypes) => {
  return <Sidebar>{children}</Sidebar>;
};

export default Pagewrapper;
