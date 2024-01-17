import { useState } from "react";
import Header from './components/Header';
import Form from './components/Form';
import GroceryList from './components/GroceryList';
import Footer from "./components/Footer";

const groceryItems = [
  {
    id: 1,
    name: 'Kopi Bubuk',
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: 'Air Mineral',
    quantity: 3,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem ( item ){
    setItems([...items, item]); //menambah state items
  }

  function handleDeleteItem ( id ){
    const newItems = items.filter((e) => e.id !== id); //membuat array items baru
    setItems(newItems); //mengurangi state items
  }

  function handleToggleItem ( id ){
    const newItems = items.map((e) => e.id === id ? {...e, checked: !e.checked} : e); //mengubah properti checked
    setItems(newItems); //mencoret element
  }

  function handleClearItems (){
    setItems([]);
  }

  return (
    <div className="app">
        <Header />
        <Form onAddItem={handleAddItem}/>
        <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems}/>
        <Footer items={items} />
    </div>
  );
}  