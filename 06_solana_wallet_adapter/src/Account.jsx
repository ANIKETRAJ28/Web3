import {
  useAccount,
  useBalance,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";

export function Account() {
  const { address } = useAccount();
  const { data } = useBalance({ address });
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName });

  return (
    <div>
      {ensAvatar && (
        <img
          alt="Ens Avatar"
          src={ensAvatar}
        />
      )}
      {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
      {address && data && <div>{data.formatted}</div>}
      <button onClick={disconnect}>Disconnect</button>
    </div>
  );
}
