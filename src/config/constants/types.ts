
export enum Round {
  MONDAY = "monday",
  WEDNESDAY = "wednesday",
  FRIDAY = "friday",
}

export interface StakingConfig {
  title: string;
  poolId: number;
}

export interface Address {
  97?: string;
  56: string;
}
export interface Token {
  symbol: string;
  address?: Address;
  decimals?: number;
  projectLink?: string;
}

export type Images = {
  lg: string;
  md: string;
  sm: string;
  ipfs?: string;
};

export type NftImages = {
  blur?: string;
} & Images;

export type NftVideo = {
  webm: string;
  mp4: string;
};

export type Nft = {
  name: string;
  description: string;
  images: NftImages;
  sortOrder: number;
  bunnyId: number;
  video?: NftVideo;
};

export type TeamImages = {
  alt: string;
} & Images;

export type Team = {
  id: number;
  name: string;
  description: string;
  isJoinable?: boolean;
  users: number;
  points: number;
  images: TeamImages;
  background: string;
  textColor: string;
};

export type CampaignType = "ifo";



export type PageMeta = {
  title: string;
  description: string;
  image: string;
};

export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
}

export type Login = (connectorId: ConnectorNames) => void;

export interface ConfigWallets {
  title: string;
  icon: string;
  connectorId: ConnectorNames;
}
