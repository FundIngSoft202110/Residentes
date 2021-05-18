/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ENTIDADES;

import java.io.Serializable;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author alejandrodiaz
 */
@Entity
@Table(name = "paquete")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Paquete.findAll", query = "SELECT p FROM Paquete p"),
    @NamedQuery(name = "Paquete.findByIdPaqueete", query = "SELECT p FROM Paquete p WHERE p.paquetePK.idPaqueete = :idPaqueete"),
    @NamedQuery(name = "Paquete.findByApartamentoConjuntoIdConjunto", query = "SELECT p FROM Paquete p WHERE p.paquetePK.apartamentoConjuntoIdConjunto = :apartamentoConjuntoIdConjunto"),
    @NamedQuery(name = "Paquete.findByApartamentoIdApartamento", query = "SELECT p FROM Paquete p WHERE p.paquetePK.apartamentoIdApartamento = :apartamentoIdApartamento"),
    @NamedQuery(name = "Paquete.findByTamano", query = "SELECT p FROM Paquete p WHERE p.tamano = :tamano"),
    @NamedQuery(name = "Paquete.findByFecha", query = "SELECT p FROM Paquete p WHERE p.fecha = :fecha"),
    @NamedQuery(name = "Paquete.findByHora", query = "SELECT p FROM Paquete p WHERE p.hora = :hora"),
    @NamedQuery(name = "Paquete.findByRemitente", query = "SELECT p FROM Paquete p WHERE p.remitente = :remitente")})
public class Paquete implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected PaquetePK paquetePK;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 7)
    @Column(name = "Tamano")
    private String tamano;
    @Basic(optional = false)
    @NotNull
    @Column(name = "Fecha")
    @Temporal(TemporalType.DATE)
    private int fecha;
    @Basic(optional = false)
    @NotNull
    @Column(name = "Hora")
    private BigDecimal hora;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "Remitente")
    private String remitente;
    @JoinColumns({
        @JoinColumn(name = "ApartamentoIdApartamento", referencedColumnName = "IdApartamento", insertable = false, updatable = false),
        @JoinColumn(name = "ApartamentoConjuntoIdConjunto", referencedColumnName = "ConjuntoIdConjunto", insertable = false, updatable = false)})
    @ManyToOne(optional = false)
    private Apartamento apartamento;

    public Paquete() {
    }

    public Paquete(PaquetePK paquetePK) {
        this.paquetePK = paquetePK;
    }

    public Paquete(PaquetePK paquetePK, String tamano, int fecha, BigDecimal hora, String remitente) {
        this.paquetePK = paquetePK;
        this.tamano = tamano;
        this.fecha = fecha;
        this.hora = hora;
        this.remitente = remitente;
    }

    public Paquete(int idPaqueete, int apartamentoConjuntoIdConjunto, int apartamentoIdApartamento) {
        this.paquetePK = new PaquetePK(idPaqueete, apartamentoConjuntoIdConjunto, apartamentoIdApartamento);
    }

    public PaquetePK getPaquetePK() {
        return paquetePK;
    }

    public void setPaquetePK(PaquetePK paquetePK) {
        this.paquetePK = paquetePK;
    }

    public String getTamano() {
        return tamano;
    }

    public void setTamano(String tamano) {
        this.tamano = tamano;
    }

    public int getFecha() {
        return fecha;
    }

    public void setFecha(int fecha) {
        this.fecha = fecha;
    }

    public BigDecimal getHora() {
        return hora;
    }

    public void setHora(BigDecimal hora) {
        this.hora = hora;
    }

    public String getRemitente() {
        return remitente;
    }

    public void setRemitente(String remitente) {
        this.remitente = remitente;
    }

    public Apartamento getApartamento() {
        return apartamento;
    }

    public void setApartamento(Apartamento apartamento) {
        this.apartamento = apartamento;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (paquetePK != null ? paquetePK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Paquete)) {
            return false;
        }
        Paquete other = (Paquete) object;
        if ((this.paquetePK == null && other.paquetePK != null) || (this.paquetePK != null && !this.paquetePK.equals(other.paquetePK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.Paquete[ paquetePK=" + paquetePK + " ]";
    }
    
}
