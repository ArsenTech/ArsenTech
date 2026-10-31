export default function usePaginatedData<T>(items: T[], page: number, pageSize: number){
     const endIndex = page * pageSize;
     const startIndex = endIndex - pageSize;
     return items.slice(startIndex,endIndex)
}