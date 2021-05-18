/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CONTROLADORES;

import API.ConexionBD;
import ENTIDADES.*;
import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
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
                    reservaPK.setIdReserva(rs.getInt("IdReserva"));
                    reservaPK.setApartamentoConjuntoIdConjunto(rs.getInt("ApartamentoConjuntoIdConjunto"));
                    reservaPK.setApartamentoIdApartamento(rs.getInt("ApartamentoIdApartamento"));
                    reservaPK.setAreaComunIdArea(rs.getInt("AreaComunIdArea"));
                    reservaPK.setAreaComunConjuntoIdConjunto(rs.getInt("AreaComunConjuntoIdConjunto"));
                    reservaC.setReservaPK(reservaPK);
                    reservaC.setApartamento(getApto(reservaPK.getApartamentoIdApartamento()));
                    reservaC.setHoraFinal(rs.getBigDecimal("HoraFinal"));
                    reservaC.setHoraInicio(rs.getBigDecimal("HoraInicio"));
                    reservaC.setFecha(rs.getInt("Fecha"));
                    reservaC.setAreacomun(getArea(reservaPK.getAreaComunIdArea()));

                    reservas.add(reservaC);

                }
            }
        } catch (SQLException sqle) {

        }

        return reservas;

    }

    @GET
    @Path("/misReservas/conjunto/{IdConjunto}/apartamento/{IdApartamento}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Reserva> getMisReservas(@PathParam("IdConjunto") int Idconjunto, @PathParam("IdApartamento") int IdApartamento) {
        List<Reserva> reservas = new ArrayList<>();
        String consulta = "SELECT * FROM reserva rs WHERE rs.AreaComunConjuntoIdConjunto=? AND rs.apartamentoIdApartamento=?";
        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {

            statement.setInt(1, Idconjunto);
            statement.setInt(2, IdApartamento);

            try (ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    Reserva reservaC = new Reserva();
                    ReservaPK reservaPK = new ReservaPK();
                    reservaPK.setIdReserva(rs.getInt("IdReserva"));
                    reservaPK.setApartamentoConjuntoIdConjunto(rs.getInt("ApartamentoConjuntoIdConjunto"));
                    reservaPK.setApartamentoIdApartamento(rs.getInt("ApartamentoIdApartamento"));
                    reservaPK.setAreaComunIdArea(rs.getInt("AreaComunIdArea"));
                    reservaPK.setAreaComunConjuntoIdConjunto(rs.getInt("AreaComunConjuntoIdConjunto"));
                    reservaC.setReservaPK(reservaPK);
                    reservaC.setApartamento(getApto(reservaPK.getApartamentoIdApartamento()));
                    reservaC.setHoraFinal(rs.getBigDecimal("HoraFinal"));
                    reservaC.setHoraInicio(rs.getBigDecimal("HoraInicio"));
                    reservaC.setFecha(rs.getInt("Fecha"));
                    reservaC.setCantidadPersonas(rs.getInt("CantidadPersonas"));
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
                    apto.setNumero(rs.getInt("Numero"));
                    apto.setPiso(rs.getInt("Piso"));
                    apto.setTorre(rs.getInt("Torre"));
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
       /*MÉTODO PARA CONOCER LAS RESERVAS DE LA ÁREA*/
    public List<Reserva> reservasAreaConjunto(int Idconjunto, int idArea) {

        List<Reserva> reservas = new ArrayList<>();
        String consulta = "SELECT * FROM reserva rs WHERE rs.AreaComunConjuntoIdConjunto=? and rs.AreaComunIdArea=?";

        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);) {

            statement.setInt(1, Idconjunto);
            statement.setInt(2, idArea);

            try (ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    Reserva reservaC = new Reserva();
                    reservaC.setHoraFinal(rs.getBigDecimal("HoraFinal"));
                    reservaC.setHoraInicio(rs.getBigDecimal("HoraInicio"));
                    reservaC.setFecha(rs.getInt("Fecha"));
                    reservas.add(reservaC);
                }
            }
        } catch (SQLException sqle) {

        }

        return reservas;

    }

    public String valido(List<Reserva> reservas, BigDecimal inicio, BigDecimal fin, int fecha) {

        String retorno = "";

        if (fin.intValue() <= inicio.intValue()) {
            retorno = "La fecha de fin tiene que ser más tarde que la de inicio";
        } else {
            boolean interrumpe = false;
            for (Reserva r : reservas) {
                if (r.getFecha() == (fecha)) {
                    if (r.getHoraInicio().intValue() < fin.intValue() || r.getHoraFinal().intValue() < inicio.intValue()) {
                        interrumpe = true;
                        break;
                    }

                }

            }

            if (interrumpe) {

                retorno = "No se puede hacer la reserva en las horas estipuladas. Verfique disponibilidad.";
            }

        }
        return retorno;
    }

    /*MÉTODO PARA AGREGAR  UN  ÁREA COMUN A UN  CONJUNTO*/
    // la fecha esta llegando en null
    @POST
    @Path("/NuevaReserva")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String addReserva(Reserva r) {

        String interrupcion;
        interrupcion=validarPersonas(r.getReservaPK().getAreaComunIdArea(), r.getCantidadPersonas());
        if (validarPersonas(r.getReservaPK().getAreaComunIdArea(), r.getCantidadPersonas()).equals("")) {

            List<Reserva> reservas = new ArrayList<>();
            reservas = reservasAreaConjunto(r.getReservaPK().getApartamentoConjuntoIdConjunto(), r.getReservaPK().getAreaComunIdArea());
            interrupcion = valido(reservas, r.getHoraInicio(), r.getHoraFinal(), r.getFecha());

            if (interrupcion.equals("")) {

                String consulta = "INSERT INTO reserva (`AreaComunIdArea`, `ApartamentoIdApartamento`, `AreaComunConjuntoIdConjunto`, `ApartamentoConjuntoIdConjunto`, `HoraFinal`, `HoraInicio`, `Fecha`, `CantidadPersonas`) VALUES (?,?,?,?,?,?,?,?)";
                try (
                        PreparedStatement statement = this.con.prepareStatement(consulta);) {

                    int idArea = r.getReservaPK().getAreaComunIdArea();
                    BigDecimal hora = r.getHoraInicio();

                    statement.setInt(1, r.getReservaPK().getAreaComunIdArea());
                    statement.setInt(2, r.getReservaPK().getApartamentoIdApartamento());
                    statement.setInt(3, r.getReservaPK().getAreaComunConjuntoIdConjunto());
                    statement.setInt(4, r.getReservaPK().getApartamentoConjuntoIdConjunto());
                    statement.setBigDecimal(5, r.getHoraFinal());
                    statement.setBigDecimal(6, r.getHoraInicio());
                    statement.setInt(7, r.getFecha());
                    statement.setInt(8,r.getCantidadPersonas());

                    statement.executeUpdate();

                    return "Agregado exitosamente";

                } catch (SQLException sqle) {
                    System.out.println("Error en la ejecución:" + sqle.getErrorCode() + " " + sqle.getMessage());
                }

            }

        } else {
            interrupcion = "Su reserva excede la capacidad del area comun";
        }
        return interrupcion;

    }

    @PUT
    @Path("/CambiarReserva")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String modificarReserva(Reserva r) {

        String interrupcion;
        if (validarPersonas(r.getReservaPK().getAreaComunIdArea(), r.getCantidadPersonas()).equals("")) {
            List<Reserva> reservas = new ArrayList<>();
            reservas = reservasAreaConjunto(r.getReservaPK().getApartamentoConjuntoIdConjunto(), r.getReservaPK().getAreaComunIdArea());
            interrupcion = valido(reservas, r.getHoraInicio(), r.getHoraFinal(), r.getFecha());

            if (interrupcion.equals("")) {
                String consulta = "UPDATE reserva SET `HoraFinal` = ?, `HoraInicio` = ?, `Fecha` = ?, `CantidadPersonas` = ? WHERE (`IdReserva` = ?)";
                PreparedStatement statement;
                try {
                    statement = this.con.prepareStatement(consulta);

                    statement.setBigDecimal(1, r.getHoraFinal());
                    statement.setBigDecimal(2, r.getHoraInicio());
                    statement.setInt(3, r.getFecha());
                    statement.setInt(4, r.getCantidadPersonas());
                    statement.setInt(5, r.getReservaPK().getIdReserva());
                   

                    statement.executeUpdate();

                    interrupcion= "Se pudo actualizar satisfactoriamente";

                } catch (SQLException sqle) {
                        System.out.println("Error en la ejecución:"  + sqle.getErrorCode() + " " + sqle.getMessage()); 
                }
            } else {
                interrupcion = "No se puede hacer la reserva en las horas estipuladas. Verfique disponibilidad.";
            }
        } else {
            interrupcion = "Su reserva excede la capacidad del area comun";

        }
         
        return interrupcion;
    }

    @DELETE
    @Path("/BorrarReserva/{IdReserva}")
    @Produces(MediaType.TEXT_PLAIN)
    public String BorrarResrva(@PathParam("IdReserva") int IdReserva) {
        String consulta = "DELETE FROM reserva WHERE `IdReserva` = ?";
        PreparedStatement statement;
        try {
            statement = this.con.prepareStatement(consulta);

            this.con.prepareStatement(consulta);
            statement.setInt(1, IdReserva);

            statement.executeUpdate();

            return "Se pudo eliminar satisfactoriamente";

        } catch (SQLException sqle) {
        }

        return "No se pudo eliminar la reserva";
    }

    /*METODO PARA VALIDAR LA CANTIDAD DE PERSONAS PARA UNA RESERVA */
    public String validarPersonas(int llaveAreaComun, int numeroPersonas) {
        
        int cap = -1;
        String consulta = "SELECT  * FROM areacomun ar WHERE ar.IdArea = ? ";
        try (
                PreparedStatement statement = this.con.prepareStatement(consulta);
                ) {
                statement.setInt(1, llaveAreaComun);

            try (ResultSet rs = statement.executeQuery();) {
                
               while(rs.next()){
                Areacomun area = new Areacomun();
                   area.setCapacidad(rs.getInt("Capacidad"));
                
                cap = area.getCapacidad();
               
               }
                
            }
        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución:"  + sqle.getErrorCode() + " " + sqle.getMessage());  
        }
        
        if (cap>= numeroPersonas) {
            return "";
        }
        return "Su reserva excede la capacidad del area comun";
    }
}
