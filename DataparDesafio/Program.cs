
using DataparDesafio.Data;
using DataparDesafio.Repositorios;
using DataparDesafio.Repositorios.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace DataparDesafio
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddCors();
            builder.Services.AddDbContext<DBContex>(
                    options => options.UseSqlServer(builder.Configuration.GetConnectionString("DataBase"))
                );
            builder.Services.AddScoped<IProdutoRepositorio, ProdutoRepositorio>();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();
            
            app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("*"));

            app.MapControllers();

            app.Run();
        }
    }
}
