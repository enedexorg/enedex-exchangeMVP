import { ChainId, Currency, CurrencyAmount, BASE_CURRENCY, Token, TokenAmount, WRAPPED } from '@enedex/sdk'

export function wrappedCurrency(currency: Currency | undefined, chainId: ChainId | undefined): Token | undefined {
  return chainId && currency === BASE_CURRENCY[chainId]
    ? WRAPPED[chainId]
    : currency instanceof Token
    ? currency
    : undefined
}

export function wrappedCurrencyAmount(
  currencyAmount: CurrencyAmount | undefined,
  chainId: ChainId | undefined
): TokenAmount | undefined {
  const token = currencyAmount && chainId ? wrappedCurrency(currencyAmount.currency, chainId) : undefined
  return token && currencyAmount ? new TokenAmount(token, currencyAmount.raw) : undefined
}

export function unwrappedToken(token: Token): Currency {
  if (token.equals(WRAPPED[token.chainId])) return BASE_CURRENCY[token.chainId]
  return token
}
