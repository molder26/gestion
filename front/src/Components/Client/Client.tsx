import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

function Client() {
  return (
    <>
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <h1>Cliente</h1>
      <Formik
        initialValues={{ name: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("El Campo nombre es requerido"),
        })}
        onSubmit={(values) => {
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
