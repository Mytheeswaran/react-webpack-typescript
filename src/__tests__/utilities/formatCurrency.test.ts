import { formatCurrency } from '../../utilities/formatCurrency'

test('format numbers to USD currency', () => {
  const formattedCurrency = formatCurrency(14000)
  expect(formattedCurrency).toContain('$')
})
