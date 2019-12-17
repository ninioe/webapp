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
    public class ProductController : ControllerBase
    {
        private readonly ProductContext context;

        public ProductController(ProductContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult List()
        {
            var items = context.Products.ToList();
            return Ok(items);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var item = context.Products.FirstOrDefault(x => x.Id == id);
            return Ok(item);
        }
        
        [HttpPost]
        public IActionResult Add(Product product)
        {
            context.Products.Add(product);
            context.SaveChanges();
            return Ok(product);
        }

        [HttpPut]
        public IActionResult Update(Product product)
        {
            context.Products.Update(product);
            context.SaveChanges();
            return Ok(product);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            context.Products.Remove(new Product { Id = id });
            context.SaveChanges();
            return Ok();
        }
    }
}