/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CONTROLADORES;

import API.ConexionBD;
import ENTIDADES.*;
import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/DiasDisponibles")
public class contraladorDiasDispo {

    ConexionBD conexion = new ConexionBD();
    Connection con = conexion.conectar();

    /*MÉTODO PARA CONOCER EL NOMBRE DE LOS DIAS DISPONIBLES DADO UN ID AREA DE UN CONJUNTO*/
    @GET
    @Path("areaEspecificaHorario/conjunto/{Idconjunto}/area/{idArea}")
    @Produces(MediaType.APPLICATION_JSON)
    public Diasdispo getDiasDisponiblesAreaEspecificaConjunto(@PathParam("Idconjunto") int Idconjunto, @PathParam("idArea") int Idarea) {

        Diasdispo dias = new Diasdispo();
        String consulta = "SELECT * FROM diasdispo dd WHERE dd.AreaComunConjuntoIdConjunto=? and dd.AreaComunIdArea=?";

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {

            statement.setInt(1, Idconjunto);
            statement.setInt(2, Idarea);

            try (ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    dias.setHoraApertura(rs.getBigDecimal("HoraApertura"));
                    dias.setHoraCierre(rs.getBigDecimal("horaCierre"));
                    dias.setNombreDia(rs.getNString("NombreDia"));
                    dias.setIdDiasDispo(rs.getInt("IdDiasDispo"));
                }

            }
        } catch (SQLException sqle) {
        }

        return dias;

    }

    /*MÉTODO PARA MODIFICAR TODOS LOS DATOS DE UN  ÁREA COMUN ESPECÍFICA DE UN  CONJUNTO*/
    @PUT
    @Path("modificaHorariorAreaEspecifica/conjunto/{Idconjunto}/area/{IdArea}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String changeAreaEspecificaConjunto(Diasdispo dias) {

        String consulta = "UPDATE diasdispo SET `HoraApertura` = ?, `horaCierre` = ?, `NombreDia` = ? WHERE dd.AreaComunConjuntoIdConjunto=? and dd.AreaComunIdArea=?";

        PreparedStatement statement;
        try {
            statement = this.con.prepareStatement(consulta);

            statement.setBigDecimal(1, dias.getHoraApertura());
            statement.setBigDecimal(2, dias.getHoraCierre());
            statement.setNString(3, dias.getNombreDia());
            statement.setInt(4, dias.getAreacomun().getAreacomunPK().getConjuntoIdConjunto());
            statement.setInt(5, dias.getAreacomun().getAreacomunPK().getIdArea());

            statement.executeUpdate();

            return "Se pudo actualizar satisfactoriamente";

        } catch (SQLException sqle) {
        }

        return "No se pudo actualizar";

    }

    /*MÉTODO PARA AGREGAR  UN  HORARIO A UN ÁREA COMUN A UN  CONJUNTO*/
    @POST
    @Path("/NuevoHorario/conjunto/{Idconjunto}/area/{IdArea}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String addSchedule(Diasdispo dias) {

        String consulta = "INSERT INTO diasdispo (`AreaComunConjuntoIdConjunto`, `AreaComunIdArea`, `HoraApertura`, `horaCierre`, `NombreDia`) VALUES (?,?,?,?,?)";

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {

            statement.setInt(1, dias.getAreacomun().getAreacomunPK().getConjuntoIdConjunto());
            statement.setInt(2, dias.getAreacomun().getAreacomunPK().getIdArea());
            statement.setBigDecimal(3, dias.getHoraApertura());
            statement.setBigDecimal(4, dias.getHoraCierre());
            statement.setNString(5, dias.getNombreDia());

            statement.executeUpdate();

            return "Agregado exitosamente";

        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución:" + sqle.getErrorCode() + " " + sqle.getMessage());
        }

        return "Fallo de creacion";
    }

    
    /*MÉTODO PARA ELIMINAR  UN  HORARIO A UN ÁREA COMUN A UN  CONJUNTO*/
    public void deleteArea( int Idarea) {

        String consulta = "DELETE from diasdispo WHERE IdDiasDispo=?";
        PreparedStatement statement;
        try {
            statement = this.con.prepareStatement(consulta);

            this.con.prepareStatement(consulta);
            statement.setInt(1, Idarea);
            
            statement.executeUpdate();

            

        } catch (SQLException sqle) {
        }

    }

}
