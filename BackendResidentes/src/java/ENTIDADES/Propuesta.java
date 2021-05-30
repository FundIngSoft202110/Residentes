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
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
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
@Table(name = "propuesta")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Propuesta.findAll", query = "SELECT p FROM Propuesta p"),
    @NamedQuery(name = "Propuesta.findByIdPropuesta", query = "SELECT p FROM Propuesta p WHERE p.idPropuesta = :idPropuesta"),
    @NamedQuery(name = "Propuesta.findByDescripcion", query = "SELECT p FROM Propuesta p WHERE p.descripcion = :descripcion"),
    @NamedQuery(name = "Propuesta.findByVotosTotales", query = "SELECT p FROM Propuesta p WHERE p.votosTotales = :votosTotales"),
    @NamedQuery(name = "Propuesta.findByEstado", query = "SELECT p FROM Propuesta p WHERE p.estado = :estado")})
public class Propuesta implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "IdPropuesta")
    private Integer idPropuesta;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "Descripcion")
    private String descripcion;
    @Basic(optional = false)
    @NotNull
    @Column(name = "VotosTotales")
    private BigInteger votosTotales;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "Estado")
    private String estado;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "propuesta")
    private List<Opcion> opcionList;
    @JoinColumns({
        @JoinColumn(name = "AsambleaIdAsamblea", referencedColumnName = "IdAsamblea"),
        @JoinColumn(name = "AsambleaConjuntoIdConjunto", referencedColumnName = "ConjuntoIdConjunto")})
    @ManyToOne
    private Asamblea asamblea;

    public Propuesta() {
    }

    public Propuesta(Integer idPropuesta) {
        this.idPropuesta = idPropuesta;
    }

    public Propuesta(Integer idPropuesta, String descripcion, BigInteger votosTotales, String estado) {
        this.idPropuesta = idPropuesta;
        this.descripcion = descripcion;
        this.votosTotales = votosTotales;
        this.estado = estado;
    }

    public Integer getIdPropuesta() {
        return idPropuesta;
    }

    public void setIdPropuesta(Integer idPropuesta) {
        this.idPropuesta = idPropuesta;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public BigInteger getVotosTotales() {
        return votosTotales;
    }

    public void setVotosTotales(BigInteger votosTotales) {
        this.votosTotales = votosTotales;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    @XmlTransient
    public List<Opcion> getOpcionList() {
        return opcionList;
    }

    public void setOpcionList(List<Opcion> opcionList) {
        this.opcionList = opcionList;
    }

    public Asamblea getAsamblea() {
        return asamblea;
    }

    public void setAsamblea(Asamblea asamblea) {
        this.asamblea = asamblea;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idPropuesta != null ? idPropuesta.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Propuesta)) {
            return false;
        }
        Propuesta other = (Propuesta) object;
        if ((this.idPropuesta == null && other.idPropuesta != null) || (this.idPropuesta != null && !this.idPropuesta.equals(other.idPropuesta))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.Propuesta[ idPropuesta=" + idPropuesta + " ]";
    }
    
}
