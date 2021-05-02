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
public class NoticiaPK implements Serializable {

    @Basic(optional = false)
    @NotNull
    @Column(name = "IdNoticia")
    private BigInteger idNoticia;
    @Basic(optional = false)
    @NotNull
    @Column(name = "ConjuntoIdConjunto")
    private BigInteger conjuntoIdConjunto;

    public NoticiaPK() {
    }

    public NoticiaPK(BigInteger idNoticia, BigInteger conjuntoIdConjunto) {
        this.idNoticia = idNoticia;
        this.conjuntoIdConjunto = conjuntoIdConjunto;
    }

    public BigInteger getIdNoticia() {
        return idNoticia;
    }

    public void setIdNoticia(BigInteger idNoticia) {
        this.idNoticia = idNoticia;
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
        hash += (idNoticia != null ? idNoticia.hashCode() : 0);
        hash += (conjuntoIdConjunto != null ? conjuntoIdConjunto.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof NoticiaPK)) {
            return false;
        }
        NoticiaPK other = (NoticiaPK) object;
        if ((this.idNoticia == null && other.idNoticia != null) || (this.idNoticia != null && !this.idNoticia.equals(other.idNoticia))) {
            return false;
        }
        if ((this.conjuntoIdConjunto == null && other.conjuntoIdConjunto != null) || (this.conjuntoIdConjunto != null && !this.conjuntoIdConjunto.equals(other.conjuntoIdConjunto))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.NoticiaPK[ idNoticia=" + idNoticia + ", conjuntoIdConjunto=" + conjuntoIdConjunto + " ]";
    }
    
}
