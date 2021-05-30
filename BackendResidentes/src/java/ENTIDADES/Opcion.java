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
@Table(name = "opcion")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Opcion.findAll", query = "SELECT o FROM Opcion o"),
    @NamedQuery(name = "Opcion.findByIdOpcion", query = "SELECT o FROM Opcion o WHERE o.opcionPK.idOpcion = :idOpcion"),
    @NamedQuery(name = "Opcion.findByPropuestaIdPropuesta", query = "SELECT o FROM Opcion o WHERE o.opcionPK.propuestaIdPropuesta = :propuestaIdPropuesta"),
    @NamedQuery(name = "Opcion.findByNombre", query = "SELECT o FROM Opcion o WHERE o.nombre = :nombre"),
    @NamedQuery(name = "Opcion.findByCantidadVotos", query = "SELECT o FROM Opcion o WHERE o.cantidadVotos = :cantidadVotos")})
public class Opcion implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected OpcionPK opcionPK;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "Nombre")
    private String nombre;
    @Basic(optional = false)
    @NotNull
    @Column(name = "CantidadVotos")
    private BigInteger cantidadVotos;
    @OneToMany(mappedBy = "opcion")
    private List<Voto> votoList;
    @JoinColumn(name = "PropuestaIdPropuesta", referencedColumnName = "IdPropuesta", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Propuesta propuesta;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "opcion")
    private List<Gandador> gandadorList;

    public Opcion() {
    }

    public Opcion(OpcionPK opcionPK) {
        this.opcionPK = opcionPK;
    }

    public Opcion(OpcionPK opcionPK, String nombre, BigInteger cantidadVotos) {
        this.opcionPK = opcionPK;
        this.nombre = nombre;
        this.cantidadVotos = cantidadVotos;
    }

    public Opcion(int idOpcion, int propuestaIdPropuesta) {
        this.opcionPK = new OpcionPK(idOpcion, propuestaIdPropuesta);
    }

    public OpcionPK getOpcionPK() {
        return opcionPK;
    }

    public void setOpcionPK(OpcionPK opcionPK) {
        this.opcionPK = opcionPK;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public BigInteger getCantidadVotos() {
        return cantidadVotos;
    }

    public void setCantidadVotos(BigInteger cantidadVotos) {
        this.cantidadVotos = cantidadVotos;
    }

    @XmlTransient
    public List<Voto> getVotoList() {
        return votoList;
    }

    public void setVotoList(List<Voto> votoList) {
        this.votoList = votoList;
    }

    public Propuesta getPropuesta() {
        return propuesta;
    }

    public void setPropuesta(Propuesta propuesta) {
        this.propuesta = propuesta;
    }

    @XmlTransient
    public List<Gandador> getGandadorList() {
        return gandadorList;
    }

    public void setGandadorList(List<Gandador> gandadorList) {
        this.gandadorList = gandadorList;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (opcionPK != null ? opcionPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Opcion)) {
            return false;
        }
        Opcion other = (Opcion) object;
        if ((this.opcionPK == null && other.opcionPK != null) || (this.opcionPK != null && !this.opcionPK.equals(other.opcionPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.Opcion[ opcionPK=" + opcionPK + " ]";
    }
    
}
