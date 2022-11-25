import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import instance from "../../api/request";
import useFormField from "../../common/useFieldsFunction";
import { store } from "../../store";
import { fetchDeleteItem } from "../../store/dispatches/itemDelete.dispatch";
import styles from "./Item.module.scss";

function Item({ item, updateItems }) {
  const [isEdit, setIsEdit] = useState(false);
  const textField = useFormField(item.text);
  const activeID = localStorage.getItem("activeID");

  const editItem = async (id, checked, text) => {
    const res = await instance.post("router?action=editItem", {
      activeID,
      text,
      id,
      checked,
    });

    if (res.data.ok) {
      updateItems(true);
    } else {
      console.log("edit error");
    }
  };

  const deleteItem = async (id) => {
    const res = await store.dispatch(fetchDeleteItem(id))

    if (res.type === "ITEM_DELETE") {
      updateItems(res.payload);
    } else {
      console.log(res.payload);
    }
  };
  const keyPressHandler = (e) => {
    if (e.key === "Enter") {
      editItem(item.id, item.checked, textField.value);
    }
  };

  return (
    <li className={styles.item}>
      <Form.Check
        type="checkbox"
        checked={item.checked}
        onChange={() => editItem(item.id, !item.checked, item.text)}
      />
      {!isEdit ? (
        <p
          className={
            item.checked ? `${styles.text} ${styles.checked}` : styles.text
          }
        >
          {item.text}
        </p>
      ) : (
        <Form.Control
          type="text"
          value={item.text}
          {...textField}
          onKeyPress={keyPressHandler}
        />
      )}
      <Button
        variant="outline-warning"
        onClick={() => {
          setIsEdit((prev) => !prev);
        }}
      >
        Edit
      </Button>
      <Button
        variant="outline-success"
        onClick={() => editItem(item.id, item.checked, textField.value)}
      >
        Save
      </Button>
      <Button variant="outline-danger" onClick={() => deleteItem(item.id)}>
        Delete
      </Button>
    </li>
  );
}

export default Item;
