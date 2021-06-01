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
import java.util.ArrayList;
import java.util.List;

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
        List<String> results = new ArrayList<>();
        DTOresultadoVoto result = new DTOresultadoVoto();
        result.setCantVotos(propuesta.getVotosTotales());
        result.setPropuesta(propuesta.getDescripcion());
        String resAux = "";
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
                    results.add(rs.getString("Nombre"));
                } // end while
                if(results.size() > 1){
                    result.setRes("Resultados completos: Empate");
                    for(String res: results){
                        resAux = res + " - ";
                    }
                    resAux = resAux.substring(0, resAux.length() - 2);
                    result.setGanador(resAux);
                }else{
                    result.setRes("Resultados completos");
                    result.setGanador(results.get(0));
                }
           }
        } catch (SQLException sqle) { 
            System.out.println("Error");
        }
        return result;
    } // end resultadosVotos
    
} // end resultadoVoto