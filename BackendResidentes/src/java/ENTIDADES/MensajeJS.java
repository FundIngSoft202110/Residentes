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
public class MensajeJS {
    private int idConjunto;
    private int idEmpleado;
    private int idAdmin;
    private int idApto;
    private String contenido;
    private BigDecimal fecha_hora;
    private String RolEmpleado;
    private String RolAdmin;
    private String visto;

    public int getIdConjunto() {
        return idConjunto;
    }

    public void setIdConjunto(int idConjunto) {
        this.idConjunto = idConjunto;
    }

    public int getIdEmpleado() {
        return idEmpleado;
    }

    public void setIdEmpleado(int idEmpleado) {
        this.idEmpleado = idEmpleado;
    }

    public int getIdAdmin() {
        return idAdmin;
    }

    public void setIdAdmin(int idAdmin) {
        this.idAdmin = idAdmin;
    }

    public int getIdApto() {
        return idApto;
    }

    public void setIdApto(int idApto) {
        this.idApto = idApto;
    }

    public String getContenido() {
        return contenido;
    }

    public void setContenido(String contenido) {
        this.contenido = contenido;
    }

    public BigDecimal getFecha_hora() {
        return fecha_hora;
    }

    public void setFecha_hora(BigDecimal fecha_hora) {
        this.fecha_hora = fecha_hora;
    }

    public String getRolEmpleado() {
        return RolEmpleado;
    }

    public void setRolEmpleado(String RolEmpleado) {
        this.RolEmpleado = RolEmpleado;
    }

    public String getRolAdmin() {
        return RolAdmin;
    }

    public void setRolAdmin(String RolAdmin) {
        this.RolAdmin = RolAdmin;
    }

    public String getVisto() {
        return visto;
    }

    public void setVisto(String visto) {
        this.visto = visto;
    }

    public MensajeJS(int idConjunto, int idEmpleado, int idAdmin, int idApto, String contenido, BigDecimal fecha_hora, String RolEmpleado, String RolAdmin, String visto) {
        this.idConjunto = idConjunto;
        this.idEmpleado = idEmpleado;
        this.idAdmin = idAdmin;
        this.idApto = idApto;
        this.contenido = contenido;
        this.fecha_hora = fecha_hora;
        this.RolEmpleado = RolEmpleado;
        this.RolAdmin = RolAdmin;
        this.visto = visto;
    }

    public MensajeJS() {
    }
    
}
