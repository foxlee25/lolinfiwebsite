package lolinfi.pojo.general;


import javax.annotation.Generated;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("org.jsonschema2pojo")
public class Role {

@SerializedName("stats")
@Expose
private Stats stats;
@SerializedName("role")
@Expose
private String role;

/**
* 
* @return
* The stats
*/
public Stats getStats() {
return stats;
}

/**
* 
* @param stats
* The stats
*/
public void setStats(Stats stats) {
this.stats = stats;
}

/**
* 
* @return
* The role
*/
public String getRole() {
return role;
}

/**
* 
* @param role
* The role
*/
public void setRole(String role) {
this.role = role;
}

}
