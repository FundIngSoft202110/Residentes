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
public class ApartamentoPK implements Serializable {

    @Basic(optional = false)
    @Column(name = "IdApartamento")
    private int idApartamento;
    @Basic(optional = false)
    @NotNull
    @Column(name = "ConjuntoIdConjunto")
    private int conjuntoIdConjunto;

    public ApartamentoPK() {
    }

    public ApartamentoPK(int idApartamento, int conjuntoIdConjunto) {
        this.idApartamento = idApartamento;
        this.conjuntoIdConjunto = conjuntoIdConjunto;
    }

    public int getIdApartamento() {
        return idApartamento;
    }

    public void setIdApartamento(int idApartamento) {
        this.idApartamento = idApartamento;
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
        hash += (int) idApartamento;
        hash += (int) conjuntoIdConjunto;
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ApartamentoPK)) {
            return false;
        }
        ApartamentoPK other = (ApartamentoPK) object;
        if (this.idApartamento != other.idApartamento) {
            return false;
        }
        if (this.conjuntoIdConjunto != other.conjuntoIdConjunto) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.ApartamentoPK[ idApartamento=" + idApartamento + ", conjuntoIdConjunto=" + conjuntoIdConjunto + " ]";
    }
    
}
