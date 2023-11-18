import React from "react";
import { Row } from "react-bootstrap";
import TransactionForm from "../components/form/TransactionForm";
import { TransactionTable } from "../components/transaction-table/TransactionTable";

const Dashboard = () => {
  return (
    <div>
      <Row>
        <h3 className="mt-4">Dashboard</h3>
        <hr />

        {/* form section */}
        <div className="shadow-lg mt-5">
          <TransactionForm />
        </div>

        <hr />
        {/* table */}

        <div className="mt-5 ">
          <TransactionTable />
        </div>
      </Row>
    </div>
  );
};

export default Dashboard;
