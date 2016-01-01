package lolinfi.pojo.match;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("org.jsonschema2pojo")
public class SkillUpgraded {

@SerializedName("ID")
@Expose
private Integer ID;
@SerializedName("skillOrder")
@Expose
private List<SkillOrder> skillOrder = new ArrayList<SkillOrder>();

/**
* 
* @return
* The ID
*/
public Integer getID() {
return ID;
}

/**
* 
* @param ID
* The ID
*/
public void setID(Integer ID) {
this.ID = ID;
}

/**
* 
* @return
* The skillOrder
*/
public List<SkillOrder> getSkillOrder() {
return skillOrder;
}

/**
* 
* @param skillOrder
* The skillOrder
*/
public void setSkillOrder(List<SkillOrder> skillOrder) {
this.skillOrder = skillOrder;
}

}

