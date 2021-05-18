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
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Table(name = "apartamento")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Apartamento.findAll", query = "SELECT a FROM Apartamento a"),
    @NamedQuery(name = "Apartamento.findByIdApartamento", query = "SELECT a FROM Apartamento a WHERE a.apartamentoPK.idApartamento = :idApartamento"),
    @NamedQuery(name = "Apartamento.findByConjuntoIdConjunto", query = "SELECT a FROM Apartamento a WHERE a.apartamentoPK.conjuntoIdConjunto = :conjuntoIdConjunto"),
    @NamedQuery(name = "Apartamento.findByTorre", query = "SELECT a FROM Apartamento a WHERE a.torre = :torre"),
    @NamedQuery(name = "Apartamento.findByNumero", query = "SELECT a FROM Apartamento a WHERE a.numero = :numero"),
    @NamedQuery(name = "Apartamento.findByContrasena", query = "SELECT a FROM Apartamento a WHERE a.contrasena = :contrasena"),
    @NamedQuery(name = "Apartamento.findByPiso", query = "SELECT a FROM Apartamento a WHERE a.piso = :piso")})
public class Apartamento implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected ApartamentoPK apartamentoPK;
    @Basic(optional = false)
    @NotNull
    @Column(name = "Torre")
    private int torre;
    @Basic(optional = false)
    @NotNull
    @Column(name = "Numero")
    private int numero;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 30)
    @Column(name = "Contrasena")
    private String contrasena;
    @Basic(optional = false)
    @NotNull
    @Column(name = "Piso")
    private int piso;
    @JoinColumn(name = "ConjuntoIdConjunto", referencedColumnName = "IdConjunto", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Conjunto conjunto;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "apartamento")
    private List<Paquete> paqueteList;
    @OneToMany(mappedBy = "apartamento")
    private List<Queja> quejaList;
    @OneToMany(mappedBy = "apartamento")
    private List<Mensaje> mensajeList;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "apartamento")
    private List<Reserva> reservaList;

    public Apartamento() {
    }

    public Apartamento(ApartamentoPK apartamentoPK) {
        this.apartamentoPK = apartamentoPK;
    }

    public Apartamento(ApartamentoPK apartamentoPK, int torre, int numero, String contrasena, int piso) {
        this.apartamentoPK = apartamentoPK;
        this.torre = torre;
        this.numero = numero;
        this.contrasena = contrasena;
        this.piso = piso;
    }

    public Apartamento(int idApartamento, int conjuntoIdConjunto) {
        this.apartamentoPK = new ApartamentoPK(idApartamento, conjuntoIdConjunto);
    }

    public ApartamentoPK getApartamentoPK() {
        return apartamentoPK;
    }

    public void setApartamentoPK(ApartamentoPK apartamentoPK) {
        this.apartamentoPK = apartamentoPK;
    }

    public int getTorre() {
        return torre;
    }

    public void setTorre(int torre) {
        this.torre = torre;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public int getPiso() {
        return piso;
    }

    public void setPiso(int piso) {
        this.piso = piso;
    }

    

    public Conjunto getConjunto() {
        return conjunto;
    }

    public void setConjunto(Conjunto conjunto) {
        this.conjunto = conjunto;
    }

    @XmlTransient
    public List<Paquete> getPaqueteList() {
        return paqueteList;
    }

    public void setPaqueteList(List<Paquete> paqueteList) {
        this.paqueteList = paqueteList;
    }

    @XmlTransient
    public List<Queja> getQuejaList() {
        return quejaList;
    }

    public void setQuejaList(List<Queja> quejaList) {
        this.quejaList = quejaList;
    }

    @XmlTransient
    public List<Mensaje> getMensajeList() {
        return mensajeList;
    }

    public void setMensajeList(List<Mensaje> mensajeList) {
        this.mensajeList = mensajeList;
    }

    @XmlTransient
    public List<Reserva> getReservaList() {
        return reservaList;
    }

    public void setReservaList(List<Reserva> reservaList) {
        this.reservaList = reservaList;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (apartamentoPK != null ? apartamentoPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Apartamento)) {
            return false;
        }
        Apartamento other = (Apartamento) object;
        if ((this.apartamentoPK == null && other.apartamentoPK != null) || (this.apartamentoPK != null && !this.apartamentoPK.equals(other.apartamentoPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.Apartamento[ apartamentoPK=" + apartamentoPK + " ]";
    }
    
}
