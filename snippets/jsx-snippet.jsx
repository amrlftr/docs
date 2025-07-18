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