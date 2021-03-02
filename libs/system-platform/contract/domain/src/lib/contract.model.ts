import { ID } from '@datorama/akita';

export interface Contract {
  id: ID;
  //合同总金额
  contractAmt: number;
  //合同名称
  contractName: string;
  //合同编号
  contractNo: string;
  //粮信编码展示
  creditcode: string;
  //失效日期
  expireDate: Date;
  //发票编码展示
  invoicecode: string;
  //甲方名称
  partyAname: string;
  //甲方机构oid
  partyAoid: string;
  //乙方名称
  partyBname: string;
  //乙方机构oid
  partyBoid: string;
  //应收账款编码展示
  receivcode: string;
  //签订日期
  signDate: Date;
}

export function createContract(params: Partial<Contract>) {
  return {} as Contract;
}
