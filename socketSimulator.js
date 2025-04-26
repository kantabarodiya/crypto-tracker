export const simulateCryptoUpdates = (assets) => {
    return assets.map((asset) => {
      const randomChange = () => (Math.random() * 4 - 2).toFixed(2);
      return {
        ...asset,
        price: (asset.price * (1 + randomChange() / 100)).toFixed(2),
        change1h: randomChange(),
        change24h: randomChange(),
        volume24h: (parseFloat(asset.volume24h) * (1 + randomChange() / 100)).toFixed(2) + "B",
      };
    });
  };
  