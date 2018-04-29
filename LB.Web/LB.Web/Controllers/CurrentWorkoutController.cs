using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace LB.Web.Controllers {
    public class CurrentWorkoutController : Controller {
        public IActionResult Index() {
            return View();
        }

        public IActionResult CurrentWorkout() {
            return View();
        }

    }
}