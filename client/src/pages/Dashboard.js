import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import TransactionForm from "../components/form/TransactionForm";
import { TransactionTable } from "../components/transaction-table/TransactionTable";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchDataAction } from "./transactionState/transactionAction";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    dispatch(fetchDataAction());
    !user._id && navigate("/login");
  }, [user]);

  // const postData = async (form) => {
  //   const user = JSON.parse(sessionStorage.getItem("user"));
  //   const userId = user._id;

  //   const { status, message } = await postTransaction({ ...form, userId });

  //   toast[status](message);

  //   status === "success" && fetchData();
  // };

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
          <TransactionTable
          // transactions={transactions}
          // handleOnDelete={handleOnDelete}
          />
        </div>
      </Row>
    </div>
  );
};

export default Dashboard;
