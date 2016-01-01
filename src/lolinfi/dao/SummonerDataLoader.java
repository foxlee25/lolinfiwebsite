package lolinfi.dao;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import javax.servlet.ServletContext;

import org.apache.commons.io.IOUtils;
import org.glassfish.hk2.utilities.reflection.Logger;

public class SummonerDataLoader {
	final static Logger logger = Logger.getLogger();
	public static String loadData(ServletContext ctx, String summonerId, String genre) {
		// TODO Auto-generated method stub
		String fileName = "/WEB-INF/mock/"+summonerId+"/"+genre+".json";
		String targetFileStr = null;
		ByteArrayInputStream fisTargetFile = null;
		try {
			fisTargetFile = (ByteArrayInputStream) ctx.getResourceAsStream(fileName);
			targetFileStr = IOUtils.toString(fisTargetFile, "UTF-8");
		}catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			logger.warning("can't find file");
			return null;
		}
		return targetFileStr;
	}
	
}
