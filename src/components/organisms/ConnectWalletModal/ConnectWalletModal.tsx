import styled from "styled-components";
import {
  connectorLocalStorageKey,
  ConnectorNames,
} from "@diviner-protocol/uikit";
import { connectorsMarket } from "constants/walletsMarket";
import useAuth from "hooks/useAuth";

const ConnectWalletModal = ({ onClose }) => {
  const { login } = useAuth();

  const handleLogin = (connectorId: ConnectorNames) => {
    login(connectorId);
    window.localStorage.setItem(connectorLocalStorageKey, connectorId);

    onClose();
  };

  return (
    <BlockConnect>
      <div className="connect-wallet">
        <p>Connect Wallet</p>
        <p className="close" onClick={onClose}>
          X
        </p>
      </div>

      <div className="list-icon">
        {connectorsMarket.map((config) => (
          <div
            className="option"
            onClick={() => handleLogin(config.connectorId)}
          >
            <img
              src={`./images/connect/${config.icon}`}
              alt=""
              className="icon"
            />
            <p className="name">{config.title}</p>
          </div>
        ))}
      </div>
    </BlockConnect>
  );
};

const BlockConnect = styled.div`
  height: 100%;
  width: 100%;
  background: #fff;
  border-radius: 25px;
  font-weight: bold;
  color: #333333;
  text-align: center;

  @media (max-width: 767px) {
    max-width: 360px;
  }

  .connect-wallet {
    background: #55b3f8;
    border-radius: 12px 12px 0px 0px;
    height: 74px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    p {
      margin: 0;
      color: #fff;
      font-weight: 500;
      font-size: 22px;
    }

    .close {
      position: absolute;
      top: 50%;
      right: 33px;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
  }

  .link {
    display: flex;
    justify-content: center;
    font-weight: bold;
    color: #333333;

    p {
      &:hover {
        text-decoration: underline;
      }
    }

    .icon {
      height: fit-content;
      margin-right: 10px;
      text-align: center;
    }
  }

  .list-icon {
    padding: 40px 60px;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-gap: 20px 80px;
    justify-items: center;

    .option {
      cursor: pointer;
      transition: ease all 0.5s;

      &:hover {
        opacity: 0.8;
        transform: scale(0.9);
      }

      img {
        padding-bottom: 16px;
      }

      .name {
        text-align: center;
      }
    }
  }
`;
export default ConnectWalletModal;
