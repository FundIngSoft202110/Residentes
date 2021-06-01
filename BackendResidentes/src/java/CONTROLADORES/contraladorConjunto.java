/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CONTROLADORES;

import API.ConexionBD;
import ENTIDADES.Conjunto;
import ENTIDADES.DTOConjunto;
import ENTIDADES.DTOConjuntos;
import ENTIDADES.DTOfecha;
import ENTIDADES.DTOrespuestas;
import ENTIDADES.Empleado;
import java.io.File;
import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/Conjuntos")
public class contraladorConjunto {

    ConexionBD conexion = new ConexionBD();
    Connection con = conexion.conectar();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Conjunto> getConjuntos() {

        List<Conjunto> conjuntos = new ArrayList<>();
        String consulta = "SELECT * FROM conjunto";

        try (
                 PreparedStatement statement = this.con.prepareStatement(consulta);  ResultSet rs = statement.executeQuery();) {

            while (rs.next()) {
                Conjunto con = new Conjunto();
                con.setIdConjunto(rs.getInt("IdConjunto"));
                con.setNombre(rs.getNString("Nombre"));
                con.setDireccion(rs.getNString("Direccion"));
                con.setLinkDePago(rs.getNString("LinkDePago"));
                con.setPrecioAdmin(rs.getInt("PrecioAdmin"));
                con.setManual(rs.getNString("Manual"));
                con.setNumeroPisos(rs.getBigDecimal("NumeroPisos"));
                con.setNumeroTorres(rs.getBigDecimal("NumeroTorres"));
                con.setNumeroApartamentos(rs.getBigDecimal("NumeroApartamentos"));
                conjuntos.add(con);
            }
        } catch (SQLException sqle) {

        }

        return conjuntos;

    }
    
    @GET
    @Path("/fechaActual")
    @Produces(MediaType.APPLICATION_JSON)
    public DTOfecha fechaActual(){
        DTOfecha res = new DTOfecha();
        LocalDateTime fecha = LocalDateTime.now();
        res.setAnio(fecha.getYear());
        res.setMes(fecha.getMonthValue());
        res.setDia(fecha.getDayOfMonth());
        res.setHora(fecha.getHour());
        res.setMinutos(fecha.getMinute());
        return res;
    } // end fechaActual

    @GET
    @Path("/cuotaAdmin/{IdConjunto}/{IdApto}")
    @Produces(MediaType.APPLICATION_JSON)
    public Conjunto mostrarCuota(@PathParam("IdConjunto") int idConjunto, @PathParam("IdApto") int idApto) {
        Conjunto conjunto = new Conjunto();
        int pagoAdmin = 0;
        String consultaA = "SELECT PagoAdmin FROM Apartamento AS a WHERE  a.ConjuntoIdConjunto = ? AND a.IdApartamento = ?";
        String consulta = "SELECT LinkDePago, PrecioAdmin FROM Conjunto AS c WHERE  c.idConjunto = ?";
        try (
                PreparedStatement statementA = this.con.prepareStatement(consultaA);
                PreparedStatement statement = this.con.prepareStatement(consulta);
                ) {
            statementA.setInt(1, idConjunto);
            statementA.setInt(2, idApto);
            statement.setInt(1, idConjunto);
        
            try(ResultSet rsA = statementA.executeQuery();
                ResultSet rs = statement.executeQuery();){
                while(rsA.next()){
                    pagoAdmin = rsA.getInt("PagoAdmin");
                }
                while (rs.next()) {
                    conjunto.setLinkDePago(rs.getString("LinkDePago"));
                    if(pagoAdmin > 0)
                        conjunto.setPrecioAdmin(rs.getInt("PrecioAdmin"));
                    else
                        conjunto.setPrecioAdmin(0);
                }
            }
        } catch (SQLException sqle) {
            System.out.println("ho");
        }
        return conjunto;
    }

    @GET
    @Path("/netflix/{idPersona}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<DTOConjuntos> conjuntosPersona(@PathParam("idPersona") int idPersona) {
        String consulta = "SELECT c.IdConjunto, c.Nombre "
                        + "FROM Conjunto as c, PersonaXConjunto as pxc "
                        + "WHERE c.IdConjunto = pxc.ConjuntoIdConjunto AND pxc.PersonaIdPersona = ? ";
        DTOConjuntos conjunto;
        List<DTOConjuntos> conjuntosPersona = new ArrayList<>(); 
        try (
                 PreparedStatement statement = this.con.prepareStatement(consulta);) {
                 statement.setInt(1, idPersona);
            
            try(ResultSet rs = statement.executeQuery();){
                while(rs.next()){
                    conjunto = new DTOConjuntos();
                    conjunto.setId(rs.getInt("IdConjunto"));
                    conjunto.setNombre(rs.getString("Nombre"));
                    conjuntosPersona.add(conjunto);
                }
            }
        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución: " + sqle.getErrorCode() + " " + sqle.getMessage());
        }
        return conjuntosPersona;
    }
    
