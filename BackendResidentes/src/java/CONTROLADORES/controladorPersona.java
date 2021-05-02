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

@Path("/personas")
public class controladorPersona {

    ConexionBD conexion = new ConexionBD();
    Connection con = conexion.conectar();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Persona> getPersonas() {

        List<Persona> pp = new ArrayList<>();
        String consulta = "SELECT * FROM Persona";
        Persona p = new Persona();
        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);
                ResultSet rs = statement.executeQuery();) {

            while (rs.next()) {
                p = new Persona();
                p.setIdPersona(rs.getBigDecimal("IdPersona"));
                System.out.println("Persona =  " + p.getIdPersona());
                p.setNombre(rs.getString("Nombre"));
                p.setUsuario(rs.getString("Usuario"));
                p.setCorreo(rs.getString("Correo"));
                p.setContrasena(rs.getString("Contrasena"));
                p.setNumCelular(rs.getLong("NumCelular"));
                p.setRolConjunto(rs.getString("RolConjunto"));
                p.setOficio(rs.getString("Oficio"));
                p.setFoto(rs.getString("Foto"));
                pp.add(p);
            }
        } catch (SQLException sqle) {

        }

        return pp;

    }

    @GET
    @Path("/usuario/{Usuario}")
    @Produces(MediaType.APPLICATION_JSON)
    public Persona getPersona(@PathParam("Usuario") String usuario) {
        Persona p = new Persona();
        String consulta = "SELECT * FROM Persona p WHERE p.Usuario =?";

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {

            statement.setString(1, usuario);

            try (
                    ResultSet rs = statement.executeQuery();) {
                while (rs.next()) {

                    p.setIdPersona(rs.getBigDecimal("IdPersona"));
                    p.setNombre(rs.getString("Nombre"));
                    p.setUsuario(rs.getString("Usuario"));
                    p.setCorreo(rs.getString("Correo"));
                    p.setContrasena(rs.getString("Contrasena"));
                    p.setNumCelular(rs.getLong("NumCelular"));
                    p.setRolConjunto(rs.getString("RolConjunto"));
                    p.setOficio(rs.getString("Oficio"));
                    p.setFoto(rs.getString("Foto"));

                }
            }
        } catch (SQLException sqle) {
        }

        return p;

    }

    @GET
    @Path("/rol/{RolConjunto}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Persona> getPorRol(@PathParam("RolConjunto") String rol) {

        List<Persona> pp = new ArrayList<>();
        Persona p = new Persona();
        String consulta = "SELECT * FROM Persona p WHERE p.RolConjunto=? ";

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {

            statement.setString(1, rol);

            try (
                    ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    p = new Persona();
                    p.setIdPersona(rs.getBigDecimal("IdPersona"));
                    p.setNombre(rs.getString("Nombre"));
                    p.setUsuario(rs.getString("Usuario"));
                    p.setCorreo(rs.getString("Correo"));
                    p.setContrasena(rs.getString("Contrasena"));
                    p.setNumCelular(rs.getLong("NumCelular"));
                    p.setRolConjunto(rs.getString("RolConjunto"));
                    p.setOficio(rs.getString("Oficio"));
                    p.setFoto(rs.getString("Foto"));
                    pp.add(p);
                }
            }
        } catch (SQLException sqle) {

        }

        return pp;
    }

    @PUT
    @Path("/UpdateC/{Usuario}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String actualizarDatos(@PathParam("Usuario") String usuario) {

        int retorno = 0;
        String consulta = "UPDATE persona SET Contrasena=? WHERE Usuario=?";
        String password = "HolaMundo";

        PreparedStatement statement;
        try {
            statement = this.con.prepareStatement(consulta);
            statement.setString(1, password);
            statement.setString(2, usuario);
            retorno = statement.executeUpdate();
            return " Actualizado";

        } catch (SQLException ex) {
            Logger.getLogger(controladorPersona.class.getName()).log(Level.SEVERE, null, ex);
        }

        return " No se pudo actualizar";
    }

    @POST
    @Path("/NuevoUsuario")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String nuevaPersona(Persona persona) {

        String consulta = "INSERT INTO persona (`IdPersona`, `Nombre`, `Apelllido`, `Usuario`, `Correo`, `Contrasena`, `NumCelular`, `RolConjunto`, `Oficio`, `Foto`) VALUES (?, ?, ? ,?, ?, ?, ?, ?,?,?)";

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {

            BigDecimal IdPersona = persona.getIdPersona();
            String Rol = persona.getRolConjunto();
            String Nombre = persona.getNombre();
            Long NumCelular = persona.getNumCelular();
            String Apelllido = persona.getApelllido();
            String Usuario = persona.getUsuario();
            String Correo = persona.getCorreo();
            String Contrasena = persona.getContrasena();
            String Oficio = persona.getOficio();
            String Foto = persona.getFoto();

            statement.setBigDecimal(1, IdPersona);
            statement.setString(2, Nombre);
            statement.setString(3, Apelllido);
            statement.setString(4, Usuario);
            statement.setString(5, Correo);
            statement.setString(6, Contrasena);
            statement.setLong(7, NumCelular);
            statement.setString(8, Rol);
            statement.setString(9, Oficio);
            statement.setString(10, Foto);
            statement.executeUpdate();

            return "Agregado exitosamente";

        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución:" + sqle.getErrorCode() + " " + sqle.getMessage());
        }

        return "Fallo de creacion";
    }

}
