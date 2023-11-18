import React, { useState } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { toast } from "react-toastify";
import { postTransaction } from "../../helpers/axiosHelper";

const TransactionForm = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    console.log(form);

    const user = JSON.parse(sessionStorage.getItem("user"));
    const userId = user._id;

    const { status, message } = await postTransaction({ ...form, userId });

    toast[status](message);
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <h4 className="text-center"> Add transaction</h4>
      <Row className="g-2">
        <Col md="2">
          <Form.Select
            defaultValue="Choose..."
            name="type"
            required
            onChange={handleOnChange}
          >
            <option value="">Choose...</option>
            <option value="income">Income</option>
            <option value="expenses">Expenses</option>
          </Form.Select>
        </Col>

        <Col md="5">
          <Form.Control
            name="title"
            placeholder="Transaction Title"
            required
            onChange={handleOnChange}
          />
        </Col>
        <Col md="2">
          <Form.Control
            name="amount"
            type="number"
            required
            placeholder="100 "
            onChange={handleOnChange}
          />
        </Col>

        <Col md="2">
          <Form.Control type="submit" className="btn btn-primary" />
        </Col>
      </Row>
    </Form>
  );
};

export default TransactionForm;