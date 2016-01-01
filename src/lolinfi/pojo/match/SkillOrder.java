package lolinfi.pojo.match;

import javax.annotation.Generated;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("org.jsonschema2pojo")
public class SkillOrder {

@SerializedName("timestamp")
@Expose
private Integer timestamp;
@SerializedName("skillSlot")
@Expose
private Integer skillSlot;

/**
* 
* @return
* The timestamp
*/
public Integer getTimestamp() {
return timestamp;
}

/**
* 
* @param timestamp
* The timestamp
*/
public void setTimestamp(Integer timestamp) {
this.timestamp = timestamp;
}

/**
* 
* @return
* The skillSlot
*/
public Integer getSkillSlot() {
return skillSlot;
}

/**
* 
* @param skillSlot
* The skillSlot
*/
public void setSkillSlot(Integer skillSlot) {
this.skillSlot = skillSlot;
}

}
