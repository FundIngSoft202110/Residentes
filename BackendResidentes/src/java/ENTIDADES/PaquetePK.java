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
public class PaquetePK implements Serializable {

    @Basic(optional = false)
    @NotNull
    @Column(name = "IdPaqueete")
    private BigInteger idPaqueete;
    @Basic(optional = false)
    @NotNull
    @Column(name = "ApartamentoConjuntoIdConjunto")
    private BigInteger apartamentoConjuntoIdConjunto;
    @Basic(optional = false)
    @NotNull
    @Column(name = "ApartamentoIdApartamento")
    private BigInteger apartamentoIdApartamento;

    public PaquetePK() {
    }

    public PaquetePK(BigInteger idPaqueete, BigInteger apartamentoConjuntoIdConjunto, BigInteger apartamentoIdApartamento) {
        this.idPaqueete = idPaqueete;
        this.apartamentoConjuntoIdConjunto = apartamentoConjuntoIdConjunto;
        this.apartamentoIdApartamento = apartamentoIdApartamento;
    }

    public BigInteger getIdPaqueete() {
        return idPaqueete;
    }

    public void setIdPaqueete(BigInteger idPaqueete) {
        this.idPaqueete = idPaqueete;
    }

    public BigInteger getApartamentoConjuntoIdConjunto() {
        return apartamentoConjuntoIdConjunto;
    }

    public void setApartamentoConjuntoIdConjunto(BigInteger apartamentoConjuntoIdConjunto) {
        this.apartamentoConjuntoIdConjunto = apartamentoConjuntoIdConjunto;
    }

    public BigInteger getApartamentoIdApartamento() {
        return apartamentoIdApartamento;
    }

    public void setApartamentoIdApartamento(BigInteger apartamentoIdApartamento) {
        this.apartamentoIdApartamento = apartamentoIdApartamento;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idPaqueete != null ? idPaqueete.hashCode() : 0);
        hash += (apartamentoConjuntoIdConjunto != null ? apartamentoConjuntoIdConjunto.hashCode() : 0);
        hash += (apartamentoIdApartamento != null ? apartamentoIdApartamento.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof PaquetePK)) {
            return false;
        }
        PaquetePK other = (PaquetePK) object;
        if ((this.idPaqueete == null && other.idPaqueete != null) || (this.idPaqueete != null && !this.idPaqueete.equals(other.idPaqueete))) {
            return false;
        }
        if ((this.apartamentoConjuntoIdConjunto == null && other.apartamentoConjuntoIdConjunto != null) || (this.apartamentoConjuntoIdConjunto != null && !this.apartamentoConjuntoIdConjunto.equals(other.apartamentoConjuntoIdConjunto))) {
            return false;
        }
        if ((this.apartamentoIdApartamento == null && other.apartamentoIdApartamento != null) || (this.apartamentoIdApartamento != null && !this.apartamentoIdApartamento.equals(other.apartamentoIdApartamento))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.PaquetePK[ idPaqueete=" + idPaqueete + ", apartamentoConjuntoIdConjunto=" + apartamentoConjuntoIdConjunto + ", apartamentoIdApartamento=" + apartamentoIdApartamento + " ]";
    }
    
}
