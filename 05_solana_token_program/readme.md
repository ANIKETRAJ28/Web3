#### Generate new public-private keypair

```bash
  solana-keygen new
```

#### Set the devnet RPC server

```bash
  solana config set --url https://api.devnet.solana.com
```

#### Create a `.env` file and add the public key and private key

```bash
  touch .env
```

- Your public key
  ```bash
  solana address
  ```
- Your private key
  ```bash
    ~/.config/solana // path
    cat id.json // private key array
  ```
- Add these to the `.env` file as shown below
  ```bash
    PUBLIC_KEY="Your public key"
    PRIVATE_KEY=[Your private key array]
  ```
