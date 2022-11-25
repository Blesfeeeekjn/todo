import Form from "react-bootstrap/Form";
import styles from './AuthFormInner.module.scss';

function AuthFormInner({loginField, passField, error}) {

  return (
    <>
      {error !== '' ? <p className={styles.error}>{error}</p> : null}
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter login" {...loginField} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...passField}/>
      </Form.Group>
    </>
  );
}

export default AuthFormInner;
