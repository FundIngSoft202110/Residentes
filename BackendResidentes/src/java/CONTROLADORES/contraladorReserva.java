/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CONTROLADORES;

import API.ConexionBD;
import ENTIDADES.*;
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

@Path("/reservas")
public class contraladorReserva {

    ConexionBD conexion = new ConexionBD();
    Connection con = conexion.conectar();

    /*MÉTODO PARA CONOCER TODAS LAS RESERVAS DE UN CONJUNTO*/
    @GET
    @Path("/reservasConjunto/{Idconjunto}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Reserva> getReservasConjunto(@PathParam("Idconjunto") int Idconjunto) {

        List<Reserva> reservas = new ArrayList<>();
        String consulta = "SELECT * FROM reserva rs WHERE rs.AreaComunConjuntoIdConjunto=?";

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {

            statement.setInt(1, Idconjunto);

            try (ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    Reserva reservaC = new Reserva();
                    ReservaPK reservaPK = new ReservaPK();
                    reservaPK.setApartamentoConjuntoIdConjunto(rs.getInt("ApartamentoConjuntoIdConjunto"));
                    reservaPK.setApartamentoIdApartamento(rs.getInt("ApartamentoIdApartamento"));
                    reservaPK.setAreaComunIdArea(rs.getInt("AreaComunIdArea"));
                    reservaPK.setAreaComunConjuntoIdConjunto(rs.getInt("AreaComunConjuntoIdConjunto"));

                   reservaC.setApartamento(getApto(reservaPK.getApartamentoIdApartamento()));
                    reservaC.setHoraFinal(rs.getBigDecimal("HoraFinal"));
                    reservaC.setHoraInicio(rs.getBigDecimal("HoraInicio"));
                    reservaC.setAreacomun(getArea(reservaPK.getAreaComunIdArea()));

                    reservas.add(reservaC);

                }
            }
        } catch (SQLException sqle) {

        }

        return reservas;

    }

    /*MÉTODO PARA CONOCER EL NUMERO TORRE Y PISO DE UN APTO*/
    public Apartamento getApto(int idApto) {
        Apartamento apto = new Apartamento();
        String consulta = "SELECT * FROM apartamento ap WHERE ap.IdApartamento=? ";
        try (PreparedStatement statement = this.con.prepareStatement(consulta);) {
            statement.setInt(1, idApto);
            try (ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    apto.setNumero(rs.getBigDecimal("Numero"));
                    apto.setPiso(rs.getBigDecimal("Piso"));
                    apto.setTorre(rs.getBigDecimal("Torre"));
                }
            }
        } catch (SQLException sqle) {
        }

        return apto;
    }

    /*MÉTODO PARA CONOCER EL NOMBRE DEL ÁREA*/
    public Areacomun getArea(int idArea) {
        Areacomun area = new Areacomun();
        String consulta = "SELECT * FROM areacomun ac WHERE ac.IdArea=? ";
        try (PreparedStatement statement = this.con.prepareStatement(consulta);) {
            statement.setInt(1, idArea);
            try (ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    area.setNombre(rs.getNString("Nombre"));
                }
            }
        } catch (SQLException sqle) {
        }

        return area;
    }
    
    
    

}
