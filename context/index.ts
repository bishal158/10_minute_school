import { LangType } from "@/types/types";
import { createContext } from "react";

type LangContextType = {
    lang: LangType;
    toggleLang: () => void;
};

export const LangContext = createContext<LangContextType | undefined>(
    undefined
);
