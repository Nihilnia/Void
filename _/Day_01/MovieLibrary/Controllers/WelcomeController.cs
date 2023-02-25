using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MovieLibrary.Database;

namespace MovieLibrary.Controllers
{
    public class WelcomeController : Controller
    {
        private readonly MovieLibraryContext DB;

        public WelcomeController(MovieLibraryContext _DB)
        {
            DB = _DB;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult RegisterControl(string userName, string passWord)
        {
            if (!userName.IsNullOrEmpty() || !passWord.IsNullOrEmpty())
            {
                var newUser = new User()
                {
                    Username = userName,
                    Password = passWord
                };

                DB.User.Add(newUser);
                DB.SaveChanges();

                ViewBag.Success = "You' re succesfully registered. Now you can login.";

                return View("~/Views/Welcome/Login.cshtml");
            }


            return View();
        }

        public IActionResult Login()
        {
            return View();
        }

        public IActionResult LoginControl(string incominName, string incominPass)
        {
            //Control em
            var findUser = DB.User.Where(f => f.Username == incominName).FirstOrDefault();

            if (findUser != null && findUser.Password == incominPass)
            {

                return View("~/Views/Welcome/Home.cshtml", findUser);
            }

            return View();
        }
    }
}
