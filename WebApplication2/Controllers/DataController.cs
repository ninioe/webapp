using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApp.Model;

namespace WebApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        [HttpGet]
        public IActionResult Test()
        {
            return Ok("Hello from controller");
        }

        [HttpGet("{id}")]
        public IActionResult GetItem(int id)
        {
            return Ok($"Item with Id:{id} has been retrived");
        }

        [HttpGet]
        public IActionResult GetItem2([FromQuery] int id)
        {
            return Ok($"Item with Id:{id} has been retrived");
        }

        [HttpPost]
        public IActionResult AddProduct(Product product)
        {
            return Ok(product);
        }
    }
}
