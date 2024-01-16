export interface LoadDataPayload{
    access_key:any,
    query:any
}
export interface InitialState {
    isLoading:boolean
    LoadData:Array<any>
    Search:Array<any>
    viewTime:Array<any>
}