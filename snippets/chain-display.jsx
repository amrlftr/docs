export const ChainDisplay = () => {
  const [chain, setChain] = useState(1);

  useEffect(() => {
    const stored = localStorage.getItem('chain');
    if (stored) {
      setChain(Number(stored));
    }
  }, []);

  return <span>{chain}</span>;
};
