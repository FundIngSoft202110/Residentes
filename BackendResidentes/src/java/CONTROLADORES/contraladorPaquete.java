/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CONTROLADORES;

import API.ConexionBD;
import ENTIDADES.DTOrespuestas;
import ENTIDADES.Paquete;
import ENTIDADES.PaquetePK;
import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
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
    public List<Paquete> cargarPaquete(@PathParam("IdConjunto") int idConjunto, @PathParam("IdApto") int idApto) {
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
                    a.setFecha(rs.getBigDecimal("Fecha"));
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
    
    /*MÉTODO PARA AGREGAR  UN  PAQUETE DE UN APTO EN UN  CONJUNTO*/
    @POST
    @Path("/nuevoPaquete")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public DTOrespuestas agregarPaquete(Paquete paquete) {
        DTOrespuestas res = new DTOrespuestas();
        String consulta = "INSERT INTO Paquete (`ApartamentoConjuntoIdConjunto`, `ApartamentoIdApartamento`, `Tamano`, `Fecha`, `Hora`, `Remitente`) VALUES (?, ?, ? ,?, ?, ?)";

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {
            
            int conjuntoId = paquete.getPaquetePK().getApartamentoConjuntoIdConjunto();
            int idApto = paquete.getPaquetePK().getApartamentoIdApartamento();
            String tamano = paquete.getTamano();
            BigDecimal fecha = paquete.getFecha();
            BigDecimal hora = paquete.getHora();
            String remitente = paquete.getRemitente();

            statement.setInt(1, conjuntoId);
            statement.setInt(2, idApto);
            statement.setString(3, tamano);
            statement.setBigDecimal(4, fecha);
            statement.setBigDecimal(5, hora);
            statement.setString(6, remitente);
            statement.executeUpdate();
            res.setRespuesta("Paquete agregado exitosamente");
            return res;

        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución:" + sqle.getErrorCode() + " " + sqle.getMessage());
        }
        res.setRespuesta("Fallo de creacion");
        return res;
    }
    
    /*MÉTODO PARA ELIMINAR  UN  PAQUETE DE UN APTO EN UN  CONJUNTO*/
    @DELETE
    @Path("/eliminarPaquete/{IdConjunto}/{IdApto}/{IdPaqueete}")
    @Produces(MediaType.APPLICATION_JSON)
    public DTOrespuestas eliminarPaquete(@PathParam("IdConjunto") int idConjunto, @PathParam("IdApto") int idApto, @PathParam("IdPaqueete") int idPaquete) {
        DTOrespuestas res = new DTOrespuestas();
        String consulta = "DELETE FROM Paquete WHERE ApartamentoConjuntoIdConjunto=? AND ApartamentoIdApartamento=? AND IdPaqueete=?";
        PreparedStatement statement;
        try {
            statement = this.con.prepareStatement(consulta);

            this.con.prepareStatement(consulta);
            statement.setInt(1, idConjunto);
            statement.setInt(2, idApto);
            statement.setInt(3, idPaquete);
            statement.executeUpdate();
            res.setRespuesta("Se pudo eliminar satisfactoriamente");
            return res;

        } catch (SQLException sqle) {
        }
        res.setRespuesta("No se pudo eliminar");
        return res;
    }
}
