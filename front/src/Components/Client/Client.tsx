import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { TableClient } from "./TableClient";
import NavBar from "../NavBar/NavBar";
import { Button } from "@mui/material";

import style from "./Client.module.css";

function Client() {
    return (
        <>
            <NavBar />

            <div className={style.btnNewClient}>
                <Button variant="contained">Nuevo Cliente</Button>
            </div>

            <TableClient />

            <h2>Cargar Cliente</h2>
            <Formik
                initialValues={{ name: "" }}
                validationSchema={Yup.object({
                    name: Yup.string().required("El Campo nombre es requerido"),
                })}
                onSubmit={(values: any) => {
                    console.log(values);
                }}
            >
                <Form>
                    <div>
                        <label>Nombre</label>
                        <Field name="name" type="text" />

                        <ErrorMessage component="div" name="name" />
                    </div>
                    <button type="submit">Enviar</button>
                </Form>
            </Formik>
        </>
    );
}

export default Client;
