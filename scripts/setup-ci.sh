#!/bin/bash

set -e

# Source nvm
source "${NVM_DIR}/nvm.sh"
nvm install

# Install dependenices
yarn
