import React, { KeyboardEvent, useState, useEffect } from 'react';
import ItemPill from './ItemPill';

interface Props {
  title: string;
  currentItems: string[];
  onItemAdd: (items: string[]) => void;
}

function ItemListInput({ title, currentItems, onItemAdd }: Props) {
  const [items, setItems] = useState<string[]>(currentItems);

  useEffect(() => {
    onItemAdd(items);

    return () => {
      null;
    };
  }, [items]);

  function pushItem(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key.toLowerCase() === 'enter') {
      const value = (e.currentTarget as HTMLInputElement).value;
      (e.currentTarget as HTMLInputElement).value = '';
      setItems((prevItemsArray) => {
        const newItemsArray = [...prevItemsArray];
        newItemsArray.push(value);
        return newItemsArray;
      });
    }
  }

  function removeItem(index: number) {
    const filteredItems = items.filter((item, i) => {
      if (i !== index) {
        return true;
      }
    });

    setItems(filteredItems);
  }

  return (
    <div className={'w-full h-fit'}>
      <label htmlFor='input__item'>{title}:</label>
      <br />
      <div
        className={
          'item-box w-full  h-fit mb-[0.5rem] px-[0.5rem] py-[0.5rem] flex flex-row items-center justify-start flex-wrap gap-[0.5rem]'
        }>
        {items.map((item, i) => {
          return (
            <ItemPill
              key={`item_pill_${i}_${Math.random()}`}
              index={i}
              removeHandler={removeItem}>
              {item}
            </ItemPill>
          );
        })}
      </div>
      <input
        className={'w-full h-fit'}
        onKeyDown={pushItem}
        type='text'
        id='input__item'
      />
    </div>
  );
}

export default ItemListInput;
