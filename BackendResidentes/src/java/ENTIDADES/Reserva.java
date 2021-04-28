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
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author alejandrodiaz
 */
@Entity
@Table(name = "reserva")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Reserva.findAll", query = "SELECT r FROM Reserva r"),
    @NamedQuery(name = "Reserva.findByAreaComunIdArea", query = "SELECT r FROM Reserva r WHERE r.reservaPK.areaComunIdArea = :areaComunIdArea"),
    @NamedQuery(name = "Reserva.findByApartamentoIdApartamento", query = "SELECT r FROM Reserva r WHERE r.reservaPK.apartamentoIdApartamento = :apartamentoIdApartamento"),
    @NamedQuery(name = "Reserva.findByAreaComunConjuntoIdConjunto", query = "SELECT r FROM Reserva r WHERE r.reservaPK.areaComunConjuntoIdConjunto = :areaComunConjuntoIdConjunto"),
    @NamedQuery(name = "Reserva.findByApartamentoConjuntoIdConjunto", query = "SELECT r FROM Reserva r WHERE r.reservaPK.apartamentoConjuntoIdConjunto = :apartamentoConjuntoIdConjunto"),
    @NamedQuery(name = "Reserva.findByHoraFinal", query = "SELECT r FROM Reserva r WHERE r.horaFinal = :horaFinal"),
    @NamedQuery(name = "Reserva.findByHoraInicio", query = "SELECT r FROM Reserva r WHERE r.horaInicio = :horaInicio")})
public class Reserva implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected ReservaPK reservaPK;
    @Basic(optional = false)
    @NotNull
    @Column(name = "HoraFinal")
    private BigInteger horaFinal;
    @Basic(optional = false)
    @NotNull
    @Column(name = "HoraInicio")
    private BigInteger horaInicio;
    @JoinColumns({
        @JoinColumn(name = "ApartamentoIdApartamento", referencedColumnName = "IdApartamento", insertable = false, updatable = false),
        @JoinColumn(name = "ApartamentoConjuntoIdConjunto", referencedColumnName = "ConjuntoIdConjunto", insertable = false, updatable = false)})
    @ManyToOne(optional = false)
    private Apartamento apartamento;
    @JoinColumns({
        @JoinColumn(name = "AreaComunIdArea", referencedColumnName = "IdArea", insertable = false, updatable = false),
        @JoinColumn(name = "AreaComunConjuntoIdConjunto", referencedColumnName = "ConjuntoIdConjunto", insertable = false, updatable = false)})
    @ManyToOne(optional = false)
    private Areacomun areacomun;

    public Reserva() {
    }

    public Reserva(ReservaPK reservaPK) {
        this.reservaPK = reservaPK;
    }

    public Reserva(ReservaPK reservaPK, BigInteger horaFinal, BigInteger horaInicio) {
        this.reservaPK = reservaPK;
        this.horaFinal = horaFinal;
        this.horaInicio = horaInicio;
    }

    public Reserva(BigInteger areaComunIdArea, BigInteger apartamentoIdApartamento, BigInteger areaComunConjuntoIdConjunto, BigInteger apartamentoConjuntoIdConjunto) {
        this.reservaPK = new ReservaPK(areaComunIdArea, apartamentoIdApartamento, areaComunConjuntoIdConjunto, apartamentoConjuntoIdConjunto);
    }

    public ReservaPK getReservaPK() {
        return reservaPK;
    }

    public void setReservaPK(ReservaPK reservaPK) {
        this.reservaPK = reservaPK;
    }

    public BigInteger getHoraFinal() {
        return horaFinal;
    }

    public void setHoraFinal(BigInteger horaFinal) {
        this.horaFinal = horaFinal;
    }

    public BigInteger getHoraInicio() {
        return horaInicio;
    }

    public void setHoraInicio(BigInteger horaInicio) {
        this.horaInicio = horaInicio;
    }

    public Apartamento getApartamento() {
        return apartamento;
    }

    public void setApartamento(Apartamento apartamento) {
        this.apartamento = apartamento;
    }

    public Areacomun getAreacomun() {
        return areacomun;
    }

    public void setAreacomun(Areacomun areacomun) {
        this.areacomun = areacomun;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (reservaPK != null ? reservaPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Reserva)) {
            return false;
        }
        Reserva other = (Reserva) object;
        if ((this.reservaPK == null && other.reservaPK != null) || (this.reservaPK != null && !this.reservaPK.equals(other.reservaPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.Reserva[ reservaPK=" + reservaPK + " ]";
    }
    
}
