# Blockchain Oracle Project

A Go implementation of a blockchain oracle that fetches external data and updates a smart contract.

## Setup

\`\`\`bash
# Install dependencies
go mod tidy
npm install

# Deploy contract
npx hardhat run scripts/deploy.js

# Run oracle service
go run cmd/oracle/main.go
\`\`\`

## Project Structure

- `cmd/oracle`: Main application entry point
- `contracts`: Solidity smart contracts
- `internal`: Internal Go packages
- `scripts`: Deployment and utility scripts
- `test`: Test files

## Configuration

Create a `.env` file with:

ETHEREUM_RPC_URL=
PRIVATE_KEY=
CONTRACT_ADDRESS=

