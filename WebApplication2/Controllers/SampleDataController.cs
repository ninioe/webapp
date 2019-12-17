using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using WebApp;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]/[action]")]
    public class SampleDataController : Controller
    {
        private readonly ISampleService sampleService;
        private IConfiguration Configuration;

        public SampleDataController(ISampleService sampleService, IConfiguration configuration)
        {
            this.sampleService = sampleService;
            Configuration = configuration;
        }

        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        [HttpGet]
        public IActionResult Test()
        {
            return Ok("Hello World");
            //return Ok(sampleService.HelloWorld());
            //return Ok(Configuration["AppName"]);
            //return Ok(Configuration["Env"]);
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
