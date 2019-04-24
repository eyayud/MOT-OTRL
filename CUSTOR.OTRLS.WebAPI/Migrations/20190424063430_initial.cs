using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CUSTOR.OTRLS.API.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CustomerProfile",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Tin = table.Column<string>(nullable: true),
                    Title = table.Column<int>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    FirstNameEng = table.Column<string>(nullable: true),
                    FatherName = table.Column<string>(nullable: true),
                    FatherNameEng = table.Column<string>(nullable: true),
                    GrandName = table.Column<string>(nullable: true),
                    GrandNameEng = table.Column<string>(nullable: true),
                    MotherName = table.Column<string>(nullable: true),
                    MotherNameEng = table.Column<string>(nullable: true),
                    BirthDate = table.Column<DateTime>(nullable: false),
                    Gender = table.Column<int>(nullable: false),
                    Nationality = table.Column<int>(nullable: false),
                    AddressId = table.Column<int>(nullable: false),
                    IdentificationId = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    UpdatedDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerProfile", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LookUpType",
                columns: table => new
                {
                    LookUpTypeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    English = table.Column<string>(maxLength: 150, nullable: false),
                    Amharic = table.Column<string>(maxLength: 150, nullable: false),
                    Tigrigna = table.Column<string>(maxLength: 150, nullable: true),
                    AfanOromo = table.Column<string>(maxLength: 150, nullable: true),
                    Afar = table.Column<string>(maxLength: 150, nullable: true),
                    Somali = table.Column<string>(maxLength: 150, nullable: true),
                    Description = table.Column<string>(maxLength: 150, nullable: true),
                    IsActive = table.Column<bool>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: true),
                    CreatedUserId = table.Column<string>(maxLength: 256, nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime", nullable: false),
                    CreatedBy = table.Column<string>(maxLength: 50, nullable: false),
                    UpdatedUserId = table.Column<string>(maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime", nullable: true),
                    UpdatedBy = table.Column<string>(maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LookUpType", x => x.LookUpTypeId);
                });

            migrationBuilder.CreateTable(
                name: "Manager",
                columns: table => new
                {
                    ManagerId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CustomerId = table.Column<int>(nullable: false),
                    Tin = table.Column<string>(maxLength: 100, nullable: true),
                    Title = table.Column<int>(nullable: true),
                    FirstName = table.Column<string>(maxLength: 50, nullable: false),
                    FirstNameSort = table.Column<string>(maxLength: 100, nullable: true),
                    FirstNameSoundx = table.Column<string>(maxLength: 100, nullable: true),
                    FirstNameEng = table.Column<string>(maxLength: 50, nullable: false),
                    FatherName = table.Column<string>(maxLength: 50, nullable: false),
                    FatherNameSort = table.Column<string>(maxLength: 100, nullable: true),
                    FatherNameSoundx = table.Column<string>(maxLength: 100, nullable: true),
                    FatherNameEng = table.Column<string>(maxLength: 50, nullable: false),
                    GrandName = table.Column<string>(maxLength: 50, nullable: false),
                    GrandNameSort = table.Column<string>(maxLength: 100, nullable: true),
                    GrandNameSoundx = table.Column<string>(maxLength: 100, nullable: true),
                    GrandNameEng = table.Column<string>(maxLength: 50, nullable: false),
                    Gender = table.Column<int>(nullable: false),
                    Nationality = table.Column<int>(nullable: false),
                    Origin = table.Column<int>(nullable: false),
                    Remark = table.Column<string>(maxLength: 100, nullable: true),
                    AddressId = table.Column<int>(nullable: true),
                    IsActive = table.Column<bool>(nullable: true, defaultValueSql: "((1))"),
                    IsDeleted = table.Column<bool>(nullable: true, defaultValueSql: "((0))"),
                    CreatedUserId = table.Column<string>(maxLength: 256, nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime", nullable: false),
                    CreatedBy = table.Column<string>(maxLength: 50, nullable: false),
                    UpdatedUserId = table.Column<string>(maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime", nullable: true),
                    UpdatedBy = table.Column<string>(maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Manager", x => x.ManagerId);
                });

            migrationBuilder.CreateTable(
                name: "Nationality",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    English = table.Column<string>(maxLength: 150, nullable: false),
                    Amharic = table.Column<string>(maxLength: 150, nullable: false),
                    Tigrigna = table.Column<string>(maxLength: 150, nullable: true),
                    AfanOromo = table.Column<string>(maxLength: 150, nullable: true),
                    Afar = table.Column<string>(maxLength: 150, nullable: true),
                    Somali = table.Column<string>(maxLength: 150, nullable: true),
                    Description = table.Column<string>(maxLength: 150, nullable: true),
                    IsActive = table.Column<bool>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: true),
                    CreatedUserId = table.Column<string>(maxLength: 256, nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime", nullable: false),
                    CreatedBy = table.Column<string>(maxLength: 50, nullable: false),
                    UpdatedUserId = table.Column<string>(maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime", nullable: true),
                    UpdatedBy = table.Column<string>(maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Nationality", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Region",
                columns: table => new
                {
                    RegionId = table.Column<string>(maxLength: 50, nullable: false),
                    Description = table.Column<string>(maxLength: 250, nullable: false),
                    DescriptionEnglish = table.Column<string>(maxLength: 250, nullable: false),
                    IsActive = table.Column<bool>(nullable: true, defaultValueSql: "((1))"),
                    IsDeleted = table.Column<bool>(nullable: true, defaultValueSql: "((0))"),
                    CreatedUserId = table.Column<string>(maxLength: 256, nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime", nullable: true),
                    CreatedBy = table.Column<string>(maxLength: 50, nullable: true),
                    UpdatedUserId = table.Column<string>(maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime", nullable: true),
                    UpdatedBy = table.Column<string>(maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Region", x => x.RegionId);
                });

            migrationBuilder.CreateTable(
                name: "Lookup",
                columns: table => new
                {
                    LookupId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LookUpTypeId = table.Column<int>(nullable: false),
                    English = table.Column<string>(maxLength: 150, nullable: false),
                    Amharic = table.Column<string>(maxLength: 150, nullable: false),
                    Tigrigna = table.Column<string>(maxLength: 150, nullable: true),
                    AfanOromo = table.Column<string>(maxLength: 150, nullable: true),
                    Afar = table.Column<string>(maxLength: 150, nullable: true),
                    Somali = table.Column<string>(maxLength: 150, nullable: true),
                    IsActive = table.Column<bool>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: true),
                    CreatedUserId = table.Column<string>(maxLength: 256, nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime", nullable: false),
                    CreatedBy = table.Column<string>(maxLength: 50, nullable: false),
                    UpdatedUserId = table.Column<string>(maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime", nullable: true),
                    UpdatedBy = table.Column<string>(maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lookup", x => x.LookupId);
                    table.ForeignKey(
                        name: "FK_Lookup_LookUpType",
                        column: x => x.LookUpTypeId,
                        principalTable: "LookUpType",
                        principalColumn: "LookUpTypeId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Zone",
                columns: table => new
                {
                    ZoneId = table.Column<string>(maxLength: 50, nullable: false),
                    RegionId = table.Column<string>(maxLength: 50, nullable: false),
                    Description = table.Column<string>(maxLength: 250, nullable: false),
                    DescriptionEnglish = table.Column<string>(maxLength: 250, nullable: false),
                    IsActive = table.Column<bool>(nullable: true, defaultValueSql: "((1))"),
                    IsDeleted = table.Column<bool>(nullable: true, defaultValueSql: "((0))"),
                    CreatedUserId = table.Column<string>(maxLength: 256, nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime", nullable: true),
                    CreatedBy = table.Column<string>(maxLength: 50, nullable: true),
                    UpdatedUserId = table.Column<string>(maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime", nullable: true),
                    UpdatedBy = table.Column<string>(maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Zone", x => x.ZoneId);
                    table.ForeignKey(
                        name: "FK_Zone_Region_RegionId",
                        column: x => x.RegionId,
                        principalTable: "Region",
                        principalColumn: "RegionId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Woreda",
                columns: table => new
                {
                    WoredaId = table.Column<string>(maxLength: 50, nullable: false),
                    ZoneId = table.Column<string>(maxLength: 50, nullable: false),
                    Description = table.Column<string>(maxLength: 250, nullable: false),
                    DescriptionEnglish = table.Column<string>(maxLength: 250, nullable: false),
                    IsActive = table.Column<bool>(nullable: true, defaultValueSql: "((1))"),
                    IsDeleted = table.Column<bool>(nullable: true, defaultValueSql: "((0))"),
                    CreatedUserId = table.Column<string>(maxLength: 256, nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime", nullable: true),
                    CreatedBy = table.Column<string>(maxLength: 50, nullable: true),
                    UpdatedUserId = table.Column<string>(maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime", nullable: true),
                    UpdatedBy = table.Column<string>(maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Woreda", x => x.WoredaId);
                    table.ForeignKey(
                        name: "FK_Woreda_Zone",
                        column: x => x.ZoneId,
                        principalTable: "Zone",
                        principalColumn: "ZoneId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Kebele",
                columns: table => new
                {
                    KebeleId = table.Column<string>(maxLength: 50, nullable: false),
                    WoredaId = table.Column<string>(maxLength: 50, nullable: false),
                    Description = table.Column<string>(maxLength: 250, nullable: false),
                    DescriptionEnglish = table.Column<string>(maxLength: 250, nullable: false),
                    IsActive = table.Column<bool>(nullable: false, defaultValueSql: "((1))"),
                    IsDeleted = table.Column<bool>(nullable: false),
                    CreatedUserId = table.Column<string>(maxLength: 256, nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime", nullable: false),
                    CreatedBy = table.Column<string>(maxLength: 50, nullable: false),
                    UpdatedUserId = table.Column<string>(maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime", nullable: true),
                    UpdatedBy = table.Column<string>(maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kebele", x => x.KebeleId);
                    table.ForeignKey(
                        name: "FK_Kebele_Woreda_WoredaId",
                        column: x => x.WoredaId,
                        principalTable: "Woreda",
                        principalColumn: "WoredaId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Address",
                columns: table => new
                {
                    AddressId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ParentId = table.Column<int>(nullable: false),
                    AddressType = table.Column<int>(nullable: false),
                    IsMainOffice = table.Column<bool>(nullable: false),
                    SpecificAreaName = table.Column<string>(maxLength: 250, nullable: true),
                    RegionId = table.Column<string>(maxLength: 50, nullable: true),
                    TownId = table.Column<string>(maxLength: 50, nullable: true),
                    ZoneId = table.Column<string>(maxLength: 50, nullable: true),
                    WoredaId = table.Column<string>(maxLength: 50, nullable: true),
                    KebeleId = table.Column<string>(maxLength: 50, nullable: true),
                    HouseNo = table.Column<string>(maxLength: 50, nullable: true),
                    TeleNo = table.Column<string>(maxLength: 50, nullable: true),
                    Pobox = table.Column<string>(maxLength: 50, nullable: true),
                    Fax = table.Column<string>(maxLength: 50, nullable: true),
                    CellPhoneNo = table.Column<string>(maxLength: 50, nullable: true),
                    Email = table.Column<string>(maxLength: 50, nullable: true),
                    OtherAddress = table.Column<string>(maxLength: 1000, nullable: true),
                    Remark = table.Column<string>(maxLength: 1000, nullable: true),
                    IsActive = table.Column<bool>(nullable: false, defaultValueSql: "((1))"),
                    IsDeleted = table.Column<bool>(nullable: true),
                    ObjectId = table.Column<Guid>(nullable: true, defaultValueSql: "(newid())"),
                    IndustrialParkId = table.Column<int>(nullable: true),
                    IsIndustrialPark = table.Column<bool>(nullable: true),
                    CreatedUserId = table.Column<string>(maxLength: 256, nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime", nullable: true),
                    CreatedBy = table.Column<string>(maxLength: 50, nullable: true),
                    UpdatedUserId = table.Column<string>(maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime", nullable: true),
                    UpdatedBy = table.Column<string>(maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Address", x => x.AddressId);
                    table.ForeignKey(
                        name: "FK_Address_Kebele",
                        column: x => x.KebeleId,
                        principalTable: "Kebele",
                        principalColumn: "KebeleId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Address_Region_RegionId",
                        column: x => x.RegionId,
                        principalTable: "Region",
                        principalColumn: "RegionId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Address_Woreda",
                        column: x => x.WoredaId,
                        principalTable: "Woreda",
                        principalColumn: "WoredaId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Address_Zone_ZoneId",
                        column: x => x.ZoneId,
                        principalTable: "Zone",
                        principalColumn: "ZoneId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Address_KebeleId",
                table: "Address",
                column: "KebeleId");

            migrationBuilder.CreateIndex(
                name: "IX_Address_RegionId",
                table: "Address",
                column: "RegionId");

            migrationBuilder.CreateIndex(
                name: "IX_Address_WoredaId",
                table: "Address",
                column: "WoredaId");

            migrationBuilder.CreateIndex(
                name: "IX_Address_ZoneId",
                table: "Address",
                column: "ZoneId");

            migrationBuilder.CreateIndex(
                name: "IX_Kebele_WoredaId",
                table: "Kebele",
                column: "WoredaId");

            migrationBuilder.CreateIndex(
                name: "IX_Lookup_LookUpTypeId",
                table: "Lookup",
                column: "LookUpTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Woreda_ZoneId",
                table: "Woreda",
                column: "ZoneId");

            migrationBuilder.CreateIndex(
                name: "IX_Zone_RegionId",
                table: "Zone",
                column: "RegionId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Address");

            migrationBuilder.DropTable(
                name: "CustomerProfile");

            migrationBuilder.DropTable(
                name: "Lookup");

            migrationBuilder.DropTable(
                name: "Manager");

            migrationBuilder.DropTable(
                name: "Nationality");

            migrationBuilder.DropTable(
                name: "Kebele");

            migrationBuilder.DropTable(
                name: "LookUpType");

            migrationBuilder.DropTable(
                name: "Woreda");

            migrationBuilder.DropTable(
                name: "Zone");

            migrationBuilder.DropTable(
                name: "Region");
        }
    }
}
