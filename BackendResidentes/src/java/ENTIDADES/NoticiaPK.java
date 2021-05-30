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
public class NoticiaPK implements Serializable {

    @Basic(optional = false)
    @Column(name = "IdNoticia")
    private int idNoticia;
    @Basic(optional = false)
    @NotNull
    @Column(name = "ConjuntoIdConjunto")
    private int conjuntoIdConjunto;

    public NoticiaPK() {
    }

    public NoticiaPK(int idNoticia, int conjuntoIdConjunto) {
        this.idNoticia = idNoticia;
        this.conjuntoIdConjunto = conjuntoIdConjunto;
    }

    public int getIdNoticia() {
        return idNoticia;
    }

    public void setIdNoticia(int idNoticia) {
        this.idNoticia = idNoticia;
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
        hash += (int) idNoticia;
        hash += (int) conjuntoIdConjunto;
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof NoticiaPK)) {
            return false;
        }
        NoticiaPK other = (NoticiaPK) object;
        if (this.idNoticia != other.idNoticia) {
            return false;
        }
        if (this.conjuntoIdConjunto != other.conjuntoIdConjunto) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.NoticiaPK[ idNoticia=" + idNoticia + ", conjuntoIdConjunto=" + conjuntoIdConjunto + " ]";
    }
    
}
