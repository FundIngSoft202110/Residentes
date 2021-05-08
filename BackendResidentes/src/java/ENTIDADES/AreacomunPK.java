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
public class AreacomunPK implements Serializable {

    @Basic(optional = false)
    @Column(name = "IdArea")
    private int idArea;
    @Basic(optional = false)
    @NotNull
    @Column(name = "ConjuntoIdConjunto")
    private int conjuntoIdConjunto;

    public AreacomunPK() {
    }

    public AreacomunPK(int idArea, int conjuntoIdConjunto) {
        this.idArea = idArea;
        this.conjuntoIdConjunto = conjuntoIdConjunto;
    }

    public int getIdArea() {
        return idArea;
    }

    public void setIdArea(int idArea) {
        this.idArea = idArea;
    }

    public int getConjuntoIdConjunto() {
        return conjuntoIdConjunto;
    }

    public void setConjuntoIdConjunto(int conjuntoIdConjunto) {
        this.conjuntoIdConjunto = conjuntoIdConjunto;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (int) idArea;
        hash += (int) conjuntoIdConjunto;
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof AreacomunPK)) {
            return false;
        }
        AreacomunPK other = (AreacomunPK) object;
        if (this.idArea != other.idArea) {
            return false;
        }
        if (this.conjuntoIdConjunto != other.conjuntoIdConjunto) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.AreacomunPK[ idArea=" + idArea + ", conjuntoIdConjunto=" + conjuntoIdConjunto + " ]";
    }
    
}
