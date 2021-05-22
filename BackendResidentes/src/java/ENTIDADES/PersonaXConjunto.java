/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ENTIDADES;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author juansebastianbarretojimenez
 */
@Entity
@Table(name = "PersonaXConjunto")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "PersonaXConjunto.findAll", query = "SELECT p FROM PersonaXConjunto p"),
    @NamedQuery(name = "PersonaXConjunto.findByPersonaIdPersona", query = "SELECT p FROM PersonaXConjunto p WHERE p.personaXConjuntoPK.personaIdPersona = :personaIdPersona"),
    @NamedQuery(name = "PersonaXConjunto.findByConjuntoIdConjunto", query = "SELECT p FROM PersonaXConjunto p WHERE p.personaXConjuntoPK.conjuntoIdConjunto = :conjuntoIdConjunto"),
    @NamedQuery(name = "PersonaXConjunto.findByOficio", query = "SELECT p FROM PersonaXConjunto p WHERE p.oficio = :oficio"),
    @NamedQuery(name = "PersonaXConjunto.findByFoto", query = "SELECT p FROM PersonaXConjunto p WHERE p.foto = :foto")})
public class PersonaXConjunto implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected PersonaXConjuntoPK personaXConjuntoPK;
    @Size(max = 20)
    @Column(name = "Oficio")
    private String oficio;
    @Size(max = 255)
    @Column(name = "Foto")
    private String foto;
    @JoinColumn(name = "ConjuntoIdConjunto", referencedColumnName = "IdConjunto", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Conjunto conjunto;
    @JoinColumn(name = "PersonaIdPersona", referencedColumnName = "IdPersona", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Persona persona;

    public PersonaXConjunto() {
    }

    public PersonaXConjunto(PersonaXConjuntoPK personaXConjuntoPK) {
        this.personaXConjuntoPK = personaXConjuntoPK;
    }

    public PersonaXConjunto(int personaIdPersona, int conjuntoIdConjunto) {
        this.personaXConjuntoPK = new PersonaXConjuntoPK(personaIdPersona, conjuntoIdConjunto);
    }

    public PersonaXConjuntoPK getPersonaXConjuntoPK() {
        return personaXConjuntoPK;
    }

    public void setPersonaXConjuntoPK(PersonaXConjuntoPK personaXConjuntoPK) {
        this.personaXConjuntoPK = personaXConjuntoPK;
    }

    public String getOficio() {
        return oficio;
    }

    public void setOficio(String oficio) {
        this.oficio = oficio;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public Conjunto getConjunto() {
        return conjunto;
    }

    public void setConjunto(Conjunto conjunto) {
        this.conjunto = conjunto;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (personaXConjuntoPK != null ? personaXConjuntoPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof PersonaXConjunto)) {
            return false;
        }
        PersonaXConjunto other = (PersonaXConjunto) object;
        if ((this.personaXConjuntoPK == null && other.personaXConjuntoPK != null) || (this.personaXConjuntoPK != null && !this.personaXConjuntoPK.equals(other.personaXConjuntoPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.PersonaXConjunto[ personaXConjuntoPK=" + personaXConjuntoPK + " ]";
    }
    
}
