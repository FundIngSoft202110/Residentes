/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ENTIDADES;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author alejandrodiaz
 */
@Entity
@Table(name = "areacomun")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Areacomun.findAll", query = "SELECT a FROM Areacomun a"),
    @NamedQuery(name = "Areacomun.findByIdArea", query = "SELECT a FROM Areacomun a WHERE a.areacomunPK.idArea = :idArea"),
    @NamedQuery(name = "Areacomun.findByConjuntoIdConjunto", query = "SELECT a FROM Areacomun a WHERE a.areacomunPK.conjuntoIdConjunto = :conjuntoIdConjunto"),
    @NamedQuery(name = "Areacomun.findByNombre", query = "SELECT a FROM Areacomun a WHERE a.nombre = :nombre"),
    @NamedQuery(name = "Areacomun.findByTipo", query = "SELECT a FROM Areacomun a WHERE a.tipo = :tipo"),
    @NamedQuery(name = "Areacomun.findByCapacidad", query = "SELECT a FROM Areacomun a WHERE a.capacidad = :capacidad"),
    @NamedQuery(name = "Areacomun.findByDescripcion", query = "SELECT a FROM Areacomun a WHERE a.descripcion = :descripcion")})
public class Areacomun implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected AreacomunPK areacomunPK;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "Nombre")
    private String nombre;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 20)
    @Column(name = "Tipo")
    private String tipo;
    @Basic(optional = false)
    @NotNull
    @Column(name = "Capacidad")
    private BigInteger capacidad;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "Descripcion")
    private String descripcion;
    @OneToMany(mappedBy = "areacomun")
    private List<Diasdispo> diasdispoList;
    @JoinColumn(name = "ConjuntoIdConjunto", referencedColumnName = "IdConjunto", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Conjunto conjunto;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "areacomun")
    private List<Reserva> reservaList;

    public Areacomun() {
    }

    public Areacomun(AreacomunPK areacomunPK) {
        this.areacomunPK = areacomunPK;
    }

    public Areacomun(AreacomunPK areacomunPK, String nombre, String tipo, BigInteger capacidad, String descripcion) {
        this.areacomunPK = areacomunPK;
        this.nombre = nombre;
        this.tipo = tipo;
        this.capacidad = capacidad;
        this.descripcion = descripcion;
    }

    public Areacomun(BigInteger idArea, BigInteger conjuntoIdConjunto) {
        this.areacomunPK = new AreacomunPK(idArea, conjuntoIdConjunto);
    }

    public AreacomunPK getAreacomunPK() {
        return areacomunPK;
    }

    public void setAreacomunPK(AreacomunPK areacomunPK) {
        this.areacomunPK = areacomunPK;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public BigInteger getCapacidad() {
        return capacidad;
    }

    public void setCapacidad(BigInteger capacidad) {
        this.capacidad = capacidad;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @XmlTransient
    public List<Diasdispo> getDiasdispoList() {
        return diasdispoList;
    }

    public void setDiasdispoList(List<Diasdispo> diasdispoList) {
        this.diasdispoList = diasdispoList;
    }

    public Conjunto getConjunto() {
        return conjunto;
    }

    public void setConjunto(Conjunto conjunto) {
        this.conjunto = conjunto;
    }

    @XmlTransient
    public List<Reserva> getReservaList() {
        return reservaList;
    }

    public void setReservaList(List<Reserva> reservaList) {
        this.reservaList = reservaList;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (areacomunPK != null ? areacomunPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Areacomun)) {
            return false;
        }
        Areacomun other = (Areacomun) object;
        if ((this.areacomunPK == null && other.areacomunPK != null) || (this.areacomunPK != null && !this.areacomunPK.equals(other.areacomunPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.Areacomun[ areacomunPK=" + areacomunPK + " ]";
    }
    
}
