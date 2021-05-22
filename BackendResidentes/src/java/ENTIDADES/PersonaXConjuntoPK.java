/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ENTIDADES;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;

/**
 *
 * @author juansebastianbarretojimenez
 */
@Embeddable
public class PersonaXConjuntoPK implements Serializable {

    @Basic(optional = false)
    @NotNull
    @Column(name = "PersonaIdPersona")
    private int personaIdPersona;
    @Basic(optional = false)
    @NotNull
    @Column(name = "ConjuntoIdConjunto")
    private int conjuntoIdConjunto;

    public PersonaXConjuntoPK() {
    }

    public PersonaXConjuntoPK(int personaIdPersona, int conjuntoIdConjunto) {
        this.personaIdPersona = personaIdPersona;
        this.conjuntoIdConjunto = conjuntoIdConjunto;
    }

    public int getPersonaIdPersona() {
        return personaIdPersona;
    }

    public void setPersonaIdPersona(int personaIdPersona) {
        this.personaIdPersona = personaIdPersona;
    }

    public int getConjuntoIdConjunto() {
        return conjuntoIdConjunto;
    }

    public void setConjuntoIdConjunto(int conjuntoIdConjunto) {
        this.conjuntoIdConjunto = conjuntoIdConjunto;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (int) personaIdPersona;
        hash += (int) conjuntoIdConjunto;
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof PersonaXConjuntoPK)) {
            return false;
        }
        PersonaXConjuntoPK other = (PersonaXConjuntoPK) object;
        if (this.personaIdPersona != other.personaIdPersona) {
            return false;
        }
        if (this.conjuntoIdConjunto != other.conjuntoIdConjunto) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.PersonaXConjuntoPK[ personaIdPersona=" + personaIdPersona + ", conjuntoIdConjunto=" + conjuntoIdConjunto + " ]";
    }
    
}
