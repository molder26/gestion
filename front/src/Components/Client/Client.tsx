import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { TableClient } from "./TableClient";

function Client() {
  return (
    <>
      <Link to="/">
        <h2>Volver al Home</h2>
      </Link>

      <TableClient/>


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