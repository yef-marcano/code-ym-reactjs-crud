import React, {Component} from 'react';
//Necesario bootstrap 
import "bootstrap/dist/css/bootstrap.min.css";
//Necesario reactstrap
import {
    Table,
    Button,
    Container,
    Modal,
    ModalBody,
    ModalHeader,
    FormGroup,
    ModalFooter,
  } from "reactstrap";

  // Mi base de datos
  const data = [
    { id: 1, compra: "Camisa", costo: "100" },
    { id: 2, compra: "Zapatos", costo: "10" },
    { id: 3, compra: "Comida Rapida", costo: "20" },
    { id: 4, compra: "Pan", costo: "5" },
    { id: 5, compra: "Chori", costo: "30" },
    ];

class Micomponente extends Component{

//estados
    state = {
        data: data,
        form: {
          id: "",
          compra: "",
          costo: "",
        },
        modallInsertar: false,
        modallEditar: false,
      };
    
      handleChange = (e) => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
      };

//modal insertar abrir
      mostrarModalInsertar = () => {
        this.setState({ modallInsertar: true });
      };
//modal insertar cerar
      ocultarModalInsertar = () => {
        this.setState({ modallInsertar: false });
      };
    
//modal editar abrir
      mostrarModalEditar = (registro) => {
        this.setState({ modallEditar: true, form: registro });
      };
//modal editar cerar
      ocultarModalEditar = () => {
        this.setState({ modallEditar: false });
      };
    
//insertar datos, importante el uso de let para el uso interno
      insertar = () => {
        let valorNuevo = { ...this.state.form };
        valorNuevo.id = this.state.data.length + 1;
        let lista = this.state.data;
        lista.push(valorNuevo);
        this.setState({ data: lista, modallInsertar: false });
      };
    
//editar datos, importante el uso de let para el uso interno
      editar = (dato) => {
        let contador=0;
        let lista=this.state.data;
        lista.map((registro)=>{
          if(dato.id==registro.id){
            lista[contador].compra=dato.compra;
            lista[contador].costo=dato.costo;
          }
          contador++
        })
        this.setState({data: lista,  modallEditar: false});
    
      }
    
//eliminar datos , importante el uso de let para el uso interno
      elimiar=(dato)=> {
        let opcion=window.confirm("Estas seguro que quieres eliminar? " +dato.id);
        if(opcion){
            let contador=0;
            let lista = this.state.data;
          lista.map((registro)=>{
            if(registro.id==dato.id){
              lista.splice(contador, 1);
            }
            contador++;
          });
          this.setState({data: lista});
        }
      }

    render(){

        return(

//div que envuelve todo, necesario para poder incluir varios elementos
            <div className="mi-componente">
                <Container>
              <br />
              <Button color="success" onClick={() => this.mostrarModalInsertar()}>
                {" "}
                Insertar Nueva Gasto{" "}
              </Button>
              <br />
              <br />
    
              <Table>
                <thead >
                  <tr>
                    <th>id</th>
                    <th>Compra</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
    
                <tbody>
                  {this.state.data.map((elemento) => (
                    <tr>
                      <td>{elemento.id}</td>
                      <td>{elemento.compra}</td>
                      <td>{elemento.costo}$</td>
                      <td>
                        <Button color="primary"  onClick={() => this.mostrarModalEditar(elemento)}> 
                         Editar
                        </Button>
                        {"  "}
                        <Button color="danger " onClick={() => this.elimiar(elemento)}>Eliminar</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Container>
            <Modal isOpen={this.state.modallInsertar}>
              <ModalHeader>
                <div>
                  <h3> Insertar Nuevo</h3>
                </div>
              </ModalHeader>
              <ModalBody>
                <FormGroup>
                  <label>Id:</label>
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.data.length + 1}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Compra:</label>
                  <input
                    className="form-control"
                    name="compra"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Precio:</label>
                  <input
                    className="form-control"
                    name="costo"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => this.insertar()}>
                  Insertar
                </Button>
                <Button color="danger" onClick={() => this.ocultarModalInsertar()}>
                  Cancelar
                </Button>
              </ModalFooter>
            </Modal>
            <Modal isOpen={this.state.modallEditar}>
              <ModalHeader>
                <div>
                  <h3> Insertar Nuevo</h3>
                </div>
              </ModalHeader>
              <ModalBody>
                <FormGroup>
                  <label>Id:</label>
                  <input className="form-control" readOnly type="text" value={this.state.form.id} />
                </FormGroup>
                <FormGroup>
                  <label>Compra:</label>
                  <input className="form-control" name="compra" type="text" onChange={this.handleChange} value={this.state.form.compra}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Precio:</label>
                  <input className="form-control" name="costo" type="text" onChange={this.handleChange}  value={this.state.form.costo} />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="primary"  onClick={()=>this.editar(this.state.form)}>Actualizar</Button>
                <Button color="danger" onClick={()=>this.ocultarModalEditar()}>
                  Cancelar
                </Button>
              </ModalFooter>
            </Modal>

        </div>


        );
    };

};

// exportarlo para utilizar
export default Micomponente;