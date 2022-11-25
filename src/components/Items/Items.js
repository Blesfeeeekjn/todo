import Item from "../Item/Item";
import styles from "./Items.module.scss";

function Items({ items, updateItems }) {
  return (
    <div>
      {items.length === 0 ? (
        <p>No data</p>
      ) : (
        <ul className={styles.items}>
          {items.map((item, i) => (
            <Item
              key={`${item.text}-${i}`}
              item={item}
              updateItems={updateItems}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Items;
