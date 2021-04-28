/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ENTIDADES;

import java.io.Serializable;
import java.math.BigDecimal;
import java.math.BigInteger;
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
@Table(name = "diasdispo")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Diasdispo.findAll", query = "SELECT d FROM Diasdispo d"),
    @NamedQuery(name = "Diasdispo.findById", query = "SELECT d FROM Diasdispo d WHERE d.id = :id"),
    @NamedQuery(name = "Diasdispo.findByHoraApertura", query = "SELECT d FROM Diasdispo d WHERE d.horaApertura = :horaApertura"),
    @NamedQuery(name = "Diasdispo.findByHoraCierre", query = "SELECT d FROM Diasdispo d WHERE d.horaCierre = :horaCierre"),
    @NamedQuery(name = "Diasdispo.findByNombreDia", query = "SELECT d FROM Diasdispo d WHERE d.nombreDia = :nombreDia")})
public class Diasdispo implements Serializable {

    private static final long serialVersionUID = 1L;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "ID")
    private BigDecimal id;
    @Basic(optional = false)
    @NotNull
    @Column(name = "HoraApertura")
    private BigInteger horaApertura;
    @Basic(optional = false)
    @NotNull
    @Column(name = "horaCierre")
    private BigInteger horaCierre;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 10)
    @Column(name = "NombreDia")
    private String nombreDia;
    @JoinColumns({
        @JoinColumn(name = "AreaComunIdArea", referencedColumnName = "IdArea"),
        @JoinColumn(name = "AreaComunConjuntoIdConjunto", referencedColumnName = "ConjuntoIdConjunto")})
    @ManyToOne
    private Areacomun areacomun;

    public Diasdispo() {
    }

    public Diasdispo(BigDecimal id) {
        this.id = id;
    }

    public Diasdispo(BigDecimal id, BigInteger horaApertura, BigInteger horaCierre, String nombreDia) {
        this.id = id;
        this.horaApertura = horaApertura;
        this.horaCierre = horaCierre;
        this.nombreDia = nombreDia;
    }

    public BigDecimal getId() {
        return id;
    }

    public void setId(BigDecimal id) {
        this.id = id;
    }

    public BigInteger getHoraApertura() {
        return horaApertura;
    }

    public void setHoraApertura(BigInteger horaApertura) {
        this.horaApertura = horaApertura;
    }

    public BigInteger getHoraCierre() {
        return horaCierre;
    }

    public void setHoraCierre(BigInteger horaCierre) {
        this.horaCierre = horaCierre;
    }

    public String getNombreDia() {
        return nombreDia;
    }

    public void setNombreDia(String nombreDia) {
        this.nombreDia = nombreDia;
    }

    public Areacomun getAreacomun() {
        return areacomun;
    }

    public void setAreacomun(Areacomun areacomun) {
        this.areacomun = areacomun;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Diasdispo)) {
            return false;
        }
        Diasdispo other = (Diasdispo) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.Diasdispo[ id=" + id + " ]";
    }
    
}
