import { SerializedFarmConfig } from '@pancakeswap/farms'
import { goerliArbiTestnetTokens } from '@pancakeswap/tokens'

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'WETH-USDT LP',
    lpAddress: '0xCF71B33E5F85868d495A2Ea8CD7a11a45AF833e8',
    token: goerliArbiTestnetTokens.weth,
    quoteToken: goerliArbiTestnetTokens.usdt,
  },
  {
    pid: 1,
    lpSymbol: 'BUSD-USDT LP',
    lpAddress: '0xF8ee8bB5D1149f29054904Eef2B21DDeF7EdbE23',
    token: goerliArbiTestnetTokens.busd,
    quoteToken: goerliArbiTestnetTokens.usdt,
  },
  {
    pid: 2,
    lpSymbol: 'WETH-BUSD LP',
    lpAddress: '0x21e8A6339eEdD1559221d6d9D44Af6d81e999E4B',
    token: goerliArbiTestnetTokens.weth,
    quoteToken: goerliArbiTestnetTokens.busd,
  },
]

export default farms
