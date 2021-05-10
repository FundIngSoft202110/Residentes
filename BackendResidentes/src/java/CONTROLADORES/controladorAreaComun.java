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
import javax.ws.rs.DELETE;
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
                areaPK.setConjuntoIdConjunto(rs.getInt("ConjuntoIdConjunto"));
                areaPK.setIdArea(rs.getInt("IdArea"));
                areaC.setAreacomunPK(areaPK);
                areaC.setNombre(rs.getString("Nombre"));
                areaC.setTipo(rs.getNString("Tipo"));
                areaC.setCapacidad(rs.getBigDecimal("Capacidad"));
                areaC.setDescripcion(rs.getNString("Descripcion"));
                areaC.setEstado(rs.getNString("Estado"));
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
    public List<Areacomun> getTiposAreasComunesConjunto(@PathParam("Idconjunto") int Idconjunto) {

        List<Areacomun> areas = new ArrayList<>();

        String consulta = "SELECT * FROM areacomun ac WHERE ac.ConjuntoIdConjunto=?";

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {

            statement.setInt(1, Idconjunto);

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
    public List<Areacomun> getAreasTipoConjunto(@PathParam("Idconjunto") int Idconjunto, @PathParam("Nomtipo") String Nomtipo) {

        List<Areacomun> areas = new ArrayList<>();
        String consulta = "SELECT * FROM areacomun ac WHERE ac.ConjuntoIdConjunto=? and ac.Tipo=?";

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {

            statement.setInt(1, Idconjunto);
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
    
    /*MÉTODO PARA MODIFICAR TODOS LOS DATOS DE UN  ÁREA COMUN ESPECÍFICA DE UN  CONJUNTO*/
    @PUT
    @Path("modificarAreaEspecifica/conjunto/{Idconjunto}/area/{IdArea}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String changeAreaEspecificaConjunto(Areacomun area) {

        Areacomun areaC = new Areacomun();
        String consulta = "UPDATE areacomun SET Nombre=? , Tipo=?, Capacidad=?, Descripcion=?  WHERE ConjuntoIdConjunto=? and IdArea=?";

        PreparedStatement statement;
        try {
            statement = this.con.prepareStatement(consulta);

            statement.setNString(1, area.getNombre());
            statement.setNString(2, area.getTipo());
            statement.setBigDecimal(3, area.getCapacidad());
            statement.setString(4, area.getDescripcion());
            statement.setInt(5, area.getAreacomunPK().getConjuntoIdConjunto());
            statement.setInt(6, area.getAreacomunPK().getIdArea());

            statement.executeUpdate();

            return "Se pudo actualizar satisfactoriamente";

        } catch (SQLException sqle) {
        }

        return "No se pudo actualizar";

    }
    
    /*MÉTODO PARA CONOCER TODOS LOS DATOS DE UN  ÁREA COMUN ESPECÍFICA DE UN  CONJUNTO*/
    @GET
    @Path("areaEspecifica/conjunto/{Idconjunto}/nomArea/{NomArea}")
    @Produces(MediaType.APPLICATION_JSON)
    public Areacomun getAreaEspecificaConjunto(@PathParam("Idconjunto") int Idconjunto, @PathParam("NomArea") String NomArea) {

        Areacomun areaC = new Areacomun();
        String consulta = "SELECT * FROM areacomun ac WHERE ac.ConjuntoIdConjunto=? and ac.Nombre=?";

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {

            statement.setInt(1, Idconjunto);
            statement.setString(2, NomArea);

            try (ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    AreacomunPK areaPK = new AreacomunPK();
                    areaPK.setConjuntoIdConjunto(rs.getInt("ConjuntoIdConjunto"));
                    areaPK.setIdArea(rs.getInt("IdArea"));
                    areaC.setAreacomunPK(areaPK);
                    areaC.setNombre(rs.getString("Nombre"));
                    areaC.setTipo(rs.getNString("Tipo"));
                    areaC.setCapacidad(rs.getBigDecimal("Capacidad"));
                    areaC.setDescripcion(rs.getNString("Descripcion"));
                    areaC.setEstado(rs.getNString("Estado"));

                }

            }
        } catch (SQLException sqle) {
        }

        return areaC;

    }

    
    
    /*MÉTODO PARA AGREGAR  UN  ÁREA COMUN A UN  CONJUNTO*/
    @POST
    @Path("/NuevaArea")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String addArea(Areacomun area) {

        String consulta = "INSERT INTO areacomun (`ConjuntoIdConjunto`, `Nombre`, `Tipo`, `Capacidad`, `Descripcion`, `Estado`)VALUES (?,?,?,?,?,?)";

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {

            //guardar en variables 
            int idCon = area.getAreacomunPK().getConjuntoIdConjunto();
            String tipo = area.getTipo();
            BigDecimal capacidad = area.getCapacidad();
            String descrip = area.getDescripcion();
            String nombre = area.getNombre();
            String estado=area.getEstado();
            
            statement.setInt(1, idCon);
            statement.setNString(2, nombre);
            statement.setNString(3, tipo);
            statement.setBigDecimal(4, capacidad);
            statement.setNString(5, descrip);
            statement.setNString(6, estado);

            statement.executeUpdate();

            return "Agregado exitosamente";

        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución:" + sqle.getErrorCode() + " " + sqle.getMessage());
        }

        return "Fallo de creacion";
    }
    
      /*MÉTODO PARA ELIMINAR  UN  ÁREA COMUN A UN  CONJUNTO*/
    @DELETE
    @Path("/EliminarArea/conjunto/{Idconjunto}/nomArea/{NomArea}")
    public String deleteArea(@PathParam("Idconjunto") int Idconjunto, @PathParam("NomArea") String NomArea) {

        String consulta = "DELETE from areacomun WHERE ConjuntoIdConjunto=? and Nombre=?";
        PreparedStatement statement;
        try {
            statement = this.con.prepareStatement(consulta);

            this.con.prepareStatement(consulta);
            statement.setInt(1, Idconjunto);
            statement.setNString(2, NomArea);
            statement.executeUpdate();

            return "Se pudo eliminar satisfactoriamente";

        } catch (SQLException sqle) {
        }

        return "No se pudo eliminar";
    }
    
    /*MÉTODO PARA 'LISTAR' TODAS LOS TIPOS DE ÁREAS COMUNES HABILITADAS DE UN  CONJUNTO*/
    @GET
    @Path("/areasConjuntoResidente/{Idconjunto}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Areacomun> getTiposAreasComunesConjuntoResidente(@PathParam("Idconjunto") int Idconjunto) {

        List<Areacomun> areas = new ArrayList<>();

        String consulta = "SELECT * FROM areacomun ac WHERE ac.ConjuntoIdConjunto=?";

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {

            statement.setInt(1, Idconjunto);

            try (ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    Areacomun areaC = new Areacomun();
                    areaC.setTipo(rs.getNString("Tipo"));
                    String aux=rs.getNString("Estado");
                    boolean esta = false;
                    //tenemos que ver si el nombre del tipo de área ya está
                    if (areas.isEmpty()) {
                        if(aux.equals("H")){//tenemos que revisar si el área de ese tipo está habilitada 
                        areas.add(areaC);}//si es la primera y está habilitada  la agrega de una 
                    } else {
                        for (Areacomun area : areas) { //si no es la primera, recorremos buscando si ya está guardada
                            if (area.getTipo().equals(areaC.getTipo())) {
                                esta = true;//si ya está, me salgo
                                break;
                            }
                        }

                        if (!esta && aux.equals("H")) {
                            areas.add(areaC);
                        }
                    }

                }

            }
        } catch (SQLException sqle) {
        }

        return areas;

    }

    
    
    
     /*MÉTODO PARA 'LISTAR' TODAS LOS NOMBRES DE ÁREAS COMUNES HABILITADAS DE UN  CONJUNTO*/
    @GET
    @Path("areasComunesTipoResidente/conjunto/{Idconjunto}/nomTipoArea/{Nomtipo}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Areacomun> getAreasTipoConjuntoResidente(@PathParam("Idconjunto") int Idconjunto, @PathParam("Nomtipo") String Nomtipo) {

        List<Areacomun> areas = new ArrayList<>();
        String consulta = "SELECT * FROM areacomun ac WHERE ac.ConjuntoIdConjunto=? and ac.Tipo=?";

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {

            statement.setInt(1, Idconjunto);
            statement.setString(2, Nomtipo);

            try (ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    Areacomun areaC = new Areacomun();
                    String aux=(rs.getNString("Estado"));
                    if(aux.equals("H")){
                    areaC.setNombre(rs.getString("Nombre"));
                    areas.add(areaC);}
                }

            }
        } catch (SQLException sqle) {
        }

        return areas;

    }
    

}
