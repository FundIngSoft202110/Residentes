/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CONTROLADORES;

import API.ConexionBD;
import ENTIDADES.Conjunto;
import ENTIDADES.DTOrespuestas;
import ENTIDADES.Queja;
import ENTIDADES.QuejaInfo;
import ENTIDADES.quejitaDTO;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/quejas")
public class contraladorQueja { 
    ConexionBD conexion = new ConexionBD();
    Connection con = conexion.conectar();
    
    @GET
    @Path("/quejasConjunto/{IdConjunto}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<QuejaInfo> quejasConjunto(@PathParam("IdConjunto") int id) {
        QuejaInfo queja;
        List<QuejaInfo> quejas = new ArrayList<>();
        String consulta = "SELECT a.Torre, a.Numero, a.Piso, q.anonimo, q.Asunto "
                        + "FROM Apartamento as a, Queja as q "
                        + "WHERE a.IdApartamento = q.ApartamentoIdApartamento AND q.ConjuntoIdConjunto = ? ";
        try (
                 PreparedStatement statement = this.con.prepareStatement(consulta);) {
            statement.setInt(1, id);

            try ( ResultSet rs = statement.executeQuery();) {
                while (rs.next()) {
                    queja = new QuejaInfo();
                    queja.setRemitente(rs.getString("Torre") + "-" + rs.getString("Piso") + rs.getString("Numero"));
                    queja.setAnonimo(rs.getInt("anonimo"));
                    queja.setAsunto(rs.getString("Asunto"));
                    quejas.add(queja);
                }
            }
        } catch (SQLException sqle) {
            System.out.println("error");
        }
        return quejas;
    }
    
    @POST
    @Path("/nuevaQueja")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public DTOrespuestas nuevaQueha(quejitaDTO queja) {
        DTOrespuestas res = new DTOrespuestas();
        
        String consulta = "INSERT INTO Queja (`ConjuntoIdConjunto`,`ApartamentoIdApartamento`,`Asunto`,`Anonimo`) VALUES(?,?,?,?)";

        try (
            PreparedStatement statement = this.con.prepareStatement(consulta);) {
            
            
            int anonimo = queja.getAnonimo(); // :(
            int idC = queja.getIdC();
            int idA = queja.getdA();
            String cont = queja.getContenido();

            statement.setInt(1, idC);
            statement.setInt(2, idA);
            statement.setString(3, cont);
            statement.setInt(4, anonimo);
            statement.executeUpdate();
            res.setRespuesta("Queja enviada");
            return res;

        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución:" + sqle.getErrorCode() + " " + sqle.getMessage());
        }
        res.setRespuesta("No fue posible enviar la queja");
        return res;
    }
    
}
