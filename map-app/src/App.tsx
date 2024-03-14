
import { MapContainer, TileLayer } from 'react-leaflet';
import './App.css';

function App() {
  const position: [number, number] = [51.505, -0.09]
  const zoom: number = 4
  return (
    <div className="App">
      <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributor' />
      </MapContainer>
    </div>
  );
}

export default App;
