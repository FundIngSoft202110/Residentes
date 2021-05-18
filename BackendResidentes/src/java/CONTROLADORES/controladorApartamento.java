/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CONTROLADORES;

import ENTIDADES.*;
import API.ConexionBD;
import ENTIDADES.*;
import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/apartamentos")
public class controladorApartamento {

    ConexionBD conexion = new ConexionBD();
    Connection con = conexion.conectar();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Apartamento> getApartamentos() {
        List<Apartamento> apto = new ArrayList<>();
        String consulta = "SELECT * FROM Apartamento ";
        Apartamento a = new Apartamento();
        ApartamentoPK apk = new ApartamentoPK();
        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);
                ResultSet rs = statement.executeQuery();) {

            while (rs.next()) {
                a = new Apartamento();
                apk = new ApartamentoPK(rs.getInt("IdApartamento"), rs.getInt("ConjuntoIdConjunto"));
                a.setApartamentoPK(apk);
                a.setTorre(rs.getBigDecimal("Torre"));
                a.setPiso(rs.getBigDecimal("Piso"));
                a.setNumero(rs.getBigDecimal("Numero"));
                a.setContrasena(rs.getString("Contrasena"));
                apto.add(a);
            }
        } catch (SQLException sqle) {

        }

        return apto;
    }

    @GET
    @Path("/apartamentos/{IdConjunto}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Apartamento> getAptosConjunto(@PathParam("IdConjunto") int id) {
        List<Apartamento> apto = new ArrayList<>();
        String consulta = "SELECT * FROM Apartamento AS a WHERE  a.ConjuntoIdConjunto = ?";
        Apartamento a = new Apartamento();
        ApartamentoPK apk = new ApartamentoPK();
        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);
                ) {
            statement.setInt(1, id);
        
            try(ResultSet rs = statement.executeQuery();){

                while (rs.next()) {
                    a = new Apartamento();
                    apk = new ApartamentoPK(rs.getInt("IdApartamento"), rs.getInt("ConjuntoIdConjunto"));
                    a.setApartamentoPK(apk);
                    a.setTorre(rs.getBigDecimal("Torre"));
                    a.setPiso(rs.getBigDecimal("Piso"));
                    a.setNumero(rs.getBigDecimal("Numero"));
                    a.setContrasena(rs.getString("Contrasena"));
                    apto.add(a);
                }
            }
        } catch (SQLException sqle) {

        }

        return apto;

    }

}
