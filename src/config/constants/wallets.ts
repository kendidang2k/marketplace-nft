import { ConnectorNames } from '@diviner-protocol/uikit'
import { ConfigWallets } from 'config/constants/types'

export const connectors: ConfigWallets[] = [
  {
    title: 'Metamask',
    icon: 'metamask.png',
    connectorId: ConnectorNames.Injected,
  },
  {
    title: 'TrustWallet',
    icon: 'trust.png',
    connectorId: ConnectorNames.WalletConnect,
  },
  {
    title: 'WalletConnect',
    icon: 'walletconnect.png',
    connectorId: ConnectorNames.WalletConnect,
  },
  {
    title: 'BinanceWallet',
    icon: 'BSC.png',
    connectorId: ConnectorNames.BSC,
  },
]
