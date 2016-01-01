package lolinfi.pojo.general;

import javax.annotation.Generated;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("org.jsonschema2pojo")
public class RolesRecent20 {

@SerializedName("role")
@Expose
private String role;
@SerializedName("times")
@Expose
private Integer times;

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

/**
* 
* @return
* The times
*/
public Integer getTimes() {
return times;
}

/**
* 
* @param times
* The times
*/
public void setTimes(Integer times) {
this.times = times;
}

}
