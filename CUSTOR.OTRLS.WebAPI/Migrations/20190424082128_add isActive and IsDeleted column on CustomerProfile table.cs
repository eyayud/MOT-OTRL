using Microsoft.EntityFrameworkCore.Migrations;

namespace CUSTOR.OTRLS.API.Migrations
{
    public partial class addisActiveandIsDeletedcolumnonCustomerProfiletable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "CustomerProfile",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "CustomerProfile",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "CustomerProfile");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "CustomerProfile");
        }
    }
}
