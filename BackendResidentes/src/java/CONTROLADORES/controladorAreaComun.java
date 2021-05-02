/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CONTROLADORES;

import ENTIDADES.*;
import API.*;
import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.POST;

@Path("/AreasComunes")
public class controladorAreaComun {

    ConexionBD conexion = new ConexionBD();
    Connection con = conexion.conectar();

    /*MÉTODO PARA 'LISTAR' TODAS LAS ÁREAS COMUNES DE TODOS LOS CONJUNTOS*/
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Areacomun> getAreasComunes() {

        List<Areacomun> areas = new ArrayList<>();
        String consulta = "SELECT * FROM areacomun";

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);
                ResultSet rs = statement.executeQuery();) {

            while (rs.next()) {
                Areacomun areaC = new Areacomun();
                AreacomunPK areaPK = new AreacomunPK();
                areaPK.setConjuntoIdConjunto(rs.getBigDecimal("ConjuntoIdConjunto"));
                areaPK.setIdArea(rs.getBigDecimal("IdArea"));
                areaC.setAreacomunPK(areaPK);
                areaC.setNombre(rs.getString("Nombre"));
                areaC.setTipo(rs.getNString("Tipo"));
                areaC.setCapacidad(rs.getBigDecimal("Capacidad"));
                areaC.setDescripcion(rs.getNString("Descripcion"));
                areas.add(areaC);
            }
        } catch (SQLException sqle) {

        }

        return areas;

    }

    /*MÉTODO PARA 'LISTAR' TODAS LOS TIPOS DE ÁREAS COMUNES DE UN  CONJUNTO*/
    @GET
    @Path("/areasConjunto/{Idconjunto}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Areacomun> getTiposAreasComunesConjunto(@PathParam("Idconjunto") BigDecimal Idconjunto) {

        List<Areacomun> areas = new ArrayList<>();

        String consulta = "SELECT * FROM areacomun ac WHERE ac.ConjuntoIdConjunto=?";

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {

            statement.setBigDecimal(1, Idconjunto);

            try (ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    Areacomun areaC = new Areacomun();
                    areaC.setTipo(rs.getNString("Tipo"));
                    boolean esta = false;
                    //tenemos que ver si el nombre del tipo de área ya está
                    if (areas.size() == 0) {
                        areas.add(areaC);//si es la primera la agrega de una 
                    } else {
                        for (Areacomun area : areas) { //si no es la primera, recorremos buscando si ya está guardada
                            if (area.getTipo().equals(areaC.getTipo())) {
                                esta = true;//si ya está, me salgo
                                break;
                            }
                        }

                        if (!esta) {
                            areas.add(areaC);
                        }
                    }

                }

            }
        } catch (SQLException sqle) {
        }

        return areas;

    }

    /*MÉTODO PARA 'LISTAR' TODAS LOS NOMBRES DE ÁREAS COMUNES DE UN  CONJUNTO*/
    @GET
    @Path("areasComunesTipo/conjunto/{Idconjunto}/nomTipoArea/{Nomtipo}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Areacomun> getAreasTipoConjunto(@PathParam("Idconjunto") BigDecimal Idconjunto, @PathParam("Nomtipo") String Nomtipo) {

        List<Areacomun> areas = new ArrayList<>();
        String consulta = "SELECT * FROM areacomun ac WHERE ac.ConjuntoIdConjunto=? and ac.Tipo=?";

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {

            statement.setBigDecimal(1, Idconjunto);
            statement.setString(2, Nomtipo);

            try (ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    Areacomun areaC = new Areacomun();
                    areaC.setNombre(rs.getString("Nombre"));
                    areas.add(areaC);
                }

            }
        } catch (SQLException sqle) {
        }

        return areas;

    }
    
    /*MÉTODO PARA CONOCER TODOS LOS DATOS DE UN  ÁREA COMUN ESPECÍFICA DE UN  CONJUNTO*/
    @GET
    @Path("areaEspecifica/conjunto/{Idconjunto}/nomArea/{NomArea}")
    @Produces(MediaType.APPLICATION_JSON)
    public Areacomun getNombreAreaConjunto(@PathParam("Idconjunto") BigDecimal Idconjunto, @PathParam("NomArea") String NomArea) {
    
        Areacomun areaC = new Areacomun();
        String consulta = "SELECT * FROM areacomun ac WHERE ac.ConjuntoIdConjunto=? and ac.Nombre=?";

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {

            statement.setBigDecimal(1, Idconjunto);
            statement.setString(2, NomArea);

            try (ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                AreacomunPK areaPK = new AreacomunPK();
                areaPK.setConjuntoIdConjunto(rs.getBigDecimal("ConjuntoIdConjunto"));
                areaPK.setIdArea(rs.getBigDecimal("IdArea"));
                areaC.setAreacomunPK(areaPK);
                areaC.setNombre(rs.getString("Nombre"));
                areaC.setTipo(rs.getNString("Tipo"));
                areaC.setCapacidad(rs.getBigDecimal("Capacidad"));
                areaC.setDescripcion(rs.getNString("Descripcion"));
               
                  
                }

            }
        } catch (SQLException sqle) {
        }

        return areaC;
    
    }
    
    /*MÉTODO PARA MODIFICAR TODOS LOS DATOS DE UN  ÁREA COMUN ESPECÍFICA DE UN  CONJUNTO*/
    @PUT
    @Path("modificarAreaEspecifica/conjunto/{Idconjunto}/nomArea/{NomArea}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String getAreaEspecificaConjunto(Areacomun area ) {
        
        Areacomun areaC = new Areacomun();
        String consulta = "UPDATE areacomun SET Nombre=? , Tipo=?, Capacidad=?, Descripcion=? WHERE ac.ConjuntoIdConjunto=? and ac.IdArea=?";
         

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {

            statement.setBigDecimal(1, area.getAreacomunPK().getConjuntoIdConjunto());
            statement.setBigDecimal(2, area.getAreacomunPK().getIdArea());

            try (ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    
                AreacomunPK areaPK = new AreacomunPK();
                areaPK.setConjuntoIdConjunto(area.getAreacomunPK().getConjuntoIdConjunto());
                areaPK.setIdArea(area.getAreacomunPK().getIdArea());
                areaC.setAreacomunPK(areaPK);
                areaC.setNombre(area.getNombre());
                areaC.setTipo(rs.getNString(area.getTipo()));
                areaC.setCapacidad(area.getCapacidad());
                areaC.setDescripcion(area.getDescripcion());
                
                }
             return "Se pudo actualizar satisfactoriamente";
            }
        } catch (SQLException sqle) {
        }

        return "No se pudo actualizar";
    
    }

}
