// export const API_URL = "https://eth-sepolia.g.alchemy.com/v2/30eEOkoSx36dNKtOf5rl1jOI_Ft9_Qx-";
export const API_URL = "https://eth-sepolia.g.alchemy.com/v2/PziSgfkxxKgahWVlmC44KhmW-8vU9gAd";
export const Private_KEY = "f8213207e72d1d824b3a2848746bff9fdb00451337d92b0e566b2ad2068c0e27";

export const contractAddress = "0x4442AF8fAA4d57ea07d8d9a6158139F27A3980b8";

export const contractAbi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_productId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_batchNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_manufacturingDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_expirationDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Temperature",
				"type": "string"
			}
		],
		"name": "addProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "manufacturer",
				"type": "string"
			}
		],
		"name": "ProductAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "enum HealthcareSupplyChain.SupplyChainStage",
				"name": "stage",
				"type": "uint8"
			}
		],
		"name": "SupplyChainUpdate",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "getAllProducts",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "productId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "productName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "batchNumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "manufacturer",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "manufacturingDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "expirationDate",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isVerified",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "Temperature",
						"type": "string"
					}
				],
				"internalType": "struct HealthcareSupplyChain.Product[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_productId",
				"type": "uint256"
			}
		],
		"name": "getProductHistory",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "products",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "batchNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "manufacturer",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "manufacturingDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "expirationDate",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isVerified",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "Temperature",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];