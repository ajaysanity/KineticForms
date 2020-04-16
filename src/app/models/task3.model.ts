export interface Task3Model{
    qualifications: QualificationModel[],
    newQualifications: QualificationModel[]
}
export interface QualificationModel{
    id: number,
    name: string
}