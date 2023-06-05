export interface Root {
    header: Header
    body: Body
    footer: Footer
  }
  
  export interface Header {
    title: string
    button: string,
    image: string
  }
  
  export interface Body {
    popularBanks: PopularBank[]
    bankList: BankList[],
    button: Button
  }
  
  export interface PopularBank {
    id: number
    name: string
    image: string
  }
  
  export interface BankList {
    id: number
    name: string
  }
  
  export interface Footer {
    logo: string
  }
  
  export interface Button {
    name: string
  }