/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CONTROLADORES;

import API.ConexionBD;
import ENTIDADES.Asamblea;
import ENTIDADES.AsambleaPK;
import ENTIDADES.Persona;
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

@Path("/asambleas")
public class contraladorAsamblea {
    ConexionBD conexion = new ConexionBD();
    Connection con = conexion.conectar();

    @GET
    @Path("/{idConjunto}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Asamblea> getAsambleasConjunto(@PathParam("idConjunto") int id) {

        List<Asamblea> asambleas = new ArrayList<>();
        Asamblea asamblea;
        AsambleaPK asambleaPK;
        String consulta = "SELECT a.IdAsamblea, a.Tema, a.Fecha, a.Hora, a.estado "
                        + "FROM Asamblea a "
                        + "WHERE a.ConjuntoIdConjunto = ? ";
        
        try (
           PreparedStatement statement = this.con.prepareStatement(consulta);){
           statement.setInt(1, id);
           try(
           ResultSet rs = statement.executeQuery();
            ){
            while (rs.next()){
              asamblea = new Asamblea(); 
              asambleaPK = new AsambleaPK();
              asambleaPK.setIdAsamblea(rs.getInt("IdAsamblea"));
              asamblea.setAsambleaPK(asambleaPK);
              asamblea.setTema(rs.getString("Tema"));
              asamblea.setEstado(rs.getString("estado"));
              asamblea.setFecha(rs.getBigDecimal("Fecha"));
              asamblea.setHora(rs.getBigDecimal("Hora"));
              asambleas.add(asamblea);
            } // end while
           }
        } catch (SQLException sqle) { 
            System.out.println("Error");
        }        
        return asambleas;
    }
}
