/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CONTROLADORES;

import ENTIDADES.Asamblea;
import ENTIDADES.DTOasambleas;
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
    @Path("/asambleasConjunto/{idConjunto}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<DTOasambleas> getAsambleasConjunto(@PathParam("idConjunto") int id) {

        List<DTOasambleas> asambleas = new ArrayList<>();
        DTOasambleas asamblea = new DTOasambleas();
        String consulta = "SELECT a.IdAsamblea, a.Tema, a.Fecha, a.Estado "
                        + "FROM Asamblea a "
                        + "WHERE a.ConjuntoIdConjunto = ? ";
        
         try (
           PreparedStatement statement = this.con.prepareStatement(consulta);
           ResultSet rs = statement.executeQuery();
                 
            ){

          while (rs.next()){
            asamblea = new DTOasambleas();   
            asamblea.setId(rs.getInt("IdAsamblea"));
            asamblea.setTema(rs.getString("Tema"));
            asamblea.setEstado(rs.getString("Fecha"));
            asamblea.setFecha(rs.getBigDecimal("Estado"));
 
            asambleas.add(asamblea);
          }
           } catch (SQLException sqle) { 
        
          
}        
        
         return asambleas;
        
    }
}
