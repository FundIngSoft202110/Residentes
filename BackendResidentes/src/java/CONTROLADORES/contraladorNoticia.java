/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CONTROLADORES;

import API.ConexionBD;
import ENTIDADES.DTOrespuestas;
import ENTIDADES.Noticia;
import ENTIDADES.NoticiaPK;
import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/noticias")
public class contraladorNoticia {
    ConexionBD conexion = new ConexionBD();
    Connection con = conexion.conectar();
    
    @GET
    @Path("/{IdConjunto}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Noticia> cargarNoticias(@PathParam("IdConjunto") int idConjunto) {
        List<Noticia> noti = new ArrayList<>();
s        String consulta = "SELECT * FROM Noticia AS n WHERE (`ConjuntoIdConjunto` = ?);";
        Noticia a;
        NoticiaPK apk;
        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);
                ) {
            statement.setInt(1, idConjunto);
        
            try(ResultSet rs = statement.executeQuery();){

                while (rs.next()) {
                    a = new Noticia();
                    apk = new NoticiaPK(rs.getInt("IdNoticia"), rs.getInt("ConjuntoIdConjunto"));
                    a.setNoticiaPK(apk);
                    a.setTitulo(rs.getString("Titulo"));
                    a.setDescripcion(rs.getString("Descripcion"));
                    a.setImagen(rs.getString("Imagen"));
                    a.setFecha(rs.getBigDecimal("Fecha"));
                    noti.add(a);
                }
            }
        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución:" + sqle.getErrorCode() + " " + sqle.getMessage());
        }

        return noti;
    } // end cargarNoticias
    
    /*MÉTODO PARA AGREGAR  UNA NOTICIA EN UN  CONJUNTO*/
    @POST
    @Path("/nuevaNoticia")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public DTOrespuestas publicarNoticias(Noticia noticia) {
        DTOrespuestas res = new DTOrespuestas();
        String consulta;
        String consulta1 = "INSERT INTO Noticia (`ConjuntoIdConjunto`, `Titulo`, `Descripcion`, `Imagen`, `fecha`) VALUES (?, ?, ? ,?, ?)";
        String consulta2 = "INSERT INTO Noticia (`ConjuntoIdConjunto`, `Titulo`, `Descripcion`,`fecha`) VALUES (?, ?, ? ,?)";
        if(noticia.getImagen() == "0")
            consulta =  consulta2;
        else
            consulta = consulta1;
        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {
            
            int conjuntoId = noticia.getNoticiaPK().getConjuntoIdConjunto();
            String titulo = noticia.getTitulo();
            String descripcion = noticia.getDescripcion();
            String imagen = noticia.getImagen();
            BigDecimal fecha = noticia.getFecha();

            statement.setInt(1, conjuntoId);
            statement.setString(2, titulo);
            statement.setString(3, descripcion);
            statement.setString(4, imagen);
            statement.setBigDecimal(5, fecha);
            statement.executeUpdate();
            res.setRespuesta("Agregado exitosamente");
            return res;

        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución:" + sqle.getErrorCode() + " " + sqle.getMessage());
        }
        res.setRespuesta("Fallo de creacion");
        return res;
    } // end publicarNoticias
    
    /*MÉTODO PARA ELIMINAR  UNA NOTICIA DE UN  CONJUNTO*/
    @DELETE
    @Path("/eliminarNoticia/{IdConjunto}/{IdNoticia}")
    @Produces(MediaType.APPLICATION_JSON)
    public DTOrespuestas eliminarNoticias(@PathParam("IdConjunto") int idConjunto, @PathParam("IdNoticia") int idNoticia) {
        DTOrespuestas res = new DTOrespuestas();
        String consulta = "DELETE FROM Noticia WHERE ConjuntoIdConjunto=? AND IdNoticia=?";
        PreparedStatement statement;
        try {
            statement = this.con.prepareStatement(consulta);

            this.con.prepareStatement(consulta);
            statement.setInt(1, idConjunto);
            statement.setInt(2, idNoticia);
            statement.executeUpdate();
            res.setRespuesta("Se pudo eliminar satisfactoriamente");
            return res;

        } catch (SQLException sqle) {
        }
        res.setRespuesta("No se pudo eliminar");
        return res;
    } // end eliminarNoticias
}
