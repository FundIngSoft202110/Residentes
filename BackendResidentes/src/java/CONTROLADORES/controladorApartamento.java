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
import java.util.Random;
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
                 PreparedStatement statement = this.con.prepareStatement(consulta);  ResultSet rs = statement.executeQuery();) {

            while (rs.next()) {
                a = new Apartamento();
                apk = new ApartamentoPK(rs.getInt("IdApartamento"), rs.getInt("ConjuntoIdConjunto"));
                a.setApartamentoPK(apk);
                a.setTorre(rs.getInt("Torre"));
                a.setPiso(rs.getInt("Piso"));
                a.setNumero(rs.getInt("Numero"));
                a.setContrasena(rs.getString("Contrasena"));
                apto.add(a);
            }
        } catch (SQLException sqle) {

        }

        return apto;
    }

    @GET
    @Path("/apartamentosc/{IdConjunto}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Apartamento> getAptosConjunto(@PathParam("IdConjunto") int id) {
        List<Apartamento> apto = new ArrayList<>();
        String consulta = "SELECT * FROM Apartamento AS a WHERE  a.ConjuntoIdConjunto = ?";
        Apartamento a = new Apartamento();
        ApartamentoPK apk = new ApartamentoPK();
        try (
                 PreparedStatement statement = this.con.prepareStatement(consulta);) {
            statement.setInt(1, id);

            try ( ResultSet rs = statement.executeQuery();) {

                while (rs.next()) {
                    a = new Apartamento();
                    apk = new ApartamentoPK(rs.getInt("IdApartamento"), rs.getInt("ConjuntoIdConjunto"));
                    a.setApartamentoPK(apk);
                    a.setTorre(rs.getInt("Torre"));
                    a.setPiso(rs.getInt("Piso"));
                    a.setNumero(rs.getInt("Numero"));
                    a.setContrasena(rs.getString("Contrasena"));
                    apto.add(a);
                }
            }
        } catch (SQLException sqle) {

        }

        return apto;
    }

    @GET
    @Path("/aptoNoticia/{IdConjunto}/{IdApto}")
    @Produces(MediaType.APPLICATION_JSON)
    public DTOrespuestas getAptoNoticia(@PathParam("IdConjunto") int idConjunto, @PathParam("IdApto") int idApto) {
        DTOrespuestas res = null;
        String consulta = "SELECT CONCAT(a.torre, '-', a.piso, a.numero) AS Apto "
                + "FROM Apartamento AS a "
                + "WHERE  a.ConjuntoIdConjunto = ? AND a.IdApartamento = ?;";
        try (
                 PreparedStatement statement = this.con.prepareStatement(consulta);) {
            statement.setInt(1, idConjunto);
            statement.setInt(2, idApto);

            try ( ResultSet rs = statement.executeQuery();) {
                while (rs.next()) {
                    res = new DTOrespuestas(rs.getString("Apto"));
                }
            }
        } catch (SQLException sqle) {

        }

        return res;
    }

    @GET
    @Path("/apartamentos/{AptoConjunto}")
    @Consumes(MediaType.APPLICATION_JSON)
    public int getAptoIngreso(@PathParam("AptoConjunto") Apartamento apartamento) {

        String consulta = "SELECT a.IdApartamento, a.Contrasena FROM apartamento a WHERE a.ConjuntoIdConjunto=? AND a.Torre =? AND a.Piso=? AND a.Numero=?";
        try (
                 PreparedStatement statement = this.con.prepareStatement(consulta);) {

            int conjunto = apartamento.getApartamentoPK().getConjuntoIdConjunto();
            int torre = apartamento.getTorre();
            int piso = apartamento.getPiso();
            int numero = apartamento.getNumero();
            String contrasena = apartamento.getContrasena();

            statement.setInt(1, conjunto);
            statement.setInt(2, torre);
            statement.setInt(3, piso);
            statement.setInt(4, numero);

            try (
                     ResultSet rs = statement.executeQuery();) {
                int idApto = rs.getInt(1);
                String contrasena2 = rs.getNString(2);
                if (!contrasena.equals(contrasena2)) {
                    idApto = -1;
                }
                return idApto;
            }

        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución:" + sqle.getErrorCode() + " " + sqle.getMessage());
        }

        return 0;
    }

    public List<Apartamento> crearAptos(int numPiso, int numTorres, int numApto, int numConjunto) {

        List<Apartamento> aptosConjunto = new ArrayList<>();

        for (int i = 0; i < numTorres; i++) {
            for (int j = 0; j < numPiso; j++) {
                for (int k = 0; k < numApto; k++) {
                    ApartamentoPK pk = new ApartamentoPK();
                    Apartamento apto = new Apartamento();
                    pk.setConjuntoIdConjunto(numConjunto);
                    apto.setApartamentoPK(pk);
                    apto.setTorre(i);
                    apto.setPiso(j);
                    apto.setNumero(k);
                    apto.setContrasena("1234");
                    aptosConjunto.add(apto);
                }
            }
        }

        return aptosConjunto;

    }


    public void generarAptos(int idConj, int nTorres, int nPisos, int nAptos) {
        String consulta = "INSERT INTO apartamento (`ConjuntoIdConjunto`, `Torre`, `Numero`, `Contrasena`, `Piso`) VALUES (?, ?, ?, ?,?)";
        for (int i = 0; i < nTorres; i++) {
            for (int j = 0; j < nPisos; j++) {
                for (int k = 0; k < nAptos; k++) {
                    try (
                             PreparedStatement statement = this.con.prepareStatement(consulta);) {

                        statement.setInt(1, idConj);
                        statement.setInt(2, i+1);
                        statement.setInt(3, k+1);
                        String aux = generateRandomWords();
                        statement.setString(4,aux);
                        statement.setInt(5, j+1);
                        statement.executeUpdate();

                    } catch (SQLException sqle) {
                        System.out.println("Error en la ejecución:" + sqle.getErrorCode() + " " + sqle.getMessage());
                    }
                }
            }
        }
    }

    public  String generateRandomWords() {
        
        Random random = new Random();
        
            char[] word = new char[random.nextInt(8) + 8]; // words of length 3 through 10. (1 and 2 letter words are boring.) 
            for (int j = 0; j < word.length; j++) {
                word[j] = (char) ('a' + random.nextInt(26));
            }
            return new String(word);
        
    }

}
