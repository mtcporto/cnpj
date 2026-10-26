const KEY='historicoConsultas';
export function readHistory(){try{const value=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(value)?value:[]}catch{return[]}}
export function saveHistory(cnpj,nome){const history=readHistory().filter(item=>item.cnpj!==cnpj);history.unshift({cnpj,nome:nome||'Empresa',date:new Date().toISOString()});localStorage.setItem(KEY,JSON.stringify(history.slice(0,10)));return history.slice(0,10)}
export function getTheme(){return localStorage.getItem('theme')||'light'}
export function setTheme(theme){localStorage.setItem('theme',theme)}
