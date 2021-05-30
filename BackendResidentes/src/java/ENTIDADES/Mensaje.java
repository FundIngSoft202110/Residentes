/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ENTIDADES;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author alejandrodiaz
 */
@Entity
@Table(name = "mensaje")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Mensaje.findAll", query = "SELECT m FROM Mensaje m"),
    @NamedQuery(name = "Mensaje.findByIdMensaje", query = "SELECT m FROM Mensaje m WHERE m.mensajePK.idMensaje = :idMensaje"),
    @NamedQuery(name = "Mensaje.findByConjuntoIdConjunto", query = "SELECT m FROM Mensaje m WHERE m.mensajePK.conjuntoIdConjunto = :conjuntoIdConjunto"),
    @NamedQuery(name = "Mensaje.findByContenido", query = "SELECT m FROM Mensaje m WHERE m.contenido = :contenido"),
    @NamedQuery(name = "Mensaje.findByFechaHora", query = "SELECT m FROM Mensaje m WHERE m.fechaHora = :fechaHora"),
    @NamedQuery(name = "Mensaje.findByRolEmpleado", query = "SELECT m FROM Mensaje m WHERE m.rolEmpleado = :rolEmpleado"),
    @NamedQuery(name = "Mensaje.findByRolApto", query = "SELECT m FROM Mensaje m WHERE m.rolApto = :rolApto"),
    @NamedQuery(name = "Mensaje.findByRolAdmin", query = "SELECT m FROM Mensaje m WHERE m.rolAdmin = :rolAdmin"),
    @NamedQuery(name = "Mensaje.findByVisto", query = "SELECT m FROM Mensaje m WHERE m.visto = :visto")})
public class Mensaje implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected MensajePK mensajePK;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "Contenido")
    private String contenido;
    @Basic(optional = false)
    @NotNull
    @Column(name = "Fecha_Hora")
    @Temporal(TemporalType.TIMESTAMP)
    private BigDecimal fechaHora;
    @Size(max = 10)
    @Column(name = "RolEmpleado")
    private String rolEmpleado;
    @Size(max = 10)
    @Column(name = "RolApto")
    private String rolApto;
    @Size(max = 10)
    @Column(name = "RolAdmin")
    private String rolAdmin;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 2)
    @Column(name = "Visto")
    private String visto;
    @JoinColumns({
        @JoinColumn(name = "ApartamentoIdApartamento", referencedColumnName = "IdApartamento"),
        @JoinColumn(name = "ApartamentoConjuntoIdConjunto", referencedColumnName = "ConjuntoIdConjunto")})
    @ManyToOne
    private Apartamento apartamento;
    @JoinColumn(name = "ConjuntoIdConjunto", referencedColumnName = "IdConjunto", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Conjunto conjunto;
    @JoinColumn(name = "PersonaIdAdmin", referencedColumnName = "IdPersona")
    @ManyToOne
    private Persona personaIdAdmin;
    @JoinColumn(name = "PersonaIdEmpleado", referencedColumnName = "IdPersona")
    @ManyToOne
    private Persona personaIdEmpleado;

    public Mensaje() {
    }

    public Mensaje(MensajePK mensajePK) {
        this.mensajePK = mensajePK;
    }

    public Mensaje(MensajePK mensajePK, String contenido, BigDecimal fechaHora, String visto) {
        this.mensajePK = mensajePK;
        this.contenido = contenido;
        this.fechaHora = fechaHora;
        this.visto = visto;
    }

    public Mensaje(int idMensaje, int conjuntoIdConjunto) {
        this.mensajePK = new MensajePK(idMensaje, conjuntoIdConjunto);
    }

    public MensajePK getMensajePK() {
        return mensajePK;
    }

    public void setMensajePK(MensajePK mensajePK) {
        this.mensajePK = mensajePK;
    }

    public String getContenido() {
        return contenido;
    }

    public void setContenido(String contenido) {
        this.contenido = contenido;
    }

    public BigDecimal getFechaHora() {
        return fechaHora;
    }

    public void setFechaHora(BigDecimal fechaHora) {
        this.fechaHora = fechaHora;
    }

    public String getRolEmpleado() {
        return rolEmpleado;
    }

    public void setRolEmpleado(String rolEmpleado) {
        this.rolEmpleado = rolEmpleado;
    }

    public String getRolApto() {
        return rolApto;
    }

    public void setRolApto(String rolApto) {
        this.rolApto = rolApto;
    }

    public String getRolAdmin() {
        return rolAdmin;
    }

    public void setRolAdmin(String rolAdmin) {
        this.rolAdmin = rolAdmin;
    }

    public String getVisto() {
        return visto;
    }

    public void setVisto(String visto) {
        this.visto = visto;
    }

    public Apartamento getApartamento() {
        return apartamento;
    }

    public void setApartamento(Apartamento apartamento) {
        this.apartamento = apartamento;
    }

    public Conjunto getConjunto() {
        return conjunto;
    }

    public void setConjunto(Conjunto conjunto) {
        this.conjunto = conjunto;
    }

    public Persona getPersonaIdAdmin() {
        return personaIdAdmin;
    }

    public void setPersonaIdAdmin(Persona personaIdAdmin) {
        this.personaIdAdmin = personaIdAdmin;
    }

    public Persona getPersonaIdEmpleado() {
        return personaIdEmpleado;
    }

    public void setPersonaIdEmpleado(Persona personaIdEmpleado) {
        this.personaIdEmpleado = personaIdEmpleado;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (mensajePK != null ? mensajePK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Mensaje)) {
            return false;
        }
        Mensaje other = (Mensaje) object;
        if ((this.mensajePK == null && other.mensajePK != null) || (this.mensajePK != null && !this.mensajePK.equals(other.mensajePK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.Mensaje[ mensajePK=" + mensajePK + " ]";
    }
    
}
