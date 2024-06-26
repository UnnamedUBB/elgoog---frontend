import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Wyniki, { Pageable, Product } from './components/Wyniki';

async function getProduct(inputValue: string) {
  return await axios.get<Pageable<Product[]>>(`https://localhost:7167/Products?filter=${inputValue}`);
}

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [data, setData] = useState<Product[]>([]);

  const test = async () => {
    const result = await getProduct(inputValue);
    if (result.status !== 200) {
      return;
    }
    setData(result.data.data);
  };

  useEffect(() => {
    test();
  }, []);



  return (
    <div className='space-y-6'>
      <Navbar onSearchInputChanged={setInputValue} search={test} />
      <div className='container flex space-x-6 '>
        <Wyniki products={data} /> 
      </div>
    </div>
  );
}

export default App;