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
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author alejandrodiaz
 */
@Entity
@Table(name = "gandador")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Gandador.findAll", query = "SELECT g FROM Gandador g"),
    @NamedQuery(name = "Gandador.findByIdGanador", query = "SELECT g FROM Gandador g WHERE g.idGanador = :idGanador")})
public class Gandador implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "IdGanador")
    private Integer idGanador;
    @JoinColumns({
        @JoinColumn(name = "OpcionIdOpcion", referencedColumnName = "IdOpcion"),
        @JoinColumn(name = "OpcionPropuestaIdPropuesta", referencedColumnName = "PropuestaIdPropuesta")})
    @ManyToOne(optional = false)
    private Opcion opcion;

    public Gandador() {
    }

    public Gandador(Integer idGanador) {
        this.idGanador = idGanador;
    }

    public Integer getIdGanador() {
        return idGanador;
    }

    public void setIdGanador(Integer idGanador) {
        this.idGanador = idGanador;
    }

    public Opcion getOpcion() {
        return opcion;
    }

    public void setOpcion(Opcion opcion) {
        this.opcion = opcion;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idGanador != null ? idGanador.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Gandador)) {
            return false;
        }
        Gandador other = (Gandador) object;
        if ((this.idGanador == null && other.idGanador != null) || (this.idGanador != null && !this.idGanador.equals(other.idGanador))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.Gandador[ idGanador=" + idGanador + " ]";
    }
    
}
