using Microsoft.EntityFrameworkCore.Migrations;

namespace CUSTOR.OTRLS.API.Migrations
{
    public partial class addedcustomernameforregion : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FatherNameRegion",
                table: "CustomerProfile",
                maxLength: 30,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FirstNameRegion",
                table: "CustomerProfile",
                maxLength: 30,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "GrandNameRegion",
                table: "CustomerProfile",
                maxLength: 30,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MotherNameRegion",
                table: "CustomerProfile",
                maxLength: 30,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FatherNameRegion",
                table: "CustomerProfile");

            migrationBuilder.DropColumn(
                name: "FirstNameRegion",
                table: "CustomerProfile");

            migrationBuilder.DropColumn(
                name: "GrandNameRegion",
                table: "CustomerProfile");

            migrationBuilder.DropColumn(
                name: "MotherNameRegion",
                table: "CustomerProfile");
        }
    }
}
