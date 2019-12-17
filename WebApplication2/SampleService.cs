using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp
{
    public class SampleService : ISampleService
    {
        public string HelloWorld()
        {
            return "Hello World from Service";
        }
    }
}
