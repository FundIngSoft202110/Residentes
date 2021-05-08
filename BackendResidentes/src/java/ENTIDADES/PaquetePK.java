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
public class PaquetePK implements Serializable {

    @Basic(optional = false)
    @Column(name = "IdPaqueete")
    private int idPaqueete;
    @Basic(optional = false)
    @NotNull
    @Column(name = "ApartamentoConjuntoIdConjunto")
    private int apartamentoConjuntoIdConjunto;
    @Basic(optional = false)
    @NotNull
    @Column(name = "ApartamentoIdApartamento")
    private int apartamentoIdApartamento;

    public PaquetePK() {
    }

    public PaquetePK(int idPaqueete, int apartamentoConjuntoIdConjunto, int apartamentoIdApartamento) {
        this.idPaqueete = idPaqueete;
        this.apartamentoConjuntoIdConjunto = apartamentoConjuntoIdConjunto;
        this.apartamentoIdApartamento = apartamentoIdApartamento;
    }

    public int getIdPaqueete() {
        return idPaqueete;
    }

    public void setIdPaqueete(int idPaqueete) {
        this.idPaqueete = idPaqueete;
    }

    public int getApartamentoConjuntoIdConjunto() {
        return apartamentoConjuntoIdConjunto;
    }

    public void setApartamentoConjuntoIdConjunto(int apartamentoConjuntoIdConjunto) {
        this.apartamentoConjuntoIdConjunto = apartamentoConjuntoIdConjunto;
    }

    public int getApartamentoIdApartamento() {
        return apartamentoIdApartamento;
    }

    public void setApartamentoIdApartamento(int apartamentoIdApartamento) {
        this.apartamentoIdApartamento = apartamentoIdApartamento;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (int) idPaqueete;
        hash += (int) apartamentoConjuntoIdConjunto;
        hash += (int) apartamentoIdApartamento;
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof PaquetePK)) {
            return false;
        }
        PaquetePK other = (PaquetePK) object;
        if (this.idPaqueete != other.idPaqueete) {
            return false;
        }
        if (this.apartamentoConjuntoIdConjunto != other.apartamentoConjuntoIdConjunto) {
            return false;
        }
        if (this.apartamentoIdApartamento != other.apartamentoIdApartamento) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.PaquetePK[ idPaqueete=" + idPaqueete + ", apartamentoConjuntoIdConjunto=" + apartamentoConjuntoIdConjunto + ", apartamentoIdApartamento=" + apartamentoIdApartamento + " ]";
    }
    
}
