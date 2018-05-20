using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using LB.Web.Models;

namespace LB.Web.Controllers {
    public abstract class BaseController : Controller {

        protected readonly SignInManager<ApplicationUser> _signInManager;
        protected readonly UserManager<ApplicationUser> _userManager;

        public BaseController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager) {
            _userManager = userManager;
            _signInManager = signInManager;
        }

    }
}