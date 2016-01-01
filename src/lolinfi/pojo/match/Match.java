package lolinfi.pojo.match;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("org.jsonschema2pojo")
public class Match {

@SerializedName("skillUpgraded")
@Expose
private List<SkillUpgraded> skillUpgraded = new ArrayList<SkillUpgraded>();

/**
* 
* @return
* The skillUpgraded
*/
public List<SkillUpgraded> getSkillUpgraded() {
return skillUpgraded;
}

/**
* 
* @param skillUpgraded
* The skillUpgraded
*/
public void setSkillUpgraded(List<SkillUpgraded> skillUpgraded) {
this.skillUpgraded = skillUpgraded;
}

}
