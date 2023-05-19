import Sidebar from "../Sidebar/Sidebar";
import { PagewrapperTypes } from "./types";

const Pagewrapper = ({
  children,
  title,
  hideBar = false,
}: PagewrapperTypes) => {
  return (
    <Sidebar hideBar={hideBar} title={title}>
      {children}
    </Sidebar>
  );
};

export default Pagewrapper;
