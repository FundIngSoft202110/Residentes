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
import javax.persistence.JoinColumn;
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
@Table(name = "noticia")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Noticia.findAll", query = "SELECT n FROM Noticia n"),
    @NamedQuery(name = "Noticia.findByIdNoticia", query = "SELECT n FROM Noticia n WHERE n.noticiaPK.idNoticia = :idNoticia"),
    @NamedQuery(name = "Noticia.findByConjuntoIdConjunto", query = "SELECT n FROM Noticia n WHERE n.noticiaPK.conjuntoIdConjunto = :conjuntoIdConjunto"),
    @NamedQuery(name = "Noticia.findByTitulo", query = "SELECT n FROM Noticia n WHERE n.titulo = :titulo"),
    @NamedQuery(name = "Noticia.findByDescripcion", query = "SELECT n FROM Noticia n WHERE n.descripcion = :descripcion"),
    @NamedQuery(name = "Noticia.findByImagen", query = "SELECT n FROM Noticia n WHERE n.imagen = :imagen"),
    @NamedQuery(name = "Noticia.findByFecha", query = "SELECT n FROM Noticia n WHERE n.fecha = :fecha")})
public class Noticia implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected NoticiaPK noticiaPK;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "Titulo")
    private String titulo;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "Descripcion")
    private String descripcion;
    @Size(max = 255)
    @Column(name = "Imagen")
    private String imagen;
    @Basic(optional = false)
    @NotNull
    @Column(name = "fecha")
    @Temporal(TemporalType.DATE)
    private BigDecimal fecha;
    @JoinColumn(name = "ConjuntoIdConjunto", referencedColumnName = "IdConjunto", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Conjunto conjunto;

    public Noticia() {
    }

    public Noticia(NoticiaPK noticiaPK) {
        this.noticiaPK = noticiaPK;
    }

    public Noticia(NoticiaPK noticiaPK, String titulo, String descripcion, BigDecimal fecha) {
        this.noticiaPK = noticiaPK;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }

    public Noticia(int idNoticia, int conjuntoIdConjunto) {
        this.noticiaPK = new NoticiaPK(idNoticia, conjuntoIdConjunto);
    }

    public NoticiaPK getNoticiaPK() {
        return noticiaPK;
    }

    public void setNoticiaPK(NoticiaPK noticiaPK) {
        this.noticiaPK = noticiaPK;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public BigDecimal getFecha() {
        return fecha;
    }

    public void setFecha(BigDecimal fecha) {
        this.fecha = fecha;
    }

    public Conjunto getConjunto() {
        return conjunto;
    }

    public void setConjunto(Conjunto conjunto) {
        this.conjunto = conjunto;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (noticiaPK != null ? noticiaPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Noticia)) {
            return false;
        }
        Noticia other = (Noticia) object;
        if ((this.noticiaPK == null && other.noticiaPK != null) || (this.noticiaPK != null && !this.noticiaPK.equals(other.noticiaPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ENTIDADES.Noticia[ noticiaPK=" + noticiaPK + " ]";
    }
    
}
