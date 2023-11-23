import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewCustomer } from "../store/Slices";
import { useSelector } from "react-redux";

const AddCustomer = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const customer = useSelector((state) => {
    return state.customers.newCustomer; // stae.storename.slicename
  });
  const AddNewCustomer = () => {
    dispatch(setNewCustomer([...customer, { name, email, phoneNumber }]));
    setname("");
    setEmail("");
    setPhoneNumber("");
  };
  const deleteCustomer = (id) => {
    const deleteCustomer = customer?.filter((_, index) => {
      return index != id;
    });
    dispatch(setNewCustomer(deleteCustomer));
  };
  const editCustomer = (id) => {
    const editCustomer = customer.find((_, index) => {
      return index == id;
    });
    setname(editCustomer.name);
    setEmail(editCustomer.email);
    setPhoneNumber(editCustomer.phoneNumber);
    setEditIndex(id);
  };
  const editSave = (id) => {
    const updatedCustomer = customer.map((item, index) => {
      if (index === id) {
        return { ...item, name, email, phoneNumber };
      }
      return item;
    });
    dispatch(setNewCustomer(updatedCustomer));
    setname("");
    setEmail("");
    setPhoneNumber("");
    setEditIndex(null);
  };
  const clearAll = () => {
    dispatch(setNewCustomer([]));
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Phone Number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <button onClick={AddNewCustomer}>Add Customer</button>
        {customer.map((item, index) => {
          const { name, email, phoneNumber } = item;
          return (
            <>
              <div key={index}>
                <div>{name}</div>
                <div>{email}</div>
                <div>{phoneNumber}</div>
                <button
                  onClick={() => {
                    deleteCustomer(index);
                  }}
                >
                  Delete
                </button>
                {!editIndex || editIndex !== index ? (
                  <button onClick={() => editCustomer(index)}>Edit</button>
                ) : (
                  <button onClick={() => editSave(index)}>Save</button>
                )}
              </div>
            </>
          );
        })}
        {customer.length > 1 ? (
          <button onClick={clearAll}>clear all</button>
        ) : null}
      </div>
    </>
  );
};

export default AddCustomer;
