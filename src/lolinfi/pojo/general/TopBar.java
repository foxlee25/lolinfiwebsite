package lolinfi.pojo.general;

import javax.annotation.Generated;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("org.jsonschema2pojo")
public class TopBar {

@SerializedName("Average KDA")
@Expose
private Double AverageKDA;
@SerializedName("Average Games per Champ")
@Expose
private Double AverageGamesPerChamp;
@SerializedName("Average Games per Day")
@Expose
private Double AverageGamesPerDay;
@SerializedName("Games Played")
@Expose
private Integer GamesPlayed;
@SerializedName("Rank")
@Expose
private String Rank;
@SerializedName("Win Rate")
@Expose
private Double WinRate;
@SerializedName("Average Game Length")
@Expose
private Double AverageGameLength;

/**
* 
* @return
* The AverageKDA
*/
public Double getAverageKDA() {
return AverageKDA;
}

/**
* 
* @param AverageKDA
* The Average KDA
*/
public void setAverageKDA(Double AverageKDA) {
this.AverageKDA = AverageKDA;
}

/**
* 
* @return
* The AverageGamesPerChamp
*/
public Double getAverageGamesPerChamp() {
return AverageGamesPerChamp;
}

/**
* 
* @param AverageGamesPerChamp
* The Average Games per Champ
*/
public void setAverageGamesPerChamp(Double AverageGamesPerChamp) {
this.AverageGamesPerChamp = AverageGamesPerChamp;
}

/**
* 
* @return
* The AverageGamesPerDay
*/
public Double getAverageGamesPerDay() {
return AverageGamesPerDay;
}

/**
* 
* @param AverageGamesPerDay
* The Average Games per Day
*/
public void setAverageGamesPerDay(Double AverageGamesPerDay) {
this.AverageGamesPerDay = AverageGamesPerDay;
}

/**
* 
* @return
* The GamesPlayed
*/
public Integer getGamesPlayed() {
return GamesPlayed;
}

/**
* 
* @param GamesPlayed
* The Games Played
*/
public void setGamesPlayed(Integer GamesPlayed) {
this.GamesPlayed = GamesPlayed;
}

/**
* 
* @return
* The Rank
*/
public String getRank() {
return Rank;
}

/**
* 
* @param Rank
* The Rank
*/
public void setRank(String Rank) {
this.Rank = Rank;
}

/**
* 
* @return
* The WinRate
*/
public Double getWinRate() {
return WinRate;
}

/**
* 
* @param WinRate
* The Win Rate
*/
public void setWinRate(Double WinRate) {
this.WinRate = WinRate;
}

/**
* 
* @return
* The AverageGameLength
*/
public Double getAverageGameLength() {
return AverageGameLength;
}

/**
* 
* @param AverageGameLength
* The Average Game Length
*/
public void setAverageGameLength(Double AverageGameLength) {
this.AverageGameLength = AverageGameLength;
}

}

