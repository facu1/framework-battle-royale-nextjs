"use client";

import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const DialogContext = createContext({
  dialogState: false,
  setDialogState: (_value: boolean) => {},
});

export const DialogProvider = ({ children }: Props) => {
  const [dialogState, setDialogState] = useState(false);

  return (
    <DialogContext.Provider value={{ dialogState, setDialogState }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialogContext = () => {
  const context = useContext(DialogContext);

  if (context === undefined) {
    throw new Error("useDialogContext must be used within a DialogProvider");
  }

  return context;
};

export default DialogProvider;
