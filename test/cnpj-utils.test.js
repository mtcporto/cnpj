import test from 'node:test';
import assert from 'node:assert/strict';
import { formatCNPJ, validateCNPJ } from '../js/cnpj-utils.js';

test('valida CNPJ válido e rejeita inválidos', () => {
  assert.equal(validateCNPJ('11.222.333/0001-81'), true);
  assert.equal(validateCNPJ('11.222.333/0001-80'), false);
  assert.equal(validateCNPJ('11.111.111/1111-11'), false);
});

test('formata CNPJ removendo caracteres não numéricos', () => {
  assert.equal(formatCNPJ('11222333000181'), '11.222.333/0001-81');
});
