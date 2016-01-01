package lolinfi.pojo.chart;

import javax.annotation.Generated;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("org.jsonschema2pojo")
public class ChartsByGameLength {

@SerializedName("goldPerMin")
@Expose
private Double goldPerMin;
@SerializedName("gold")
@Expose
private Double gold;
@SerializedName("time")
@Expose
private Integer time;

/**
* 
* @return
* The goldPerMin
*/
public Double getGoldPerMin() {
return goldPerMin;
}

/**
* 
* @param goldPerMin
* The goldPerMin
*/
public void setGoldPerMin(Double goldPerMin) {
this.goldPerMin = goldPerMin;
}

/**
* 
* @return
* The gold
*/
public Double getGold() {
return gold;
}

/**
* 
* @param gold
* The gold
*/
public void setGold(Double gold) {
this.gold = gold;
}

/**
* 
* @return
* The time
*/
public Integer getTime() {
return time;
}

/**
* 
* @param time
* The time
*/
public void setTime(Integer time) {
this.time = time;
}

}
