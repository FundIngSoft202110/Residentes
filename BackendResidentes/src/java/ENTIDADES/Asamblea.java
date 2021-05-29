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
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author juansebastianbarretojimenez
 */
@Entity
@Table(name = "Asamblea")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Asamblea.findAll", query = "SELECT a FROM Asamblea a"),
    @NamedQuery(name = "Asamblea.findByIdAsamblea", query = "SELECT a FROM Asamblea a WHERE a.asambleaPK.idAsamblea = :idAsamblea"),
    @NamedQuery(name = "Asamblea.findByEstado", query = "SELECT a FROM Asamblea a WHERE a.estado = :estado"),
    @NamedQuery(name = "Asamblea.findByConjuntoIdConjunto", query = "SELECT a FROM Asamblea a WHERE a.asambleaPK.conjuntoIdConjunto = :conjuntoIdConjunto"),
    @NamedQuery(name = "Asamblea.findByFecha", query = "SELECT a FROM Asamblea a WHERE a.fecha = :fecha"),
    @NamedQuery(name = "Asamblea.findByHora", query = "SELECT a FROM Asamblea a WHERE a.hora = :hora"),
    @NamedQuery(name = "Asamblea.findByTema", query = "SELECT a FROM Asamblea a WHERE a.tema = :tema")})
public class Asamblea implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected AsambleaPK asambleaPK;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 3)
    @Column(name = "estado")
    private String estado;
    @Basic(optional = false)
    @NotNull
    @Column(name = "Fecha")
    private BigDecimal fecha;
    @Basic(optional = false)
    @NotNull
    @Column(name = "Hora")
    private BigDecimal hora;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "Tema")
    private String tema;

    public Asamblea() {
    }

    public Asamblea(AsambleaPK asambleaPK) {
        this.asambleaPK = asambleaPK;
    }

    public Asamblea(AsambleaPK asambleaPK, String estado, BigDecimal fecha, BigDecimal hora, String tema) {
        this.asambleaPK = asambleaPK;
        this.estado = estado;
        this.fecha = fecha;
        this.hora = hora;
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

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public BigDecimal getFecha() {
        return fecha;
    }

    public void setFecha(BigDecimal fecha) {
        this.fecha = fecha;
    }

    public BigDecimal getHora() {
        return hora;
    }

    public void setHora(BigDecimal hora) {
        this.hora = hora;
    }

    public String getTema() {
        return tema;
    }

    public void setTema(String tema) {
        this.tema = tema;
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
        return "API.Asamblea[ asambleaPK=" + asambleaPK + " ]";
    }
    
}
