import React from "react";
import TOM from "../../../img/chains/TOM.png";
import usdt from "../../../img/chains/usdt.png";
import ETH from "../../../img/chains/ETH.png";

const CreateBlockchainMenu = ({ onClick }) => {
  return (
    <div
      className="dropdown-menu show z-10 hidden w-full whitespace-nowrap rounded-xl
			bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
      aria-labelledby="item-blockchain"
      style={{
        position: "absolute",
        inset: "0px auto auto 0px",
        margin: "0px",
        transform: "translate(0px, 53px)",
      }}
    >
      <button
        onClick={() => {
          if (onClick) {
            onClick("TOM");
          }
        }}
        className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-base
		text-jacarta-700 transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
      >
        <span className="flex items-center">
          <img src={TOM} alt="TOM" className="mr-2 h-5 w-5 rounded-full" />
          TOM
        </span>
      </button>
      <button
        onClick={() => {
          if (onClick) {
            onClick("USDT");
          }
        }}
        className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-base
		transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
      >
        <span className="flex items-center">
          <img src={usdt} alt="usdt" className="mr-2 h-5 w-5 rounded-full" />
          USDT
        </span>
      </button>
      <button
        onClick={() => {
          if (onClick) {
            onClick("ETH");
          }
        }}
        className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-base
		transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
      >
        <span className="flex items-center">
          <img src={ETH} alt="ETH" className="mr-2 h-5 w-5 rounded-full" />
          ETH
        </span>
      </button>
    </div>
  );
};

export { CreateBlockchainMenu };
