package lolinfi.pojo.matches;

import javax.annotation.Generated;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("org.jsonschema2pojo")
public class Match {

@SerializedName("queueType")
@Expose
private String queueType;
@SerializedName("champion")
@Expose
private Integer champion;
@SerializedName("kills")
@Expose
private Integer kills;
@SerializedName("deaths")
@Expose
private Integer deaths;
@SerializedName("winner")
@Expose
private Boolean winner;
@SerializedName("kda")
@Expose
private Double kda;
@SerializedName("matchTime")
@Expose
private String matchTime;
@SerializedName("assists")
@Expose
private Integer assists;
@SerializedName("role")
@Expose
private String role;
@SerializedName("matchDuration")
@Expose
private Integer matchDuration;

/**
* 
* @return
* The queueType
*/
public String getQueueType() {
return queueType;
}

/**
* 
* @param queueType
* The queueType
*/
public void setQueueType(String queueType) {
this.queueType = queueType;
}

/**
* 
* @return
* The champion
*/
public Integer getChampion() {
return champion;
}

/**
* 
* @param champion
* The champion
*/
public void setChampion(Integer champion) {
this.champion = champion;
}

/**
* 
* @return
* The kills
*/
public Integer getKills() {
return kills;
}

/**
* 
* @param kills
* The kills
*/
public void setKills(Integer kills) {
this.kills = kills;
}

/**
* 
* @return
* The deaths
*/
public Integer getDeaths() {
return deaths;
}

/**
* 
* @param deaths
* The deaths
*/
public void setDeaths(Integer deaths) {
this.deaths = deaths;
}

/**
* 
* @return
* The winner
*/
public Boolean getWinner() {
return winner;
}

/**
* 
* @param winner
* The winner
*/
public void setWinner(Boolean winner) {
this.winner = winner;
}

/**
* 
* @return
* The kda
*/
public Double getKda() {
return kda;
}

/**
* 
* @param kda
* The kda
*/
public void setKda(Double kda) {
this.kda = kda;
}

/**
* 
* @return
* The matchTime
*/
public String getMatchTime() {
return matchTime;
}

/**
* 
* @param matchTime
* The matchTime
*/
public void setMatchTime(String matchTime) {
this.matchTime = matchTime;
}

/**
* 
* @return
* The assists
*/
public Integer getAssists() {
return assists;
}

/**
* 
* @param assists
* The assists
*/
public void setAssists(Integer assists) {
this.assists = assists;
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

/**
* 
* @return
* The matchDuration
*/
public Integer getMatchDuration() {
return matchDuration;
}

/**
* 
* @param matchDuration
* The matchDuration
*/
public void setMatchDuration(Integer matchDuration) {
this.matchDuration = matchDuration;
}

}
