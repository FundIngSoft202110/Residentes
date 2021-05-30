/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ENTIDADES;

import java.util.List;

/**
 *
 * @author juansebastianbarretojimenez
 */
public class DTOpropuesta {
    private int idPropuesta;
    private String descripcion;
    private String estado;
    private List<DTOopcion> opciones;

    public DTOpropuesta() {
    }

    public DTOpropuesta(int idPropuesta, String descripcion, String estado) {
        this.idPropuesta = idPropuesta;
        this.descripcion = descripcion;
        this.estado = estado;
    }

    public int getIdPropuesta() {
        return idPropuesta;
    }

    public void setIdPropuesta(int idPropuesta) {
        this.idPropuesta = idPropuesta;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public List<DTOopcion> getOpciones() {
        return opciones;
    }

    public void setOpciones(List<DTOopcion> opciones) {
        this.opciones = opciones;
    }
    
} // end DTOpropuestas
