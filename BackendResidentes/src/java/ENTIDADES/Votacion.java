/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ENTIDADES;

import API.ConexionBD;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author Ada Maria
 */
public class Votacion extends ResultadoVoto{
    
    ConexionBD conexion = new ConexionBD();
    Connection con = conexion.conectar();

    public Votacion() {
    }

    @Override
    public DTOresultadoVoto resultadosVotos(Propuesta propuesta) {
        DTOresultadoVoto result = new DTOresultadoVoto();
        result.setRes("Resultados completos");
        result.setCantVotos(propuesta.getVotosTotales());
        result.setPropuesta(propuesta.getDescripcion());
        String consulta = "SELECT o.Nombre "
                        + "FROM Opcion o, Gandador g "
                        + "WHERE g.OpcionPropuestaIdPropuesta = ? AND o.IdOpcion = g.OpcionIdOpcion;";
        try (
           PreparedStatement statement = this.con.prepareStatement(consulta);){
           statement.setInt(1, propuesta.getIdPropuesta());
            try(
                ResultSet rs = statement.executeQuery();
            ){
                while (rs.next()){
                    result.setGanador(rs.getString("Nombre"));
                } // end while
           }
        } catch (SQLException sqle) { 
            System.out.println("Error");
        }
        return result;
    } // end resultadosVotos
    
} // end resultadoVoto