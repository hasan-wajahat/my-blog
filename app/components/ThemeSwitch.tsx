'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaRegSun, FaMoon } from 'react-icons/fa6';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button className="ml-auto p-0" onClick={toggleTheme}>
      {theme === 'dark' ? (
        <FaRegSun size={24} className="fill-yellow-500 hover:fill-yellow-400" />
      ) : (
        <FaMoon size={24} className="fill-slate-600 hover:fill-slate-500" />
      )}
    </button>
  );
};

export default ThemeSwitch;
