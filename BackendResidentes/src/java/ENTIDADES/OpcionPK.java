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
 * @author alejandrodiaz
 */
@Embeddable
public class OpcionPK implements Serializable {

    @Basic(optional = false)
    @Column(name = "IdOpcion")
    private int idOpcion;
    @Basic(optional = false)
    @NotNull
    @Column(name = "PropuestaIdPropuesta")
    private int propuestaIdPropuesta;

    public OpcionPK() {
    }

    public OpcionPK(int idOpcion, int propuestaIdPropuesta) {
        this.idOpcion = idOpcion;
        this.propuestaIdPropuesta = propuestaIdPropuesta;
    }

    public int getIdOpcion() {
        return idOpcion;
    }

    public void setIdOpcion(int idOpcion) {
        this.idOpcion = idOpcion;
    }

    public int getPropuestaIdPropuesta() {
        return propuestaIdPropuesta;
    }

    public void setPropuestaIdPropuesta(int propuestaIdPropuesta) {
        this.propuestaIdPropuesta = propuestaIdPropuesta;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (int) idOpcion;
        hash += (int) propuestaIdPropuesta;
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof OpcionPK)) {
            return false;
        }
        OpcionPK other = (OpcionPK) object;
        if (this.idOpcion != other.idOpcion) {
            return false;
        }
        if (this.propuestaIdPropuesta != other.propuestaIdPropuesta) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.OpcionPK[ idOpcion=" + idOpcion + ", propuestaIdPropuesta=" + propuestaIdPropuesta + " ]";
    }
    
}
