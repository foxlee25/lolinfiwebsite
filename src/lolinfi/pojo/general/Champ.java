package lolinfi.pojo.general;

import javax.annotation.Generated;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("org.jsonschema2pojo")
public class Champ {

@SerializedName("stats")
@Expose
private Stats_ stats;
@SerializedName("id")
@Expose
private Integer id;

/**
* 
* @return
* The stats
*/
public Stats_ getStats() {
return stats;
}

/**
* 
* @param stats
* The stats
*/
public void setStats(Stats_ stats) {
this.stats = stats;
}

/**
* 
* @return
* The id
*/
public Integer getId() {
return id;
}

/**
* 
* @param id
* The id
*/
public void setId(Integer id) {
this.id = id;
}

}
