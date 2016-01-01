package lolinfi.pojo.general;

import javax.annotation.Generated;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("org.jsonschema2pojo")
public class ChampsRecent20 {

@SerializedName("id")
@Expose
private Integer id;
@SerializedName("times")
@Expose
private Integer times;

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

/**
* 
* @return
* The times
*/
public Integer getTimes() {
return times;
}

/**
* 
* @param times
* The times
*/
public void setTimes(Integer times) {
this.times = times;
}

}
