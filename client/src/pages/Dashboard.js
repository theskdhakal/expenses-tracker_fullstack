import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import TransactionForm from "../components/form/TransactionForm";
import { TransactionTable } from "../components/transaction-table/TransactionTable";
import {
  deleteTransaction,
  getTransactions,
  postTransaction,
} from "../helpers/axiosHelper";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchData();
    !user._id && navigate("/login");
  }, [user]);

  const fetchData = async () => {
    const { status, message, trans } = await getTransactions();
    console.log(message);
    status === "success" && setTransactions(trans);
  };

  const postData = async (form) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const userId = user._id;

    const { status, message } = await postTransaction({ ...form, userId });

    toast[status](message);

    status === "success" && fetchData();
  };

  const handleOnDelete = async (_id) => {
    if (!window.confirm("Are you sure you want to delete it ?")) {
      return;
    }
    const { status, message } = await deleteTransaction(_id);

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
          <TransactionTable
            transactions={transactions}
            handleOnDelete={handleOnDelete}
          />
        </div>
      </Row>
    </div>
  );
};

export default Dashboard;
