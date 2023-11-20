import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import TransactionForm from "../components/form/TransactionForm";
import { TransactionTable } from "../components/transaction-table/TransactionTable";
import { getTransactions, postTransaction } from "../helpers/axiosHelper";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { status, message, trans } = await getTransactions();
    status === "success" && trans.length && setTransactions(trans);
  };

  const postData = async (form) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const userId = user._id;

    const { status, message } = await postTransaction({ ...form, userId });

    toast[status](message);

    status === "success" && fetchData();
  };

  return (
    <div>
      <Row>
        <h3 className="mt-4">Dashboard</h3>
        <hr />

        {/* form section */}
        <div className="shadow-lg mt-5">
          <TransactionForm postData={postData} />
        </div>

        <hr />
        {/* table */}

        <div className="mt-5 ">
          <TransactionTable transactions={transactions} />
        </div>
      </Row>
    </div>
  );
};

export default Dashboard;
