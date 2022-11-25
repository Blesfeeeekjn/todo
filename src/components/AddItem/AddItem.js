import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import useFormField from "../../common/useFieldsFunction";
import { store } from "../../store";
import { fetchAddItem } from "../../store/dispatches/itemAdd.dispatch";
import styles from "./AddItem.module.scss";

function AddItem({ updateItems }) {
  const [mess, stateMess] = useState("");
  const taskField = useFormField();
  const addItemFunction = async (e) => {
    e.preventDefault();

    const res = await store.dispatch(fetchAddItem(taskField.value));
    if (res.type === "ITEM_ADD") {
      updateItems(res.payload);
      return;
    }
    stateMess(res.payload);
  };
  return (
    <>
      {mess !== "" ? <p>{mess}</p> : null}
      <Form className={styles.inputNewTask}>
        <Form.Control type="text" placeholder="Нова задача" {...taskField} />

        <Button
          variant="outline-primary"
          onClick={addItemFunction}
          type="submit"
        >
          Додати задачу
        </Button>
      </Form>
    </>
  );
}

export default AddItem;
