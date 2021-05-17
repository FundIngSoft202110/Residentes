/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CONTROLADORES;

import API.ConexionBD;
import ENTIDADES.Contacto;
import ENTIDADES.Mensaje;
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

@Path("/mensajes")
public class contraladorMensaje {
    ConexionBD conexion = new ConexionBD();
    Connection con = conexion.conectar() ;
    
    @GET
    @Path("residente/{idConjunto}") //TRAE EMPLEADOS Y ADMIN
    @Produces(MediaType.APPLICATION_JSON)
    public List<Contacto> getEmpleadosConjunto(@PathParam("idConjunto") int id){

        List<Contacto> contactos = new ArrayList<>();
        Contacto contact;
        //Contactos empleados
        String consulta ="SELECT p.Id, p.Oficio, p.Nombre, p.Apellido, p.Foto, p.RolConjunto "
                       + "FROM Persona AS p, PersonaXConjunto as pxc "
                       + "WHERE pxc.ConjuntoIdConjunto = ? AND p.IdPersona = pxc.PersonaIdPersona AND ( p.RolConjunto = 'Empleado' OR p.RolConjunto = 'Administrador' )";
        try (
           PreparedStatement statement = this.con.prepareStatement(consulta);
           ){
            statement.setInt(1, id);
            try(
                    ResultSet rs = statement.executeQuery();
                    ){

               while (rs.next()){
                 contact = new Contacto();
                 contact.setIdc(rs.getInt("IdPersona"));
                 contact.setNombre(rs.getString("Nombre") + " "+ rs.getString("Apellido"));
            
                 if(rs.getString("RolConjunto").equals("Administrador")){
                    contact.setOficio("Admin");
                    contact.setRol("administrador");
                    contact.setFoto(rs.getString("X"));
                 }else{
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
    public List<Contacto> getEmpleadosApartamentos(@PathParam("idConjunto") int id){

        List<Contacto> contactos = new ArrayList<>();
        Contacto contact;
        //Contactos empleados
        String consulta ="SELECT p.Id, p.Oficio, p.Nombre, p.Apellido, p.Foto, p.RolConjunto "
                       + "FROM Persona AS p, PersonaXConjunto as pxc "
                       + "WHERE pxc.ConjuntoIdConjunto = ? AND p.IdPersona = pxc.PersonaIdPersona AND p.RolConjunto = 'Empleado' ";
        try (
           PreparedStatement statement = this.con.prepareStatement(consulta);
           ){
            statement.setInt(1, id);
            try(
                    ResultSet rs = statement.executeQuery();
                    ){

               while (rs.next()){
                 contact = new Contacto();
                 contact.setIdc(rs.getInt("IdPersona"));
                 contact.setNombre(rs.getString("Nombre") + " "+ rs.getString("Apellido"));
                 contact.setOficio(rs.getString("Oficio"));
                 contact.setRol("empleado");
                 contact.setFoto(rs.getString("Foto"));   
                 contactos.add(contact);
               }
            }
         } catch (SQLException sqle) { 

         }
        
        
        String consulta2 ="SELECT a.IdApartamento , a.Torre , a.Numero , a.Piso  "
                       + "FROM Apartamento AS a "
                       + "WHERE a.ConjuntoIdConjunto = ? ";
        try (
           PreparedStatement statement = this.con.prepareStatement(consulta2);
           ){
            statement.setInt(1, id);
            try(
                    ResultSet rs = statement.executeQuery();
                    ){

               while (rs.next()){
                 contact = new Contacto();
                 contact.setIdc(rs.getInt("IdApartamento"));
                 contact.setNombre(rs.getString("Torre") + "-"+ rs.getString("Piso")+ rs.getString("Numero"));
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
    public List<Contacto> getEmpleadosAdmin(@PathParam("idConjunto") int id){

        List<Contacto> contactos = new ArrayList<>();
        Contacto contact;
        //Contactos empleados
        String consulta ="SELECT p.Id, p.Oficio, p.Nombre, p.Apellido, p.Foto, p.RolConjunto "
                       + "FROM Persona AS p, PersonaXConjunto as pxc "
                       + "WHERE pxc.ConjuntoIdConjunto = ? AND p.IdPersona = pxc.PersonaIdPersona AND p.RolConjunto = 'Administrador' ";
        try (
           PreparedStatement statement = this.con.prepareStatement(consulta);
           ){
            statement.setInt(1, id);
            try(
                    ResultSet rs = statement.executeQuery();
                    ){

               while (rs.next()){
                 contact = new Contacto();
                 contact.setIdc(rs.getInt("IdPersona"));
                 contact.setNombre(rs.getString("Nombre") + " "+ rs.getString("Apellido"));
                 contact.setOficio("Admin");
                 contact.setRol("administrador");
                 contact.setFoto("X");   
                 contactos.add(contact);
               }
            }
         } catch (SQLException sqle) { 

         }
        
        
        String consulta2 ="SELECT a.IdApartamento , a.Torre , a.Numero , a.Piso  "
                       + "FROM Apartamento AS a "
                       + "WHERE a.ConjuntoIdConjunto = ? ";
        try (
           PreparedStatement statement = this.con.prepareStatement(consulta2);
           ){
            statement.setInt(1, id);
            try(
                    ResultSet rs = statement.executeQuery();
                    ){

               while (rs.next()){
                 contact = new Contacto();
                 contact.setIdc(rs.getInt("IdApartamento"));
                 contact.setNombre(rs.getString("Torre") + "-"+ rs.getString("Piso")+ rs.getString("Numero"));
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
    public List<Mensaje> getChatAptoEmp(@PathParam("idConjunto") int idC,@PathParam("idApto") int idApto,@PathParam("idEmp") int idEmp ){

        List<Mensaje> mensajes = new ArrayList<>();
        Mensaje mensaje;
        //Contactos empleados
        String consulta ="SELECT m.Contenido, m.Fecha_Hora , m.RolEmpleado "
                       + "FROM Mensaje AS m "
                       + "WHERE m.ConjuntoIdConjunto = ? AND m.ApartamentoIdApartamento = ? AND m.PersonaIdEmpleado = ? ";
        try (
           PreparedStatement statement = this.con.prepareStatement(consulta);
           ){
            statement.setInt(1, idC);
            statement.setInt(2, idApto);
            statement.setInt(3, idEmp);
            try(
                    ResultSet rs = statement.executeQuery();
                    ){

               while (rs.next()){
                 mensaje = new Mensaje();
                 mensaje.setContenido(rs.getString("Contenido"));
                 mensaje.setFechaHora(rs.getBigDecimal("Fecha_Hora"));
                 mensaje.setRolEmpleado(rs.getString("RolEmpleado"));
                 mensaje.setRolAdmin("X");
               }
            }
         } catch (SQLException sqle) { 

         }
        return mensajes;
    }
    
    
    @GET
    @Path("chatEmpleAdmin/{idConjunto}/{idAdmin}/{idEmp}") 
    @Produces(MediaType.APPLICATION_JSON)
    public List<Mensaje> getChatAdminEmp(@PathParam("idConjunto") int idC,@PathParam("idAdmin") int idAdmin,@PathParam("idEmp") int idEmp ){

        List<Mensaje> mensajes = new ArrayList<>();
        Mensaje mensaje;
        //Contactos empleados
        String consulta ="SELECT m.Contenido, m.Fecha_Hora , m.RolEmpleado "
                       + "FROM Mensaje AS m "
                       + "WHERE m.ConjuntoIdConjunto = ? AND m.PersonaIdAdmin = ? AND m.PersonaIdEmpleado = ? ";
        try (
           PreparedStatement statement = this.con.prepareStatement(consulta);
           ){
            statement.setInt(1, idC);
            statement.setInt(2, idAdmin);
            statement.setInt(3, idEmp);
            try(
                    ResultSet rs = statement.executeQuery();
                    ){

               while (rs.next()){
                 mensaje = new Mensaje();
                 mensaje.setContenido(rs.getString("Contenido"));
                 mensaje.setFechaHora(rs.getBigDecimal("Fecha_Hora"));
                 mensaje.setRolEmpleado(rs.getString("RolEmpleado"));
                 mensaje.setRolAdmin("X");
               }
            }
         } catch (SQLException sqle) { 

         }
        return mensajes;
    }
    
    
    @GET
    @Path("chatAdminApto/{idConjunto}/{idAdmin}/{idApto}") 
    @Produces(MediaType.APPLICATION_JSON)
    public List<Mensaje> getChatAdminApto(@PathParam("idConjunto") int idC,@PathParam("idAdmin") int idAdmin,@PathParam("idApto") int idApto ){

        List<Mensaje> mensajes = new ArrayList<>();
        Mensaje mensaje;
        //Contactos empleados
        String consulta ="SELECT m.Contenido, m.Fecha_Hora , m.RolAdmin "
                       + "FROM Mensaje AS m "
                       + "WHERE m.ConjuntoIdConjunto = ? AND m.PersonaIdAdmin = ? AND m.PersonaIdEmpleado = ? ";
        try (
           PreparedStatement statement = this.con.prepareStatement(consulta);
           ){
            statement.setInt(1, idC);
            statement.setInt(2, idAdmin);
            statement.setInt(3, idApto);
            try(
                    ResultSet rs = statement.executeQuery();
                    ){

               while (rs.next()){
                 mensaje = new Mensaje();
                 mensaje.setContenido(rs.getString("Contenido"));
                 mensaje.setFechaHora(rs.getBigDecimal("Fecha_Hora"));
                 mensaje.setRolEmpleado("X");
                 mensaje.setRolAdmin(rs.getString("RolAdmin"));
               }
            }
         } catch (SQLException sqle) { 

         }
        return mensajes;
    }
    
    
}
