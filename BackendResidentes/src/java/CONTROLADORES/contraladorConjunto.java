/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CONTROLADORES;

import API.ConexionBD;
import ENTIDADES.Conjunto;
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
                PreparedStatement statement = this.con.prepareStatement(consulta);
                ResultSet rs = statement.executeQuery();) {

            while (rs.next()) {
                Conjunto con = new Conjunto();
                con.setIdConjunto(rs.getInt("IdConjunto"));
                con.setNombre(rs.getNString("Nombre"));
                con.setDireccion(rs.getNString("Direccion"));
                con.setLinkDePago(rs.getNString("LinkDePago"));
                con.setPrecioAdmin(rs.getBigDecimal("PrecioAdmin"));
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
    @Path("/cuotaAdmin/{IdConjunto}")
    @Produces(MediaType.TEXT_PLAIN)
    public String mostrarCuota(@PathParam("IdConjunto") int id) {
        String cuotaAdmin = "";
        String consulta = "SELECT * FROM Apartamento AS a WHERE  a.ConjuntoIdConjunto = ?";
        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);
                ) {
            statement.setInt(1, id);
        
            try(ResultSet rs = statement.executeQuery();){

                while (rs.next()) {
                    cuotaAdmin = rs.getString("LinkDePago");
                }
            }
        } catch (SQLException sqle) {

        }
        return cuotaAdmin;
    }
    
       /* @POST
    @Path("/NuevoConjunto")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    
    public String pagarAdmin (@PathParam("IdConjunto") int id) {
        String consulta = "UPDATE residentes.Conjunto SET PrecioAdmin = '0' WHERE (`IdConjunto` = ?);";
        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);
                ) {
            statement.setInt(1, id);
            statement.executeQuery();
            
            return "Modificado exitosamente";

        } catch (SQLException sqle) {
            return  "Error en la ejecución: " + sqle.getErrorCode() + " " +  sqle.getMessage();
        }
    }*/

    @POST
    @Path("/NuevoConjunto")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    
    public String nuevoConjunto (Conjunto conjunto) {

        String consulta = "INSERT INTO conjunto (`Nombre`, `LinkDePago`, `Direccion`, `PrecioAdmin`, `NumeroTorres`, `NumeroPisos`, `NumeroApartamentos`) VALUES (?, ?, ? ,?, ?, ?,?)";

        try (
            
             PreparedStatement statement = this.con.prepareStatement(consulta);) {

            
            String nombre = conjunto.getNombre();
            String link = conjunto.getLinkDePago();
            String dir = conjunto.getDireccion();
            BigDecimal precio = conjunto.getPrecioAdmin();
            BigDecimal torres = conjunto.getNumeroTorres();
            BigDecimal pisos = conjunto.getNumeroPisos();
            BigDecimal aptos = conjunto.getNumeroApartamentos();
            
            statement.setString(1, nombre);
            statement.setString(2, link);
            statement.setString(3, dir);
            statement.setBigDecimal(4, precio);
            statement.setBigDecimal(5, torres);
            statement.setBigDecimal(6, pisos);
            statement.setBigDecimal(7, aptos);

            statement.executeUpdate();
            
   
            return "Agregado exitosamente";

        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución:" + sqle.getErrorCode() + " " + sqle.getMessage());
        }

        return "Fallo de creacion";
    }

}
