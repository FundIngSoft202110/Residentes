/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ENTIDADES;

import java.io.Serializable;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
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
@Table(name = "conjunto")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Conjunto.findAll", query = "SELECT c FROM Conjunto c"),
    @NamedQuery(name = "Conjunto.findByIdConjunto", query = "SELECT c FROM Conjunto c WHERE c.idConjunto = :idConjunto"),
    @NamedQuery(name = "Conjunto.findByNombre", query = "SELECT c FROM Conjunto c WHERE c.nombre = :nombre"),
    @NamedQuery(name = "Conjunto.findByLinkDePago", query = "SELECT c FROM Conjunto c WHERE c.linkDePago = :linkDePago"),
    @NamedQuery(name = "Conjunto.findByDireccion", query = "SELECT c FROM Conjunto c WHERE c.direccion = :direccion"),
    @NamedQuery(name = "Conjunto.findByPrecioAdmin", query = "SELECT c FROM Conjunto c WHERE c.precioAdmin = :precioAdmin"),
    @NamedQuery(name = "Conjunto.findByManual", query = "SELECT c FROM Conjunto c WHERE c.manual = :manual")})
public class Conjunto implements Serializable {

    private static final long serialVersionUID = 1L;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "IdConjunto")
    private BigDecimal idConjunto;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "Nombre")
    private String nombre;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "LinkDePago")
    private String linkDePago;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "Direccion")
    private String direccion;
    @Basic(optional = false)
    @NotNull
    @Column(name = "PrecioAdmin")
    private BigInteger precioAdmin;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "Manual")
    private String manual;
    @JoinTable(name = "personaxconjunto", joinColumns = {
        @JoinColumn(name = "ConjuntoIdConjunto", referencedColumnName = "IdConjunto")}, inverseJoinColumns = {
        @JoinColumn(name = "PersonaIdPersona", referencedColumnName = "IdPersona")})
    @ManyToMany
    private List<Persona> personaList;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "conjunto")
    private List<Apartamento> apartamentoList;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "conjunto")
    private List<Noticia> noticiaList;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "conjunto")
    private List<Asamblea> asambleaList;
    @OneToMany(mappedBy = "conjuntoIdConjunto")
    private List<Queja> quejaList;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "conjunto")
    private List<Areacomun> areacomunList;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "conjunto")
    private List<Mensaje> mensajeList;

    public Conjunto() {
    }

    public Conjunto(BigDecimal idConjunto) {
        this.idConjunto = idConjunto;
    }

    public Conjunto(BigDecimal idConjunto, String nombre, String linkDePago, String direccion, BigInteger precioAdmin, String manual) {
        this.idConjunto = idConjunto;
        this.nombre = nombre;
        this.linkDePago = linkDePago;
        this.direccion = direccion;
        this.precioAdmin = precioAdmin;
        this.manual = manual;
    }

    public BigDecimal getIdConjunto() {
        return idConjunto;
    }

    public void setIdConjunto(BigDecimal idConjunto) {
        this.idConjunto = idConjunto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getLinkDePago() {
        return linkDePago;
    }

    public void setLinkDePago(String linkDePago) {
        this.linkDePago = linkDePago;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public BigInteger getPrecioAdmin() {
        return precioAdmin;
    }

    public void setPrecioAdmin(BigInteger precioAdmin) {
        this.precioAdmin = precioAdmin;
    }

    public String getManual() {
        return manual;
    }

    public void setManual(String manual) {
        this.manual = manual;
    }

    @XmlTransient
    public List<Persona> getPersonaList() {
        return personaList;
    }

    public void setPersonaList(List<Persona> personaList) {
        this.personaList = personaList;
    }

    @XmlTransient
    public List<Apartamento> getApartamentoList() {
        return apartamentoList;
    }

    public void setApartamentoList(List<Apartamento> apartamentoList) {
        this.apartamentoList = apartamentoList;
    }

    @XmlTransient
    public List<Noticia> getNoticiaList() {
        return noticiaList;
    }

    public void setNoticiaList(List<Noticia> noticiaList) {
        this.noticiaList = noticiaList;
    }

    @XmlTransient
    public List<Asamblea> getAsambleaList() {
        return asambleaList;
    }

    public void setAsambleaList(List<Asamblea> asambleaList) {
        this.asambleaList = asambleaList;
    }

    @XmlTransient
    public List<Queja> getQuejaList() {
        return quejaList;
    }

    public void setQuejaList(List<Queja> quejaList) {
        this.quejaList = quejaList;
    }

    @XmlTransient
    public List<Areacomun> getAreacomunList() {
        return areacomunList;
    }

    public void setAreacomunList(List<Areacomun> areacomunList) {
        this.areacomunList = areacomunList;
    }

    @XmlTransient
    public List<Mensaje> getMensajeList() {
        return mensajeList;
    }

    public void setMensajeList(List<Mensaje> mensajeList) {
        this.mensajeList = mensajeList;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idConjunto != null ? idConjunto.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Conjunto)) {
            return false;
        }
        Conjunto other = (Conjunto) object;
        if ((this.idConjunto == null && other.idConjunto != null) || (this.idConjunto != null && !this.idConjunto.equals(other.idConjunto))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.Conjunto[ idConjunto=" + idConjunto + " ]";
    }
    
}
