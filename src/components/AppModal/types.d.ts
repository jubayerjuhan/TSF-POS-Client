import React from "react";

export interface AppModalTypes {
  title: string;
  description: string;
  handleConfirm: () => void;
  handleCancel: () => void;
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean | undefined>>;
}
