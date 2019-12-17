using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp
{
    public class MyMiddleware
    {
        private readonly RequestDelegate requestDelegate;
        public MyMiddleware(RequestDelegate requestDelegate)
        {
            this.requestDelegate = requestDelegate;
        }
        public async Task InvokeAsync(HttpContext context)
        {
            var x = context.Connection.RemoteIpAddress;
            await requestDelegate(context);
        }
    }
}
