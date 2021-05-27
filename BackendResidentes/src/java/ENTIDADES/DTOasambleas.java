/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ENTIDADES;

import java.math.BigDecimal;

/**
 *
 * @author Hp
 */
public class DTOasambleas {
    private int id;
    private String tema;
    private String estado;
    private BigDecimal fecha;

    public DTOasambleas() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTema() {
        return tema;
    }

    public void setTema(String tema) {
        this.tema = tema;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public BigDecimal getFecha() {
        return fecha;
    }

    public void setFecha(BigDecimal fecha) {
        this.fecha = fecha;
    }

    
    
}
