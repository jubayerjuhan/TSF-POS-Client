import React, { SetStateAction } from "react";

export interface BranchSelectorProps {
  setBranchId: React.Dispatch<SetStateAction<string>>;
}
