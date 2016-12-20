﻿<%@ Application Language="C#" %>

<script RunAt="server">
    //http://www.codeproject.com/Articles/77199/URL-Routing-with-ASP-NET
    //http://reactivex.io/rxjs/
    protected void Application_Start(object sender, EventArgs e)
    {
        RegisterRoutes(System.Web.Routing.RouteTable.Routes);
    }

    public static void RegisterRoutes(System.Web.Routing.RouteCollection routes)
    {
        //routes.MapPageRoute("",
        //    "Category/dashboard",
        //    "~/Default.aspx");
        routes.MapPageRoute("",
            "{name}",
            "~/Default.aspx");
        routes.MapPageRoute("",
            "{name}/{id}",
            "~/Default.aspx");
    }

    void Application_End(object sender, EventArgs e)
    {
        //  Code that runs on application shutdown

    }

    void Application_Error(object sender, EventArgs e)
    {
        // Code that runs when an unhandled error occurs

    }

    void Session_Start(object sender, EventArgs e)
    {
        // Code that runs when a new session is started

    }

    void Session_End(object sender, EventArgs e)
    {
        // Code that runs when a session ends. 
        // Note: The Session_End event is raised only when the sessionstate mode
        // is set to InProc in the Web.config file. If session mode is set to StateServer 
        // or SQLServer, the event is not raised.

    }
       
</script>
