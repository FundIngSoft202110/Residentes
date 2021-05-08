/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ENTIDADES;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author alejandrodiaz
 */
@Entity
@Table(name = "asamblea")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Asamblea.findAll", query = "SELECT a FROM Asamblea a"),
    @NamedQuery(name = "Asamblea.findByIdAsamblea", query = "SELECT a FROM Asamblea a WHERE a.asambleaPK.idAsamblea = :idAsamblea"),
    @NamedQuery(name = "Asamblea.findByConjuntoIdConjunto", query = "SELECT a FROM Asamblea a WHERE a.asambleaPK.conjuntoIdConjunto = :conjuntoIdConjunto"),
    @NamedQuery(name = "Asamblea.findByFecha", query = "SELECT a FROM Asamblea a WHERE a.fecha = :fecha"),
    @NamedQuery(name = "Asamblea.findByTema", query = "SELECT a FROM Asamblea a WHERE a.tema = :tema")})
public class Asamblea implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected AsambleaPK asambleaPK;
    @Basic(optional = false)
    @NotNull
    @Column(name = "Fecha")
    @Temporal(TemporalType.DATE)
    private Date fecha;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "Tema")
    private String tema;
    @OneToMany(mappedBy = "asamblea")
    private List<Propuesta> propuestaList;
    @JoinColumn(name = "ConjuntoIdConjunto", referencedColumnName = "IdConjunto", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Conjunto conjunto;

    public Asamblea() {
    }

    public Asamblea(AsambleaPK asambleaPK) {
        this.asambleaPK = asambleaPK;
    }

    public Asamblea(AsambleaPK asambleaPK, Date fecha, String tema) {
        this.asambleaPK = asambleaPK;
        this.fecha = fecha;
        this.tema = tema;
    }

    public Asamblea(int idAsamblea, int conjuntoIdConjunto) {
        this.asambleaPK = new AsambleaPK(idAsamblea, conjuntoIdConjunto);
    }

    public AsambleaPK getAsambleaPK() {
        return asambleaPK;
    }

    public void setAsambleaPK(AsambleaPK asambleaPK) {
        this.asambleaPK = asambleaPK;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getTema() {
        return tema;
    }

    public void setTema(String tema) {
        this.tema = tema;
    }

    @XmlTransient
    public List<Propuesta> getPropuestaList() {
        return propuestaList;
    }

    public void setPropuestaList(List<Propuesta> propuestaList) {
        this.propuestaList = propuestaList;
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
        hash += (asambleaPK != null ? asambleaPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Asamblea)) {
            return false;
        }
        Asamblea other = (Asamblea) object;
        if ((this.asambleaPK == null && other.asambleaPK != null) || (this.asambleaPK != null && !this.asambleaPK.equals(other.asambleaPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.Asamblea[ asambleaPK=" + asambleaPK + " ]";
    }
    
}
