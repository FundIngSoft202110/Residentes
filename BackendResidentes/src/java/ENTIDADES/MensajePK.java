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
public class MensajePK implements Serializable {

    @Basic(optional = false)
    @NotNull
    @Column(name = "IdMensaje")
    private BigInteger idMensaje;
    @Basic(optional = false)
    @NotNull
    @Column(name = "ConjuntoIdConjunto")
    private BigInteger conjuntoIdConjunto;

    public MensajePK() {
    }

    public MensajePK(BigInteger idMensaje, BigInteger conjuntoIdConjunto) {
        this.idMensaje = idMensaje;
        this.conjuntoIdConjunto = conjuntoIdConjunto;
    }

    public BigInteger getIdMensaje() {
        return idMensaje;
    }

    public void setIdMensaje(BigInteger idMensaje) {
        this.idMensaje = idMensaje;
    }

    public BigInteger getConjuntoIdConjunto() {
        return conjuntoIdConjunto;
    }

    public void setConjuntoIdConjunto(BigInteger conjuntoIdConjunto) {
        this.conjuntoIdConjunto = conjuntoIdConjunto;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idMensaje != null ? idMensaje.hashCode() : 0);
        hash += (conjuntoIdConjunto != null ? conjuntoIdConjunto.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof MensajePK)) {
            return false;
        }
        MensajePK other = (MensajePK) object;
        if ((this.idMensaje == null && other.idMensaje != null) || (this.idMensaje != null && !this.idMensaje.equals(other.idMensaje))) {
            return false;
        }
        if ((this.conjuntoIdConjunto == null && other.conjuntoIdConjunto != null) || (this.conjuntoIdConjunto != null && !this.conjuntoIdConjunto.equals(other.conjuntoIdConjunto))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.MensajePK[ idMensaje=" + idMensaje + ", conjuntoIdConjunto=" + conjuntoIdConjunto + " ]";
    }
    
}
