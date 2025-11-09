jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import WatalappanSVG from '../assets/WatalappanSVG';

export default function WatalappanLanding() {
const [dark, setDark] = useState(false);

useEffect(() => {
document.documentElement.classList.toggle('dark', dark);
}, [dark]);

return (
<div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 dark:from-slate-900 dark:to-slate-800">
<nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex gap-3 items-center">
<div className="w-10 h-10 bg-gradient-to-br from-amber-300 to-amber-500 rounded-2xl flex items-center justify-center text-white font-bold shadow">W</div>
<div>
<h1 className="text-lg font-semibold text-amber-900 dark:text-amber-100">Watalappan</h1>
<p className="text-xs text-amber-700/80 dark:text-amber-200/70">Sri Lanka’s Silky Coconut Jaggery Custard</p>
</div>
</div>

<button
onClick={() => setDark(!dark)}
className="p-2 bg-white/60 dark:bg-black/40 rounded-lg border border-white/30 dark:border-black/30"
>
{dark ? <Sun size={18} /> : <Moon size={18} />}
</button>
</nav>

<header className="max-w-6xl mx-auto p-6 text-center">
<motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl font-bold text-amber-900 dark:text-amber-100">
Watalappan — Liquid Gold Dessert
</motion.h2>
<p className="mt-4 text-amber-800/90 dark:text-amber-200/80 max-w-2xl mx-auto">
A creamy, caramel-rich pudding that captures the soul of Sri Lanka — made with coconut milk, jaggery, and fragrant spices.
</p>

<div className="mt-10 flex justify-center">
<WatalappanSVG />
</div>
</header>
</div>
);
}
