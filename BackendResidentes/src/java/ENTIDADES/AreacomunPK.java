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
public class AreacomunPK implements Serializable {

    @Basic(optional = false)
    @NotNull
    @Column(name = "IdArea")
    private BigInteger idArea;
    @Basic(optional = false)
    @NotNull
    @Column(name = "ConjuntoIdConjunto")
    private BigInteger conjuntoIdConjunto;

    public AreacomunPK() {
    }

    public AreacomunPK(BigInteger idArea, BigInteger conjuntoIdConjunto) {
        this.idArea = idArea;
        this.conjuntoIdConjunto = conjuntoIdConjunto;
    }

    public BigInteger getIdArea() {
        return idArea;
    }

    public void setIdArea(BigInteger idArea) {
        this.idArea = idArea;
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
        hash += (idArea != null ? idArea.hashCode() : 0);
        hash += (conjuntoIdConjunto != null ? conjuntoIdConjunto.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof AreacomunPK)) {
            return false;
        }
        AreacomunPK other = (AreacomunPK) object;
        if ((this.idArea == null && other.idArea != null) || (this.idArea != null && !this.idArea.equals(other.idArea))) {
            return false;
        }
        if ((this.conjuntoIdConjunto == null && other.conjuntoIdConjunto != null) || (this.conjuntoIdConjunto != null && !this.conjuntoIdConjunto.equals(other.conjuntoIdConjunto))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.AreacomunPK[ idArea=" + idArea + ", conjuntoIdConjunto=" + conjuntoIdConjunto + " ]";
    }
    
}
