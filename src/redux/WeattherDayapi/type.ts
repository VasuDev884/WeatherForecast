
export interface LoadDataPayloadHourly{
    access_key:any,
    query:any,
    Day:any
}
export interface InitialState {
    isLoading:boolean
    LoadData:Array<any>
}