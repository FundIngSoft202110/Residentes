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
public class MensajePK implements Serializable {

    @Basic(optional = false)
    @Column(name = "IdMensaje")
    private int idMensaje;
    @Basic(optional = false)
    @NotNull
    @Column(name = "ConjuntoIdConjunto")
    private int conjuntoIdConjunto;

    public MensajePK() {
    }

    public MensajePK(int idMensaje, int conjuntoIdConjunto) {
        this.idMensaje = idMensaje;
        this.conjuntoIdConjunto = conjuntoIdConjunto;
    }

    public int getIdMensaje() {
        return idMensaje;
    }

    public void setIdMensaje(int idMensaje) {
        this.idMensaje = idMensaje;
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
        hash += (int) idMensaje;
        hash += (int) conjuntoIdConjunto;
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof MensajePK)) {
            return false;
        }
        MensajePK other = (MensajePK) object;
        if (this.idMensaje != other.idMensaje) {
            return false;
        }
        if (this.conjuntoIdConjunto != other.conjuntoIdConjunto) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.MensajePK[ idMensaje=" + idMensaje + ", conjuntoIdConjunto=" + conjuntoIdConjunto + " ]";
    }
    
}
