export class PaginationModel {
    selectItemsPerPage: number[] = [2, 10, 25, 100];
    pageSize = this.selectItemsPerPage[0];
    pageIndex = 1;
    allItemsLength = 0;
}