    @PUT
    @Path("/pagarAdmin/{IdConjunto}/{IdApto}")
    @Produces(MediaType.APPLICATION_JSON)
    public DTOrespuestas pagarAdmin(@PathParam("IdConjunto") int idConjunto, @PathParam("IdApto") int idApto) {
        String consulta = "UPDATE Apartamento SET PagoAdmin = '0' WHERE (`IdApartamento` = ?) and (`ConjuntoIdConjunto` = ?);";
        DTOrespuestas res = new DTOrespuestas();
        try (
                 PreparedStatement statement = this.con.prepareStatement(consulta);) {
            statement.setInt(1, idApto);
            statement.setInt(2, idConjunto);
            statement.executeUpdate();
            res.setRespuesta("Se pago exitosamente");
            return res;

        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución: " + sqle.getErrorCode() + " " + sqle.getMessage());
        }
        res.setRespuesta("Error modificando");
        return res;
    }
    
    @POST
    @Path("/NuevoConjunto")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public DTOrespuestas nuevoConjunto(DTOConjunto conjunto) {
        DTOrespuestas res = new DTOrespuestas();
        String consulta = "INSERT INTO conjunto (`Nombre`, `LinkDePago`, `Direccion`, `PrecioAdmin`, `NumeroTorres`, `NumeroPisos`, `NumeroApartamentos`) VALUES (?, ?, ? ,?, ?, ?,?)";
        try (
                 PreparedStatement statement = this.con.prepareStatement(consulta);) {

            String nombre = conjunto.getNombre();
            String link = conjunto.getLinkPago();
            String dir = conjunto.getDireccion();
            int precio = conjunto.getPrecioAdmin();
            int torres =conjunto.getNumTorres();
            int pisos = conjunto.getNumPisos();
            int aptos = conjunto.getNumAptos();

            statement.setString(1, nombre);
            statement.setString(2, link);
            statement.setString(3, dir);
            statement.setInt(4, precio);
            statement.setInt(5, torres);
            statement.setInt(6, pisos);
            statement.setInt(7, aptos);
            statement.executeUpdate();
            res.setRespuesta("Conjunto Agregado exitosamente");
            int idConjunto= idConjuntoNombre(nombre);
            controladorApartamento aptoCont = new controladorApartamento() ;
            aptoCont.generarAptos(idConjunto ,  torres, pisos, aptos);
            return res;

        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución:" + sqle.getErrorCode() + " " + sqle.getMessage());
        }

        res.setRespuesta("Falla en la creacion conjunto");
        return res;
    }

    public int idConjuntoNombre(String nombre){
          String consulta= "SELECT c.IdConjunto FROM Conjunto AS c WHERE c.Nombre = ?";
          int resp= 0;
          try ( PreparedStatement statement = this.con.prepareStatement(consulta);) {
            statement.setString(1, nombre);
            try ( ResultSet rs = statement.executeQuery();) {
                while (rs.next()) {
                    resp = (rs.getInt("IdConjunto"));
                }
                return resp;
            }
          }catch(SQLException sqle){
              
          }
          return -1;
    }
    
    


    @POST
    @Path("/agregarEmpleadoConjunto/{idConjunto}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public DTOrespuestas agregarEmpleadoConjunto(@PathParam("idConjunto") int idC, Empleado e) {
        DTOrespuestas res = new DTOrespuestas();
         String consulta = "SELECT p.IdPersona "
                + "FROM Persona as p "
                + "WHERE p.Usuario = ?";

        String consulta2 = "SELECT p.PersonaIdPersona, p.ConjuntoIdConjunto "
                + "FROM PersonaXConjunto as p "
                + "WHERE p.PersonaIdPersona = ? AND p.ConjuntoIdConjunto = ?";

        String consulta3 = "INSERT INTO PersonaXConjunto(`PersonaIdPersona`,`ConjuntoIdConjunto`, `Oficio`, `Foto`) VALUES(?, ?, ? ,?)";

        try ( PreparedStatement statement = this.con.prepareStatement(consulta);) {

            String usuario = e.getUsuario();
            statement.setString(1, usuario);

            try ( ResultSet rs = statement.executeQuery();) {
                int idEmpleado = 0;
                while (rs.next()) {
                    idEmpleado = (rs.getInt("IdPersona"));
                }
                if (idEmpleado == 0) {
                    res.setRespuesta("El empleado no existe");
                    return res;
                } else {

                    try ( PreparedStatement statement1 = this.con.prepareStatement(consulta2);) {
                        statement1.setInt(1, idEmpleado);
                        statement1.setInt(2, idC);

                        try ( ResultSet rs2 = statement1.executeQuery();) {
                            boolean existe = false;
                            while (rs2.next()) {
                                existe = true;
                            }
                            if(existe){
                                res.setRespuesta("El empleado ya existe");
                                return res;
                            }else{
                                try ( PreparedStatement statement3 = this.con.prepareStatement(consulta3);) {
                                    String oficio = e.getOficio();
                                    String imagen = e.getImagen();

                                    statement3.setInt(1, idEmpleado);
                                    statement3.setInt(2, idC);
                                    statement3.setString(3, oficio);
                                    statement3.setString(4, imagen);

                                    statement3.executeUpdate();
                                    res.setRespuesta("Empleado asociado correctamente");
                                    return res;
                                }
                            }
                        }
                    }
                }
            }
        } catch (SQLException ex) {
            res.setRespuesta("No fue posible asociar el empleado al conjunto");
            return res;
        }
    }

