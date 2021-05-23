/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CONTROLADORES;

import API.ConexionBD;
import ENTIDADES.Contacto;
import ENTIDADES.Mensaje;
import ENTIDADES.MensajeJS;
import ENTIDADES.Persona;
import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/mensajes")
public class contraladorMensaje {

    ConexionBD conexion = new ConexionBD();
    Connection con = conexion.conectar();

    @GET
    @Path("residente/{idConjunto}") //TRAE EMPLEADOS Y ADMIN
    @Produces(MediaType.APPLICATION_JSON)
    public List<Contacto> getEmpleadosConjunto(@PathParam("idConjunto") int id) {

        List<Contacto> contactos = new ArrayList<>();
        Contacto contact;
        //Contactos empleados
        String consulta = "SELECT p.IdPersona, pxc.Oficio, p.Nombre, p.Apellido, pxc.Foto, p.RolConjunto "
                + "FROM Persona AS p, PersonaXConjunto as pxc "
                + "WHERE pxc.ConjuntoIdConjunto = ? AND p.IdPersona = pxc.PersonaIdPersona AND (p.RolConjunto = 'Empleado' OR p.RolConjunto = 'Administrador' )";
        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {
            statement.setInt(1, id);
            try (
                    ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    contact = new Contacto();
                    contact.setIdc(rs.getInt("IdPersona"));
                    contact.setNombre(rs.getString("Nombre") + " " + rs.getString("Apellido"));

                    if (rs.getString("RolConjunto").equals("Administrador")) {
                        contact.setOficio("Admin");
                        contact.setRol("administrador");
                        contact.setFoto("X");
                    } else {
                        contact.setOficio(rs.getString("Oficio"));
                        contact.setRol("empleado");
                        contact.setFoto(rs.getString("Foto"));
                    }

                    contactos.add(contact);
                }
            }
        } catch (SQLException sqle) {

        }
        return contactos;
    }

    @GET
    @Path("admin/{idConjunto}") //TRAE  EEMPLEADOS Y APARTAMENTOS
    @Produces(MediaType.APPLICATION_JSON)
    public List<Contacto> getEmpleadosApartamentos(@PathParam("idConjunto") int id) {

        List<Contacto> contactos = new ArrayList<>();
        Contacto contact;
        //Contactos empleados
        String consulta = "SELECT p.IdPersona, pxc.Oficio, p.Nombre, p.Apellido, pxc.Foto, p.RolConjunto "
                + "FROM Persona AS p, PersonaXConjunto as pxc "
                + "WHERE pxc.ConjuntoIdConjunto = ? AND p.IdPersona = pxc.PersonaIdPersona AND p.RolConjunto = 'Empleado' ";
        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {
            statement.setInt(1, id);
            try (
                    ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    contact = new Contacto();
                    contact.setIdc(rs.getInt("IdPersona"));
                    contact.setNombre(rs.getString("Nombre") + " " + rs.getString("Apellido"));
                    contact.setOficio(rs.getString("Oficio"));
                    contact.setRol("empleado");
                    contact.setFoto(rs.getString("Foto"));
                    contactos.add(contact);
                }
            }
        } catch (SQLException sqle) {

        }

        String consulta2 = "SELECT a.IdApartamento , a.Torre , a.Numero , a.Piso  "
                + "FROM Apartamento AS a "
                + "WHERE a.ConjuntoIdConjunto = ? ";
        try (
                PreparedStatement statement = this.con.prepareStatement(consulta2);) {
            statement.setInt(1, id);
            try (
                    ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    contact = new Contacto();
                    contact.setIdc(rs.getInt("IdApartamento"));
                    contact.setNombre(rs.getString("Torre") + "-" + rs.getString("Piso") + rs.getString("Numero"));
                    contact.setOficio("Apto");
                    contact.setRol("apartamento");
                    contact.setFoto("X");
                    contactos.add(contact);
                }
            }
        } catch (SQLException sqle) {

        }

        return contactos;
    }

    @GET
    @Path("empleado/{idConjunto}") //TRAE  APTOS Y ADMIN
    @Produces(MediaType.APPLICATION_JSON)
    public List<Contacto> getEmpleadosAdmin(@PathParam("idConjunto") int id) {

        List<Contacto> contactos = new ArrayList<>();
        Contacto contact;
        //Contactos empleados
        String consulta = "SELECT p.IdPersona, pxc.Oficio, p.Nombre, p.Apellido, pxc.Foto, p.RolConjunto "
                + "FROM Persona AS p, PersonaXConjunto as pxc "
                + "WHERE pxc.ConjuntoIdConjunto = ? AND p.IdPersona = pxc.PersonaIdPersona AND p.RolConjunto = 'Administrador' ";
        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {
            statement.setInt(1, id);
            try (
                    ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    contact = new Contacto();
                    contact.setIdc(rs.getInt("IdPersona"));
                    contact.setNombre(rs.getString("Nombre") + " " + rs.getString("Apellido"));
                    contact.setOficio("Admin");
                    contact.setRol("administrador");
                    contact.setFoto("X");
                    contactos.add(contact);
                }
            }
        } catch (SQLException sqle) {

        }

        String consulta2 = "SELECT a.IdApartamento , a.Torre , a.Numero , a.Piso  "
                + "FROM Apartamento AS a "
                + "WHERE a.ConjuntoIdConjunto = ? ";
        try (
                PreparedStatement statement = this.con.prepareStatement(consulta2);) {
            statement.setInt(1, id);
            try (
                    ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    contact = new Contacto();
                    contact.setIdc(rs.getInt("IdApartamento"));
                    contact.setNombre(rs.getString("Torre") + "-" + rs.getString("Piso") + rs.getString("Numero"));
                    contact.setOficio("Apto");
                    contact.setRol("apartamento");
                    contact.setFoto("X");
                    contactos.add(contact);
                }
            }
        } catch (SQLException sqle) {

        }

        return contactos;
    }

    @GET
    @Path("chatEmpleApto/{idConjunto}/{idApto}/{idEmp}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Mensaje> getChatAptoEmp(@PathParam("idConjunto") int idC, @PathParam("idApto") int idApto, @PathParam("idEmp") int idEmp) {

        List<Mensaje> mensajes = new ArrayList<>();
        Mensaje mensaje;
        //Contactos empleados
        String consulta = "SELECT m.Contenido, m.Fecha_Hora , m.RolEmpleado "
                + "FROM Mensaje AS m "
                + "WHERE m.ConjuntoIdConjunto = ? AND m.ApartamentoIdApartamento = ? AND m.PersonaIdEmpleado = ? ";
        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {
            statement.setInt(1, idC);
            statement.setInt(2, idApto);
            statement.setInt(3, idEmp);
            try (
                    ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    mensaje = new Mensaje();
                    mensaje.setContenido(rs.getString("Contenido"));
                    mensaje.setFechaHora(rs.getBigDecimal("Fecha_Hora"));
                    mensaje.setRolEmpleado(rs.getString("RolEmpleado"));
                    mensaje.setRolAdmin("X");
                    mensajes.add(mensaje);
                }
            }
        } catch (SQLException sqle) {

        }
        return mensajes;
    }

    @GET
    @Path("chatEmpleAdmin/{idConjunto}/{idAdmin}/{idEmp}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Mensaje> getChatAdminEmp(@PathParam("idConjunto") int idC, @PathParam("idAdmin") int idAdmin, @PathParam("idEmp") int idEmp) {

        List<Mensaje> mensajes = new ArrayList<>();
        Mensaje mensaje;
        //Contactos empleados
        String consulta = "SELECT m.Contenido, m.Fecha_Hora , m.RolEmpleado "
                + "FROM Mensaje AS m "
                + "WHERE m.ConjuntoIdConjunto = ? AND m.PersonaIdAdmin = ? AND m.PersonaIdEmpleado = ? ";
        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {
            statement.setInt(1, idC);
            statement.setInt(2, idAdmin);
            statement.setInt(3, idEmp);
            try (
                    ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    mensaje = new Mensaje();
                    mensaje.setContenido(rs.getString("Contenido"));
                    mensaje.setFechaHora(rs.getBigDecimal("Fecha_Hora"));
                    mensaje.setRolEmpleado(rs.getString("RolEmpleado"));
                    mensaje.setRolAdmin("X");
                    mensajes.add(mensaje);
                }
            }
        } catch (SQLException sqle) {

        }
        return mensajes;
    }

    @GET
    @Path("chatAdminApto/{idConjunto}/{idAdmin}/{idApto}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Mensaje> getChatAdminApto(@PathParam("idConjunto") int idC, @PathParam("idAdmin") int idAdmin, @PathParam("idApto") int idApto) {

        List<Mensaje> mensajes = new ArrayList<>();
        Mensaje mensaje;
        //Contactos empleados
        String consulta = "SELECT m.Contenido, m.Fecha_Hora , m.RolAdmin "
                + "FROM Mensaje AS m "
                + "WHERE m.ConjuntoIdConjunto = ? AND m.PersonaIdAdmin = ? AND m.ApartamentoIdApartamento = ? ";
        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {
            statement.setInt(1, idC);
            statement.setInt(2, idAdmin);
            statement.setInt(3, idApto);
            try (
                    ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    mensaje = new Mensaje();
                    mensaje.setContenido(rs.getString("Contenido"));
                    mensaje.setFechaHora(rs.getBigDecimal("Fecha_Hora"));
                    mensaje.setRolEmpleado("X");
                    mensaje.setRolAdmin(rs.getString("RolAdmin"));
                    mensajes.add(mensaje);
                }
            }
        } catch (SQLException sqle) {

        }
        return mensajes;
    }

    @POST
    @Path("/NuevoMensaje")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String nuevoMensaje(MensajeJS mensaje) {

        String consulta1 = "INSERT INTO Mensaje (`ConjuntoIdConjunto`, `PersonaIdEmpleado`, `ApartamentoIdApartamento`,  `Contenido`, `Fecha_Hora`, `RolEmpleado` , `RolAdmin`, `Visto`) VALUES (?, ?, ? ,?, ?, ?, ?, ?)";
        String consulta2 = "INSERT INTO Mensaje (`ConjuntoIdConjunto`, `ApartamentoIdApartamento`, `PersonaIdAdmin`, `Contenido`, `Fecha_Hora`, `RolEmpleado` , `RolAdmin`, `Visto`) VALUES (?, ?, ? ,?, ?, ?, ?, ?)";
        String consulta3 = "INSERT INTO Mensaje (`ConjuntoIdConjunto`, `PersonaIdEmpleado`, `PersonaIdAdmin`, `Contenido`, `Fecha_Hora`, `RolEmpleado` , `RolAdmin`, `Visto`) VALUES (?, ?, ? ,?, ?, ?, ?, ?)";
        String consulta = "";
        if (mensaje.getIdAdmin() == 0) {
            consulta = consulta1;
        }
        if (mensaje.getIdEmpleado() == 0) {
            consulta = consulta2;
        }
        if (mensaje.getIdApto() == 0) {
            consulta = consulta3;
        }

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {
            int auxS = 2;
            int conjuntoId = mensaje.getIdConjunto(); // :(
            int idEmple = mensaje.getIdEmpleado();
            int idApto = mensaje.getIdApto();
            int idAdmin = mensaje.getIdAdmin();
            String contenido = mensaje.getContenido();
            BigDecimal fecha_h = mensaje.getFecha_hora();
            String rolEmple = mensaje.getRolEmpleado();
            String rolAdmin = mensaje.getRolAdmin();
            String vist = mensaje.getVisto();

            statement.setInt(1, conjuntoId);
            if (idEmple != 0) {
                statement.setInt(auxS, idEmple);
                auxS += 1;
            }
            if (idApto != 0) {
                statement.setInt(auxS, idApto);
                auxS += 1;
            }
            if (idAdmin != 0) {
                statement.setInt(auxS, idAdmin);
            }
            statement.setString(4, contenido);
            statement.setBigDecimal(5, fecha_h);
            statement.setString(6, rolEmple);
            statement.setString(7, rolAdmin);
            statement.setString(8, vist);
            statement.executeUpdate();

            return "Agregado exitosamente";

        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución:" + sqle.getErrorCode() + " " + sqle.getMessage());
        }

        return "Fallo de creacion";
    }

}
