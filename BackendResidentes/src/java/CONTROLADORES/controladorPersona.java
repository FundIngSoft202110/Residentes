/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CONTROLADORES;

import ENTIDADES.*;
import API.*;
import java.math.BigDecimal;
import java.math.BigInteger;
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
        String consulta = "SELECT * FROM Persona ";
        Persona p = new Persona();
        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);
                ResultSet rs = statement.executeQuery();) {

            while (rs.next()) {
                p = new Persona();
                p.setIdPersona(rs.getInt("IdPersona"));
                p.setNombre(rs.getString("Nombre"));
                p.setApellido(rs.getString("Apellido"));
                p.setUsuario(rs.getString("Usuario"));
                p.setCorreo(rs.getString("Correo"));
                p.setContrasena(rs.getString("Contrasena"));
                p.setNumCelular(rs.getBigDecimal("NumCelular"));
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

                    p.setIdPersona(rs.getInt("IdPersona"));
                    p.setNombre(rs.getString("Nombre"));
                    p.setApellido(rs.getString("Apellido"));
                    p.setUsuario(rs.getString("Usuario"));
                    p.setCorreo(rs.getString("Correo"));
                    p.setContrasena(rs.getString("Contrasena"));
                    p.setNumCelular(rs.getBigDecimal("NumCelular"));
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
                    p.setIdPersona(rs.getInt("IdPersona"));
                    p.setNombre(rs.getString("Nombre"));
                    p.setApellido(rs.getString("Apellido"));
                    p.setUsuario(rs.getString("Usuario"));
                    p.setCorreo(rs.getString("Correo"));
                    p.setContrasena(rs.getString("Contrasena"));
                    p.setNumCelular(rs.getBigDecimal("NumCelular"));
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

    @GET
    @Path("/Empleados/{idConjunto}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Persona> getEmpleadosConjunto(@PathParam("idConjunto") int id) {

        List<Persona> empleados = new ArrayList<>();
        Persona p;
        String consulta = "SELECT p.Id, p.Oficio, p.Nombre, p.Apellido, p.Foto "
                + "FROM Persona AS p, PersonaXConjunto as pxc "
                + "WHERE pxc.ConjuntoIdConjunto = ? AND p.IdPersona = pxc.PersonaIdPersona AND p.RolConjunto = 'Empleado'";

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {

            statement.setInt(1, id);

            try (
                    ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    p = new Persona();
                    p.setIdPersona(rs.getInt("IdPersona"));
                    p.setNombre(rs.getString("Nombre"));
                    p.setApellido(rs.getString("Apellido"));
                    p.setOficio(rs.getString("Oficio"));
                    p.setFoto(rs.getString("Foto"));
                    empleados.add(p);
                }
            }
        } catch (SQLException sqle) {

        }

        return empleados;
    }

    @GET
    @Path("/Admin/{idConjunto}")
    @Produces(MediaType.APPLICATION_JSON)
    public Persona getAdminConjunto(@PathParam("idConjunto") int id) {

        Persona p;
        p = new Persona();
        String consulta = "SELECT p.Id, p.Oficio, p.Nombre, p.Apellido, p.Foto "
                + "FROM Persona AS p, PersonaXConjunto as pxc "
                + "WHERE pxc.ConjuntoIdConjunto = ? AND p.IdPersona = pxc.PersonaIdPersona AND p.RolConjunto = 'Administrador'";

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {

            statement.setInt(1, id);

            try (
                    ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    p = new Persona();
                    p.setIdPersona(rs.getInt("IdPersona"));
                    p.setNombre(rs.getString("Nombre"));
                    p.setApellido(rs.getString("Apellido"));
                    p.setOficio("Administrador");
                }
            }
        } catch (SQLException sqle) {

        }

        return p;
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

        String consulta = "INSERT INTO persona (`Nombre`, `Apellido`, `Usuario`, `Correo`, `Contrasena`, `NumCelular`, `RolConjunto`) VALUES (?, ?, ? ,?, ?, ?, ?)";

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {

            String Rol = persona.getRolConjunto();
            String Nombre = persona.getNombre();
            BigDecimal NumCelular = persona.getNumCelular();
            String Apellido = persona.getApellido();
            String Usuario = persona.getUsuario();
            String Correo = persona.getCorreo();
            String Contrasena = persona.getContrasena();

            statement.setString(1, Nombre);
            statement.setString(2, Apellido);
            statement.setString(3, Usuario);
            statement.setString(4, Correo);
            statement.setString(5, Contrasena);
            statement.setBigDecimal(6, NumCelular);
            statement.setString(7, Rol);
            statement.executeUpdate();

            return "Agregado exitosamente";

        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución:" + sqle.getErrorCode() + " " + sqle.getMessage());
        }

        return "Fallo de creacion";
    }

}
