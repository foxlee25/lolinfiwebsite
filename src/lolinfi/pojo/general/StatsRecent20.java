package lolinfi.pojo.general;

import javax.annotation.Generated;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("org.jsonschema2pojo")
public class StatsRecent20 {

@SerializedName("gold")
@Expose
private Integer gold;
@SerializedName("Deaths")
@Expose
private Double Deaths;
@SerializedName("Wards")
@Expose
private Double Wards;
@SerializedName("KDA")
@Expose
private Double KDA;
@SerializedName("Damage")
@Expose
private Double Damage;
@SerializedName("Contribution for Kills")
@Expose
private Double ContributionForKills;
@SerializedName("Average Game Length")
@Expose
private Integer AverageGameLength;
@SerializedName("CS")
@Expose
private Double CS;

/**
* 
* @return
* The gold
*/
public Integer getGold() {
return gold;
}

/**
* 
* @param gold
* The gold
*/
public void setGold(Integer gold) {
this.gold = gold;
}

/**
* 
* @return
* The Deaths
*/
public Double getDeaths() {
return Deaths;
}

/**
* 
* @param Deaths
* The Deaths
*/
public void setDeaths(Double Deaths) {
this.Deaths = Deaths;
}

/**
* 
* @return
* The Wards
*/
public Double getWards() {
return Wards;
}

/**
* 
* @param Wards
* The Wards
*/
public void setWards(Double Wards) {
this.Wards = Wards;
}

/**
* 
* @return
* The KDA
*/
public Double getKDA() {
return KDA;
}

/**
* 
* @param KDA
* The KDA
*/
public void setKDA(Double KDA) {
this.KDA = KDA;
}

/**
* 
* @return
* The Damage
*/
public Double getDamage() {
return Damage;
}

/**
* 
* @param Damage
* The Damage
*/
public void setDamage(Double Damage) {
this.Damage = Damage;
}

/**
* 
* @return
* The ContributionForKills
*/
public Double getContributionForKills() {
return ContributionForKills;
}

/**
* 
* @param ContributionForKills
* The Contribution for Kills
*/
public void setContributionForKills(Double ContributionForKills) {
this.ContributionForKills = ContributionForKills;
}

/**
* 
* @return
* The AverageGameLength
*/
public Integer getAverageGameLength() {
return AverageGameLength;
}

/**
* 
* @param AverageGameLength
* The Average Game Length
*/
public void setAverageGameLength(Integer AverageGameLength) {
this.AverageGameLength = AverageGameLength;
}

/**
* 
* @return
* The CS
*/
public Double getCS() {
return CS;
}

/**
* 
* @param CS
* The CS
*/
public void setCS(Double CS) {
this.CS = CS;
}

}
