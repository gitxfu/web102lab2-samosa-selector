# Samosa Selector

## 1. Functional Components
```
const App = () => {
// Component logic
return (
// JSX
)
}
```

## 2. useState Hook
We use the useState hook to manage state in our functional component.


```const [count, setCount] = useState(0);
const [multiplier, setMultiplier] = useState(1);
```

## 3. Event Handling
Event handlers are defined as functions within the component and attached to elements in the JSX.
```
const updateCount = () => setCount(count + 1 * multiplier);

// Usage in JSX
<img src="/samosa.png" className="samosa" onClick={updateCount} />
```

## 4. Conditional State Updates
State updates are performed conditionally based on the current state.
```
const buyDoubleStuffed = () => {
  if (count >= 10) {
    setCount(count => count - 10);
    setMultiplier(multiplier => multiplier * 2);
  }
}
```

## 5. Functional State Updates
We use functional updates to ensure we're working with the most current state.

```
setCount(count => count - 10);
setMultiplier(multiplier => multiplier * 2);
``` 

## 6. JSX and Rendering
The component's UI is described using JSX, which combines HTML-like syntax with JavaScript expressions.
```
return (
<div className="app">
<h1>Samosa Selector</h1>
<div className="count">
<p>Count: {count}</p>
<p>Multiplier: {multiplier}</p>
</div>
</div>
)
```

