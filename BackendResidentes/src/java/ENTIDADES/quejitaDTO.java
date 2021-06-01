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
public class quejitaDTO {
    private int idC;
    private int dA;
    private String contenido;
    private int anonimo;

    public int getIdC() {
        return idC;
    }

    public void setIdC(int idC) {
        this.idC = idC;
    }

    public int getdA() {
        return dA;
    }

    public void setdA(int dA) {
        this.dA = dA;
    }

    public String getContenido() {
        return contenido;
    }

    public void setContenido(String contenido) {
        this.contenido = contenido;
    }

    public int getAnonimo() {
        return anonimo;
    }

    public void setAnonimo(int anonimo) {
        this.anonimo = anonimo;
    }

    public quejitaDTO() {
    }

    public quejitaDTO(int idC, int dA, String contenido, int anonimo) {
        this.idC = idC;
        this.dA = dA;
        this.contenido = contenido;
        this.anonimo = anonimo;
    }
}
