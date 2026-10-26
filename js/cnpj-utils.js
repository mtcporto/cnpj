export function digitsOnly(value) {
  return String(value ?? '').replace(/\D/g, '').slice(0, 14);
}

export function formatCNPJ(value) {
  const digits = digitsOnly(value);
  return digits.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
}

export function validateCNPJ(value) {
  const cnpj = digitsOnly(value);
  if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;
  const check = (length) => {
    let sum = 0;
    let weight = length - 7;
    for (let i = 0; i < length; i += 1) {
      sum += Number(cnpj[i]) * weight;
      weight = weight === 2 ? 9 : weight - 1;
    }
    const digit = (sum % 11 < 2) ? 0 : 11 - (sum % 11);
    return digit;
  };
  return check(12) === Number(cnpj[12]) && check(13) === Number(cnpj[13]);
}
