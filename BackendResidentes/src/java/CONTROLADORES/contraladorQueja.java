/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CONTROLADORES;

import API.ConexionBD;
import ENTIDADES.Conjunto;
import ENTIDADES.Queja;
import ENTIDADES.QuejaInfo;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.GET;
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
        QuejaInfo queja = new QuejaInfo();
        List<QuejaInfo> quejas = new ArrayList<>();
        String consulta = "SELECT a.Torre, a.Numero, a.Piso, q.anonimo, q.Asunto "
                        + "FROM Apartamento as a, Queja as q "
                        + "WHERE a.IdApartamento = q.ApartamentoIdApartamento AND q.ConjuntoIdConjunto = ? ";
        try (
                 PreparedStatement statement = this.con.prepareStatement(consulta);) {
            statement.setInt(1, id);

            try ( ResultSet rs = statement.executeQuery();) {
                while (rs.next()) {
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
}
