const saveLS = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const loadLS = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
function clsx(...xs){ return xs.filter(Boolean).join(' '); }
