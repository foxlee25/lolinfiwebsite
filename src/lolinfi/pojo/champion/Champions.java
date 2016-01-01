package lolinfi.pojo.champion;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("org.jsonschema2pojo")
public class Champions {

@SerializedName("champions")
@Expose
private List<Champion> champions = new ArrayList<Champion>();

/**
* 
* @return
* The champions
*/
public List<Champion> getChampions() {
return champions;
}

/**
* 
* @param champions
* The champions
*/
public void setChampions(List<Champion> champions) {
this.champions = champions;
}

}
