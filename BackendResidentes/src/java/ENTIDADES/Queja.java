/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ENTIDADES;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
@Table(name = "Queja", catalog = "residentes", schema = "")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Queja.findAll", query = "SELECT q FROM Queja q"),
    @NamedQuery(name = "Queja.findByIdQueja", query = "SELECT q FROM Queja q WHERE q.idQueja = :idQueja"),
    @NamedQuery(name = "Queja.findByAnonimo", query = "SELECT q FROM Queja q WHERE q.anonimo = :anonimo"),
    @NamedQuery(name = "Queja.findByAsunto", query = "SELECT q FROM Queja q WHERE q.asunto = :asunto")})
public class Queja implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "IdQueja")
    private Integer idQueja;
    @Column(name = "Anonimo")
    private Integer anonimo;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "Asunto")
    private String asunto;

    public Queja() {
    }

    public Queja(Integer idQueja) {
        this.idQueja = idQueja;
    }

    public Queja(Integer idQueja, String asunto) {
        this.idQueja = idQueja;
        this.asunto = asunto;
    }

    public Integer getIdQueja() {
        return idQueja;
    }

    public void setIdQueja(Integer idQueja) {
        this.idQueja = idQueja;
    }

    public Integer getAnonimo() {
        return anonimo;
    }

    public void setAnonimo(Integer anonimo) {
        this.anonimo = anonimo;
    }

    public String getAsunto() {
        return asunto;
    }

    public void setAsunto(String asunto) {
        this.asunto = asunto;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idQueja != null ? idQueja.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Queja)) {
            return false;
        }
        Queja other = (Queja) object;
        if ((this.idQueja == null && other.idQueja != null) || (this.idQueja != null && !this.idQueja.equals(other.idQueja))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.Queja[ idQueja=" + idQueja + " ]";
    }
    
}
