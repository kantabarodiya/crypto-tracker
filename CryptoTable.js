import { useSelector } from "react-redux";

const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto.assets);

  return (
    <div className="overflow-x-auto max-w-7xl mx-auto p-4">
      <table className="min-w-full border-collapse text-sm">
        <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
          <tr>
            <th className="px-4 py-3 text-left">#</th>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-right">Price</th>
            <th className="px-4 py-3 text-right">1h%</th>
            <th className="px-4 py-3 text-right">24h%</th>
            <th className="px-4 py-3 text-right">7d%</th>
            <th className="px-4 py-3 text-right">Market Cap</th>
            <th className="px-4 py-3 text-right">Volume(24h)</th>
            <th className="px-4 py-3 text-right">Circulating Supply</th>
            <th className="px-4 py-3 text-center">Last 7d</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {assets.map((asset, index) => (
            <tr key={asset.id} className="hover:bg-gray-50">
              <td className="px-4 py-3">{index + 1}</td>
              <td className="px-4 py-3 flex items-center gap-2">
                <img src={asset.logo} alt={asset.symbol} className="w-6 h-6" />
                <div>
                  <div className="font-medium">{asset.name}</div>
                  <div className="text-xs text-gray-500">{asset.symbol.toUpperCase()}</div>
                </div>
              </td>
              <td className="px-4 py-3 text-right font-medium">
                ${asset.price.toLocaleString()}
              </td>
              <td
                className={`px-4 py-3 text-right font-medium ${
                  asset.change1h >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {asset.change1h}%
              </td>
              <td
                className={`px-4 py-3 text-right font-medium ${
                  asset.change24h >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {asset.change24h}%
              </td>
              <td
                className={`px-4 py-3 text-right font-medium ${
                  asset.change7d >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {asset.change7d}%
              </td>
              <td className="px-4 py-3 text-right">${asset.marketCap.toLocaleString()}</td>
              <td className="px-4 py-3 text-right">${asset.volume24h.toLocaleString()}</td>
              <td className="px-4 py-3 text-right">
                {asset.supply.toLocaleString()} {asset.symbol.toUpperCase()}
              </td>
              <td className="px-4 py-3 text-center">
                <img src={asset.chart} alt="7d chart" className="w-24 h-6 object-contain" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;


