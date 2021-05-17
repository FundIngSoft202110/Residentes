/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ENTIDADES;

/**
 *
 * @author david
 */
public class Contacto {
    private int idc;
    private String rol;
    private String oficio;
    private String nombre;
    private String foto;

    public Contacto(int idc, String rol, String oficio, String nombre, String foto) {
        this.idc = idc;
        this.rol = rol;
        this.oficio = oficio;
        this.nombre = nombre;
        this.foto = foto;
    }

    public int getIdc() {
        return idc;
    }

    public void setIdc(int idc) {
        this.idc = idc;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }

    public String getOficio() {
        return oficio;
    }

    public void setOficio(String oficio) {
        this.oficio = oficio;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public Contacto() {
    }
}
