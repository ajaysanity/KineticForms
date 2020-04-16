export interface Task2Model{
    id: number,
    firstname:string,
    lastname:string,
    email:string,
    usi:string,
    avatar_url:string,
    role: string,
    employer: EmployerModel[],
    rto: RtoModel[],
    navigation_menus: NavigationMenusModel[],
    tutorials: TutorialsModel[],
    qualifications: QualificationsModel[]
}
interface EmployerModel{
    id: number,
    organisation_name: string
}
interface RtoModel{
    id: number,
    organisation_name: string
}
interface NavigationMenusModel{
    menu_item: string,
    href:string
}
interface TutorialsModel{
    tutorial_item: string,
    href: string
}
interface QualificationsModel{
    qualification_id: number
}