import React, { useState, useCallback } from "react";

interface ListItemProps {
  item: string;
  onClick: (item: string) => void;
}

const ListItem: React.FC<ListItemProps> = React.memo(({ item, onClick }) => {
  console.log(`Rendered item ${item}`);
  return <li onClick={() => onClick(item)}>{item}</li>;
});

const items = ["Item 1", "Item 2", "Item 3"];

const ItemListMemoiCallback: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleClick = useCallback((item: string) => {
    setSelectedItem(item);
  }, []);

  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item} item={item} onClick={handleClick} />
      ))}
    </ul>
  );
};

export default ItemListMemoiCallback;
