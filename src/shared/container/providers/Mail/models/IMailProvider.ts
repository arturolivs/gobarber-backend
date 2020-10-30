import ISendMailDTO from '@shared/container/providers/Mail/dtos/ISendMailDTO';

export default interface IMailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
