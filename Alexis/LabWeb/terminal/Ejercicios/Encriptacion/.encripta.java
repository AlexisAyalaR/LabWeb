import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class encripta {

    public static String encripta(String aEncriptar) {

        byte[] message = aEncriptar.getBytes(StandardCharsets.UTF_8);
        String encoded = Base64.getEncoder().encodeToString(message);

        return encoded;
    }   

    public static String leer(){

        String res = "";
        File archivo = null;
        FileReader fr = null;
        BufferedReader br = null;
 
        try {
            archivo = new File ("aEncriptar.txt");
            fr = new FileReader (archivo);
            br = new BufferedReader(fr);
 
            String linea;
            while((linea=br.readLine())!=null)
                res = res + linea;
        }
        catch(Exception e){
           e.printStackTrace();
        }finally{
           try{
              if( null != fr ){
                 fr.close();
              }
           }catch (Exception e2){
              e2.printStackTrace();
           }
        }
        return res;
    }

     public static void escribir(String aEscribir){

        FileWriter fichero = null;
        PrintWriter pw = null;
        try {
            fichero = new FileWriter("aEncriptar.txt");
            pw = new PrintWriter(fichero);
 
           pw.println(aEscribir);
 
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (null != fichero)
                    fichero.close();
            } catch (Exception e2) {
                e2.printStackTrace();
            }
        }
    }
    //http://www.lawebdelprogramador.com/codigo/Java/3842-Leer-y-escribir-en-un-archivo-de-texto.html

    public static void main (String [] args){
        String codigo, codigoEncriptado;
        codigo = leer();
        codigoEncriptado = encripta(codigo);
        escribir(codigoEncriptado);
    }
}
