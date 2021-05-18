/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CONTROLADORES;

import API.ConexionBD;
import ENTIDADES.Paquete;
import ENTIDADES.PaquetePK;
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

@Path("/paquetes")
public class contraladorPaquete {
    ConexionBD conexion = new ConexionBD();
    Connection con = conexion.conectar();
    @GET
    @Path("/{IdConjunto}/{IdApto}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Paquete> getAptosConjunto(@PathParam("IdConjunto") int idConjunto, @PathParam("IdApto") int idApto) {
        List<Paquete> pqt = new ArrayList<>();
        String consulta = "SELECT * FROM Paquete AS P WHERE (`ApartamentoIdApartamento` = ?) AND (`ApartamentoConjuntoIdConjunto` = ?);";
        Paquete a = new Paquete();
        PaquetePK apk = new PaquetePK();
        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);
                ) {
            statement.setInt(1, idApto);
            statement.setInt(2, idConjunto);
        
            try(ResultSet rs = statement.executeQuery();){

                while (rs.next()) {
                    a = new Paquete();
                    apk = new PaquetePK(rs.getInt("IdPaqueete"), rs.getInt("ApartamentoConjuntoIdConjunto"), rs.getInt("ApartamentoIdApartamento"));
                    a.setPaquetePK(apk);
                    a.setTamano(rs.getString("Tamano"));
                    a.setFecha(rs.getInt("Fecha"));
                    a.setHora(rs.getBigDecimal("Hora"));
                    a.setRemitente(rs.getString("Remitente"));
                    pqt.add(a);
                }
            }
        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución:" + sqle.getErrorCode() + " " + sqle.getMessage());
        }

        return pqt;

    }
}
