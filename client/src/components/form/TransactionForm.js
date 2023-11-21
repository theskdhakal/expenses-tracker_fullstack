import React, { useState } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { toast } from "react-toastify";

const TransactionForm = ({ postData }) => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    postData(form);
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

        <Col md="3">
          <Form.Control
            name="date"
            type="date"
            placeholder="Date"
            required
            onChange={handleOnChange}
          ></Form.Control>
        </Col>

        <Col md="3">
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
