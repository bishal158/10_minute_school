"use client";
import { useLang } from "@/hooks/useLang";
import React from "react";
import { HiOutlineGlobeAlt } from "react-icons/hi"; // Importing globe icon

const LanguageToggle = () => {
    const { lang, toggleLang } = useLang();

    return (
        <button
            className="border rounded-sm px-2 py-0.5 shadow flex justify-center hover:bg-slate-50 transition-colors ease-in-out items-center gap-2 text-base bg-white cursor-pointer text-black font-medium capitalize"
            onClick={toggleLang}
            aria-label={lang === "en" ? "Switch to Bangla" : "Switch to English"}
        >
            <HiOutlineGlobeAlt />
            <span>{lang === "en" ? "বাং" : "EN"}</span>
        </button>
    );
};

export default LanguageToggle;