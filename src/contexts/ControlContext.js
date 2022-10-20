import { createContext } from "react";

export const ControlContext = createContext({
    controlValue: 0,
    setValue: () => { }
});
