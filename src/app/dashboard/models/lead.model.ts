export class Lead {
    constructor(
      public phone: string,
      public state: string,
      public titleType: string,
      public deptType: string,
      public campaigns: string[],
      public answered: boolean,
      public booked: boolean
    ) { }
  }
  
  export const initialLead: Lead = {
    phone: '',
    state: '',
    titleType: '',
    deptType: '',
    campaigns: [],
    answered: false,
    booked: false
  };