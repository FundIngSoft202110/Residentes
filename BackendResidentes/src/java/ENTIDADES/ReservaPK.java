/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ENTIDADES;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;

/**
 *
 * @author alejandrodiaz
 */
@Embeddable
public class ReservaPK implements Serializable {

    @Basic(optional = false)
    @Column(name = "IdReserva")
    private int idReserva;
    @Basic(optional = false)
    @NotNull
    @Column(name = "AreaComunIdArea")
    private int areaComunIdArea;
    @Basic(optional = false)
    @NotNull
    @Column(name = "ApartamentoIdApartamento")
    private int apartamentoIdApartamento;
    @Basic(optional = false)
    @NotNull
    @Column(name = "AreaComunConjuntoIdConjunto")
    private int areaComunConjuntoIdConjunto;
    @Basic(optional = false)
    @NotNull
    @Column(name = "ApartamentoConjuntoIdConjunto")
    private int apartamentoConjuntoIdConjunto;

    public ReservaPK() {
    }

    public ReservaPK(int idReserva, int areaComunIdArea, int apartamentoIdApartamento, int areaComunConjuntoIdConjunto, int apartamentoConjuntoIdConjunto) {
        this.idReserva = idReserva;
        this.areaComunIdArea = areaComunIdArea;
        this.apartamentoIdApartamento = apartamentoIdApartamento;
        this.areaComunConjuntoIdConjunto = areaComunConjuntoIdConjunto;
        this.apartamentoConjuntoIdConjunto = apartamentoConjuntoIdConjunto;
    }

    public int getIdReserva() {
        return idReserva;
    }

    public void setIdReserva(int idReserva) {
        this.idReserva = idReserva;
    }

    public int getAreaComunIdArea() {
        return areaComunIdArea;
    }

    public void setAreaComunIdArea(int areaComunIdArea) {
        this.areaComunIdArea = areaComunIdArea;
    }

    public int getApartamentoIdApartamento() {
        return apartamentoIdApartamento;
    }

    public void setApartamentoIdApartamento(int apartamentoIdApartamento) {
        this.apartamentoIdApartamento = apartamentoIdApartamento;
    }

    public int getAreaComunConjuntoIdConjunto() {
        return areaComunConjuntoIdConjunto;
    }

    public void setAreaComunConjuntoIdConjunto(int areaComunConjuntoIdConjunto) {
        this.areaComunConjuntoIdConjunto = areaComunConjuntoIdConjunto;
    }

    public int getApartamentoConjuntoIdConjunto() {
        return apartamentoConjuntoIdConjunto;
    }

    public void setApartamentoConjuntoIdConjunto(int apartamentoConjuntoIdConjunto) {
        this.apartamentoConjuntoIdConjunto = apartamentoConjuntoIdConjunto;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (int) idReserva;
        hash += (int) areaComunIdArea;
        hash += (int) apartamentoIdApartamento;
        hash += (int) areaComunConjuntoIdConjunto;
        hash += (int) apartamentoConjuntoIdConjunto;
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ReservaPK)) {
            return false;
        }
        ReservaPK other = (ReservaPK) object;
        if (this.idReserva != other.idReserva) {
            return false;
        }
        if (this.areaComunIdArea != other.areaComunIdArea) {
            return false;
        }
        if (this.apartamentoIdApartamento != other.apartamentoIdApartamento) {
            return false;
        }
        if (this.areaComunConjuntoIdConjunto != other.areaComunConjuntoIdConjunto) {
            return false;
        }
        if (this.apartamentoConjuntoIdConjunto != other.apartamentoConjuntoIdConjunto) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.ReservaPK[ idReserva=" + idReserva + ", areaComunIdArea=" + areaComunIdArea + ", apartamentoIdApartamento=" + apartamentoIdApartamento + ", areaComunConjuntoIdConjunto=" + areaComunConjuntoIdConjunto + ", apartamentoConjuntoIdConjunto=" + apartamentoConjuntoIdConjunto + " ]";
    }
    
}
