"use client"

import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import details from '../../database/db.json';
import { UpdateInfo } from '@/redux/slice/AuthSlice';

function Reset() {
    let form = useForm();
    let { register, handleSubmit, formState } = form;
    let { errors } = formState;
    let dispatch = useDispatch();
    let token = sessionStorage.getItem("authToken");

    let user = details.registration.find((user) => user.id === token);

    console.log("user is", user);

    let submitHandle = (data) => {
        let token = sessionStorage.getItem("authToken");

        let user = details.registration.find((item) => item.id === token);

        let userData = {
            id: user.id,
            password: data.password || user.password
        };

        console.log("myuser is", userData);

        dispatch(UpdateInfo(userData))
            .then((res) => {
                console.log("result is", res);
                alert("update done");
            })
            .catch((error) => console.log("error is", error));
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: '#f4f4f4'
        }}>
            <fieldset
                style={{
                    border: "0.2px solid blue",
                    borderRadius: "10px",
                    padding: "15px",
                    marginBottom: "20px",
                    background: "white",
                }}
            >
                <legend
                    style={{
                        color: "red",
                        fontSize: "20px",
                        fontWeight: "500",
                        padding: "0 10px",
                    }}
                >
                    Reset Password
                </legend>

                <form
                    style={{
                        padding: '10px',
                        background: 'linear-gradient(to right, white, white, white)',
                        borderRadius: '8px',
                        width: '300px'
                    }}
                    onSubmit={handleSubmit(submitHandle)}
                >
                    <div style={{ marginBottom: "15px" }}>
                        <label
                            htmlFor="updatePassword"
                            style={{ color: "red", fontSize: "20px", fontWeight: "200" }}
                        >
                            Password:
                        </label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            {...register("password", { required: "Password is required" })}
                            style={{
                                width: "97%",
                                padding: "5px",
                                borderRadius: "10px",
                                border: '1px solid #ccc'
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            borderRadius: "4px",
                            padding: "10px",
                            border: "none",
                            color: "#fff",
                            fontSize: "16px",
                            backgroundColor: "#007bff"
                        }}
                    >
                        Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
}

export default Reset;
