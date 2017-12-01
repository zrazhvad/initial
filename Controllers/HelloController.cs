using Microsoft.AspNetCore.Mvc;

namespace mySite.Controllers
{
    [Route("api/[Controller]")]
    public class HelloController : Controller
    {
        [HttpGet]
        public IActionResult Greetings()
        {
            return Ok("Hi! I'm Zrazhva Denis");
        }
    }
}