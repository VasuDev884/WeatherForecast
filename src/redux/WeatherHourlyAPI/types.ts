
export interface LoadDataPayloadHourly{
    access_key:any,
    query:any,
    Date:any
}
export interface InitialState {
    isLoading:boolean
    LoadData:Array<any>
}