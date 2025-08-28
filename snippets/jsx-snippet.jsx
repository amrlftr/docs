export const MyJSXSnippet = () => {
  console.log('This is a JSX snippet');
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  )
}

export const Chain = () => {
  const key = 'chainCounter';

  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? parseInt(saved, 10) : 1;
  });

  useEffect(() => {
    localStorage.setItem(key, count.toString());
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  );
};

export const CreditChip = ({ description, pro = false }) => {
  return (
    <div className="flex items-center justify-start gap-2">
      {pro && (
        <div className="flex items-center rounded-xl px-3 py-1 border border-green-600 bg-green-100 text-sm font-medium text-green-800">
          PRO
        </div>
      )}

      <div className="flex items-center rounded-xl px-3 py-1 border border-zinc-950/20 dark:border-white/20 bg-zinc-100 dark:bg-zinc-800 text-sm font-medium text-zinc-950/80 dark:text-white/80">
        100 CU
      </div>
    </div>
  );
};
