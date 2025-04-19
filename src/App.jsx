
import './App.css'
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Layout>
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Tailwind CSS Test</h1>
          <p className="text-gray-700">If you can see this styled with blue text and proper spacing, Tailwind is working!</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Test Button
          </button>
        </div>
      </Layout>
    </>
  );
}

export default App;
