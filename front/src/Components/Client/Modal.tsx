import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Input } from "@mui/material";

import style from "./Client.module.css";

export function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={style.btnNewClient}>
        <Button variant="contained" onClick={handleClickOpen}>
          Nuevo Cliente
        </Button>
      </div>             

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cargar Cliente</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Complete los campos para cargar un nuevo cliente
          </DialogContentText>
      
         
            <Formik
            initialValues={{ name: "", lastName: "", address: "", tel: "" }}
            validationSchema={Yup.object({
              name: Yup.string().required("El Campo nombre es requerido"),
              lastName: Yup.string().required("El Campo Apellido es requerido"),
              address: Yup.string().required("El Campo Direccion es requerido"),
              tel: Yup.string().required("El Campo Telefono es requerido"),
            })}
            onSubmit={(values: any) => {
              console.log(values);
            }}
          >
            <Form>       
            <div>
                <Input
                  // autoFocus
                  margin="dense"
                  id="name"
                  name="name"
                  placeholder="Nombre"
                  // label="Nombre"
                  type="text"
                  fullWidth
                  // variant="standard"

                             />
                <ErrorMessage component="div" name="name" />
              </div>

              <div>
                <TextField
                  autoFocus
                  margin="dense"
                  id="lastName"
                  name="lastName"
                  label="Apellido"
                  type="text"
                  fullWidth
                  variant="standard"
                />
                <ErrorMessage component="div" name="lastName" />
              </div>

              <div>
                <TextField
                  autoFocus
                  margin="dense"
                  id="address"
                  name="address"
                  label="Direccion"
                  type="text"
                  fullWidth
                  variant="standard"
                />

                <ErrorMessage component="div" name="address" />
              </div>

              <div>
                <TextField
                  autoFocus
                  margin="dense"
                  id="tel"
                  name="tel"
                  label="Telefono"
                  type="text"
                  fullWidth
                  variant="standard"
                />

                <ErrorMessage component="div" name="tel" />
              </div>

              <Button type="submit">Guardar</Button>
              <Button onClick={handleClose}>Cancelar</Button>
              </Form>
              </Formik>
        </DialogContent>
      </Dialog>
          
    </div>
  );
}
