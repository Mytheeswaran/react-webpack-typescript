const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
})

export function formatCurrency(number: number): string {
  return CURRENCY_FORMATTER.format(number)
}

{
  /* 
    The undefined in the first arg of Intl.NumberFormat(), automatically determine how to printout number based on where you live
  */
}
