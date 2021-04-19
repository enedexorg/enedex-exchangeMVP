import { CurrencyAmount, BASE_CURRENCY, JSBI } from '@enedex/sdk'
import { MIN_ETH } from '../constants'

/**
 * Given some token amount, return the max that can be spent of it
 * @param currencyAmount to return max of
 */
export function maxAmountSpend(currencyAmount?: CurrencyAmount): CurrencyAmount | undefined {
  if (!currencyAmount) return undefined
  if (currencyAmount.currency === BASE_CURRENCY[currencyAmount.currency.chainId]) {
    if (JSBI.greaterThan(currencyAmount.raw, MIN_ETH)) {
      return CurrencyAmount.base(currencyAmount.currency.chainId, JSBI.subtract(currencyAmount.raw, MIN_ETH))
    } else {
      return CurrencyAmount.base(currencyAmount.currency.chainId, JSBI.BigInt(0))
    }
  }
  return currencyAmount
}
