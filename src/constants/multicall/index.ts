import { ChainId } from '@enedex/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.MOONBEAM_TEST]: '0xDb56f2e9369E0D7bD191099125a3f6C370F8ed15',
  [ChainId.BINANCE_TEST]: '0xAf57A911e5BE42c608770d6203D1Fd38A103a82A',
  [ChainId.ROPSTEN]: '0x6d10244C46DD7d6B3eF34f82b9D9e805B9043831',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
