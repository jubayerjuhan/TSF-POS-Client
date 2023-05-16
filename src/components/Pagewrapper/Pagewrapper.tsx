import Sidebar from "../Sidebar/Sidebar";
import { PagewrapperTypes } from "./types";

const Pagewrapper = ({ children, title }: PagewrapperTypes) => {
  return <Sidebar title={title}>{children}</Sidebar>;
};

export default Pagewrapper;
