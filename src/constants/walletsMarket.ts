import {ConnectorNames} from '@diviner-protocol/uikit'
import {ConfigWallets} from 'config/constants/types'

export const connectorsMarket: ConfigWallets[] = [
  {
    title: 'Metamask',
    icon: 'metamask.png',
    connectorId: ConnectorNames.Injected,
  },
  {
    title: 'Trust Wallet',
    icon: 'trust-wallet.png',
    connectorId: ConnectorNames.WalletConnect,
  },
  {
    title: 'Wallet Connect',
    icon: 'wallet-connect.png',
    connectorId: ConnectorNames.WalletConnect,
  },
  {
    title: 'Binance Wallet',
    icon: 'binance-wallet.png',
    connectorId: ConnectorNames.BSC,
  },
]
