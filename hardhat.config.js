/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { PRIVATE_KEY } = process.env;

module.exports = {
	solidity: "0.8.11",
	networks: {
		hardhat: {},

      "lisk-sepolia": {
			url: "https://rpc.sepolia-api.lisk.com",
			accounts: [`0x${PRIVATE_KEY}`],
			gasPrice: 1000000000,
		},
	},

	etherscan: {
		// Use "123" as a placeholder, because Blockscout doesn't need a real API key, and Hardhat will complain if this property isn't set.
		apiKey: {
			"lisk-sepolia": "123",
		},
		customChains: [
			{
				network: "lisk-sepolia",
				chainId: 4202,
				urls: {
					apiURL: "https://sepolia-blockscout.lisk.com/api",
					browserURL: "https://sepolia-blockscout.lisk.com",
				},
			},
		],
	},
	sourcify: {
		enabled: false,
	},
};
