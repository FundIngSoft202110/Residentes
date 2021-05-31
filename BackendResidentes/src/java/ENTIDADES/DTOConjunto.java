/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ENTIDADES;

import java.math.BigDecimal;

/**
 *
 * @author david
 */
public class DTOConjunto {
    private String nombre;
    private String linkPago;
    private String direccion;
    private int precioAdmin;
    private int numTorres;
    private int numPisos;
    private int numAptos;
    
    private BigDecimal numTorresBig;
    private BigDecimal numPisosBig;
    private BigDecimal numAptosBig;

    public DTOConjunto(String nombre, String linkPago, String direccion, int precioAdmin, int numTorres, int numPisos, int numAptos, BigDecimal numTorresBig, BigDecimal numPisosBig, BigDecimal numAptosBig) {
        this.nombre = nombre;
        this.linkPago = linkPago;
        this.direccion = direccion;
        this.precioAdmin = precioAdmin;
        this.numTorres = numTorres;
        this.numPisos = numPisos;
        this.numAptos = numAptos;
        this.numTorresBig = numTorresBig;
        this.numPisosBig = numPisosBig;
        this.numAptosBig = numAptosBig;
    }

    public DTOConjunto() {
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getLinkPago() {
        return linkPago;
    }

    public void setLinkPago(String linkPago) {
        this.linkPago = linkPago;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public int getPrecioAdmin() {
        return precioAdmin;
    }

    public void setPrecioAdmin(int precioAdmin) {
        this.precioAdmin = precioAdmin;
    }

    public int getNumTorres() {
        return numTorres;
    }

    public void setNumTorres(int numTorres) {
        this.numTorres = numTorres;
    }

    public int getNumPisos() {
        return numPisos;
    }

    public void setNumPisos(int numPisos) {
        this.numPisos = numPisos;
    }

    public int getNumAptos() {
        return numAptos;
    }

    public void setNumAptos(int numAptos) {
        this.numAptos = numAptos;
    }

    public BigDecimal getNumTorresBig() {
        return numTorresBig;
    }

    public void setNumTorresBig(BigDecimal numTorresBig) {
        this.numTorresBig = numTorresBig;
    }

    public BigDecimal getNumPisosBig() {
        return numPisosBig;
    }

    public void setNumPisosBig(BigDecimal numPisosBig) {
        this.numPisosBig = numPisosBig;
    }

    public BigDecimal getNumAptosBig() {
        return numAptosBig;
    }

    public void setNumAptosBig(BigDecimal numAptosBig) {
        this.numAptosBig = numAptosBig;
    }
    


}
