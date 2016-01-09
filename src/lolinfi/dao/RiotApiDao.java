package lolinfi.dao;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;

@SuppressWarnings("deprecation")
public class RiotApiDao {
	private static HttpClient riotClient;
	private static HttpGet httpGet;
	private static HttpEntity entity;
	private static HttpResponse httpResponse;
	
	private static Properties properties = new Properties();
	private static InputStream input = null;
	
	private static String API_KEY;
	private static String RIOT_URL_CHAMPION;
	private static String RIOT_URL_CHAMPIONDETAIL;
	private static String RIOT_URL_ITEM; 
	private static String RIOT_URL_SUMMONER_CHAMPION;
	private static String RIOT_URL_MATCHLIST;
	private static String RIOT_URL_MATCHDETAIL;
	
	static{
		riotClient = new DefaultHttpClient();
		try {
			input = RiotApiDao.class.getClassLoader().getResourceAsStream("config.properties");
			properties.load(input);
			
			API_KEY = properties.getProperty("API_KEY");
			RIOT_URL_CHAMPION = properties.getProperty("RIOT_URL_CHAMPION");
			RIOT_URL_CHAMPIONDETAIL = properties.getProperty("RIOT_URL_CHAMPIONDETAIL");
			RIOT_URL_ITEM = properties.getProperty("RIOT_URL_ITEM");
			RIOT_URL_SUMMONER_CHAMPION = properties.getProperty("RIOT_URL_SUMMONER_CHAMPION");
			RIOT_URL_MATCHLIST = properties.getProperty("RIOT_URL_MATCHLIST");
			RIOT_URL_MATCHDETAIL = properties.getProperty("RIOT_URL_MATCHDETAIL");
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * get champion list
	 * @return
	 */
	public static String getChampions(){
		httpGet = new HttpGet(RIOT_URL_CHAMPION+API_KEY);
        try {
			httpResponse = riotClient.execute(httpGet);
		    entity = httpResponse.getEntity();
		    return EntityUtils.toString(entity,"UTF-8");
		} catch (ClientProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * get champion detail by id
	 * @param id
	 * @return
	 */
	public static String getChampionDetail(String id) {
		// TODO Auto-generated method stub
		String[] url = RIOT_URL_CHAMPIONDETAIL.split("\\?");
		httpGet = new HttpGet(url[0]+"/"+id+"?"+url[1]+API_KEY);
		System.out.println(url[0]+"/"+id+"?"+url[1]+API_KEY);
        try {
			httpResponse = riotClient.execute(httpGet);
		    entity = httpResponse.getEntity();
		    return EntityUtils.toString(entity,"UTF-8");
		} catch (ClientProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * get item info
	 * @return
	 */
	public static String getItems() {
		// TODO Auto-generated method stub
		httpGet = new HttpGet(RIOT_URL_ITEM+API_KEY);
        try {
			httpResponse = riotClient.execute(httpGet);
		    entity = httpResponse.getEntity();
		    return EntityUtils.toString(entity,"UTF-8");
		} catch (ClientProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch blocks
			e.printStackTrace();
		}
		return null;
	}
	
	/**
	 * get summoner champion list
	 * @return
	 */
	public static String getSummonerChampion(String id) {
		// TODO Auto-generated method stub
		httpGet = new HttpGet(RIOT_URL_SUMMONER_CHAMPION+id+"/ranked?api_key="+API_KEY);
        try {
			httpResponse = riotClient.execute(httpGet);
		    entity = httpResponse.getEntity();
		    return EntityUtils.toString(entity,"UTF-8");
		} catch (ClientProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch blocks
			e.printStackTrace();
		}		
		return null;
	}

	public static String getMatchList(String id) {
		// TODO Auto-generated method stub
		httpGet = new HttpGet(RIOT_URL_MATCHLIST+id+"?seasons=SEASON2015&api_key="+API_KEY);
        try {
			httpResponse = riotClient.execute(httpGet);
		    entity = httpResponse.getEntity();
		    return EntityUtils.toString(entity,"UTF-8");
		} catch (ClientProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch blocks
			e.printStackTrace();
		}
		return null;
	}

	public static String getMatchDetail(String id) {
		// TODO Auto-generated method stub
		httpGet = new HttpGet(RIOT_URL_MATCHDETAIL+id+"?api_key="+API_KEY);
        try {
			httpResponse = riotClient.execute(httpGet);
		    entity = httpResponse.getEntity();
		    return EntityUtils.toString(entity,"UTF-8");	
		} catch (ClientProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch blocks
			e.printStackTrace();
		}
		return null;
	}
	
}
