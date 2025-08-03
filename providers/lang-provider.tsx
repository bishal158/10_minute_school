'use client';

import { LangType } from '@/types/types';
import { useState, ReactNode, useEffect } from 'react';
import { LangContext } from '@/context';


export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<LangType>('en');

    // Initialize from localStorage or default
    useEffect(() => {
        const savedLang = localStorage.getItem('lang') as LangType | null;
        if (savedLang) setLang(savedLang);
    }, []);

    const toggleLang = () => {
        const newLang = lang === 'en' ? 'bn' : 'en';
        setLang(newLang);
        localStorage.setItem('lang', newLang);
    };

    return (
        <LangContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LangContext.Provider>
    );
}

export default LanguageProvider;