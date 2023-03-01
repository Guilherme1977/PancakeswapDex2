import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDC_GOERLI_ARBI, USDT_GOERLI_ARBI, CAKE_GOERLI_ARBI, BUSD_GOERLI_ARBI } from './common'

export const goerliArbiTestnetTokens = {
  weth: WETH9[ChainId.GOERLI_ARBI],
  celr: new Token(
    ChainId.GOERLI_ARBI,
    '0x33d6f54e0C252623bc7541FE80860a88a1e4C40b',
    18,
    'Cake',
    'PancakeSwap Token',
    '',
  ),
  leet: new Token(ChainId.GOERLI_ARBI, '0x2850DfcC368ee72d7214E394F6a92BAE3a300286', 18, 'SYRUP', 'SyrupBar Token', ''),
  usdc: USDC_GOERLI_ARBI,
  usdt: USDT_GOERLI_ARBI,
  busd: BUSD_GOERLI_ARBI,
  cake: CAKE_GOERLI_ARBI,
}
