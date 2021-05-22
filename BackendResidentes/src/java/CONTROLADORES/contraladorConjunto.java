/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CONTROLADORES;

import API.ConexionBD;
import ENTIDADES.Conjunto;
import ENTIDADES.Empleado;
import java.io.File;
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
                    conjunto.setLinkDePago(rs.getString("LinkDePago")); m
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

    @POST
    @Path("/pagarAdmin/{IdConjunto}/{IdApto}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)

    public String pagarAdmin(@PathParam("IdConjunto") int idConjunto, @PathParam("IdApto") int idApto) {
        String consulta = "UPDATE Apartamento SET PagoAdmin = '0' WHERE (`IdApartamento` = ?) and (`ConjuntoIdConjunto` = ?);";
        try (
                 PreparedStatement statement = this.con.prepareStatement(consulta);) {
            statement.setInt(1, idConjunto);
            statement.setInt(2, idApto);
            statement.executeUpdate();
            return "Modificado exitosamente";

        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución: " + sqle.getErrorCode() + " " + sqle.getMessage());
        }
        return "Error modificando";
    }

    @POST
    @Path("/NuevoConjunto")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)

    public String nuevoConjunto(Conjunto conjunto) {

        String consulta = "INSERT INTO conjunto (`Nombre`, `LinkDePago`, `Direccion`, `PrecioAdmin`, `NumeroTorres`, `NumeroPisos`, `NumeroApartamentos`) VALUES (?, ?, ? ,?, ?, ?,?)";

        try (
                 PreparedStatement statement = this.con.prepareStatement(consulta);) {

            String nombre = conjunto.getNombre();
            String link = conjunto.getLinkDePago();
            String dir = conjunto.getDireccion();
            int precio = conjunto.getPrecioAdmin();
            BigDecimal torres = conjunto.getNumeroTorres();
            BigDecimal pisos = conjunto.getNumeroPisos();
            BigDecimal aptos = conjunto.getNumeroApartamentos();

            statement.setString(1, nombre);
            statement.setString(2, link);
            statement.setString(3, dir);
            statement.setInt(4, precio);
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

    @POST
    @Path("/crearAptos")
    @Consumes(MediaType.APPLICATION_JSON)
    public void actualizarDatos(Conjunto conjunto) {
        controladorApartamento controladorApto = new controladorApartamento();
        controladorApto.aptosBase(conjunto.getNumeroPisos().intValue(), conjunto.getNumeroTorres().intValue(), conjunto.getNumeroApartamentos().intValue(), conjunto.getIdConjunto());
    }

    @POST
    @Path("/agregarEmpleadoConjunto/{idConjunto}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String agregarEmpleadoConjunto(@PathParam("idConjunto") int idC, Empleado e) {
        String consulta = "SELECT p.IdPersona "
                + "FROM Persona as P "
                + "WHERE p.Usuario = ?";

        String consulta2 = "SELECT p.PersonaIdPersona, p.ConjuntoIdConjunto "
                + "FROM PersonaXConjunto as p "
                + "WHERE p.PersonaIdPersona = ? AND p.ConjuntoIdConjunto = ?";

        String consulta3 = "INSERT INTO PersonaXConjunto(`PersonaIdPersona`,`ConjuntoIdConjunto`, `Oficio`, `Imagen`) VALUES(?, ?, ? ,?)";

        try ( PreparedStatement statement = this.con.prepareStatement(consulta);) {

            String usuario = e.getUsuario();
            statement.setString(1, usuario);

            try ( ResultSet rs = statement.executeQuery();) {
                int idEmpleado = 0;
                while (rs.next()) {
                    idEmpleado = (rs.getInt("IdPersona"));
                }
                if (idEmpleado == 0) {
                    return "El empleado no existe";
                } else {

                    try ( PreparedStatement statement1 = this.con.prepareStatement(consulta2);) {
                        statement1.setInt(1, idEmpleado);
                        statement1.setInt(2, idC);

                        try ( ResultSet rs2 = statement.executeQuery();) {
                            boolean existe = false;
                            while (rs2.next()) {
                                existe = true;
                            }
                            if (existe) {
                                return "El empleado ya existe";
                            } else {
                                try ( PreparedStatement statement3 = this.con.prepareStatement(consulta3);) {
                                    String oficio = e.getOficio();
                                    String imagen = e.getImagen();

                                    statement3.setInt(1, idEmpleado);
                                    statement3.setInt(2, idC);
                                    statement3.setString(3, oficio);
                                    statement3.setString(4, imagen);

                                    statement3.executeUpdate();

                                    return "Empleado asociado correctamente";
                                }
                            }
                        }
                    }
                }
            }
        } catch (SQLException ex) {
            return "No fue posible asociar el empleado al conjunto";
        }
    }

    @GET
    @Path("/manual/{IdConjunto}")
    @Produces(MediaType.TEXT_PLAIN)
    public String getManual(@PathParam("IdConjunto") int idConjunto
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

}
