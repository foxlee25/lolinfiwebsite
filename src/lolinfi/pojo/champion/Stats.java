package lolinfi.pojo.champion;

import javax.annotation.Generated;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("org.jsonschema2pojo")
public class Stats {

@SerializedName("cs")
@Expose
private Double cs;
@SerializedName("winRate")
@Expose
private Double winRate;
@SerializedName("games")
@Expose
private Integer games;
@SerializedName("kda")
@Expose
private Double kda;

/**
* 
* @return
* The cs
*/
public Double getCs() {
return cs;
}

/**
* 
* @param cs
* The cs
*/
public void setCs(Double cs) {
this.cs = cs;
}

/**
* 
* @return
* The winRate
*/
public Double getWinRate() {
return winRate;
}

/**
* 
* @param winRate
* The winRate
*/
public void setWinRate(Double winRate) {
this.winRate = winRate;
}

/**
* 
* @return
* The games
*/
public Integer getGames() {
return games;
}

/**
* 
* @param games
* The games
*/
public void setGames(Integer games) {
this.games = games;
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

}
