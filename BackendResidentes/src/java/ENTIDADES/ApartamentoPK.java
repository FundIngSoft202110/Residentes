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
public class ApartamentoPK implements Serializable {

    @Basic(optional = false)
    @NotNull
    @Column(name = "IdApartamento")
    private BigInteger idApartamento;
    @Basic(optional = false)
    @NotNull
    @Column(name = "ConjuntoIdConjunto")
    private BigInteger conjuntoIdConjunto;

    public ApartamentoPK() {
    }

    public ApartamentoPK(BigInteger idApartamento, BigInteger conjuntoIdConjunto) {
        this.idApartamento = idApartamento;
        this.conjuntoIdConjunto = conjuntoIdConjunto;
    }

    public BigInteger getIdApartamento() {
        return idApartamento;
    }

    public void setIdApartamento(BigInteger idApartamento) {
        this.idApartamento = idApartamento;
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
        hash += (idApartamento != null ? idApartamento.hashCode() : 0);
        hash += (conjuntoIdConjunto != null ? conjuntoIdConjunto.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ApartamentoPK)) {
            return false;
        }
        ApartamentoPK other = (ApartamentoPK) object;
        if ((this.idApartamento == null && other.idApartamento != null) || (this.idApartamento != null && !this.idApartamento.equals(other.idApartamento))) {
            return false;
        }
        if ((this.conjuntoIdConjunto == null && other.conjuntoIdConjunto != null) || (this.conjuntoIdConjunto != null && !this.conjuntoIdConjunto.equals(other.conjuntoIdConjunto))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.ApartamentoPK[ idApartamento=" + idApartamento + ", conjuntoIdConjunto=" + conjuntoIdConjunto + " ]";
    }
    
}
