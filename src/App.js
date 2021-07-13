import DetailSection from './modules/DetailSection'
import { DataProvider } from './context'

function App() {
  return (
    <div className="App">
      <DataProvider>
        <DetailSection />
      </DataProvider>
    </div>
  );
}

export default App;
