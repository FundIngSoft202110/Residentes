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
public class AsambleaPK implements Serializable {

    @Basic(optional = false)
    @NotNull
    @Column(name = "IdAsamblea")
    private BigInteger idAsamblea;
    @Basic(optional = false)
    @NotNull
    @Column(name = "ConjuntoIdConjunto")
    private BigInteger conjuntoIdConjunto;

    public AsambleaPK() {
    }

    public AsambleaPK(BigInteger idAsamblea, BigInteger conjuntoIdConjunto) {
        this.idAsamblea = idAsamblea;
        this.conjuntoIdConjunto = conjuntoIdConjunto;
    }

    public BigInteger getIdAsamblea() {
        return idAsamblea;
    }

    public void setIdAsamblea(BigInteger idAsamblea) {
        this.idAsamblea = idAsamblea;
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
        hash += (idAsamblea != null ? idAsamblea.hashCode() : 0);
        hash += (conjuntoIdConjunto != null ? conjuntoIdConjunto.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof AsambleaPK)) {
            return false;
        }
        AsambleaPK other = (AsambleaPK) object;
        if ((this.idAsamblea == null && other.idAsamblea != null) || (this.idAsamblea != null && !this.idAsamblea.equals(other.idAsamblea))) {
            return false;
        }
        if ((this.conjuntoIdConjunto == null && other.conjuntoIdConjunto != null) || (this.conjuntoIdConjunto != null && !this.conjuntoIdConjunto.equals(other.conjuntoIdConjunto))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.AsambleaPK[ idAsamblea=" + idAsamblea + ", conjuntoIdConjunto=" + conjuntoIdConjunto + " ]";
    }
    
}
