import org.json.JSONObject;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Delete {
   public static void main(String[] args) {
      if(args.length > 0) {
         String jsonData = args[0];
         processJsonData(jsonData);
      }
      else {
         System.out.println("No JSON data received from PHP.");
      }
   }

   private static void processJsonData(String jsonData) {
      System.out.println("Received JSON data in Java: " + jsonData);
      try {
         JSONObject jsonObject = new JSONObject(jsonData);
         int id = jsonObject.getInt("id");
         try(Connection connection = DriverManager.getConnection("jdbc:sqlite:database.sqlite")) {
            String createTableSQL = "CREATE TABLE IF NOT EXISTS history (id INTEGER PRIMARY KEY AUTOINCREMENT, note TEXT NOT NULL, cost INTEGER NOT NULL)";
            try(PreparedStatement createTableStatement = connection.prepareStatement(createTableSQL)) {
               createTableStatement.executeUpdate();
            }
            catch(Exception e) {
               System.out.println(e);
            }
            String deleteDataSQL = "DELETE FROM history WHERE id = ?";
            try(PreparedStatement deleteDataStatement = connection.prepareStatement(deleteDataSQL)) {
               deleteDataStatement.setInt(1, id);
               int rowsAffected = deleteDataStatement.executeUpdate();
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
