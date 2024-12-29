#!/bin/bash
solc --abi contracts/PriceOracle.sol -o build
abigen --abi build/PriceOracle.abi --pkg contracts --type PriceOracle --out internal/blockchain/contracts/oracle.go
