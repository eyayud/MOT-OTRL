using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CUSTOR.OTRLS.API.Migrations
{
    public partial class registrationbusinessbusinessLicensingGroupetcmodels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Business",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    OwnerTIN = table.Column<string>(nullable: true),
                    TradeNameAmh = table.Column<string>(nullable: true),
                    TradeNameSort = table.Column<string>(nullable: true),
                    TradeNameSoundex = table.Column<string>(nullable: true),
                    TradesName = table.Column<string>(nullable: true),
                    TradeNameRegional = table.Column<string>(nullable: true),
                    TradeNameRegionalSort = table.Column<string>(nullable: true),
                    TradeNameRegionalSoundeX = table.Column<string>(nullable: true),
                    DateRegistered = table.Column<DateTime>(nullable: true),
                    LicenceNumber = table.Column<string>(nullable: true),
                    Capital = table.Column<decimal>(nullable: false),
                    SiteID = table.Column<string>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    UpdatedBy = table.Column<string>(nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Business", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "BusinessLicensingGroup",
                columns: table => new
                {
                    BusinessLicensingId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BusinessId = table.Column<int>(nullable: false),
                    MajorDivision = table.Column<int>(nullable: false),
                    Division = table.Column<int>(nullable: false),
                    MajorGroup = table.Column<int>(nullable: false),
                    BGroup = table.Column<int>(nullable: false),
                    SubGroup = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BusinessLicensingGroup", x => x.BusinessLicensingId);
                });

            migrationBuilder.CreateTable(
                name: "Division",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<int>(nullable: false),
                    Parent = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    EnglishDescription = table.Column<string>(nullable: true),
                    DivisionTigrigna = table.Column<string>(nullable: true),
                    DivisionAfanOromo = table.Column<string>(nullable: true),
                    DivisionAfar = table.Column<string>(nullable: true),
                    DivisionSomali = table.Column<string>(nullable: true),
                    DivisionArabic = table.Column<string>(nullable: true),
                    DescriptionSort = table.Column<string>(nullable: true),
                    DescriptionSoundX = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Division", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Group",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<int>(nullable: false),
                    Parent = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    EnglishDescription = table.Column<string>(nullable: true),
                    GroupTigrigna = table.Column<string>(nullable: true),
                    GroupAfanOromo = table.Column<string>(nullable: true),
                    GroupAfar = table.Column<string>(nullable: true),
                    GroupSomali = table.Column<string>(nullable: true),
                    GroupArabic = table.Column<string>(nullable: true),
                    DescriptionSort = table.Column<string>(nullable: true),
                    DescriptionSoundX = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Group", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LegalStatus",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<int>(nullable: false),
                    LegalStatusNameAmhSource = table.Column<string>(nullable: true),
                    LegalStatusNameAmh = table.Column<string>(nullable: true),
                    LegalStatusNameEng = table.Column<string>(nullable: true),
                    LegalStatusNameTigrigna = table.Column<string>(nullable: true),
                    LegalStatusNameAfanOromo = table.Column<string>(nullable: true),
                    LegalStatusNameAfar = table.Column<string>(nullable: true),
                    LegalStatusNameSomali = table.Column<string>(nullable: true),
                    LegalStatusNameArabic = table.Column<string>(nullable: true),
                    UserName = table.Column<string>(nullable: true),
                    EventDate = table.Column<DateTime>(nullable: false),
                    UpdatedUserName = table.Column<string>(nullable: true),
                    UpdatedEventDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LegalStatus", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MajorDivision",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(nullable: true),
                    EnglishDescription = table.Column<string>(nullable: true),
                    MajorDivTigrigna = table.Column<string>(nullable: true),
                    MajorDivAfanOromo = table.Column<string>(nullable: true),
                    MajorDivAfar = table.Column<string>(nullable: true),
                    MajorDivSomali = table.Column<string>(nullable: true),
                    MajorDivArabic = table.Column<string>(nullable: true),
                    DescriptionSort = table.Column<string>(nullable: true),
                    DescriptionSoundX = table.Column<string>(nullable: true),
                    Code = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MajorDivision", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MajorGroup",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<int>(nullable: false),
                    Parent = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    EnglishDescription = table.Column<string>(nullable: true),
                    MajorGroupTigrigna = table.Column<string>(nullable: true),
                    MajorGroupAfanOromo = table.Column<string>(nullable: true),
                    MajorGroupAfar = table.Column<string>(nullable: true),
                    MajorGroupSomali = table.Column<string>(nullable: true),
                    MajorGroupArabic = table.Column<string>(nullable: true),
                    DescriptionSort = table.Column<string>(nullable: true),
                    DescriptionSoundX = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MajorGroup", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Registration",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    MainGuid = table.Column<Guid>(nullable: false),
                    ParentGuid = table.Column<Guid>(nullable: false),
                    Tin = table.Column<string>(nullable: true),
                    RegNo = table.Column<string>(nullable: true),
                    LegalCondition = table.Column<int>(nullable: false),
                    BusinessName = table.Column<string>(nullable: true),
                    BusinessNameAmh = table.Column<string>(nullable: true),
                    BusinessNameSort = table.Column<string>(nullable: true),
                    BusinessNameSoundX = table.Column<string>(nullable: true),
                    BusinessNameRegional = table.Column<string>(nullable: true),
                    BusinessNameRegionalSort = table.Column<string>(nullable: true),
                    BusinessNameRegionalSoundX = table.Column<string>(nullable: true),
                    RegDate = table.Column<DateTime>(nullable: false),
                    Status = table.Column<int>(nullable: false),
                    IsPreviousRegistered = table.Column<bool>(nullable: false),
                    PreviousRegDate = table.Column<DateTime>(nullable: false),
                    PreviousRegNumber = table.Column<string>(nullable: true),
                    MainCancellationReason = table.Column<string>(nullable: true),
                    FileNumber = table.Column<string>(nullable: true),
                    PaidUpCapital = table.Column<decimal>(nullable: false),
                    SignedCapital = table.Column<decimal>(nullable: false),
                    ApprovedCapital = table.Column<decimal>(nullable: false),
                    SingleShareAmount = table.Column<decimal>(nullable: false),
                    IsSharedWithForeigner = table.Column<bool>(nullable: false),
                    LocalPersonCapital = table.Column<decimal>(nullable: false),
                    GrantorName = table.Column<string>(nullable: true),
                    GrantorCountry = table.Column<string>(nullable: true),
                    GrantorMainAddress = table.Column<string>(nullable: true),
                    GrantorManagerName = table.Column<string>(nullable: true),
                    GrantorNameEng = table.Column<string>(nullable: true),
                    GrantorCountryEng = table.Column<string>(nullable: true),
                    GrantorMainAddressEng = table.Column<string>(nullable: true),
                    GrantorManagerNameEng = table.Column<string>(nullable: true),
                    BudgetYearCode = table.Column<string>(nullable: true),
                    TransferReason = table.Column<int>(nullable: false),
                    Remark = table.Column<string>(nullable: true),
                    TradeNameAmh = table.Column<string>(nullable: true),
                    TradeNameSort = table.Column<string>(nullable: true),
                    TradeNameSoundex = table.Column<string>(nullable: true),
                    TradesName = table.Column<string>(nullable: true),
                    TradeNameRegional = table.Column<string>(nullable: true),
                    TradeNameRegionalSort = table.Column<string>(nullable: true),
                    TradeNameRegionalSoundeX = table.Column<string>(nullable: true),
                    DateRegistered = table.Column<DateTime>(nullable: false),
                    TradeNameStatus = table.Column<string>(nullable: true),
                    PersonCancelledRegistration = table.Column<string>(nullable: true),
                    CancellationDate = table.Column<DateTime>(nullable: false),
                    Username = table.Column<string>(nullable: true),
                    EventDateTime = table.Column<DateTime>(nullable: false),
                    UpdatedUsername = table.Column<string>(nullable: true),
                    UpdatedEventDatetime = table.Column<DateTime>(nullable: false),
                    SiteID = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Registration", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "RegistrationCategory",
                columns: table => new
                {
                    RegistrationCatagoryId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    MainGuid = table.Column<Guid>(nullable: false),
                    Tin = table.Column<string>(nullable: true),
                    MajorCatagoryCode = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RegistrationCategory", x => x.RegistrationCatagoryId);
                });

            migrationBuilder.CreateTable(
                name: "SubGroup",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<int>(nullable: false),
                    Parent = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    EnglishDescription = table.Column<string>(nullable: true),
                    SubGroupTigrigna = table.Column<string>(nullable: true),
                    SubGroupAfanOromo = table.Column<string>(nullable: true),
                    SubGroupAfar = table.Column<string>(nullable: true),
                    SubGroupSomali = table.Column<string>(nullable: true),
                    SubGroupArabic = table.Column<string>(nullable: true),
                    DescriptionSort = table.Column<string>(nullable: true),
                    DescriptionSoundX = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubGroup", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Business");

            migrationBuilder.DropTable(
                name: "BusinessLicensingGroup");

            migrationBuilder.DropTable(
                name: "Division");

            migrationBuilder.DropTable(
                name: "Group");

            migrationBuilder.DropTable(
                name: "LegalStatus");

            migrationBuilder.DropTable(
                name: "MajorDivision");

            migrationBuilder.DropTable(
                name: "MajorGroup");

            migrationBuilder.DropTable(
                name: "Registration");

            migrationBuilder.DropTable(
                name: "RegistrationCategory");

            migrationBuilder.DropTable(
                name: "SubGroup");
        }
    }
}
