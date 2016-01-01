package lolinfi.pojo.matches;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("org.jsonschema2pojo")
public class Matches {

@SerializedName("matches")
@Expose
private List<Match> matches = new ArrayList<Match>();

/**
* 
* @return
* The matches
*/
public List<Match> getMatches() {
return matches;
}

/**
* 
* @param matches
* The matches
*/
public void setMatches(List<Match> matches) {
this.matches = matches;
}

}
