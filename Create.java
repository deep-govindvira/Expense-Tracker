import org.json.JSONObject;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Create {
   public static void main(String[] args) {
      try {
         try(Connection connection = DriverManager.getConnection("jdbc:sqlite:database.sqlite")) {
            String createTableSQL = "CREATE TABLE IF NOT EXISTS history (id INTEGER PRIMARY KEY AUTOINCREMENT, note TEXT NOT NULL, cost INTEGER NOT NULL)";
            try(PreparedStatement createTableStatement = connection.prepareStatement(createTableSQL)) {
               createTableStatement.executeUpdate();
            }
            catch(Exception e) {
               System.out.println(e);
            }
         }
         catch(SQLException e) {
            e.printStackTrace();
         }
      }
      catch(Exception e) {
         System.err.println("Error processing JSON data: " + e.getMessage());
      }
   }
}
