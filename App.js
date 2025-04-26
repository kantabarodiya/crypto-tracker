import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAssets } from "./features/cryptoSlice";
import { simulateCryptoUpdates } from "./utils/socketSimulator";
import CryptoTable from "./components/CryptoTable";

function App() {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.crypto.assets);

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = simulateCryptoUpdates(assets);
      dispatch(updateAssets(updated));
    }, 2000);

    return () => clearInterval(interval);
  }, [assets, dispatch]);

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold text-center p-4">🚀 Real-Time Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;

