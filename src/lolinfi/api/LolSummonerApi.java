package lolinfi.api;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import lolinfi.dao.RiotApiDao;

/**
 * Servlet implementation class LolSummonerApi
 */
@WebServlet("/LolSummoner")
public class LolSummonerApi extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LolSummonerApi() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String genre = request.getHeader("genre");
		String id = request.getHeader("id");
		String responseString = null;
		switch(genre){
		case "getid":
			responseString = RiotApiDao.getSummonerId(id);
			break;
		case "general":
			responseString = RiotApiDao.getSummonerGeneral(id);
			break;
		case "champion":
			responseString = RiotApiDao.getSummonerChampion(id);
			break;
		case "matchlist":
			responseString = RiotApiDao.getMatchList(id);
			break;
		case "matchdetail":
			responseString = RiotApiDao.getMatchDetail(id);
			break;
		default:
			responseString = "";
		}
		System.out.println(responseString);
		response.getWriter().append(responseString);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
