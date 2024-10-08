# _QCheck - Blockchain-Powered Medicine Verification System_

_QCheck_ is a blockchain-based solution designed to tackle the global issue of counterfeit and substandard medicines. Using _QR codes_ and _Ethereum blockchain_, QCheck enables stakeholders and consumers to verify the authenticity and safety of medicines with just a scan or click. This system ensures transparency and trust in the supply chain, helping prevent counterfeit products from reaching patients.

---

## _Features_

- _QR Code Authentication_: Each medicine product has a unique QR code that can be scanned or clicked to instantly verify its authenticity.
- _Blockchain Transparency_: QCheck leverages the Ethereum blockchain to record every step of the supply chain in a tamper-proof, decentralized manner.
- _Real-Time Tracking_: Track medicines from manufacturer to end consumer in real-time, providing transparency and enhanced security in the distribution chain.
- _Anti-Counterfeit Protection_: By recording all interactions on the blockchain, QCheck minimizes the risk of counterfeit products entering the supply chain.

---

## _Tech Stack_

- _Frontend_: [Next.js](https://nextjs.org/) - A React framework for fast, server-side rendering and easy routing.
- _Blockchain_: [Ethereum](https://ethereum.org/en/) - A decentralized platform for smart contracts.
- _Smart Contracts_: [Solidity](https://soliditylang.org/) - A contract-oriented programming language used for implementing smart contracts.
- _Web3 Integration_: [Ethers.js](https://docs.ethers.io/v5/) - A library for interacting with the Ethereum blockchain and smart contracts.
- _QR Code Generation_: Used to assign unique codes to medicines for authentication.

---

## _Installation_

1. Clone the repository:

   bash
   git clone https://github.com/Aryainguz/Qcheck-HackIndia.git
   cd qcheck

2. Install dependencies:

   bash
   npm install

3. Set up the environment variables in a .env.local file:

4. Deploy the smart contract using Hardhat or Truffle:

   bash
   npx hardhat run scripts/deploy.js --network rinkeby

5. Run the development server:

   bash
   npm run dev

6. Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## _Future Enhancements_

- _AI and IoT integration_ for more detailed supply chain analytics.
- Expanding QCheck to other high-risk products such as food and electronics.
- Improved scalability and gas optimizations for smart contract interactions.

---

By Team - The Xiting Way
