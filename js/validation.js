export const digitsOnly = value => String(value ?? '').replace(/\D/g, '').slice(0, 14);
export const formatCNPJ = value => digitsOnly(value).replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
export function validateCNPJ(value) { const c = digitsOnly(value); if (c.length !== 14 || /^(\d)\1+$/.test(c)) return false; const digit = size => { let sum=0, weight=size-7; for(let i=0;i<size;i++){sum += Number(c[i])*weight; weight = weight===2?9:weight-1;} return sum%11<2?0:11-sum%11; }; return digit(12)===Number(c[12]) && digit(13)===Number(c[13]); }
