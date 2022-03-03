import { useState } from 'react';
import { Button, Form, Popover, OverlayTrigger } from 'react-bootstrap';

const SummaryForm = () => {
  const [tcChecked, setTcChecked] = useState(false);

  const popover = (
    <Popover id='popover-basic'>
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkBoxLabel = (
    <span>
      I agree to
      <OverlayTrigger overlay={popover}>
        <span style={{ color: 'blue' }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId='terms-and-conditions'>
        <Form.Check
          type='checkbox'
          checked={tcChecked}
          onChange={() => setTcChecked(!tcChecked)}
          label={checkBoxLabel}
        />
        <Button variant='primary' type='submit' disabled={!tcChecked}>
          Confirm order
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SummaryForm;
