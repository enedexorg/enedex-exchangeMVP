import { Currency, BASE_CURRENCY, Token } from '@enedex/sdk'

export function currencyId(currency: Currency): string {
  if (currency === BASE_CURRENCY[currency.chainId]) return currency.symbol
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
