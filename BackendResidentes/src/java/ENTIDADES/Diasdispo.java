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
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
    @NamedQuery(name = "Diasdispo.findByIdDiasDispo", query = "SELECT d FROM Diasdispo d WHERE d.idDiasDispo = :idDiasDispo"),
    @NamedQuery(name = "Diasdispo.findByHoraApertura", query = "SELECT d FROM Diasdispo d WHERE d.horaApertura = :horaApertura"),
    @NamedQuery(name = "Diasdispo.findByHoraCierre", query = "SELECT d FROM Diasdispo d WHERE d.horaCierre = :horaCierre"),
    @NamedQuery(name = "Diasdispo.findByNombreDia", query = "SELECT d FROM Diasdispo d WHERE d.nombreDia = :nombreDia")})
public class Diasdispo implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "IdDiasDispo")
    private Integer idDiasDispo;
    @Basic(optional = false)
    @NotNull
    @Column(name = "HoraApertura")
    private BigDecimal horaApertura;
    @Basic(optional = false)
    @NotNull
    @Column(name = "horaCierre")
    private BigDecimal horaCierre;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 10)
    @Column(name = "NombreDia")
    private String nombreDia;
    @JoinColumns({
        @JoinColumn(name = "AreaComunIdArea", referencedColumnName = "IdArea"),
        @JoinColumn(name = "AreaComunConjuntoIdConjunto", referencedColumnName = "ConjuntoIdConjunto")})
    @ManyToOne(optional = false)
    private Areacomun areacomun;

    public Diasdispo() {
    }

    public Diasdispo(Integer idDiasDispo) {
        this.idDiasDispo = idDiasDispo;
    }

    public Diasdispo(Integer idDiasDispo, BigDecimal horaApertura,BigDecimal horaCierre, String nombreDia) {
        this.idDiasDispo = idDiasDispo;
        this.horaApertura = horaApertura;
        this.horaCierre = horaCierre;
        this.nombreDia = nombreDia;
    }

    public Integer getIdDiasDispo() {
        return idDiasDispo;
    }

    public void setIdDiasDispo(Integer idDiasDispo) {
        this.idDiasDispo = idDiasDispo;
    }

    public BigDecimal getHoraApertura() {
        return horaApertura;
    }

    public void setHoraApertura(BigDecimal horaApertura) {
        this.horaApertura = horaApertura;
    }

    public BigDecimal getHoraCierre() {
        return horaCierre;
    }

    public void setHoraCierre(BigDecimal horaCierre) {
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
        hash += (idDiasDispo != null ? idDiasDispo.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Diasdispo)) {
            return false;
        }
        Diasdispo other = (Diasdispo) object;
        if ((this.idDiasDispo == null && other.idDiasDispo != null) || (this.idDiasDispo != null && !this.idDiasDispo.equals(other.idDiasDispo))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.Diasdispo[ idDiasDispo=" + idDiasDispo + " ]";
    }
    
}
