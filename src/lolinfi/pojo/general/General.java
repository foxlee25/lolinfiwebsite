package lolinfi.pojo.general;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("org.jsonschema2pojo")
public class General {

@SerializedName("roles")
@Expose
private List<Role> roles = new ArrayList<Role>();
@SerializedName("champs")
@Expose
private List<Champ> champs = new ArrayList<Champ>();
@SerializedName("topBar")
@Expose
private TopBar topBar;
@SerializedName("statsRecent20")
@Expose
private StatsRecent20 statsRecent20;
@SerializedName("champsRecent20")
@Expose
private List<ChampsRecent20> champsRecent20 = new ArrayList<ChampsRecent20>();
@SerializedName("rolesRecent20")
@Expose
private List<RolesRecent20> rolesRecent20 = new ArrayList<RolesRecent20>();

/**
* 
* @return
* The roles
*/
public List<Role> getRoles() {
return roles;
}

/**
* 
* @param roles
* The roles
*/
public void setRoles(List<Role> roles) {
this.roles = roles;
}

/**
* 
* @return
* The champs
*/
public List<Champ> getChamps() {
return champs;
}

/**
* 
* @param champs
* The champs
*/
public void setChamps(List<Champ> champs) {
this.champs = champs;
}

/**
* 
* @return
* The topBar
*/
public TopBar getTopBar() {
return topBar;
}

/**
* 
* @param topBar
* The topBar
*/
public void setTopBar(TopBar topBar) {
this.topBar = topBar;
}

/**
* 
* @return
* The statsRecent20
*/
public StatsRecent20 getStatsRecent20() {
return statsRecent20;
}

/**
* 
* @param statsRecent20
* The statsRecent20
*/
public void setStatsRecent20(StatsRecent20 statsRecent20) {
this.statsRecent20 = statsRecent20;
}

/**
* 
* @return
* The champsRecent20
*/
public List<ChampsRecent20> getChampsRecent20() {
return champsRecent20;
}

/**
* 
* @param champsRecent20
* The champsRecent20
*/
public void setChampsRecent20(List<ChampsRecent20> champsRecent20) {
this.champsRecent20 = champsRecent20;
}

/**
* 
* @return
* The rolesRecent20
*/
public List<RolesRecent20> getRolesRecent20() {
return rolesRecent20;
}

/**
* 
* @param rolesRecent20
* The rolesRecent20
*/
public void setRolesRecent20(List<RolesRecent20> rolesRecent20) {
this.rolesRecent20 = rolesRecent20;
}

}
