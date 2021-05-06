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
public class AsambleaPK implements Serializable {

    @Basic(optional = false)
    @Column(name = "IdAsamblea")
    private int idAsamblea;
    @Basic(optional = false)
    @NotNull
    @Column(name = "ConjuntoIdConjunto")
    private int conjuntoIdConjunto;

    public AsambleaPK() {
    }

    public AsambleaPK(int idAsamblea, int conjuntoIdConjunto) {
        this.idAsamblea = idAsamblea;
        this.conjuntoIdConjunto = conjuntoIdConjunto;
    }

    public int getIdAsamblea() {
        return idAsamblea;
    }

    public void setIdAsamblea(int idAsamblea) {
        this.idAsamblea = idAsamblea;
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
        hash += (int) idAsamblea;
        hash += (int) conjuntoIdConjunto;
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof AsambleaPK)) {
            return false;
        }
        AsambleaPK other = (AsambleaPK) object;
        if (this.idAsamblea != other.idAsamblea) {
            return false;
        }
        if (this.conjuntoIdConjunto != other.conjuntoIdConjunto) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.AsambleaPK[ idAsamblea=" + idAsamblea + ", conjuntoIdConjunto=" + conjuntoIdConjunto + " ]";
    }
    
}
