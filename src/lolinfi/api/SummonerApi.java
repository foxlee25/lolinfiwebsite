package lolinfi.api;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import lolinfi.dao.SummonerDataLoader;

/**
 * Servlet implementation class SummonerApi
 */
@WebServlet("/LolApi/SummonerApi")
public class SummonerApi extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SummonerApi() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String summonerId = request.getHeader("summoner");
		String genre = request.getHeader("genre");
		String responseString = null;
		switch(summonerId){
		case "49159160":
			responseString = SummonerDataLoader.loadData(this.getServletContext(), summonerId, genre);
			break;
		case "492066":
			responseString = SummonerDataLoader.loadData(this.getServletContext(), summonerId, genre);
			break;
		case "62374009":
			responseString = SummonerDataLoader.loadData(this.getServletContext(), summonerId, genre);
			break;
		default:
			responseString = null;
			break;
		}
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
