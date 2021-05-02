/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ENTIDADES;

import java.io.Serializable;
import java.math.BigDecimal;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author alejandrodiaz
 */
@Entity
@Table(name = "queja")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Queja.findAll", query = "SELECT q FROM Queja q"),
    @NamedQuery(name = "Queja.findByIdQueja", query = "SELECT q FROM Queja q WHERE q.idQueja = :idQueja"),
    @NamedQuery(name = "Queja.findByAsunto", query = "SELECT q FROM Queja q WHERE q.asunto = :asunto")})
public class Queja implements Serializable {

    private static final long serialVersionUID = 1L;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "IdQueja")
    private BigDecimal idQueja;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "Asunto")
    private String asunto;
    @JoinColumns({
        @JoinColumn(name = "ApartamentoIdApartamento", referencedColumnName = "IdApartamento"),
        @JoinColumn(name = "ApartamentoConjuntoIdConjunto", referencedColumnName = "ConjuntoIdConjunto")})
    @ManyToOne
    private Apartamento apartamento;
    @JoinColumn(name = "ConjuntoIdConjunto", referencedColumnName = "IdConjunto")
    @ManyToOne
    private Conjunto conjuntoIdConjunto;

    public Queja() {
    }

    public Queja(BigDecimal idQueja) {
        this.idQueja = idQueja;
    }

    public Queja(BigDecimal idQueja, String asunto) {
        this.idQueja = idQueja;
        this.asunto = asunto;
    }

    public BigDecimal getIdQueja() {
        return idQueja;
    }

    public void setIdQueja(BigDecimal idQueja) {
        this.idQueja = idQueja;
    }

    public String getAsunto() {
        return asunto;
    }

    public void setAsunto(String asunto) {
        this.asunto = asunto;
    }

    public Apartamento getApartamento() {
        return apartamento;
    }

    public void setApartamento(Apartamento apartamento) {
        this.apartamento = apartamento;
    }

    public Conjunto getConjuntoIdConjunto() {
        return conjuntoIdConjunto;
    }

    public void setConjuntoIdConjunto(Conjunto conjuntoIdConjunto) {
        this.conjuntoIdConjunto = conjuntoIdConjunto;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idQueja != null ? idQueja.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Queja)) {
            return false;
        }
        Queja other = (Queja) object;
        if ((this.idQueja == null && other.idQueja != null) || (this.idQueja != null && !this.idQueja.equals(other.idQueja))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.Queja[ idQueja=" + idQueja + " ]";
    }
    
}
