/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ENTIDADES;

import java.io.Serializable;
import java.math.BigInteger;
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
    @NotNull
    @Column(name = "IdOpcion")
    private BigInteger idOpcion;
    @Basic(optional = false)
    @NotNull
    @Column(name = "PropuestaIdPropuesta")
    private BigInteger propuestaIdPropuesta;

    public OpcionPK() {
    }

    public OpcionPK(BigInteger idOpcion, BigInteger propuestaIdPropuesta) {
        this.idOpcion = idOpcion;
        this.propuestaIdPropuesta = propuestaIdPropuesta;
    }

    public BigInteger getIdOpcion() {
        return idOpcion;
    }

    public void setIdOpcion(BigInteger idOpcion) {
        this.idOpcion = idOpcion;
    }

    public BigInteger getPropuestaIdPropuesta() {
        return propuestaIdPropuesta;
    }

    public void setPropuestaIdPropuesta(BigInteger propuestaIdPropuesta) {
        this.propuestaIdPropuesta = propuestaIdPropuesta;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idOpcion != null ? idOpcion.hashCode() : 0);
        hash += (propuestaIdPropuesta != null ? propuestaIdPropuesta.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof OpcionPK)) {
            return false;
        }
        OpcionPK other = (OpcionPK) object;
        if ((this.idOpcion == null && other.idOpcion != null) || (this.idOpcion != null && !this.idOpcion.equals(other.idOpcion))) {
            return false;
        }
        if ((this.propuestaIdPropuesta == null && other.propuestaIdPropuesta != null) || (this.propuestaIdPropuesta != null && !this.propuestaIdPropuesta.equals(other.propuestaIdPropuesta))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.OpcionPK[ idOpcion=" + idOpcion + ", propuestaIdPropuesta=" + propuestaIdPropuesta + " ]";
    }
    
}
