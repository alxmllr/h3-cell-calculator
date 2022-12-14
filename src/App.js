import { latLngToCell } from 'h3-js';

import "./styles.css";

export default function App() {
  const coordinates = [
    2.178181233896095,
    41.41422319411177 
];
  const h3R7 = latLngToCell(coordinates[1], coordinates[0], 7);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>h3R7: {h3R7}</h2>
    </div>
  );
}
