/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ENTIDADES;

/**
 *
 * @author juansebastianbarretojimenez
 */
public class DTOopcion {
    private int idOpcion;
    private String nombre;

    public DTOopcion() {
    }

    public DTOopcion(int idOpcion, String nombre) {
        this.idOpcion = idOpcion;
        this.nombre = nombre;
    }

    public int getIdOpcion() {
        return idOpcion;
    }

    public void setIdOpcion(int idOpcion) {
        this.idOpcion = idOpcion;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    
}
