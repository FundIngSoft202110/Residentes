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
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
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
@Table(name = "areacomun")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Areacomun.findAll", query = "SELECT a FROM Areacomun a"),
    @NamedQuery(name = "Areacomun.findByIdArea", query = "SELECT a FROM Areacomun a WHERE a.areacomunPK.idArea = :idArea"),
    @NamedQuery(name = "Areacomun.findByConjuntoIdConjunto", query = "SELECT a FROM Areacomun a WHERE a.areacomunPK.conjuntoIdConjunto = :conjuntoIdConjunto"),
    @NamedQuery(name = "Areacomun.findByNombre", query = "SELECT a FROM Areacomun a WHERE a.nombre = :nombre"),
    @NamedQuery(name = "Areacomun.findByTipo", query = "SELECT a FROM Areacomun a WHERE a.tipo = :tipo"),
    @NamedQuery(name = "Areacomun.findByCapacidad", query = "SELECT a FROM Areacomun a WHERE a.capacidad = :capacidad"),
    @NamedQuery(name = "Areacomun.findByDescripcion", query = "SELECT a FROM Areacomun a WHERE a.descripcion = :descripcion"),
    @NamedQuery(name = "Areacomun.findByEstado", query = "SELECT a FROM Areacomun a WHERE a.estado = :estado"),
    @NamedQuery(name = "Areacomun.findByHoraApertura", query = "SELECT a FROM Areacomun a WHERE a.horaApertura = :horaApertura"),
    @NamedQuery(name = "Areacomun.findByHoraCierre", query = "SELECT a FROM Areacomun a WHERE a.horaCierre = :horaCierre"),
    @NamedQuery(name = "Areacomun.findByNombreDia", query = "SELECT a FROM Areacomun a WHERE a.nombreDia = :nombreDia")})
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
    private int capacidad;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "Descripcion")
    private String descripcion;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 2)
    @Column(name = "Estado")
    private String estado;
    @Basic(optional = false)
    @NotNull
    @Column(name = "HoraApertura")
    private int horaApertura;
    @Basic(optional = false)
    @NotNull
    @Column(name = "horaCierre")
    private int horaCierre;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "NombreDia")
    private String nombreDia;
    @JoinColumn(name = "ConjuntoIdConjunto", referencedColumnName = "IdConjunto", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Conjunto conjunto;

    public Areacomun() {
    }

    public Areacomun(AreacomunPK areacomunPK) {
        this.areacomunPK = areacomunPK;
    }

    public Areacomun(AreacomunPK areacomunPK, String nombre, String tipo, int capacidad, String descripcion, String estado, int horaApertura, int horaCierre, String nombreDia) {
        this.areacomunPK = areacomunPK;
        this.nombre = nombre;
        this.tipo = tipo;
        this.capacidad = capacidad;
        this.descripcion = descripcion;
        this.estado = estado;
        this.horaApertura = horaApertura;
        this.horaCierre = horaCierre;
        this.nombreDia = nombreDia;
    }

    public Areacomun(int idArea, int conjuntoIdConjunto) {
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

    public int getCapacidad() {
        return capacidad;
    }

    public void setCapacidad(int capacidad) {
        this.capacidad = capacidad;
    }

   

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public int getHoraApertura() {
        return horaApertura;
    }

    public void setHoraApertura(int horaApertura) {
        this.horaApertura = horaApertura;
    }

    public int getHoraCierre() {
        return horaCierre;
    }

    public void setHoraCierre(int horaCierre) {
        this.horaCierre = horaCierre;
    }

    

    public String getNombreDia() {
        return nombreDia;
    }

    public void setNombreDia(String nombreDia) {
        this.nombreDia = nombreDia;
    }

    public Conjunto getConjunto() {
        return conjunto;
    }

    public void setConjunto(Conjunto conjunto) {
        this.conjunto = conjunto;
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