    @GET
    @Path("/manual/{IdConjunto}")
    @Produces(MediaType.TEXT_PLAIN)
    public String getS(@PathParam("IdConjunto") int idConjunto
    ) {

        return "Direccion del manual";
    }

    @PUT
    @Path("/actualizarManual/{IdConjunto}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String updateManual(File manual
    ) {

        return "Manual Actualizado";
    }

    @DELETE
    @Path("/eliminarEmpleado/{IdConjunto}/{IdEmpleado}")
    @Produces(MediaType.APPLICATION_JSON)
    public DTOrespuestas eliminarEmpleado(@PathParam("IdConjunto") int idConjunto, @PathParam("IdEmpleado") int idEmpleado) {
        DTOrespuestas rta = new DTOrespuestas();
        String consulta = "DELETE FROM PersonaXConjunto "
                        + "WHERE PersonaIdPersona = ? AND ConjuntoIdConjunto = ?";
        
        try ( PreparedStatement statement = this.con.prepareStatement(consulta);) {

            statement.setInt(1, idEmpleado);
            statement.setInt(2, idConjunto);
            statement.executeUpdate();
            rta.setRespuesta("El empleado fue eliminado exitosamente");
            return rta;
        } catch (SQLException ex) {
            rta.setRespuesta("No fue posible eliminar al empleado");
            return rta;
        }
        
    }
    
    @GET
    @Path("/misnoconjuntos/{idPersona}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<DTOConjuntos> misnoconjuntos(@PathParam("idPersona") int idPersona) {
        String consulta = "SELECT con.Idconjunto, con.Nombre  FROM conjunto AS con WHERE con.IdConjunto  NOT IN (SELECT c.Idconjunto FROM conjunto c, personaxconjunto p WHERE p.PersonaIdPersona= ? AND c.IdConjunto  = p.ConjuntoIdConjunto)";
        DTOConjuntos conjunto;
        List<DTOConjuntos> conjuntosPersona = new ArrayList<>(); 
        try (
                 PreparedStatement statement = this.con.prepareStatement(consulta);) {
                 statement.setInt(1, idPersona);
            
            try(ResultSet rs = statement.executeQuery();){
                while(rs.next()){
                    conjunto = new DTOConjuntos();
                    conjunto.setId(rs.getInt("IdConjunto"));
                    conjunto.setNombre(rs.getString("Nombre"));
                    conjuntosPersona.add(conjunto);
                }
            }
        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución: " + sqle.getErrorCode() + " " + sqle.getMessage());
        }
        return conjuntosPersona;
    }
    
    
    
    @POST
    @Path("/residenteConjunto/{idConjunto}/{idPersona}")
    @Produces(MediaType.APPLICATION_JSON)
    public DTOrespuestas residenteConjunto(@PathParam("idConjunto") int idConjunto, @PathParam("idPersona") int idPersona) {
        DTOrespuestas respuesta = new DTOrespuestas();
        String consulta = "INSERT INTO PersonaXConjunto (`PersonaIdPersona`, `ConjuntoIdConjunto`)VALUES (?,?)";

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {

            
            
            statement.setInt(1, idPersona);
            statement.setInt(2, idConjunto);
            
            statement.executeUpdate();

            respuesta.setRespuesta("Agregado exitosamente");

        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución:" + sqle.getErrorCode() + " " + sqle.getMessage());
            respuesta.setRespuesta("Fallo de creacion");
        }
       
        return respuesta ;
    }
    
    
}
