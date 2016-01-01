package lolinfi.pojo.chart;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("org.jsonschema2pojo")
public class Charts {

@SerializedName("chartsByGameLength")
@Expose
private List<ChartsByGameLength> chartsByGameLength = new ArrayList<ChartsByGameLength>();

/**
* 
* @return
* The chartsByGameLength
*/
public List<ChartsByGameLength> getChartsByGameLength() {
return chartsByGameLength;
}

/**
* 
* @param chartsByGameLength
* The chartsByGameLength
*/
public void setChartsByGameLength(List<ChartsByGameLength> chartsByGameLength) {
this.chartsByGameLength = chartsByGameLength;
}

}
