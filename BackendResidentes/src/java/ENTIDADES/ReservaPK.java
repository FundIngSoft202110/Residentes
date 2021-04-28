/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ENTIDADES;

import java.io.Serializable;
import java.math.BigInteger;
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
    @NotNull
    @Column(name = "AreaComunIdArea")
    private BigInteger areaComunIdArea;
    @Basic(optional = false)
    @NotNull
    @Column(name = "ApartamentoIdApartamento")
    private BigInteger apartamentoIdApartamento;
    @Basic(optional = false)
    @NotNull
    @Column(name = "AreaComunConjuntoIdConjunto")
    private BigInteger areaComunConjuntoIdConjunto;
    @Basic(optional = false)
    @NotNull
    @Column(name = "ApartamentoConjuntoIdConjunto")
    private BigInteger apartamentoConjuntoIdConjunto;

    public ReservaPK() {
    }

    public ReservaPK(BigInteger areaComunIdArea, BigInteger apartamentoIdApartamento, BigInteger areaComunConjuntoIdConjunto, BigInteger apartamentoConjuntoIdConjunto) {
        this.areaComunIdArea = areaComunIdArea;
        this.apartamentoIdApartamento = apartamentoIdApartamento;
        this.areaComunConjuntoIdConjunto = areaComunConjuntoIdConjunto;
        this.apartamentoConjuntoIdConjunto = apartamentoConjuntoIdConjunto;
    }

    public BigInteger getAreaComunIdArea() {
        return areaComunIdArea;
    }

    public void setAreaComunIdArea(BigInteger areaComunIdArea) {
        this.areaComunIdArea = areaComunIdArea;
    }

    public BigInteger getApartamentoIdApartamento() {
        return apartamentoIdApartamento;
    }

    public void setApartamentoIdApartamento(BigInteger apartamentoIdApartamento) {
        this.apartamentoIdApartamento = apartamentoIdApartamento;
    }

    public BigInteger getAreaComunConjuntoIdConjunto() {
        return areaComunConjuntoIdConjunto;
    }

    public void setAreaComunConjuntoIdConjunto(BigInteger areaComunConjuntoIdConjunto) {
        this.areaComunConjuntoIdConjunto = areaComunConjuntoIdConjunto;
    }

    public BigInteger getApartamentoConjuntoIdConjunto() {
        return apartamentoConjuntoIdConjunto;
    }

    public void setApartamentoConjuntoIdConjunto(BigInteger apartamentoConjuntoIdConjunto) {
        this.apartamentoConjuntoIdConjunto = apartamentoConjuntoIdConjunto;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (areaComunIdArea != null ? areaComunIdArea.hashCode() : 0);
        hash += (apartamentoIdApartamento != null ? apartamentoIdApartamento.hashCode() : 0);
        hash += (areaComunConjuntoIdConjunto != null ? areaComunConjuntoIdConjunto.hashCode() : 0);
        hash += (apartamentoConjuntoIdConjunto != null ? apartamentoConjuntoIdConjunto.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ReservaPK)) {
            return false;
        }
        ReservaPK other = (ReservaPK) object;
        if ((this.areaComunIdArea == null && other.areaComunIdArea != null) || (this.areaComunIdArea != null && !this.areaComunIdArea.equals(other.areaComunIdArea))) {
            return false;
        }
        if ((this.apartamentoIdApartamento == null && other.apartamentoIdApartamento != null) || (this.apartamentoIdApartamento != null && !this.apartamentoIdApartamento.equals(other.apartamentoIdApartamento))) {
            return false;
        }
        if ((this.areaComunConjuntoIdConjunto == null && other.areaComunConjuntoIdConjunto != null) || (this.areaComunConjuntoIdConjunto != null && !this.areaComunConjuntoIdConjunto.equals(other.areaComunConjuntoIdConjunto))) {
            return false;
        }
        if ((this.apartamentoConjuntoIdConjunto == null && other.apartamentoConjuntoIdConjunto != null) || (this.apartamentoConjuntoIdConjunto != null && !this.apartamentoConjuntoIdConjunto.equals(other.apartamentoConjuntoIdConjunto))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.ReservaPK[ areaComunIdArea=" + areaComunIdArea + ", apartamentoIdApartamento=" + apartamentoIdApartamento + ", areaComunConjuntoIdConjunto=" + areaComunConjuntoIdConjunto + ", apartamentoConjuntoIdConjunto=" + apartamentoConjuntoIdConjunto + " ]";
    }
    
}
